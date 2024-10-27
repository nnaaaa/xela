import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { OtpPurpose } from "./otp-purpose.enum";

@InputType()
export class NullableEnumOtpPurposeFieldUpdateOperationsInput {
    @Field(() => OtpPurpose, { nullable: true })
    set?: keyof typeof OtpPurpose;
}
