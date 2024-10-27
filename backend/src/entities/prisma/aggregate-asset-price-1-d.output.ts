import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Asset_price_1dCountAggregate } from "./asset-price-1-d-count-aggregate.output";
import { Asset_price_1dAvgAggregate } from "./asset-price-1-d-avg-aggregate.output";
import { Asset_price_1dSumAggregate } from "./asset-price-1-d-sum-aggregate.output";
import { Asset_price_1dMinAggregate } from "./asset-price-1-d-min-aggregate.output";
import { Asset_price_1dMaxAggregate } from "./asset-price-1-d-max-aggregate.output";

@ObjectType()
export class AggregateAsset_price_1d {
    @Field(() => Asset_price_1dCountAggregate, { nullable: true })
    _count?: Asset_price_1dCountAggregate;

    @Field(() => Asset_price_1dAvgAggregate, { nullable: true })
    _avg?: Asset_price_1dAvgAggregate;

    @Field(() => Asset_price_1dSumAggregate, { nullable: true })
    _sum?: Asset_price_1dSumAggregate;

    @Field(() => Asset_price_1dMinAggregate, { nullable: true })
    _min?: Asset_price_1dMinAggregate;

    @Field(() => Asset_price_1dMaxAggregate, { nullable: true })
    _max?: Asset_price_1dMaxAggregate;
}
