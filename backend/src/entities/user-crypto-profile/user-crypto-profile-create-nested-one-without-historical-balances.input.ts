import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileCreateWithoutHistoricalBalancesInput } from "./user-crypto-profile-create-without-historical-balances.input";
import { Type } from "class-transformer";
import { UserCryptoProfileCreateOrConnectWithoutHistoricalBalancesInput } from "./user-crypto-profile-create-or-connect-without-historical-balances.input";
import { Prisma } from "@prisma/client";
import { UserCryptoProfileWhereUniqueInput } from "./user-crypto-profile-where-unique.input";

@InputType()
export class UserCryptoProfileCreateNestedOneWithoutHistoricalBalancesInput {
    @Field(() => UserCryptoProfileCreateWithoutHistoricalBalancesInput, {
        nullable: true,
    })
    @Type(() => UserCryptoProfileCreateWithoutHistoricalBalancesInput)
    create?: UserCryptoProfileCreateWithoutHistoricalBalancesInput;

    @Field(
        () => UserCryptoProfileCreateOrConnectWithoutHistoricalBalancesInput,
        { nullable: true },
    )
    @Type(() => UserCryptoProfileCreateOrConnectWithoutHistoricalBalancesInput)
    connectOrCreate?: UserCryptoProfileCreateOrConnectWithoutHistoricalBalancesInput;

    @Field(() => UserCryptoProfileWhereUniqueInput, { nullable: true })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">;
}
