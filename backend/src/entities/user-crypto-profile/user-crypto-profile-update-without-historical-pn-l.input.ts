import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../prisma/string-field-update-operations.input";
import { EnumTradingTypeFieldUpdateOperationsInput } from "../prisma/enum-trading-type-field-update-operations.input";
import { UserUpdateOneRequiredWithoutCryptoProfilesNestedInput } from "../user/user-update-one-required-without-crypto-profiles-nested.input";
import { AssetBalanceUpdateManyWithoutCryptoProfileNestedInput } from "../asset-balance/asset-balance-update-many-without-crypto-profile-nested.input";

@InputType()
export class UserCryptoProfileUpdateWithoutHistoricalPnLInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    profileId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    exchanges?: StringFieldUpdateOperationsInput;

    @Field(() => EnumTradingTypeFieldUpdateOperationsInput, { nullable: true })
    tradingType?: EnumTradingTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    apiKey?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    secretKey?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCryptoProfilesNestedInput, {
        nullable: true,
    })
    user?: UserUpdateOneRequiredWithoutCryptoProfilesNestedInput;

    @Field(() => AssetBalanceUpdateManyWithoutCryptoProfileNestedInput, {
        nullable: true,
    })
    balances?: AssetBalanceUpdateManyWithoutCryptoProfileNestedInput;
}
