import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { TradingType } from "../prisma/trading-type.enum";
import { HistoricalCryptoBalanceCreateNestedManyWithoutCryptoProfileInput } from "../historical-crypto-balance/historical-crypto-balance-create-nested-many-without-crypto-profile.input";
import { UserCreateNestedOneWithoutCryptoProfilesInput } from "../user/user-create-nested-one-without-crypto-profiles.input";

@InputType()
export class UserCryptoProfileCreateWithoutBalancesInput {
    @Field(() => String, { nullable: true })
    profileId?: string;

    @Field(() => String, { nullable: true })
    exchanges?: string;

    @Field(() => TradingType, { nullable: false })
    tradingType!: keyof typeof TradingType;

    @Field(() => String, { nullable: false })
    apiKey!: string;

    @Field(() => String, { nullable: false })
    secretKey!: string;

    @Field(() => Date, { nullable: true })
    updateTime?: Date | string;

    @Field(
        () => HistoricalCryptoBalanceCreateNestedManyWithoutCryptoProfileInput,
        { nullable: true },
    )
    historicalBalances?: HistoricalCryptoBalanceCreateNestedManyWithoutCryptoProfileInput;

    @Field(() => UserCreateNestedOneWithoutCryptoProfilesInput, {
        nullable: false,
    })
    user!: UserCreateNestedOneWithoutCryptoProfilesInput;
}
