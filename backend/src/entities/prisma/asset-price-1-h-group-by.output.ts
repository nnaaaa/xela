import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";
import { Asset_price_1hCountAggregate } from "./asset-price-1-h-count-aggregate.output";
import { Asset_price_1hAvgAggregate } from "./asset-price-1-h-avg-aggregate.output";
import { Asset_price_1hSumAggregate } from "./asset-price-1-h-sum-aggregate.output";
import { Asset_price_1hMinAggregate } from "./asset-price-1-h-min-aggregate.output";
import { Asset_price_1hMaxAggregate } from "./asset-price-1-h-max-aggregate.output";

@ObjectType()
export class Asset_price_1hGroupBy {
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

    @Field(() => Asset_price_1hCountAggregate, { nullable: true })
    _count?: Asset_price_1hCountAggregate;

    @Field(() => Asset_price_1hAvgAggregate, { nullable: true })
    _avg?: Asset_price_1hAvgAggregate;

    @Field(() => Asset_price_1hSumAggregate, { nullable: true })
    _sum?: Asset_price_1hSumAggregate;

    @Field(() => Asset_price_1hMinAggregate, { nullable: true })
    _min?: Asset_price_1hMinAggregate;

    @Field(() => Asset_price_1hMaxAggregate, { nullable: true })
    _max?: Asset_price_1hMaxAggregate;
}
