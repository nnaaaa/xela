import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../prisma/date-time-field-update-operations.input";
import { FloatFieldUpdateOperationsInput } from "../prisma/float-field-update-operations.input";
import { UserCryptoProfileUpdateOneRequiredWithoutHistoricalBalancesNestedInput } from "../user-crypto-profile/user-crypto-profile-update-one-required-without-historical-balances-nested.input";

@InputType()
export class HistoricalCryptoBalanceUpdateInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
    time?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
    estimatedBalance?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
    changePercent?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
    changeBalance?: FloatFieldUpdateOperationsInput;

    @Field(
        () =>
            UserCryptoProfileUpdateOneRequiredWithoutHistoricalBalancesNestedInput,
        { nullable: true },
    )
    cryptoProfile?: UserCryptoProfileUpdateOneRequiredWithoutHistoricalBalancesNestedInput;
}
