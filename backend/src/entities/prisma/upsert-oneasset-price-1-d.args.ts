import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1dWhereUniqueInput } from "../asset-price-1-d/asset-price-1-d-where-unique.input";
import { Type } from "class-transformer";
import { asset_price_1dCreateInput } from "../asset-price-1-d/asset-price-1-d-create.input";
import { asset_price_1dUpdateInput } from "../asset-price-1-d/asset-price-1-d-update.input";

@ArgsType()
export class UpsertOneassetPrice1DArgs {
    @Field(() => asset_price_1dWhereUniqueInput, { nullable: false })
    @Type(() => asset_price_1dWhereUniqueInput)
    where!: asset_price_1dWhereUniqueInput;

    @Field(() => asset_price_1dCreateInput, { nullable: false })
    @Type(() => asset_price_1dCreateInput)
    create!: asset_price_1dCreateInput;

    @Field(() => asset_price_1dUpdateInput, { nullable: false })
    @Type(() => asset_price_1dUpdateInput)
    update!: asset_price_1dUpdateInput;
}
