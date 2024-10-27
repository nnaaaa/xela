import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetPriceDummyWhereInput } from "./asset-price-dummy-where.input";
import { Type } from "class-transformer";
import { AssetPriceDummyOrderByWithRelationInput } from "./asset-price-dummy-order-by-with-relation.input";
import { Prisma } from "@prisma/client";
import { AssetPriceDummyWhereUniqueInput } from "./asset-price-dummy-where-unique.input";
import { Int } from "@nestjs/graphql";
import { AssetPriceDummyCountAggregateInput } from "./asset-price-dummy-count-aggregate.input";
import { AssetPriceDummyAvgAggregateInput } from "./asset-price-dummy-avg-aggregate.input";
import { AssetPriceDummySumAggregateInput } from "./asset-price-dummy-sum-aggregate.input";
import { AssetPriceDummyMinAggregateInput } from "./asset-price-dummy-min-aggregate.input";
import { AssetPriceDummyMaxAggregateInput } from "./asset-price-dummy-max-aggregate.input";

@ArgsType()
export class AssetPriceDummyAggregateArgs {
    @Field(() => AssetPriceDummyWhereInput, { nullable: true })
    @Type(() => AssetPriceDummyWhereInput)
    where?: AssetPriceDummyWhereInput;

    @Field(() => [AssetPriceDummyOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<AssetPriceDummyOrderByWithRelationInput>;

    @Field(() => AssetPriceDummyWhereUniqueInput, { nullable: true })
    cursor?: Prisma.AtLeast<
        AssetPriceDummyWhereUniqueInput,
        "assetInfoId_open_time"
    >;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => AssetPriceDummyCountAggregateInput, { nullable: true })
    _count?: AssetPriceDummyCountAggregateInput;

    @Field(() => AssetPriceDummyAvgAggregateInput, { nullable: true })
    _avg?: AssetPriceDummyAvgAggregateInput;

    @Field(() => AssetPriceDummySumAggregateInput, { nullable: true })
    _sum?: AssetPriceDummySumAggregateInput;

    @Field(() => AssetPriceDummyMinAggregateInput, { nullable: true })
    _min?: AssetPriceDummyMinAggregateInput;

    @Field(() => AssetPriceDummyMaxAggregateInput, { nullable: true })
    _max?: AssetPriceDummyMaxAggregateInput;
}
