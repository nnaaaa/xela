import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCreateWithoutCryptoProfilesInput } from "./user-create-without-crypto-profiles.input";
import { Type } from "class-transformer";
import { UserCreateOrConnectWithoutCryptoProfilesInput } from "./user-create-or-connect-without-crypto-profiles.input";
import { Prisma } from "@prisma/client";
import { UserWhereUniqueInput } from "./user-where-unique.input";

@InputType()
export class UserCreateNestedOneWithoutCryptoProfilesInput {
    @Field(() => UserCreateWithoutCryptoProfilesInput, { nullable: true })
    @Type(() => UserCreateWithoutCryptoProfilesInput)
    create?: UserCreateWithoutCryptoProfilesInput;

    @Field(() => UserCreateOrConnectWithoutCryptoProfilesInput, {
        nullable: true,
    })
    @Type(() => UserCreateOrConnectWithoutCryptoProfilesInput)
    connectOrCreate?: UserCreateOrConnectWithoutCryptoProfilesInput;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, "id" | "email">;
}
