import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserUpdateWithoutCryptoProfileInput } from "./user-update-without-crypto-profile.input";
import { Type } from "class-transformer";
import { UserCreateWithoutCryptoProfileInput } from "./user-create-without-crypto-profile.input";
import { UserWhereInput } from "./user-where.input";

@InputType()
export class UserUpsertWithoutCryptoProfileInput {
    @Field(() => UserUpdateWithoutCryptoProfileInput, { nullable: false })
    @Type(() => UserUpdateWithoutCryptoProfileInput)
    update!: UserUpdateWithoutCryptoProfileInput;

    @Field(() => UserCreateWithoutCryptoProfileInput, { nullable: false })
    @Type(() => UserCreateWithoutCryptoProfileInput)
    create!: UserCreateWithoutCryptoProfileInput;

    @Field(() => UserWhereInput, { nullable: true })
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
