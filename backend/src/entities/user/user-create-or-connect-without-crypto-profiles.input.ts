import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { UserWhereUniqueInput } from "./user-where-unique.input";
import { Type } from "class-transformer";
import { UserCreateWithoutCryptoProfilesInput } from "./user-create-without-crypto-profiles.input";

@InputType()
export class UserCreateOrConnectWithoutCryptoProfilesInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, "id" | "email">;

    @Field(() => UserCreateWithoutCryptoProfilesInput, { nullable: false })
    @Type(() => UserCreateWithoutCryptoProfilesInput)
    create!: UserCreateWithoutCryptoProfilesInput;
}
