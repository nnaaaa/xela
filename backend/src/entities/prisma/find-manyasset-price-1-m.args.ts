import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1MWhereInput } from "../asset-price-1-m/asset-price-1-m-where.input";
import { Type } from "class-transformer";
import { asset_price_1MOrderByWithRelationInput } from "../asset-price-1-m/asset-price-1-m-order-by-with-relation.input";
import { asset_price_1MWhereUniqueInput } from "../asset-price-1-m/asset-price-1-m-where-unique.input";
import { Int } from "@nestjs/graphql";
import { Asset_price_1MScalarFieldEnum } from "./asset-price-1-m-scalar-field.enum";

@ArgsType()
export class FindManyassetPrice1MArgs {
    @Field(() => asset_price_1MWhereInput, { nullable: true })
    @Type(() => asset_price_1MWhereInput)
    where?: asset_price_1MWhereInput;

    @Field(() => [asset_price_1MOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<asset_price_1MOrderByWithRelationInput>;

    @Field(() => asset_price_1MWhereUniqueInput, { nullable: true })
    cursor?: asset_price_1MWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [Asset_price_1MScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof Asset_price_1MScalarFieldEnum>;
}
