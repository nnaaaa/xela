import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { TradingType } from "../prisma/trading-type.enum";
import { AssetBalanceUncheckedCreateNestedManyWithoutCryptoProfileInput } from "../asset-balance/asset-balance-unchecked-create-nested-many-without-crypto-profile.input";
import { HistoricalCryptoBalanceUncheckedCreateNestedManyWithoutCryptoProfileInput } from "../historical-crypto-balance/historical-crypto-balance-unchecked-create-nested-many-without-crypto-profile.input";

@InputType()
export class UserCryptoProfileUncheckedCreateWithoutUserInput {
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
        () => AssetBalanceUncheckedCreateNestedManyWithoutCryptoProfileInput,
        { nullable: true },
    )
    balances?: AssetBalanceUncheckedCreateNestedManyWithoutCryptoProfileInput;

    @Field(
        () =>
            HistoricalCryptoBalanceUncheckedCreateNestedManyWithoutCryptoProfileInput,
        { nullable: true },
    )
    historicalBalances?: HistoricalCryptoBalanceUncheckedCreateNestedManyWithoutCryptoProfileInput;
}
