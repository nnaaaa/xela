import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { UserWhereUniqueInput } from "./user-where-unique.input";
import { Type } from "class-transformer";
import { UserCreateWithoutCryptoProfileInput } from "./user-create-without-crypto-profile.input";

@InputType()
export class UserCreateOrConnectWithoutCryptoProfileInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, "id" | "email">;

    @Field(() => UserCreateWithoutCryptoProfileInput, { nullable: false })
    @Type(() => UserCreateWithoutCryptoProfileInput)
    create!: UserCreateWithoutCryptoProfileInput;
}
