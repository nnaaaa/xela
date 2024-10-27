import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../prisma/string-field-update-operations.input";
import { AssetBalanceUpdateManyWithoutAssetInfoNestedInput } from "../asset-balance/asset-balance-update-many-without-asset-info-nested.input";

@InputType()
export class AssetInfoUpdateWithoutAssetPricesInput {
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

    @Field(() => AssetBalanceUpdateManyWithoutAssetInfoNestedInput, {
        nullable: true,
    })
    assetBalances?: AssetBalanceUpdateManyWithoutAssetInfoNestedInput;
}
