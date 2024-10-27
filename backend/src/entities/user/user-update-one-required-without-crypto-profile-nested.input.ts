import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCreateWithoutCryptoProfileInput } from "./user-create-without-crypto-profile.input";
import { Type } from "class-transformer";
import { UserCreateOrConnectWithoutCryptoProfileInput } from "./user-create-or-connect-without-crypto-profile.input";
import { UserUpsertWithoutCryptoProfileInput } from "./user-upsert-without-crypto-profile.input";
import { Prisma } from "@prisma/client";
import { UserWhereUniqueInput } from "./user-where-unique.input";
import { UserUpdateToOneWithWhereWithoutCryptoProfileInput } from "./user-update-to-one-with-where-without-crypto-profile.input";

@InputType()
export class UserUpdateOneRequiredWithoutCryptoProfileNestedInput {
    @Field(() => UserCreateWithoutCryptoProfileInput, { nullable: true })
    @Type(() => UserCreateWithoutCryptoProfileInput)
    create?: UserCreateWithoutCryptoProfileInput;

    @Field(() => UserCreateOrConnectWithoutCryptoProfileInput, {
        nullable: true,
    })
    @Type(() => UserCreateOrConnectWithoutCryptoProfileInput)
    connectOrCreate?: UserCreateOrConnectWithoutCryptoProfileInput;

    @Field(() => UserUpsertWithoutCryptoProfileInput, { nullable: true })
    @Type(() => UserUpsertWithoutCryptoProfileInput)
    upsert?: UserUpsertWithoutCryptoProfileInput;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, "id" | "email">;

    @Field(() => UserUpdateToOneWithWhereWithoutCryptoProfileInput, {
        nullable: true,
    })
    @Type(() => UserUpdateToOneWithWhereWithoutCryptoProfileInput)
    update?: UserUpdateToOneWithWhereWithoutCryptoProfileInput;
}
