import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1hUpdateInput } from "../asset-price-1-h/asset-price-1-h-update.input";
import { Type } from "class-transformer";
import { asset_price_1hWhereUniqueInput } from "../asset-price-1-h/asset-price-1-h-where-unique.input";

@ArgsType()
export class UpdateOneassetPrice1HArgs {
    @Field(() => asset_price_1hUpdateInput, { nullable: false })
    @Type(() => asset_price_1hUpdateInput)
    data!: asset_price_1hUpdateInput;

    @Field(() => asset_price_1hWhereUniqueInput, { nullable: false })
    @Type(() => asset_price_1hWhereUniqueInput)
    where!: asset_price_1hWhereUniqueInput;
}
