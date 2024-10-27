import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../prisma/string-field-update-operations.input";
import { EnumTradingTypeFieldUpdateOperationsInput } from "../prisma/enum-trading-type-field-update-operations.input";
import { NullableDateTimeFieldUpdateOperationsInput } from "../prisma/nullable-date-time-field-update-operations.input";
import { AssetBalanceUpdateManyWithoutCryptoProfileNestedInput } from "../asset-balance/asset-balance-update-many-without-crypto-profile-nested.input";
import { HistoricalCryptoBalanceUpdateManyWithoutCryptoProfileNestedInput } from "../historical-crypto-balance/historical-crypto-balance-update-many-without-crypto-profile-nested.input";
import { UserUpdateOneRequiredWithoutCryptoProfilesNestedInput } from "../user/user-update-one-required-without-crypto-profiles-nested.input";

@InputType()
export class UserCryptoProfileUpdateInput {
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

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
    updateTime?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => AssetBalanceUpdateManyWithoutCryptoProfileNestedInput, {
        nullable: true,
    })
    balances?: AssetBalanceUpdateManyWithoutCryptoProfileNestedInput;

    @Field(
        () => HistoricalCryptoBalanceUpdateManyWithoutCryptoProfileNestedInput,
        { nullable: true },
    )
    historicalBalances?: HistoricalCryptoBalanceUpdateManyWithoutCryptoProfileNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutCryptoProfilesNestedInput, {
        nullable: true,
    })
    user?: UserUpdateOneRequiredWithoutCryptoProfilesNestedInput;
}
