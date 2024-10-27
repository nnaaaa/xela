import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCreateWithoutCryptoProfileInput } from "./user-create-without-crypto-profile.input";
import { Type } from "class-transformer";
import { UserCreateOrConnectWithoutCryptoProfileInput } from "./user-create-or-connect-without-crypto-profile.input";
import { Prisma } from "@prisma/client";
import { UserWhereUniqueInput } from "./user-where-unique.input";

@InputType()
export class UserCreateNestedOneWithoutCryptoProfileInput {
    @Field(() => UserCreateWithoutCryptoProfileInput, { nullable: true })
    @Type(() => UserCreateWithoutCryptoProfileInput)
    create?: UserCreateWithoutCryptoProfileInput;

    @Field(() => UserCreateOrConnectWithoutCryptoProfileInput, {
        nullable: true,
    })
    @Type(() => UserCreateOrConnectWithoutCryptoProfileInput)
    connectOrCreate?: UserCreateOrConnectWithoutCryptoProfileInput;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, "id" | "email">;
}
