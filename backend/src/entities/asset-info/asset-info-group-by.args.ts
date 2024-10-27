import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetInfoWhereInput } from "./asset-info-where.input";
import { Type } from "class-transformer";
import { AssetInfoOrderByWithAggregationInput } from "./asset-info-order-by-with-aggregation.input";
import { AssetInfoScalarFieldEnum } from "./asset-info-scalar-field.enum";
import { AssetInfoScalarWhereWithAggregatesInput } from "./asset-info-scalar-where-with-aggregates.input";
import { Int } from "@nestjs/graphql";
import { AssetInfoCountAggregateInput } from "./asset-info-count-aggregate.input";
import { AssetInfoMinAggregateInput } from "./asset-info-min-aggregate.input";
import { AssetInfoMaxAggregateInput } from "./asset-info-max-aggregate.input";

@ArgsType()
export class AssetInfoGroupByArgs {
    @Field(() => AssetInfoWhereInput, { nullable: true })
    @Type(() => AssetInfoWhereInput)
    where?: AssetInfoWhereInput;

    @Field(() => [AssetInfoOrderByWithAggregationInput], { nullable: true })
    orderBy?: Array<AssetInfoOrderByWithAggregationInput>;

    @Field(() => [AssetInfoScalarFieldEnum], { nullable: false })
    by!: Array<keyof typeof AssetInfoScalarFieldEnum>;

    @Field(() => AssetInfoScalarWhereWithAggregatesInput, { nullable: true })
    having?: AssetInfoScalarWhereWithAggregatesInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => AssetInfoCountAggregateInput, { nullable: true })
    _count?: AssetInfoCountAggregateInput;

    @Field(() => AssetInfoMinAggregateInput, { nullable: true })
    _min?: AssetInfoMinAggregateInput;

    @Field(() => AssetInfoMaxAggregateInput, { nullable: true })
    _max?: AssetInfoMaxAggregateInput;
}
