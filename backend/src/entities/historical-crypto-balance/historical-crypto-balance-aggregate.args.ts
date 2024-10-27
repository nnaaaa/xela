import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { HistoricalCryptoBalanceWhereInput } from "./historical-crypto-balance-where.input";
import { Type } from "class-transformer";
import { HistoricalCryptoBalanceOrderByWithRelationInput } from "./historical-crypto-balance-order-by-with-relation.input";
import { Prisma } from "@prisma/client";
import { HistoricalCryptoBalanceWhereUniqueInput } from "./historical-crypto-balance-where-unique.input";
import { Int } from "@nestjs/graphql";
import { HistoricalCryptoBalanceCountAggregateInput } from "./historical-crypto-balance-count-aggregate.input";
import { HistoricalCryptoBalanceAvgAggregateInput } from "./historical-crypto-balance-avg-aggregate.input";
import { HistoricalCryptoBalanceSumAggregateInput } from "./historical-crypto-balance-sum-aggregate.input";
import { HistoricalCryptoBalanceMinAggregateInput } from "./historical-crypto-balance-min-aggregate.input";
import { HistoricalCryptoBalanceMaxAggregateInput } from "./historical-crypto-balance-max-aggregate.input";

@ArgsType()
export class HistoricalCryptoBalanceAggregateArgs {
    @Field(() => HistoricalCryptoBalanceWhereInput, { nullable: true })
    @Type(() => HistoricalCryptoBalanceWhereInput)
    where?: HistoricalCryptoBalanceWhereInput;

    @Field(() => [HistoricalCryptoBalanceOrderByWithRelationInput], {
        nullable: true,
    })
    orderBy?: Array<HistoricalCryptoBalanceOrderByWithRelationInput>;

    @Field(() => HistoricalCryptoBalanceWhereUniqueInput, { nullable: true })
    cursor?: Prisma.AtLeast<
        HistoricalCryptoBalanceWhereUniqueInput,
        "cryptoProfileId_time"
    >;

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
