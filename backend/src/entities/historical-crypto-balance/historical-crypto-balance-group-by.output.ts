import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";
import { HistoricalCryptoBalanceCountAggregate } from "./historical-crypto-balance-count-aggregate.output";
import { HistoricalCryptoBalanceAvgAggregate } from "./historical-crypto-balance-avg-aggregate.output";
import { HistoricalCryptoBalanceSumAggregate } from "./historical-crypto-balance-sum-aggregate.output";
import { HistoricalCryptoBalanceMinAggregate } from "./historical-crypto-balance-min-aggregate.output";
import { HistoricalCryptoBalanceMaxAggregate } from "./historical-crypto-balance-max-aggregate.output";

@ObjectType()
export class HistoricalCryptoBalanceGroupBy {
    @Field(() => String, { nullable: false })
    cryptoProfileId!: string;

    @Field(() => Date, { nullable: false })
    time!: Date | string;

    @Field(() => Float, { nullable: false })
    estimatedBalance!: number;

    @Field(() => Float, { nullable: false })
    changePercent!: number;

    @Field(() => Float, { nullable: false })
    changeBalance!: number;

    @Field(() => HistoricalCryptoBalanceCountAggregate, { nullable: true })
    _count?: HistoricalCryptoBalanceCountAggregate;

    @Field(() => HistoricalCryptoBalanceAvgAggregate, { nullable: true })
    _avg?: HistoricalCryptoBalanceAvgAggregate;

    @Field(() => HistoricalCryptoBalanceSumAggregate, { nullable: true })
    _sum?: HistoricalCryptoBalanceSumAggregate;

    @Field(() => HistoricalCryptoBalanceMinAggregate, { nullable: true })
    _min?: HistoricalCryptoBalanceMinAggregate;

    @Field(() => HistoricalCryptoBalanceMaxAggregate, { nullable: true })
    _max?: HistoricalCryptoBalanceMaxAggregate;
}
