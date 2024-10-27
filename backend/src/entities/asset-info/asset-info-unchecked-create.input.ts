import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetBalanceUncheckedCreateNestedManyWithoutAssetInfoInput } from "../asset-balance/asset-balance-unchecked-create-nested-many-without-asset-info.input";
import { AssetPriceUncheckedCreateNestedManyWithoutAssetInfoInput } from "../asset-price/asset-price-unchecked-create-nested-many-without-asset-info.input";

@InputType()
export class AssetInfoUncheckedCreateInput {
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

    @Field(() => AssetPriceUncheckedCreateNestedManyWithoutAssetInfoInput, {
        nullable: true,
    })
    assetPrices?: AssetPriceUncheckedCreateNestedManyWithoutAssetInfoInput;
}
