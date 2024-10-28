import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1MCreateInput } from "../asset-price-1-m/asset-price-1-m-create.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateOneassetPrice1MArgs {
    @Field(() => asset_price_1MCreateInput, { nullable: false })
    @Type(() => asset_price_1MCreateInput)
    data!: asset_price_1MCreateInput;
}
