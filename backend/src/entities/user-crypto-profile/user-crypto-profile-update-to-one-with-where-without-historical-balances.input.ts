import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileWhereInput } from "./user-crypto-profile-where.input";
import { Type } from "class-transformer";
import { UserCryptoProfileUpdateWithoutHistoricalBalancesInput } from "./user-crypto-profile-update-without-historical-balances.input";

@InputType()
export class UserCryptoProfileUpdateToOneWithWhereWithoutHistoricalBalancesInput {
    @Field(() => UserCryptoProfileWhereInput, { nullable: true })
    @Type(() => UserCryptoProfileWhereInput)
    where?: UserCryptoProfileWhereInput;

    @Field(() => UserCryptoProfileUpdateWithoutHistoricalBalancesInput, {
        nullable: false,
    })
    @Type(() => UserCryptoProfileUpdateWithoutHistoricalBalancesInput)
    data!: UserCryptoProfileUpdateWithoutHistoricalBalancesInput;
}
