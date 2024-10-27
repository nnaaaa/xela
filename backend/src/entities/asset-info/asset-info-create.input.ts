import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetBalanceCreateNestedManyWithoutAssetInfoInput } from "../asset-balance/asset-balance-create-nested-many-without-asset-info.input";
import { AssetPriceCreateNestedManyWithoutAssetInfoInput } from "../asset-price/asset-price-create-nested-many-without-asset-info.input";

@InputType()
export class AssetInfoCreateInput {
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

    @Field(() => AssetBalanceCreateNestedManyWithoutAssetInfoInput, {
        nullable: true,
    })
    assetBalances?: AssetBalanceCreateNestedManyWithoutAssetInfoInput;

    @Field(() => AssetPriceCreateNestedManyWithoutAssetInfoInput, {
        nullable: true,
    })
    assetPrices?: AssetPriceCreateNestedManyWithoutAssetInfoInput;
}
