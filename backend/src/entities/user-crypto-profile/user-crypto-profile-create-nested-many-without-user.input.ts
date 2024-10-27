import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileCreateWithoutUserInput } from "./user-crypto-profile-create-without-user.input";
import { Type } from "class-transformer";
import { UserCryptoProfileCreateOrConnectWithoutUserInput } from "./user-crypto-profile-create-or-connect-without-user.input";
import { UserCryptoProfileCreateManyUserInputEnvelope } from "./user-crypto-profile-create-many-user-input-envelope.input";
import { Prisma } from "@prisma/client";
import { UserCryptoProfileWhereUniqueInput } from "./user-crypto-profile-where-unique.input";

@InputType()
export class UserCryptoProfileCreateNestedManyWithoutUserInput {
    @Field(() => [UserCryptoProfileCreateWithoutUserInput], { nullable: true })
    @Type(() => UserCryptoProfileCreateWithoutUserInput)
    create?: Array<UserCryptoProfileCreateWithoutUserInput>;

    @Field(() => [UserCryptoProfileCreateOrConnectWithoutUserInput], {
        nullable: true,
    })
    @Type(() => UserCryptoProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserCryptoProfileCreateOrConnectWithoutUserInput>;

    @Field(() => UserCryptoProfileCreateManyUserInputEnvelope, {
        nullable: true,
    })
    @Type(() => UserCryptoProfileCreateManyUserInputEnvelope)
    createMany?: UserCryptoProfileCreateManyUserInputEnvelope;

    @Field(() => [UserCryptoProfileWhereUniqueInput], { nullable: true })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    connect?: Array<
        Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">
    >;
}
