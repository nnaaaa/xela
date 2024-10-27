import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileUpdateWithoutBalancesInput } from "./user-crypto-profile-update-without-balances.input";
import { Type } from "class-transformer";
import { UserCryptoProfileCreateWithoutBalancesInput } from "./user-crypto-profile-create-without-balances.input";
import { UserCryptoProfileWhereInput } from "./user-crypto-profile-where.input";

@InputType()
export class UserCryptoProfileUpsertWithoutBalancesInput {
    @Field(() => UserCryptoProfileUpdateWithoutBalancesInput, {
        nullable: false,
    })
    @Type(() => UserCryptoProfileUpdateWithoutBalancesInput)
    update!: UserCryptoProfileUpdateWithoutBalancesInput;

    @Field(() => UserCryptoProfileCreateWithoutBalancesInput, {
        nullable: false,
    })
    @Type(() => UserCryptoProfileCreateWithoutBalancesInput)
    create!: UserCryptoProfileCreateWithoutBalancesInput;

    @Field(() => UserCryptoProfileWhereInput, { nullable: true })
    @Type(() => UserCryptoProfileWhereInput)
    where?: UserCryptoProfileWhereInput;
}
