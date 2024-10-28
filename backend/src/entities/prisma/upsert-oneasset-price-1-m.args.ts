import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1MWhereUniqueInput } from "../asset-price-1-m/asset-price-1-m-where-unique.input";
import { Type } from "class-transformer";
import { asset_price_1MCreateInput } from "../asset-price-1-m/asset-price-1-m-create.input";
import { asset_price_1MUpdateInput } from "../asset-price-1-m/asset-price-1-m-update.input";

@ArgsType()
export class UpsertOneassetPrice1MArgs {
    @Field(() => asset_price_1MWhereUniqueInput, { nullable: false })
    @Type(() => asset_price_1MWhereUniqueInput)
    where!: asset_price_1MWhereUniqueInput;

    @Field(() => asset_price_1MCreateInput, { nullable: false })
    @Type(() => asset_price_1MCreateInput)
    create!: asset_price_1MCreateInput;

    @Field(() => asset_price_1MUpdateInput, { nullable: false })
    @Type(() => asset_price_1MUpdateInput)
    update!: asset_price_1MUpdateInput;
}
