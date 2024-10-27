import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1hWhereInput } from "../asset-price-1-h/asset-price-1-h-where.input";
import { Type } from "class-transformer";
import { asset_price_1hOrderByWithAggregationInput } from "../asset-price-1-h/asset-price-1-h-order-by-with-aggregation.input";
import { Asset_price_1hScalarFieldEnum } from "./asset-price-1-h-scalar-field.enum";
import { asset_price_1hScalarWhereWithAggregatesInput } from "../asset-price-1-h/asset-price-1-h-scalar-where-with-aggregates.input";
import { Int } from "@nestjs/graphql";

@ArgsType()
export class GroupByassetPrice1HArgs {
    @Field(() => asset_price_1hWhereInput, { nullable: true })
    @Type(() => asset_price_1hWhereInput)
    where?: asset_price_1hWhereInput;

    @Field(() => [asset_price_1hOrderByWithAggregationInput], {
        nullable: true,
    })
    orderBy?: Array<asset_price_1hOrderByWithAggregationInput>;

    @Field(() => [Asset_price_1hScalarFieldEnum], { nullable: false })
    by!: Array<keyof typeof Asset_price_1hScalarFieldEnum>;

    @Field(() => asset_price_1hScalarWhereWithAggregatesInput, {
        nullable: true,
    })
    having?: asset_price_1hScalarWhereWithAggregatesInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;
}
