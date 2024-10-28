"use client";

import { Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { GetCryptoProfileQuery } from "@/gql/graphql";
import moment from "moment";
import { useCallback, useMemo } from "react";

interface IProps {
    historicalData: GetCryptoProfileQuery["getCryptoProfiles"][number]["historicalBalances"];
}

export default function HistoricalBalanceChart({ historicalData }: IProps) {
    const timeFormatterForTooltip = useCallback(
        (time: string) => moment(time).format("MMMM Do YYYY, H:mm a"),
        [],
    );
    const balanceFormatter = useCallback(
        (balance: number) => `$${balance.toFixed(2)}`,
        [],
    );

    const chartConfig = useMemo(
        () => ({
            trend:
                historicalData[historicalData.length - 1]?.estimatedBalance >=
                historicalData[0]?.estimatedBalance
                    ? {
                          label: "Up",
                          color: "hsl(var(--chart-2))",
                      }
                    : {
                          label: "Down",
                          color: "hsl(var(--chart-5))",
                      },
        }),
        [historicalData],
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl font-bold text-muted-foreground tracking-wide">
                    History
                </CardTitle>
                {/*<CardDescription>January - June 2024</CardDescription>*/}
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={historicalData}
                        margin={{
                            right: 12,
                        }}
                    >
                        <XAxis dataKey="time" hide />
                        <ChartTooltip
                            cursor={true}
                            formatter={balanceFormatter}
                            labelFormatter={timeFormatterForTooltip}
                            content={<ChartTooltipContent hideLabel={false} />}
                        />
                        <YAxis
                            type="number"
                            domain={["auto", "auto"]}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={balanceFormatter}
                        />
                        <Line
                            label={false}
                            dataKey="estimatedBalance"
                            type="monotone"
                            stroke="var(--color-trend)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
