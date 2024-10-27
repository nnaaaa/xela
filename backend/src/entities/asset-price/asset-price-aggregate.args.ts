import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetPriceWhereInput } from "./asset-price-where.input";
import { Type } from "class-transformer";
import { AssetPriceOrderByWithRelationInput } from "./asset-price-order-by-with-relation.input";
import { Prisma } from "@prisma/client";
import { AssetPriceWhereUniqueInput } from "./asset-price-where-unique.input";
import { Int } from "@nestjs/graphql";
import { AssetPriceCountAggregateInput } from "./asset-price-count-aggregate.input";
import { AssetPriceAvgAggregateInput } from "./asset-price-avg-aggregate.input";
import { AssetPriceSumAggregateInput } from "./asset-price-sum-aggregate.input";
import { AssetPriceMinAggregateInput } from "./asset-price-min-aggregate.input";
import { AssetPriceMaxAggregateInput } from "./asset-price-max-aggregate.input";

@ArgsType()
export class AssetPriceAggregateArgs {
    @Field(() => AssetPriceWhereInput, { nullable: true })
    @Type(() => AssetPriceWhereInput)
    where?: AssetPriceWhereInput;

    @Field(() => [AssetPriceOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<AssetPriceOrderByWithRelationInput>;

    @Field(() => AssetPriceWhereUniqueInput, { nullable: true })
    cursor?: Prisma.AtLeast<
        AssetPriceWhereUniqueInput,
        "assetInfoId_open_time"
    >;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => AssetPriceCountAggregateInput, { nullable: true })
    _count?: AssetPriceCountAggregateInput;

    @Field(() => AssetPriceAvgAggregateInput, { nullable: true })
    _avg?: AssetPriceAvgAggregateInput;

    @Field(() => AssetPriceSumAggregateInput, { nullable: true })
    _sum?: AssetPriceSumAggregateInput;

    @Field(() => AssetPriceMinAggregateInput, { nullable: true })
    _min?: AssetPriceMinAggregateInput;

    @Field(() => AssetPriceMaxAggregateInput, { nullable: true })
    _max?: AssetPriceMaxAggregateInput;
}
