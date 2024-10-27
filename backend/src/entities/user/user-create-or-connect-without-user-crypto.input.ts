import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { UserWhereUniqueInput } from "./user-where-unique.input";
import { Type } from "class-transformer";
import { UserCreateWithoutUserCryptoInput } from "./user-create-without-user-crypto.input";

@InputType()
export class UserCreateOrConnectWithoutUserCryptoInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, "id" | "email">;

    @Field(() => UserCreateWithoutUserCryptoInput, { nullable: false })
    @Type(() => UserCreateWithoutUserCryptoInput)
    create!: UserCreateWithoutUserCryptoInput;
}
