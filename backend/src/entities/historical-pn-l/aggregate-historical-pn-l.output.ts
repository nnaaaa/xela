import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { HistoricalPnLCountAggregate } from "./historical-pn-l-count-aggregate.output";
import { HistoricalPnLAvgAggregate } from "./historical-pn-l-avg-aggregate.output";
import { HistoricalPnLSumAggregate } from "./historical-pn-l-sum-aggregate.output";
import { HistoricalPnLMinAggregate } from "./historical-pn-l-min-aggregate.output";
import { HistoricalPnLMaxAggregate } from "./historical-pn-l-max-aggregate.output";

@ObjectType()
export class AggregateHistoricalPnL {
    @Field(() => HistoricalPnLCountAggregate, { nullable: true })
    _count?: HistoricalPnLCountAggregate;

    @Field(() => HistoricalPnLAvgAggregate, { nullable: true })
    _avg?: HistoricalPnLAvgAggregate;

    @Field(() => HistoricalPnLSumAggregate, { nullable: true })
    _sum?: HistoricalPnLSumAggregate;

    @Field(() => HistoricalPnLMinAggregate, { nullable: true })
    _min?: HistoricalPnLMinAggregate;

    @Field(() => HistoricalPnLMaxAggregate, { nullable: true })
    _max?: HistoricalPnLMaxAggregate;
}
