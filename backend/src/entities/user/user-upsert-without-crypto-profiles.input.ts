import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserUpdateWithoutCryptoProfilesInput } from "./user-update-without-crypto-profiles.input";
import { Type } from "class-transformer";
import { UserCreateWithoutCryptoProfilesInput } from "./user-create-without-crypto-profiles.input";
import { UserWhereInput } from "./user-where.input";

@InputType()
export class UserUpsertWithoutCryptoProfilesInput {
    @Field(() => UserUpdateWithoutCryptoProfilesInput, { nullable: false })
    @Type(() => UserUpdateWithoutCryptoProfilesInput)
    update!: UserUpdateWithoutCryptoProfilesInput;

    @Field(() => UserCreateWithoutCryptoProfilesInput, { nullable: false })
    @Type(() => UserCreateWithoutCryptoProfilesInput)
    create!: UserCreateWithoutCryptoProfilesInput;

    @Field(() => UserWhereInput, { nullable: true })
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
