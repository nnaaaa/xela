import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Interval } from "./interval.enum";

@InputType()
export class EnumIntervalFieldUpdateOperationsInput {
    @Field(() => Interval, { nullable: true })
    set?: keyof typeof Interval;
}
