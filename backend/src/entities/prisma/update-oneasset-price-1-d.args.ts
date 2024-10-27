import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1dUpdateInput } from "../asset-price-1-d/asset-price-1-d-update.input";
import { Type } from "class-transformer";
import { asset_price_1dWhereUniqueInput } from "../asset-price-1-d/asset-price-1-d-where-unique.input";

@ArgsType()
export class UpdateOneassetPrice1DArgs {
    @Field(() => asset_price_1dUpdateInput, { nullable: false })
    @Type(() => asset_price_1dUpdateInput)
    data!: asset_price_1dUpdateInput;

    @Field(() => asset_price_1dWhereUniqueInput, { nullable: false })
    @Type(() => asset_price_1dWhereUniqueInput)
    where!: asset_price_1dWhereUniqueInput;
}
