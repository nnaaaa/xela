import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { ID } from "@nestjs/graphql";
import { OtpPurpose } from "../prisma/otp-purpose.enum";
import { UserCryptoProfile } from "../user-crypto-profile/user-crypto-profile.model";
import { UserCount } from "./user-count.output";

@ObjectType()
export class User {
    @Field(() => ID, { nullable: false })
    id!: number;

    @Field(() => String, { nullable: false })
    email!: string;

    @Field(() => String, { nullable: true })
    name!: string | null;

    @Field(() => String, { nullable: false })
    password!: string;

    @Field(() => String, { nullable: true })
    otp!: string | null;

    @Field(() => OtpPurpose, { nullable: true })
    otpPurpose!: keyof typeof OtpPurpose | null;

    @Field(() => [UserCryptoProfile], { nullable: true })
    cryptoProfiles?: Array<UserCryptoProfile>;

    @Field(() => UserCount, { nullable: false })
    _count?: UserCount;
}
