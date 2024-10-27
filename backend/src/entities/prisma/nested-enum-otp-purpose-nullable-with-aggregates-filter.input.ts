import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { OtpPurpose } from "./otp-purpose.enum";
import { NestedIntNullableFilter } from "./nested-int-nullable-filter.input";
import { NestedEnumOtpPurposeNullableFilter } from "./nested-enum-otp-purpose-nullable-filter.input";

@InputType()
export class NestedEnumOtpPurposeNullableWithAggregatesFilter {
    @Field(() => OtpPurpose, { nullable: true })
    equals?: keyof typeof OtpPurpose;

    @Field(() => [OtpPurpose], { nullable: true })
    in?: Array<keyof typeof OtpPurpose>;

    @Field(() => [OtpPurpose], { nullable: true })
    notIn?: Array<keyof typeof OtpPurpose>;

    @Field(() => NestedEnumOtpPurposeNullableWithAggregatesFilter, {
        nullable: true,
    })
    not?: NestedEnumOtpPurposeNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, { nullable: true })
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumOtpPurposeNullableFilter, { nullable: true })
    _min?: NestedEnumOtpPurposeNullableFilter;

    @Field(() => NestedEnumOtpPurposeNullableFilter, { nullable: true })
    _max?: NestedEnumOtpPurposeNullableFilter;
}
