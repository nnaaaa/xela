import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { OtpPurpose } from "../prisma/otp-purpose.enum";
import { UserCryptoProfileCreateNestedManyWithoutUserInput } from "../user-crypto-profile/user-crypto-profile-create-nested-many-without-user.input";

@InputType()
export class UserCreateInput {
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

    @Field(() => UserCryptoProfileCreateNestedManyWithoutUserInput, {
        nullable: true,
    })
    cryptoProfiles?: UserCryptoProfileCreateNestedManyWithoutUserInput;
}
