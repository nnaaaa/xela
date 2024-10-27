import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1hCreateInput } from "../asset-price-1-h/asset-price-1-h-create.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateOneassetPrice1HArgs {
    @Field(() => asset_price_1hCreateInput, { nullable: false })
    @Type(() => asset_price_1hCreateInput)
    data!: asset_price_1hCreateInput;
}
