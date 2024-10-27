import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../prisma/date-time-field-update-operations.input";
import { StringFieldUpdateOperationsInput } from "../prisma/string-field-update-operations.input";
import { NullableFloatFieldUpdateOperationsInput } from "../prisma/nullable-float-field-update-operations.input";

@InputType()
export class asset_price_1hUncheckedUpdateInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
    open_time?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    assetInfoId?: StringFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
    openPrice?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
    closePrice?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
    highPrice?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
    lowPrice?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
    volume?: NullableFloatFieldUpdateOperationsInput;
}
