import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_5mWhereUniqueInput } from "../asset-price-5-m/asset-price-5-m-where-unique.input";
import { Type } from "class-transformer";
import { asset_price_5mCreateInput } from "../asset-price-5-m/asset-price-5-m-create.input";
import { asset_price_5mUpdateInput } from "../asset-price-5-m/asset-price-5-m-update.input";

@ArgsType()
export class UpsertOneassetPrice5MArgs {
    @Field(() => asset_price_5mWhereUniqueInput, { nullable: false })
    @Type(() => asset_price_5mWhereUniqueInput)
    where!: asset_price_5mWhereUniqueInput;

    @Field(() => asset_price_5mCreateInput, { nullable: false })
    @Type(() => asset_price_5mCreateInput)
    create!: asset_price_5mCreateInput;

    @Field(() => asset_price_5mUpdateInput, { nullable: false })
    @Type(() => asset_price_5mUpdateInput)
    update!: asset_price_5mUpdateInput;
}
