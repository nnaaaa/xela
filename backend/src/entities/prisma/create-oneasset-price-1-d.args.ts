import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1dCreateInput } from "../asset-price-1-d/asset-price-1-d-create.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateOneassetPrice1DArgs {
    @Field(() => asset_price_1dCreateInput, { nullable: false })
    @Type(() => asset_price_1dCreateInput)
    data!: asset_price_1dCreateInput;
}
