import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCreateWithoutUserCryptoInput } from "./user-create-without-user-crypto.input";
import { Type } from "class-transformer";
import { UserCreateOrConnectWithoutUserCryptoInput } from "./user-create-or-connect-without-user-crypto.input";
import { UserUpsertWithoutUserCryptoInput } from "./user-upsert-without-user-crypto.input";
import { Prisma } from "@prisma/client";
import { UserWhereUniqueInput } from "./user-where-unique.input";
import { UserUpdateToOneWithWhereWithoutUserCryptoInput } from "./user-update-to-one-with-where-without-user-crypto.input";

@InputType()
export class UserUpdateOneRequiredWithoutUserCryptoNestedInput {
    @Field(() => UserCreateWithoutUserCryptoInput, { nullable: true })
    @Type(() => UserCreateWithoutUserCryptoInput)
    create?: UserCreateWithoutUserCryptoInput;

    @Field(() => UserCreateOrConnectWithoutUserCryptoInput, { nullable: true })
    @Type(() => UserCreateOrConnectWithoutUserCryptoInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserCryptoInput;

    @Field(() => UserUpsertWithoutUserCryptoInput, { nullable: true })
    @Type(() => UserUpsertWithoutUserCryptoInput)
    upsert?: UserUpsertWithoutUserCryptoInput;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, "id" | "email">;

    @Field(() => UserUpdateToOneWithWhereWithoutUserCryptoInput, {
        nullable: true,
    })
    @Type(() => UserUpdateToOneWithWhereWithoutUserCryptoInput)
    update?: UserUpdateToOneWithWhereWithoutUserCryptoInput;
}
