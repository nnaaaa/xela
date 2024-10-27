import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { AssetInfoCountAggregate } from "./asset-info-count-aggregate.output";
import { AssetInfoMinAggregate } from "./asset-info-min-aggregate.output";
import { AssetInfoMaxAggregate } from "./asset-info-max-aggregate.output";

@ObjectType()
export class AssetInfoGroupBy {
    @Field(() => String, { nullable: false })
    id!: string;

    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => String, { nullable: false })
    symbol!: string;

    @Field(() => String, { nullable: false })
    category!: string;

    @Field(() => String, { nullable: false })
    desc!: string;

    @Field(() => String, { nullable: false })
    logo!: string;

    @Field(() => AssetInfoCountAggregate, { nullable: true })
    _count?: AssetInfoCountAggregate;

    @Field(() => AssetInfoMinAggregate, { nullable: true })
    _min?: AssetInfoMinAggregate;

    @Field(() => AssetInfoMaxAggregate, { nullable: true })
    _max?: AssetInfoMaxAggregate;
}
