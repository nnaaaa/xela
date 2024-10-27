import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";
import { AssetInfoCreateNestedOneWithoutAssetBalancesInput } from "../asset-info/asset-info-create-nested-one-without-asset-balances.input";

@InputType()
export class AssetBalanceCreateWithoutCryptoProfileInput {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => Float, { nullable: false })
    balance!: number;

    @Field(() => Float, { nullable: false })
    locked!: number;

    @Field(() => AssetInfoCreateNestedOneWithoutAssetBalancesInput, {
        nullable: false,
    })
    assetInfo!: AssetInfoCreateNestedOneWithoutAssetBalancesInput;
}
