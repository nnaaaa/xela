import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { UserCryptoProfileWhereUniqueInput } from "./user-crypto-profile-where-unique.input";
import { Type } from "class-transformer";
import { UserCryptoProfileCreateWithoutHistoricalBalancesInput } from "./user-crypto-profile-create-without-historical-balances.input";

@InputType()
export class UserCryptoProfileCreateOrConnectWithoutHistoricalBalancesInput {
    @Field(() => UserCryptoProfileWhereUniqueInput, { nullable: false })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    where!: Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">;

    @Field(() => UserCryptoProfileCreateWithoutHistoricalBalancesInput, {
        nullable: false,
    })
    @Type(() => UserCryptoProfileCreateWithoutHistoricalBalancesInput)
    create!: UserCryptoProfileCreateWithoutHistoricalBalancesInput;
}
