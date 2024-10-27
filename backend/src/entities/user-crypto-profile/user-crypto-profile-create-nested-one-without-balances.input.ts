import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileCreateWithoutBalancesInput } from "./user-crypto-profile-create-without-balances.input";
import { Type } from "class-transformer";
import { UserCryptoProfileCreateOrConnectWithoutBalancesInput } from "./user-crypto-profile-create-or-connect-without-balances.input";
import { Prisma } from "@prisma/client";
import { UserCryptoProfileWhereUniqueInput } from "./user-crypto-profile-where-unique.input";

@InputType()
export class UserCryptoProfileCreateNestedOneWithoutBalancesInput {
    @Field(() => UserCryptoProfileCreateWithoutBalancesInput, {
        nullable: true,
    })
    @Type(() => UserCryptoProfileCreateWithoutBalancesInput)
    create?: UserCryptoProfileCreateWithoutBalancesInput;

    @Field(() => UserCryptoProfileCreateOrConnectWithoutBalancesInput, {
        nullable: true,
    })
    @Type(() => UserCryptoProfileCreateOrConnectWithoutBalancesInput)
    connectOrCreate?: UserCryptoProfileCreateOrConnectWithoutBalancesInput;

    @Field(() => UserCryptoProfileWhereUniqueInput, { nullable: true })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">;
}
