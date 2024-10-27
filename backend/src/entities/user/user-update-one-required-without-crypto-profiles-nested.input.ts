import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCreateWithoutCryptoProfilesInput } from "./user-create-without-crypto-profiles.input";
import { Type } from "class-transformer";
import { UserCreateOrConnectWithoutCryptoProfilesInput } from "./user-create-or-connect-without-crypto-profiles.input";
import { UserUpsertWithoutCryptoProfilesInput } from "./user-upsert-without-crypto-profiles.input";
import { Prisma } from "@prisma/client";
import { UserWhereUniqueInput } from "./user-where-unique.input";
import { UserUpdateToOneWithWhereWithoutCryptoProfilesInput } from "./user-update-to-one-with-where-without-crypto-profiles.input";

@InputType()
export class UserUpdateOneRequiredWithoutCryptoProfilesNestedInput {
    @Field(() => UserCreateWithoutCryptoProfilesInput, { nullable: true })
    @Type(() => UserCreateWithoutCryptoProfilesInput)
    create?: UserCreateWithoutCryptoProfilesInput;

    @Field(() => UserCreateOrConnectWithoutCryptoProfilesInput, {
        nullable: true,
    })
    @Type(() => UserCreateOrConnectWithoutCryptoProfilesInput)
    connectOrCreate?: UserCreateOrConnectWithoutCryptoProfilesInput;

    @Field(() => UserUpsertWithoutCryptoProfilesInput, { nullable: true })
    @Type(() => UserUpsertWithoutCryptoProfilesInput)
    upsert?: UserUpsertWithoutCryptoProfilesInput;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, "id" | "email">;

    @Field(() => UserUpdateToOneWithWhereWithoutCryptoProfilesInput, {
        nullable: true,
    })
    @Type(() => UserUpdateToOneWithWhereWithoutCryptoProfilesInput)
    update?: UserUpdateToOneWithWhereWithoutCryptoProfilesInput;
}
