import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_5mCreateInput } from "../asset-price-5-m/asset-price-5-m-create.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateOneassetPrice5MArgs {
    @Field(() => asset_price_5mCreateInput, { nullable: false })
    @Type(() => asset_price_5mCreateInput)
    data!: asset_price_5mCreateInput;
}
