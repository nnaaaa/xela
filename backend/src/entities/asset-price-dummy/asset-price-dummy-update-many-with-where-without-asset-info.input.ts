import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetPriceDummyScalarWhereInput } from "./asset-price-dummy-scalar-where.input";
import { Type } from "class-transformer";
import { AssetPriceDummyUpdateManyMutationInput } from "./asset-price-dummy-update-many-mutation.input";

@InputType()
export class AssetPriceDummyUpdateManyWithWhereWithoutAssetInfoInput {
    @Field(() => AssetPriceDummyScalarWhereInput, { nullable: false })
    @Type(() => AssetPriceDummyScalarWhereInput)
    where!: AssetPriceDummyScalarWhereInput;

    @Field(() => AssetPriceDummyUpdateManyMutationInput, { nullable: false })
    @Type(() => AssetPriceDummyUpdateManyMutationInput)
    data!: AssetPriceDummyUpdateManyMutationInput;
}
