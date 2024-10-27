import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileCreateWithoutUserInput } from "./user-crypto-profile-create-without-user.input";
import { Type } from "class-transformer";
import { UserCryptoProfileCreateOrConnectWithoutUserInput } from "./user-crypto-profile-create-or-connect-without-user.input";
import { UserCryptoProfileUpsertWithWhereUniqueWithoutUserInput } from "./user-crypto-profile-upsert-with-where-unique-without-user.input";
import { UserCryptoProfileCreateManyUserInputEnvelope } from "./user-crypto-profile-create-many-user-input-envelope.input";
import { Prisma } from "@prisma/client";
import { UserCryptoProfileWhereUniqueInput } from "./user-crypto-profile-where-unique.input";
import { UserCryptoProfileUpdateWithWhereUniqueWithoutUserInput } from "./user-crypto-profile-update-with-where-unique-without-user.input";
import { UserCryptoProfileUpdateManyWithWhereWithoutUserInput } from "./user-crypto-profile-update-many-with-where-without-user.input";
import { UserCryptoProfileScalarWhereInput } from "./user-crypto-profile-scalar-where.input";

@InputType()
export class UserCryptoProfileUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [UserCryptoProfileCreateWithoutUserInput], { nullable: true })
    @Type(() => UserCryptoProfileCreateWithoutUserInput)
    create?: Array<UserCryptoProfileCreateWithoutUserInput>;

    @Field(() => [UserCryptoProfileCreateOrConnectWithoutUserInput], {
        nullable: true,
    })
    @Type(() => UserCryptoProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserCryptoProfileCreateOrConnectWithoutUserInput>;

    @Field(() => [UserCryptoProfileUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true,
    })
    @Type(() => UserCryptoProfileUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserCryptoProfileUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserCryptoProfileCreateManyUserInputEnvelope, {
        nullable: true,
    })
    @Type(() => UserCryptoProfileCreateManyUserInputEnvelope)
    createMany?: UserCryptoProfileCreateManyUserInputEnvelope;

    @Field(() => [UserCryptoProfileWhereUniqueInput], { nullable: true })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">>;

    @Field(() => [UserCryptoProfileWhereUniqueInput], { nullable: true })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    disconnect?: Array<
        Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">
    >;

    @Field(() => [UserCryptoProfileWhereUniqueInput], { nullable: true })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    delete?: Array<
        Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">
    >;

    @Field(() => [UserCryptoProfileWhereUniqueInput], { nullable: true })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    connect?: Array<
        Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">
    >;

    @Field(() => [UserCryptoProfileUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true,
    })
    @Type(() => UserCryptoProfileUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserCryptoProfileUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserCryptoProfileUpdateManyWithWhereWithoutUserInput], {
        nullable: true,
    })
    @Type(() => UserCryptoProfileUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserCryptoProfileUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserCryptoProfileScalarWhereInput], { nullable: true })
    @Type(() => UserCryptoProfileScalarWhereInput)
    deleteMany?: Array<UserCryptoProfileScalarWhereInput>;
}
