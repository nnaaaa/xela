import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetPriceUpdateManyMutationInput } from "./asset-price-update-many-mutation.input";
import { Type } from "class-transformer";
import { AssetPriceWhereInput } from "./asset-price-where.input";

@ArgsType()
export class UpdateManyAssetPriceArgs {
    @Field(() => AssetPriceUpdateManyMutationInput, { nullable: false })
    @Type(() => AssetPriceUpdateManyMutationInput)
    data!: AssetPriceUpdateManyMutationInput;

    @Field(() => AssetPriceWhereInput, { nullable: true })
    @Type(() => AssetPriceWhereInput)
    where?: AssetPriceWhereInput;
}
