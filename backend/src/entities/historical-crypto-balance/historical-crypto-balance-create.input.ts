import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";
import { UserCryptoProfileCreateNestedOneWithoutHistoricalBalancesInput } from "../user-crypto-profile/user-crypto-profile-create-nested-one-without-historical-balances.input";

@InputType()
export class HistoricalCryptoBalanceCreateInput {
    @Field(() => Date, { nullable: false })
    time!: Date | string;

    @Field(() => Float, { nullable: false })
    estimatedBalance!: number;

    @Field(() => Float, { nullable: false })
    changePercent!: number;

    @Field(() => Float, { nullable: false })
    changeBalance!: number;

    @Field(
        () => UserCryptoProfileCreateNestedOneWithoutHistoricalBalancesInput,
        { nullable: false },
    )
    cryptoProfile!: UserCryptoProfileCreateNestedOneWithoutHistoricalBalancesInput;
}
