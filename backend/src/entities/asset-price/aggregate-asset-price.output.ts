import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { AssetPriceCountAggregate } from "./asset-price-count-aggregate.output";
import { AssetPriceAvgAggregate } from "./asset-price-avg-aggregate.output";
import { AssetPriceSumAggregate } from "./asset-price-sum-aggregate.output";
import { AssetPriceMinAggregate } from "./asset-price-min-aggregate.output";
import { AssetPriceMaxAggregate } from "./asset-price-max-aggregate.output";

@ObjectType()
export class AggregateAssetPrice {
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
