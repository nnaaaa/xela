import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserUpdateWithoutUserCryptoInput } from "./user-update-without-user-crypto.input";
import { Type } from "class-transformer";
import { UserCreateWithoutUserCryptoInput } from "./user-create-without-user-crypto.input";
import { UserWhereInput } from "./user-where.input";

@InputType()
export class UserUpsertWithoutUserCryptoInput {
    @Field(() => UserUpdateWithoutUserCryptoInput, { nullable: false })
    @Type(() => UserUpdateWithoutUserCryptoInput)
    update!: UserUpdateWithoutUserCryptoInput;

    @Field(() => UserCreateWithoutUserCryptoInput, { nullable: false })
    @Type(() => UserCreateWithoutUserCryptoInput)
    create!: UserCreateWithoutUserCryptoInput;

    @Field(() => UserWhereInput, { nullable: true })
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
