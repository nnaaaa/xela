import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_5mWhereInput } from "../asset-price-5-m/asset-price-5-m-where.input";
import { Type } from "class-transformer";
import { asset_price_5mOrderByWithRelationInput } from "../asset-price-5-m/asset-price-5-m-order-by-with-relation.input";
import { asset_price_5mWhereUniqueInput } from "../asset-price-5-m/asset-price-5-m-where-unique.input";
import { Int } from "@nestjs/graphql";
import { Asset_price_5mScalarFieldEnum } from "./asset-price-5-m-scalar-field.enum";

@ArgsType()
export class FindFirstassetPrice5MArgs {
    @Field(() => asset_price_5mWhereInput, { nullable: true })
    @Type(() => asset_price_5mWhereInput)
    where?: asset_price_5mWhereInput;

    @Field(() => [asset_price_5mOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<asset_price_5mOrderByWithRelationInput>;

    @Field(() => asset_price_5mWhereUniqueInput, { nullable: true })
    cursor?: asset_price_5mWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [Asset_price_5mScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof Asset_price_5mScalarFieldEnum>;
}
