import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { HistoricalPnLWhereInput } from "./historical-pn-l-where.input";
import { Type } from "class-transformer";
import { HistoricalPnLOrderByWithRelationInput } from "./historical-pn-l-order-by-with-relation.input";
import { Prisma } from "@prisma/client";
import { HistoricalPnLWhereUniqueInput } from "./historical-pn-l-where-unique.input";
import { Int } from "@nestjs/graphql";
import { HistoricalPnLCountAggregateInput } from "./historical-pn-l-count-aggregate.input";
import { HistoricalPnLAvgAggregateInput } from "./historical-pn-l-avg-aggregate.input";
import { HistoricalPnLSumAggregateInput } from "./historical-pn-l-sum-aggregate.input";
import { HistoricalPnLMinAggregateInput } from "./historical-pn-l-min-aggregate.input";
import { HistoricalPnLMaxAggregateInput } from "./historical-pn-l-max-aggregate.input";

@ArgsType()
export class HistoricalPnLAggregateArgs {
    @Field(() => HistoricalPnLWhereInput, { nullable: true })
    @Type(() => HistoricalPnLWhereInput)
    where?: HistoricalPnLWhereInput;

    @Field(() => [HistoricalPnLOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<HistoricalPnLOrderByWithRelationInput>;

    @Field(() => HistoricalPnLWhereUniqueInput, { nullable: true })
    cursor?: Prisma.AtLeast<
        HistoricalPnLWhereUniqueInput,
        "cryptoProfileId_time"
    >;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => HistoricalPnLCountAggregateInput, { nullable: true })
    _count?: HistoricalPnLCountAggregateInput;

    @Field(() => HistoricalPnLAvgAggregateInput, { nullable: true })
    _avg?: HistoricalPnLAvgAggregateInput;

    @Field(() => HistoricalPnLSumAggregateInput, { nullable: true })
    _sum?: HistoricalPnLSumAggregateInput;

    @Field(() => HistoricalPnLMinAggregateInput, { nullable: true })
    _min?: HistoricalPnLMinAggregateInput;

    @Field(() => HistoricalPnLMaxAggregateInput, { nullable: true })
    _max?: HistoricalPnLMaxAggregateInput;
}
