import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { OtpPurpose } from "../prisma/otp-purpose.enum";

@InputType()
export class UserUncheckedCreateWithoutUserCryptoInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: false })
    email!: string;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: false })
    password!: string;

    @Field(() => String, { nullable: true })
    otp?: string;

    @Field(() => OtpPurpose, { nullable: true })
    otpPurpose?: keyof typeof OtpPurpose;
}
