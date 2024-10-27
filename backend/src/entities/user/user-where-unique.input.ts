import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { UserWhereInput } from "./user-where.input";
import { StringNullableFilter } from "../prisma/string-nullable-filter.input";
import { StringFilter } from "../prisma/string-filter.input";
import { EnumOtpPurposeNullableFilter } from "../prisma/enum-otp-purpose-nullable-filter.input";
import { UserCryptoProfileListRelationFilter } from "../user-crypto-profile/user-crypto-profile-list-relation-filter.input";

@InputType()
export class UserWhereUniqueInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: true })
    email?: string;

    @Field(() => [UserWhereInput], { nullable: true })
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], { nullable: true })
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], { nullable: true })
    NOT?: Array<UserWhereInput>;

    @Field(() => StringNullableFilter, { nullable: true })
    name?: StringNullableFilter;

    @Field(() => StringFilter, { nullable: true })
    password?: StringFilter;

    @Field(() => StringNullableFilter, { nullable: true })
    otp?: StringNullableFilter;

    @Field(() => EnumOtpPurposeNullableFilter, { nullable: true })
    otpPurpose?: EnumOtpPurposeNullableFilter;

    @Field(() => UserCryptoProfileListRelationFilter, { nullable: true })
    cryptoProfiles?: UserCryptoProfileListRelationFilter;
}
