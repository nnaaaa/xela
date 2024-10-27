import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Asset_price_5mCountAggregate } from "./asset-price-5-m-count-aggregate.output";
import { Asset_price_5mAvgAggregate } from "./asset-price-5-m-avg-aggregate.output";
import { Asset_price_5mSumAggregate } from "./asset-price-5-m-sum-aggregate.output";
import { Asset_price_5mMinAggregate } from "./asset-price-5-m-min-aggregate.output";
import { Asset_price_5mMaxAggregate } from "./asset-price-5-m-max-aggregate.output";

@ObjectType()
export class AggregateAsset_price_5m {
    @Field(() => Asset_price_5mCountAggregate, { nullable: true })
    _count?: Asset_price_5mCountAggregate;

    @Field(() => Asset_price_5mAvgAggregate, { nullable: true })
    _avg?: Asset_price_5mAvgAggregate;

    @Field(() => Asset_price_5mSumAggregate, { nullable: true })
    _sum?: Asset_price_5mSumAggregate;

    @Field(() => Asset_price_5mMinAggregate, { nullable: true })
    _min?: Asset_price_5mMinAggregate;

    @Field(() => Asset_price_5mMaxAggregate, { nullable: true })
    _max?: Asset_price_5mMaxAggregate;
}
