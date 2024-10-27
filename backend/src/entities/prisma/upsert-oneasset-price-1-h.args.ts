import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1hWhereUniqueInput } from "../asset-price-1-h/asset-price-1-h-where-unique.input";
import { Type } from "class-transformer";
import { asset_price_1hCreateInput } from "../asset-price-1-h/asset-price-1-h-create.input";
import { asset_price_1hUpdateInput } from "../asset-price-1-h/asset-price-1-h-update.input";

@ArgsType()
export class UpsertOneassetPrice1HArgs {
    @Field(() => asset_price_1hWhereUniqueInput, { nullable: false })
    @Type(() => asset_price_1hWhereUniqueInput)
    where!: asset_price_1hWhereUniqueInput;

    @Field(() => asset_price_1hCreateInput, { nullable: false })
    @Type(() => asset_price_1hCreateInput)
    create!: asset_price_1hCreateInput;

    @Field(() => asset_price_1hUpdateInput, { nullable: false })
    @Type(() => asset_price_1hUpdateInput)
    update!: asset_price_1hUpdateInput;
}
