import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { OtpPurpose } from "./otp-purpose.enum";

@InputType()
export class NestedEnumOtpPurposeNullableFilter {
    @Field(() => OtpPurpose, { nullable: true })
    equals?: keyof typeof OtpPurpose;

    @Field(() => [OtpPurpose], { nullable: true })
    in?: Array<keyof typeof OtpPurpose>;

    @Field(() => [OtpPurpose], { nullable: true })
    notIn?: Array<keyof typeof OtpPurpose>;

    @Field(() => NestedEnumOtpPurposeNullableFilter, { nullable: true })
    not?: NestedEnumOtpPurposeNullableFilter;
}
