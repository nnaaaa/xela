import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileWhereInput } from "./user-crypto-profile-where.input";
import { Type } from "class-transformer";
import { UserCryptoProfileUpdateWithoutBalancesInput } from "./user-crypto-profile-update-without-balances.input";

@InputType()
export class UserCryptoProfileUpdateToOneWithWhereWithoutBalancesInput {
    @Field(() => UserCryptoProfileWhereInput, { nullable: true })
    @Type(() => UserCryptoProfileWhereInput)
    where?: UserCryptoProfileWhereInput;

    @Field(() => UserCryptoProfileUpdateWithoutBalancesInput, {
        nullable: false,
    })
    @Type(() => UserCryptoProfileUpdateWithoutBalancesInput)
    data!: UserCryptoProfileUpdateWithoutBalancesInput;
}
