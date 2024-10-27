import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";
import { AssetPriceCountAggregate } from "./asset-price-count-aggregate.output";
import { AssetPriceAvgAggregate } from "./asset-price-avg-aggregate.output";
import { AssetPriceSumAggregate } from "./asset-price-sum-aggregate.output";
import { AssetPriceMinAggregate } from "./asset-price-min-aggregate.output";
import { AssetPriceMaxAggregate } from "./asset-price-max-aggregate.output";

@ObjectType()
export class AssetPriceGroupBy {
    @Field(() => String, { nullable: false })
    assetInfoId!: string;

    @Field(() => String, { nullable: false })
    interval!: string;

    @Field(() => Date, { nullable: false })
    open_time!: Date | string;

    @Field(() => Date, { nullable: false })
    close_time!: Date | string;

    @Field(() => Float, { nullable: false })
    openPrice!: number;

    @Field(() => Float, { nullable: false })
    closePrice!: number;

    @Field(() => Float, { nullable: false })
    highPrice!: number;

    @Field(() => Float, { nullable: false })
    lowPrice!: number;

    @Field(() => Float, { nullable: false })
    volume!: number;

    @Field(() => AssetPriceCountAggregate, { nullable: true })
    _count?: AssetPriceCountAggregate;

    @Field(() => AssetPriceAvgAggregate, { nullable: true })
    _avg?: AssetPriceAvgAggregate;

    @Field(() => AssetPriceSumAggregate, { nullable: true })
    _sum?: AssetPriceSumAggregate;

    @Field(() => AssetPriceMinAggregate, { nullable: true })
    _min?: AssetPriceMinAggregate;

    @Field(() => AssetPriceMaxAggregate, { nullable: true })
    _max?: AssetPriceMaxAggregate;
}
