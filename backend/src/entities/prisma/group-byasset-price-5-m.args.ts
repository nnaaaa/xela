import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_5mWhereInput } from "../asset-price-5-m/asset-price-5-m-where.input";
import { Type } from "class-transformer";
import { asset_price_5mOrderByWithAggregationInput } from "../asset-price-5-m/asset-price-5-m-order-by-with-aggregation.input";
import { Asset_price_5mScalarFieldEnum } from "./asset-price-5-m-scalar-field.enum";
import { asset_price_5mScalarWhereWithAggregatesInput } from "../asset-price-5-m/asset-price-5-m-scalar-where-with-aggregates.input";
import { Int } from "@nestjs/graphql";

@ArgsType()
export class GroupByassetPrice5MArgs {
    @Field(() => asset_price_5mWhereInput, { nullable: true })
    @Type(() => asset_price_5mWhereInput)
    where?: asset_price_5mWhereInput;

    @Field(() => [asset_price_5mOrderByWithAggregationInput], {
        nullable: true,
    })
    orderBy?: Array<asset_price_5mOrderByWithAggregationInput>;

    @Field(() => [Asset_price_5mScalarFieldEnum], { nullable: false })
    by!: Array<keyof typeof Asset_price_5mScalarFieldEnum>;

    @Field(() => asset_price_5mScalarWhereWithAggregatesInput, {
        nullable: true,
    })
    having?: asset_price_5mScalarWhereWithAggregatesInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;
}
