import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1dWhereInput } from "../asset-price-1-d/asset-price-1-d-where.input";
import { Type } from "class-transformer";
import { asset_price_1dOrderByWithAggregationInput } from "../asset-price-1-d/asset-price-1-d-order-by-with-aggregation.input";
import { Asset_price_1dScalarFieldEnum } from "./asset-price-1-d-scalar-field.enum";
import { asset_price_1dScalarWhereWithAggregatesInput } from "../asset-price-1-d/asset-price-1-d-scalar-where-with-aggregates.input";
import { Int } from "@nestjs/graphql";

@ArgsType()
export class GroupByassetPrice1DArgs {
    @Field(() => asset_price_1dWhereInput, { nullable: true })
    @Type(() => asset_price_1dWhereInput)
    where?: asset_price_1dWhereInput;

    @Field(() => [asset_price_1dOrderByWithAggregationInput], {
        nullable: true,
    })
    orderBy?: Array<asset_price_1dOrderByWithAggregationInput>;

    @Field(() => [Asset_price_1dScalarFieldEnum], { nullable: false })
    by!: Array<keyof typeof Asset_price_1dScalarFieldEnum>;

    @Field(() => asset_price_1dScalarWhereWithAggregatesInput, {
        nullable: true,
    })
    having?: asset_price_1dScalarWhereWithAggregatesInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;
}
