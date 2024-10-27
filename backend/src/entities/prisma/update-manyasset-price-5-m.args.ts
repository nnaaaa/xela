import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_5mUpdateManyMutationInput } from "../asset-price-5-m/asset-price-5-m-update-many-mutation.input";
import { Type } from "class-transformer";
import { asset_price_5mWhereInput } from "../asset-price-5-m/asset-price-5-m-where.input";

@ArgsType()
export class UpdateManyassetPrice5MArgs {
    @Field(() => asset_price_5mUpdateManyMutationInput, { nullable: false })
    @Type(() => asset_price_5mUpdateManyMutationInput)
    data!: asset_price_5mUpdateManyMutationInput;

    @Field(() => asset_price_5mWhereInput, { nullable: true })
    @Type(() => asset_price_5mWhereInput)
    where?: asset_price_5mWhereInput;
}
