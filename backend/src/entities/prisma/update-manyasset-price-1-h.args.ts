import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1hUpdateManyMutationInput } from "../asset-price-1-h/asset-price-1-h-update-many-mutation.input";
import { Type } from "class-transformer";
import { asset_price_1hWhereInput } from "../asset-price-1-h/asset-price-1-h-where.input";

@ArgsType()
export class UpdateManyassetPrice1HArgs {
    @Field(() => asset_price_1hUpdateManyMutationInput, { nullable: false })
    @Type(() => asset_price_1hUpdateManyMutationInput)
    data!: asset_price_1hUpdateManyMutationInput;

    @Field(() => asset_price_1hWhereInput, { nullable: true })
    @Type(() => asset_price_1hWhereInput)
    where?: asset_price_1hWhereInput;
}
