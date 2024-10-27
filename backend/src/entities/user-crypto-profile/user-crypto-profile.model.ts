import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { ID } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { TradingType } from "../prisma/trading-type.enum";
import { AssetBalance } from "../asset-balance/asset-balance.model";
import { HistoricalCryptoBalance } from "../historical-crypto-balance/historical-crypto-balance.model";
import { User } from "../user/user.model";
import { UserCryptoProfileCount } from "./user-crypto-profile-count.output";

@ObjectType()
export class UserCryptoProfile {
    @Field(() => ID, { nullable: false })
    profileId!: string;

    @Field(() => Int, { nullable: false })
    userId!: number;

    @Field(() => String, { nullable: false, defaultValue: "binance" })
    exchanges!: string;

    @Field(() => TradingType, { nullable: false })
    tradingType!: keyof typeof TradingType;

    @Field(() => String, { nullable: false })
    apiKey!: string;

    @Field(() => String, { nullable: false })
    secretKey!: string;

    @Field(() => Date, { nullable: true })
    updateTime!: Date | null;

    @Field(() => [AssetBalance], { nullable: true })
    balances?: Array<AssetBalance>;

    @Field(() => [HistoricalCryptoBalance], { nullable: true })
    historicalBalances?: Array<HistoricalCryptoBalance>;

    @Field(() => User, { nullable: false })
    user?: User;

    @Field(() => UserCryptoProfileCount, { nullable: false })
    _count?: UserCryptoProfileCount;
}
