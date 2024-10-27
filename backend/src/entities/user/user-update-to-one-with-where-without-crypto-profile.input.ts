import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserWhereInput } from "./user-where.input";
import { Type } from "class-transformer";
import { UserUpdateWithoutCryptoProfileInput } from "./user-update-without-crypto-profile.input";

@InputType()
export class UserUpdateToOneWithWhereWithoutCryptoProfileInput {
    @Field(() => UserWhereInput, { nullable: true })
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCryptoProfileInput, { nullable: false })
    @Type(() => UserUpdateWithoutCryptoProfileInput)
    data!: UserUpdateWithoutCryptoProfileInput;
}
