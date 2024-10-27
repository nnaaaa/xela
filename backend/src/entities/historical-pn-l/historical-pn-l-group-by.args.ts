import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { HistoricalPnLWhereInput } from "./historical-pn-l-where.input";
import { Type } from "class-transformer";
import { HistoricalPnLOrderByWithAggregationInput } from "./historical-pn-l-order-by-with-aggregation.input";
import { HistoricalPnLScalarFieldEnum } from "./historical-pn-l-scalar-field.enum";
import { HistoricalPnLScalarWhereWithAggregatesInput } from "./historical-pn-l-scalar-where-with-aggregates.input";
import { Int } from "@nestjs/graphql";
import { HistoricalPnLCountAggregateInput } from "./historical-pn-l-count-aggregate.input";
import { HistoricalPnLAvgAggregateInput } from "./historical-pn-l-avg-aggregate.input";
import { HistoricalPnLSumAggregateInput } from "./historical-pn-l-sum-aggregate.input";
import { HistoricalPnLMinAggregateInput } from "./historical-pn-l-min-aggregate.input";
import { HistoricalPnLMaxAggregateInput } from "./historical-pn-l-max-aggregate.input";

@ArgsType()
export class HistoricalPnLGroupByArgs {
    @Field(() => HistoricalPnLWhereInput, { nullable: true })
    @Type(() => HistoricalPnLWhereInput)
    where?: HistoricalPnLWhereInput;

    @Field(() => [HistoricalPnLOrderByWithAggregationInput], { nullable: true })
    orderBy?: Array<HistoricalPnLOrderByWithAggregationInput>;

    @Field(() => [HistoricalPnLScalarFieldEnum], { nullable: false })
    by!: Array<keyof typeof HistoricalPnLScalarFieldEnum>;

    @Field(() => HistoricalPnLScalarWhereWithAggregatesInput, {
        nullable: true,
    })
    having?: HistoricalPnLScalarWhereWithAggregatesInput;

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
