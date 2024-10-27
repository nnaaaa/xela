import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { OtpPurpose } from "../prisma/otp-purpose.enum";
import { UserCryptoProfileUncheckedCreateNestedManyWithoutUserInput } from "../user-crypto-profile/user-crypto-profile-unchecked-create-nested-many-without-user.input";

@InputType()
export class UserUncheckedCreateInput {
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

    @Field(() => UserCryptoProfileUncheckedCreateNestedManyWithoutUserInput, {
        nullable: true,
    })
    cryptoProfiles?: UserCryptoProfileUncheckedCreateNestedManyWithoutUserInput;
}
