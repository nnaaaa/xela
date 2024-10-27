import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_5mUpdateInput } from "../asset-price-5-m/asset-price-5-m-update.input";
import { Type } from "class-transformer";
import { asset_price_5mWhereUniqueInput } from "../asset-price-5-m/asset-price-5-m-where-unique.input";

@ArgsType()
export class UpdateOneassetPrice5MArgs {
    @Field(() => asset_price_5mUpdateInput, { nullable: false })
    @Type(() => asset_price_5mUpdateInput)
    data!: asset_price_5mUpdateInput;

    @Field(() => asset_price_5mWhereUniqueInput, { nullable: false })
    @Type(() => asset_price_5mWhereUniqueInput)
    where!: asset_price_5mWhereUniqueInput;
}
