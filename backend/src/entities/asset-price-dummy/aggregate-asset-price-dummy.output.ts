import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { AssetPriceDummyCountAggregate } from "./asset-price-dummy-count-aggregate.output";
import { AssetPriceDummyAvgAggregate } from "./asset-price-dummy-avg-aggregate.output";
import { AssetPriceDummySumAggregate } from "./asset-price-dummy-sum-aggregate.output";
import { AssetPriceDummyMinAggregate } from "./asset-price-dummy-min-aggregate.output";
import { AssetPriceDummyMaxAggregate } from "./asset-price-dummy-max-aggregate.output";

@ObjectType()
export class AggregateAssetPriceDummy {
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
