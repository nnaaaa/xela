import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileUpdateWithoutHistoricalBalancesInput } from "./user-crypto-profile-update-without-historical-balances.input";
import { Type } from "class-transformer";
import { UserCryptoProfileCreateWithoutHistoricalBalancesInput } from "./user-crypto-profile-create-without-historical-balances.input";
import { UserCryptoProfileWhereInput } from "./user-crypto-profile-where.input";

@InputType()
export class UserCryptoProfileUpsertWithoutHistoricalBalancesInput {
    @Field(() => UserCryptoProfileUpdateWithoutHistoricalBalancesInput, {
        nullable: false,
    })
    @Type(() => UserCryptoProfileUpdateWithoutHistoricalBalancesInput)
    update!: UserCryptoProfileUpdateWithoutHistoricalBalancesInput;

    @Field(() => UserCryptoProfileCreateWithoutHistoricalBalancesInput, {
        nullable: false,
    })
    @Type(() => UserCryptoProfileCreateWithoutHistoricalBalancesInput)
    create!: UserCryptoProfileCreateWithoutHistoricalBalancesInput;

    @Field(() => UserCryptoProfileWhereInput, { nullable: true })
    @Type(() => UserCryptoProfileWhereInput)
    where?: UserCryptoProfileWhereInput;
}
