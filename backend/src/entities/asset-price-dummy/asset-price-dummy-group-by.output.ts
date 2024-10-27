import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Interval } from "../prisma/interval.enum";
import { Float } from "@nestjs/graphql";
import { AssetPriceDummyCountAggregate } from "./asset-price-dummy-count-aggregate.output";
import { AssetPriceDummyAvgAggregate } from "./asset-price-dummy-avg-aggregate.output";
import { AssetPriceDummySumAggregate } from "./asset-price-dummy-sum-aggregate.output";
import { AssetPriceDummyMinAggregate } from "./asset-price-dummy-min-aggregate.output";
import { AssetPriceDummyMaxAggregate } from "./asset-price-dummy-max-aggregate.output";

@ObjectType()
export class AssetPriceDummyGroupBy {
    @Field(() => String, { nullable: false })
    assetInfoId!: string;

    @Field(() => Interval, { nullable: false })
    interval!: keyof typeof Interval;

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

    @Field(() => AssetPriceDummyCountAggregate, { nullable: true })
    _count?: AssetPriceDummyCountAggregate;

    @Field(() => AssetPriceDummyAvgAggregate, { nullable: true })
    _avg?: AssetPriceDummyAvgAggregate;

    @Field(() => AssetPriceDummySumAggregate, { nullable: true })
    _sum?: AssetPriceDummySumAggregate;

    @Field(() => AssetPriceDummyMinAggregate, { nullable: true })
    _min?: AssetPriceDummyMinAggregate;

    @Field(() => AssetPriceDummyMaxAggregate, { nullable: true })
    _max?: AssetPriceDummyMaxAggregate;
}
