import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileCreateWithoutHistoricalBalancesInput } from "./user-crypto-profile-create-without-historical-balances.input";
import { Type } from "class-transformer";
import { UserCryptoProfileCreateOrConnectWithoutHistoricalBalancesInput } from "./user-crypto-profile-create-or-connect-without-historical-balances.input";
import { UserCryptoProfileUpsertWithoutHistoricalBalancesInput } from "./user-crypto-profile-upsert-without-historical-balances.input";
import { Prisma } from "@prisma/client";
import { UserCryptoProfileWhereUniqueInput } from "./user-crypto-profile-where-unique.input";
import { UserCryptoProfileUpdateToOneWithWhereWithoutHistoricalBalancesInput } from "./user-crypto-profile-update-to-one-with-where-without-historical-balances.input";

@InputType()
export class UserCryptoProfileUpdateOneRequiredWithoutHistoricalBalancesNestedInput {
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

    @Field(() => UserCryptoProfileUpsertWithoutHistoricalBalancesInput, {
        nullable: true,
    })
    @Type(() => UserCryptoProfileUpsertWithoutHistoricalBalancesInput)
    upsert?: UserCryptoProfileUpsertWithoutHistoricalBalancesInput;

    @Field(() => UserCryptoProfileWhereUniqueInput, { nullable: true })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">;

    @Field(
        () =>
            UserCryptoProfileUpdateToOneWithWhereWithoutHistoricalBalancesInput,
        { nullable: true },
    )
    @Type(
        () =>
            UserCryptoProfileUpdateToOneWithWhereWithoutHistoricalBalancesInput,
    )
    update?: UserCryptoProfileUpdateToOneWithWhereWithoutHistoricalBalancesInput;
}
