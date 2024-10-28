import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1MWhereInput } from "../asset-price-1-m/asset-price-1-m-where.input";
import { Type } from "class-transformer";
import { asset_price_1MOrderByWithAggregationInput } from "../asset-price-1-m/asset-price-1-m-order-by-with-aggregation.input";
import { Asset_price_1MScalarFieldEnum } from "./asset-price-1-m-scalar-field.enum";
import { asset_price_1MScalarWhereWithAggregatesInput } from "../asset-price-1-m/asset-price-1-m-scalar-where-with-aggregates.input";
import { Int } from "@nestjs/graphql";

@ArgsType()
export class GroupByassetPrice1MArgs {
    @Field(() => asset_price_1MWhereInput, { nullable: true })
    @Type(() => asset_price_1MWhereInput)
    where?: asset_price_1MWhereInput;

    @Field(() => [asset_price_1MOrderByWithAggregationInput], {
        nullable: true,
    })
    orderBy?: Array<asset_price_1MOrderByWithAggregationInput>;

    @Field(() => [Asset_price_1MScalarFieldEnum], { nullable: false })
    by!: Array<keyof typeof Asset_price_1MScalarFieldEnum>;

    @Field(() => asset_price_1MScalarWhereWithAggregatesInput, {
        nullable: true,
    })
    having?: asset_price_1MScalarWhereWithAggregatesInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;
}
