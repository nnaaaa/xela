import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { AssetInfoCountAggregate } from "./asset-info-count-aggregate.output";
import { AssetInfoMinAggregate } from "./asset-info-min-aggregate.output";
import { AssetInfoMaxAggregate } from "./asset-info-max-aggregate.output";

@ObjectType()
export class AggregateAssetInfo {
    @Field(() => AssetInfoCountAggregate, { nullable: true })
    _count?: AssetInfoCountAggregate;

    @Field(() => AssetInfoMinAggregate, { nullable: true })
    _min?: AssetInfoMinAggregate;

    @Field(() => AssetInfoMaxAggregate, { nullable: true })
    _max?: AssetInfoMaxAggregate;
}
