import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { UserCryptoProfileWhereUniqueInput } from "./user-crypto-profile-where-unique.input";
import { Type } from "class-transformer";
import { UserCryptoProfileCreateWithoutBalancesInput } from "./user-crypto-profile-create-without-balances.input";

@InputType()
export class UserCryptoProfileCreateOrConnectWithoutBalancesInput {
    @Field(() => UserCryptoProfileWhereUniqueInput, { nullable: false })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    where!: Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">;

    @Field(() => UserCryptoProfileCreateWithoutBalancesInput, {
        nullable: false,
    })
    @Type(() => UserCryptoProfileCreateWithoutBalancesInput)
    create!: UserCryptoProfileCreateWithoutBalancesInput;
}
