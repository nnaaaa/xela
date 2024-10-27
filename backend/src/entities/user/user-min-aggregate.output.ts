import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { OtpPurpose } from "../prisma/otp-purpose.enum";

@ObjectType()
export class UserMinAggregate {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: true })
    email?: string;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    password?: string;

    @Field(() => String, { nullable: true })
    otp?: string;

    @Field(() => OtpPurpose, { nullable: true })
    otpPurpose?: keyof typeof OtpPurpose;
}
