import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { EnumIntervalFieldUpdateOperationsInput } from "../prisma/enum-interval-field-update-operations.input";
import { DateTimeFieldUpdateOperationsInput } from "../prisma/date-time-field-update-operations.input";
import { FloatFieldUpdateOperationsInput } from "../prisma/float-field-update-operations.input";

@InputType()
export class AssetPriceDummyUpdateWithoutAssetInfoInput {
    @Field(() => EnumIntervalFieldUpdateOperationsInput, { nullable: true })
    interval?: EnumIntervalFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
    open_time?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
    close_time?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
    openPrice?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
    closePrice?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
    highPrice?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
    lowPrice?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
    volume?: FloatFieldUpdateOperationsInput;
}
