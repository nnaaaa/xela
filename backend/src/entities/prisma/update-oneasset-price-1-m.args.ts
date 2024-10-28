import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1MUpdateInput } from "../asset-price-1-m/asset-price-1-m-update.input";
import { Type } from "class-transformer";
import { asset_price_1MWhereUniqueInput } from "../asset-price-1-m/asset-price-1-m-where-unique.input";

@ArgsType()
export class UpdateOneassetPrice1MArgs {
    @Field(() => asset_price_1MUpdateInput, { nullable: false })
    @Type(() => asset_price_1MUpdateInput)
    data!: asset_price_1MUpdateInput;

    @Field(() => asset_price_1MWhereUniqueInput, { nullable: false })
    @Type(() => asset_price_1MWhereUniqueInput)
    where!: asset_price_1MWhereUniqueInput;
}
