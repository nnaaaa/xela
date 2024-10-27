import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../prisma/string-field-update-operations.input";
import { FloatFieldUpdateOperationsInput } from "../prisma/float-field-update-operations.input";
import { AssetInfoUpdateOneRequiredWithoutAssetBalancesNestedInput } from "../asset-info/asset-info-update-one-required-without-asset-balances-nested.input";
import { UserCryptoProfileUpdateOneRequiredWithoutBalancesNestedInput } from "../user-crypto-profile/user-crypto-profile-update-one-required-without-balances-nested.input";

@InputType()
export class AssetBalanceUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
    balance?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
    locked?: FloatFieldUpdateOperationsInput;

    @Field(() => AssetInfoUpdateOneRequiredWithoutAssetBalancesNestedInput, {
        nullable: true,
    })
    assetInfo?: AssetInfoUpdateOneRequiredWithoutAssetBalancesNestedInput;

    @Field(() => UserCryptoProfileUpdateOneRequiredWithoutBalancesNestedInput, {
        nullable: true,
    })
    cryptoProfile?: UserCryptoProfileUpdateOneRequiredWithoutBalancesNestedInput;
}
