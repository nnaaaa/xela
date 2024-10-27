import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";
import { Asset_price_5mCountAggregate } from "./asset-price-5-m-count-aggregate.output";
import { Asset_price_5mAvgAggregate } from "./asset-price-5-m-avg-aggregate.output";
import { Asset_price_5mSumAggregate } from "./asset-price-5-m-sum-aggregate.output";
import { Asset_price_5mMinAggregate } from "./asset-price-5-m-min-aggregate.output";
import { Asset_price_5mMaxAggregate } from "./asset-price-5-m-max-aggregate.output";

@ObjectType()
export class Asset_price_5mGroupBy {
    @Field(() => Date, { nullable: false })
    open_time!: Date | string;

    @Field(() => String, { nullable: false })
    assetInfoId!: string;

    @Field(() => Float, { nullable: true })
    openPrice?: number;

    @Field(() => Float, { nullable: true })
    closePrice?: number;

    @Field(() => Float, { nullable: true })
    highPrice?: number;

    @Field(() => Float, { nullable: true })
    lowPrice?: number;

    @Field(() => Float, { nullable: true })
    volume?: number;

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
