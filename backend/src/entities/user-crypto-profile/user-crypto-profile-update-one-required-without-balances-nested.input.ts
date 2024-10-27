import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileCreateWithoutBalancesInput } from "./user-crypto-profile-create-without-balances.input";
import { Type } from "class-transformer";
import { UserCryptoProfileCreateOrConnectWithoutBalancesInput } from "./user-crypto-profile-create-or-connect-without-balances.input";
import { UserCryptoProfileUpsertWithoutBalancesInput } from "./user-crypto-profile-upsert-without-balances.input";
import { Prisma } from "@prisma/client";
import { UserCryptoProfileWhereUniqueInput } from "./user-crypto-profile-where-unique.input";
import { UserCryptoProfileUpdateToOneWithWhereWithoutBalancesInput } from "./user-crypto-profile-update-to-one-with-where-without-balances.input";

@InputType()
export class UserCryptoProfileUpdateOneRequiredWithoutBalancesNestedInput {
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

    @Field(() => UserCryptoProfileUpsertWithoutBalancesInput, {
        nullable: true,
    })
    @Type(() => UserCryptoProfileUpsertWithoutBalancesInput)
    upsert?: UserCryptoProfileUpsertWithoutBalancesInput;

    @Field(() => UserCryptoProfileWhereUniqueInput, { nullable: true })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">;

    @Field(() => UserCryptoProfileUpdateToOneWithWhereWithoutBalancesInput, {
        nullable: true,
    })
    @Type(() => UserCryptoProfileUpdateToOneWithWhereWithoutBalancesInput)
    update?: UserCryptoProfileUpdateToOneWithWhereWithoutBalancesInput;
}
