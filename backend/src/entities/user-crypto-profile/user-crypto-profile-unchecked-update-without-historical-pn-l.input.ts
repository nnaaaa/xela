import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../prisma/string-field-update-operations.input";
import { IntFieldUpdateOperationsInput } from "../prisma/int-field-update-operations.input";
import { EnumTradingTypeFieldUpdateOperationsInput } from "../prisma/enum-trading-type-field-update-operations.input";
import { AssetBalanceUncheckedUpdateManyWithoutCryptoProfileNestedInput } from "../asset-balance/asset-balance-unchecked-update-many-without-crypto-profile-nested.input";

@InputType()
export class UserCryptoProfileUncheckedUpdateWithoutHistoricalPnLInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    profileId?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
    userId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    exchanges?: StringFieldUpdateOperationsInput;

    @Field(() => EnumTradingTypeFieldUpdateOperationsInput, { nullable: true })
    tradingType?: EnumTradingTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    apiKey?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    secretKey?: StringFieldUpdateOperationsInput;

    @Field(
        () => AssetBalanceUncheckedUpdateManyWithoutCryptoProfileNestedInput,
        { nullable: true },
    )
    balances?: AssetBalanceUncheckedUpdateManyWithoutCryptoProfileNestedInput;
}
