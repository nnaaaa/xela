import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCreateWithoutUserCryptoInput } from "./user-create-without-user-crypto.input";
import { Type } from "class-transformer";
import { UserCreateOrConnectWithoutUserCryptoInput } from "./user-create-or-connect-without-user-crypto.input";
import { Prisma } from "@prisma/client";
import { UserWhereUniqueInput } from "./user-where-unique.input";

@InputType()
export class UserCreateNestedOneWithoutUserCryptoInput {
    @Field(() => UserCreateWithoutUserCryptoInput, { nullable: true })
    @Type(() => UserCreateWithoutUserCryptoInput)
    create?: UserCreateWithoutUserCryptoInput;

    @Field(() => UserCreateOrConnectWithoutUserCryptoInput, { nullable: true })
    @Type(() => UserCreateOrConnectWithoutUserCryptoInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserCryptoInput;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, "id" | "email">;
}
