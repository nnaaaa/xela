import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_5mWhereUniqueInput } from "../asset-price-5-m/asset-price-5-m-where-unique.input";
import { Type } from "class-transformer";

@ArgsType()
export class FindUniqueassetPrice5MArgs {
    @Field(() => asset_price_5mWhereUniqueInput, { nullable: false })
    @Type(() => asset_price_5mWhereUniqueInput)
    where!: asset_price_5mWhereUniqueInput;
}
