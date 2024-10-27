import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../prisma/string-field-update-operations.input";
import { AssetBalanceUncheckedUpdateManyWithoutAssetInfoNestedInput } from "../asset-balance/asset-balance-unchecked-update-many-without-asset-info-nested.input";
import { AssetPriceUncheckedUpdateManyWithoutAssetInfoNestedInput } from "../asset-price/asset-price-unchecked-update-many-without-asset-info-nested.input";

@InputType()
export class AssetInfoUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    symbol?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    category?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    desc?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    logo?: StringFieldUpdateOperationsInput;

    @Field(() => AssetBalanceUncheckedUpdateManyWithoutAssetInfoNestedInput, {
        nullable: true,
    })
    assetBalances?: AssetBalanceUncheckedUpdateManyWithoutAssetInfoNestedInput;

    @Field(() => AssetPriceUncheckedUpdateManyWithoutAssetInfoNestedInput, {
        nullable: true,
    })
    assetPrices?: AssetPriceUncheckedUpdateManyWithoutAssetInfoNestedInput;
}
