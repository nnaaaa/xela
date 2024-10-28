import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1MUpdateManyMutationInput } from "../asset-price-1-m/asset-price-1-m-update-many-mutation.input";
import { Type } from "class-transformer";
import { asset_price_1MWhereInput } from "../asset-price-1-m/asset-price-1-m-where.input";

@ArgsType()
export class UpdateManyassetPrice1MArgs {
    @Field(() => asset_price_1MUpdateManyMutationInput, { nullable: false })
    @Type(() => asset_price_1MUpdateManyMutationInput)
    data!: asset_price_1MUpdateManyMutationInput;

    @Field(() => asset_price_1MWhereInput, { nullable: true })
    @Type(() => asset_price_1MWhereInput)
    where?: asset_price_1MWhereInput;
}
