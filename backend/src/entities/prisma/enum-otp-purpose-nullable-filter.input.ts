import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { OtpPurpose } from "./otp-purpose.enum";
import { NestedEnumOtpPurposeNullableFilter } from "./nested-enum-otp-purpose-nullable-filter.input";

@InputType()
export class EnumOtpPurposeNullableFilter {
    @Field(() => OtpPurpose, { nullable: true })
    equals?: keyof typeof OtpPurpose;

    @Field(() => [OtpPurpose], { nullable: true })
    in?: Array<keyof typeof OtpPurpose>;

    @Field(() => [OtpPurpose], { nullable: true })
    notIn?: Array<keyof typeof OtpPurpose>;

    @Field(() => NestedEnumOtpPurposeNullableFilter, { nullable: true })
    not?: NestedEnumOtpPurposeNullableFilter;
}
