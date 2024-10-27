import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../prisma/date-time-field-update-operations.input";
import { FloatFieldUpdateOperationsInput } from "../prisma/float-field-update-operations.input";

@InputType()
export class HistoricalPnLUncheckedUpdateManyWithoutCryptoProfileInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
    time?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
    estimatedBalance?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
    changePercent?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
    changeBalance?: FloatFieldUpdateOperationsInput;
}
