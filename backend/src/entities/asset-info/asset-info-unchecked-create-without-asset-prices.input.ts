import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetBalanceUncheckedCreateNestedManyWithoutAssetInfoInput } from "../asset-balance/asset-balance-unchecked-create-nested-many-without-asset-info.input";

@InputType()
export class AssetInfoUncheckedCreateWithoutAssetPricesInput {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => String, { nullable: false })
    symbol!: string;

    @Field(() => String, { nullable: false })
    category!: string;

    @Field(() => String, { nullable: false })
    desc!: string;

    @Field(() => String, { nullable: false })
    logo!: string;

    @Field(() => AssetBalanceUncheckedCreateNestedManyWithoutAssetInfoInput, {
        nullable: true,
    })
    assetBalances?: AssetBalanceUncheckedCreateNestedManyWithoutAssetInfoInput;
}
