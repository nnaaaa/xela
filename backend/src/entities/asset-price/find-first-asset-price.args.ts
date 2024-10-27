import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetPriceWhereInput } from "./asset-price-where.input";
import { Type } from "class-transformer";
import { AssetPriceOrderByWithRelationInput } from "./asset-price-order-by-with-relation.input";
import { Prisma } from "@prisma/client";
import { AssetPriceWhereUniqueInput } from "./asset-price-where-unique.input";
import { Int } from "@nestjs/graphql";
import { AssetPriceScalarFieldEnum } from "./asset-price-scalar-field.enum";

@ArgsType()
export class FindFirstAssetPriceArgs {
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

    @Field(() => [AssetPriceScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof AssetPriceScalarFieldEnum>;
}
