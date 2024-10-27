import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetPriceScalarWhereInput } from "./asset-price-scalar-where.input";
import { Type } from "class-transformer";
import { AssetPriceUpdateManyMutationInput } from "./asset-price-update-many-mutation.input";

@InputType()
export class AssetPriceUpdateManyWithWhereWithoutAssetInfoInput {
    @Field(() => AssetPriceScalarWhereInput, { nullable: false })
    @Type(() => AssetPriceScalarWhereInput)
    where!: AssetPriceScalarWhereInput;

    @Field(() => AssetPriceUpdateManyMutationInput, { nullable: false })
    @Type(() => AssetPriceUpdateManyMutationInput)
    data!: AssetPriceUpdateManyMutationInput;
}
