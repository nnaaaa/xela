import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserWhereInput } from "./user-where.input";
import { Type } from "class-transformer";
import { UserUpdateWithoutCryptoProfilesInput } from "./user-update-without-crypto-profiles.input";

@InputType()
export class UserUpdateToOneWithWhereWithoutCryptoProfilesInput {
    @Field(() => UserWhereInput, { nullable: true })
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCryptoProfilesInput, { nullable: false })
    @Type(() => UserUpdateWithoutCryptoProfilesInput)
    data!: UserUpdateWithoutCryptoProfilesInput;
}
