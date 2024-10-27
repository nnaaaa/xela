import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../prisma/string-field-update-operations.input";
import { EnumTradingTypeFieldUpdateOperationsInput } from "../prisma/enum-trading-type-field-update-operations.input";
import { NullableDateTimeFieldUpdateOperationsInput } from "../prisma/nullable-date-time-field-update-operations.input";
import { AssetBalanceUncheckedUpdateManyWithoutCryptoProfileNestedInput } from "../asset-balance/asset-balance-unchecked-update-many-without-crypto-profile-nested.input";
import { HistoricalCryptoBalanceUncheckedUpdateManyWithoutCryptoProfileNestedInput } from "../historical-crypto-balance/historical-crypto-balance-unchecked-update-many-without-crypto-profile-nested.input";

@InputType()
export class UserCryptoProfileUncheckedUpdateWithoutUserInput {
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

    @Field(
        () => AssetBalanceUncheckedUpdateManyWithoutCryptoProfileNestedInput,
        { nullable: true },
    )
    balances?: AssetBalanceUncheckedUpdateManyWithoutCryptoProfileNestedInput;

    @Field(
        () =>
            HistoricalCryptoBalanceUncheckedUpdateManyWithoutCryptoProfileNestedInput,
        { nullable: true },
    )
    historicalBalances?: HistoricalCryptoBalanceUncheckedUpdateManyWithoutCryptoProfileNestedInput;
}
