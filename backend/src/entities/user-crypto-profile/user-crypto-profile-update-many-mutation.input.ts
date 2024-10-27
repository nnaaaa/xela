import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../prisma/string-field-update-operations.input";
import { EnumTradingTypeFieldUpdateOperationsInput } from "../prisma/enum-trading-type-field-update-operations.input";
import { NullableDateTimeFieldUpdateOperationsInput } from "../prisma/nullable-date-time-field-update-operations.input";

@InputType()
export class UserCryptoProfileUpdateManyMutationInput {
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
}
