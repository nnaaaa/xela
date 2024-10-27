import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_5mWhereInput } from "../asset-price-5-m/asset-price-5-m-where.input";
import { Type } from "class-transformer";

@ArgsType()
export class DeleteManyassetPrice5MArgs {
    @Field(() => asset_price_5mWhereInput, { nullable: true })
    @Type(() => asset_price_5mWhereInput)
    where?: asset_price_5mWhereInput;
}
