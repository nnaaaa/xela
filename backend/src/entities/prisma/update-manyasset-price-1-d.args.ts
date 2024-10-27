import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1dUpdateManyMutationInput } from "../asset-price-1-d/asset-price-1-d-update-many-mutation.input";
import { Type } from "class-transformer";
import { asset_price_1dWhereInput } from "../asset-price-1-d/asset-price-1-d-where.input";

@ArgsType()
export class UpdateManyassetPrice1DArgs {
    @Field(() => asset_price_1dUpdateManyMutationInput, { nullable: false })
    @Type(() => asset_price_1dUpdateManyMutationInput)
    data!: asset_price_1dUpdateManyMutationInput;

    @Field(() => asset_price_1dWhereInput, { nullable: true })
    @Type(() => asset_price_1dWhereInput)
    where?: asset_price_1dWhereInput;
}
