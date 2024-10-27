import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetPriceDummyWhereInput } from "./asset-price-dummy-where.input";
import { Type } from "class-transformer";
import { AssetPriceDummyOrderByWithRelationInput } from "./asset-price-dummy-order-by-with-relation.input";
import { Prisma } from "@prisma/client";
import { AssetPriceDummyWhereUniqueInput } from "./asset-price-dummy-where-unique.input";
import { Int } from "@nestjs/graphql";
import { AssetPriceDummyScalarFieldEnum } from "./asset-price-dummy-scalar-field.enum";

@ArgsType()
export class FindManyAssetPriceDummyArgs {
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

    @Field(() => [AssetPriceDummyScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof AssetPriceDummyScalarFieldEnum>;
}
