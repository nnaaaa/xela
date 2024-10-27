import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetPriceDummyUpdateManyMutationInput } from "./asset-price-dummy-update-many-mutation.input";
import { Type } from "class-transformer";
import { AssetPriceDummyWhereInput } from "./asset-price-dummy-where.input";

@ArgsType()
export class UpdateManyAssetPriceDummyArgs {
    @Field(() => AssetPriceDummyUpdateManyMutationInput, { nullable: false })
    @Type(() => AssetPriceDummyUpdateManyMutationInput)
    data!: AssetPriceDummyUpdateManyMutationInput;

    @Field(() => AssetPriceDummyWhereInput, { nullable: true })
    @Type(() => AssetPriceDummyWhereInput)
    where?: AssetPriceDummyWhereInput;
}
