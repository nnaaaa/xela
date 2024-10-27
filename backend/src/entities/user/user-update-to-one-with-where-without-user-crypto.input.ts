import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserWhereInput } from "./user-where.input";
import { Type } from "class-transformer";
import { UserUpdateWithoutUserCryptoInput } from "./user-update-without-user-crypto.input";

@InputType()
export class UserUpdateToOneWithWhereWithoutUserCryptoInput {
    @Field(() => UserWhereInput, { nullable: true })
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutUserCryptoInput, { nullable: false })
    @Type(() => UserUpdateWithoutUserCryptoInput)
    data!: UserUpdateWithoutUserCryptoInput;
}
