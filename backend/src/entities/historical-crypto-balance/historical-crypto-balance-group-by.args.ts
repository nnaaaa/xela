import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { HistoricalCryptoBalanceWhereInput } from "./historical-crypto-balance-where.input";
import { Type } from "class-transformer";
import { HistoricalCryptoBalanceOrderByWithAggregationInput } from "./historical-crypto-balance-order-by-with-aggregation.input";
import { HistoricalCryptoBalanceScalarFieldEnum } from "./historical-crypto-balance-scalar-field.enum";
import { HistoricalCryptoBalanceScalarWhereWithAggregatesInput } from "./historical-crypto-balance-scalar-where-with-aggregates.input";
import { Int } from "@nestjs/graphql";
import { HistoricalCryptoBalanceCountAggregateInput } from "./historical-crypto-balance-count-aggregate.input";
import { HistoricalCryptoBalanceAvgAggregateInput } from "./historical-crypto-balance-avg-aggregate.input";
import { HistoricalCryptoBalanceSumAggregateInput } from "./historical-crypto-balance-sum-aggregate.input";
import { HistoricalCryptoBalanceMinAggregateInput } from "./historical-crypto-balance-min-aggregate.input";
import { HistoricalCryptoBalanceMaxAggregateInput } from "./historical-crypto-balance-max-aggregate.input";

@ArgsType()
export class HistoricalCryptoBalanceGroupByArgs {
    @Field(() => HistoricalCryptoBalanceWhereInput, { nullable: true })
    @Type(() => HistoricalCryptoBalanceWhereInput)
    where?: HistoricalCryptoBalanceWhereInput;

    @Field(() => [HistoricalCryptoBalanceOrderByWithAggregationInput], {
        nullable: true,
    })
    orderBy?: Array<HistoricalCryptoBalanceOrderByWithAggregationInput>;

    @Field(() => [HistoricalCryptoBalanceScalarFieldEnum], { nullable: false })
    by!: Array<keyof typeof HistoricalCryptoBalanceScalarFieldEnum>;

    @Field(() => HistoricalCryptoBalanceScalarWhereWithAggregatesInput, {
        nullable: true,
    })
    having?: HistoricalCryptoBalanceScalarWhereWithAggregatesInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => HistoricalCryptoBalanceCountAggregateInput, { nullable: true })
    _count?: HistoricalCryptoBalanceCountAggregateInput;

    @Field(() => HistoricalCryptoBalanceAvgAggregateInput, { nullable: true })
    _avg?: HistoricalCryptoBalanceAvgAggregateInput;

    @Field(() => HistoricalCryptoBalanceSumAggregateInput, { nullable: true })
    _sum?: HistoricalCryptoBalanceSumAggregateInput;

    @Field(() => HistoricalCryptoBalanceMinAggregateInput, { nullable: true })
    _min?: HistoricalCryptoBalanceMinAggregateInput;

    @Field(() => HistoricalCryptoBalanceMaxAggregateInput, { nullable: true })
    _max?: HistoricalCryptoBalanceMaxAggregateInput;
}
