import { GetCryptoProfileQuery } from "@/gql/graphql";

interface IProps {
    profile: GetCryptoProfileQuery["getCryptoProfiles"][number];
}

export default function InvestmentSummary({ profile }: IProps) {
    const { historicalBalances } = profile;
    const latestHistory = historicalBalances[historicalBalances.length - 1];

    return (
        <div className="flex flex-col flex-1 gap-2">
            <h2 className="text-xl font-bold text-muted-foreground tracking-wide">
                Estimated Balance
            </h2>
            <p className="text-3xl font-bold">
                {profile.historicalBalances[0]?.estimatedBalance ?? 0}
                <span className="text-sm font-medium text-muted-foreground ml-2">
                    USDT
                </span>
            </p>
            <p className="text-sm text-muted-foreground">
                Today&#39;s PnL
                <span className="font-bold ml-2 text-chart-2">
                    +${latestHistory.changeBalance.toFixed(2)} (
                    {latestHistory.changePercent.toFixed(2)}%)
                </span>
            </p>
        </div>
    );
}
