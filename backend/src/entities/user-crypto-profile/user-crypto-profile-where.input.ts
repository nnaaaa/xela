import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFilter } from "../prisma/string-filter.input";
import { IntFilter } from "../prisma/int-filter.input";
import { EnumTradingTypeFilter } from "../prisma/enum-trading-type-filter.input";
import { DateTimeNullableFilter } from "../prisma/date-time-nullable-filter.input";
import { AssetBalanceListRelationFilter } from "../asset-balance/asset-balance-list-relation-filter.input";
import { HistoricalCryptoBalanceListRelationFilter } from "../historical-crypto-balance/historical-crypto-balance-list-relation-filter.input";
import { UserRelationFilter } from "../user/user-relation-filter.input";

@InputType()
export class UserCryptoProfileWhereInput {
    @Field(() => [UserCryptoProfileWhereInput], { nullable: true })
    AND?: Array<UserCryptoProfileWhereInput>;

    @Field(() => [UserCryptoProfileWhereInput], { nullable: true })
    OR?: Array<UserCryptoProfileWhereInput>;

    @Field(() => [UserCryptoProfileWhereInput], { nullable: true })
    NOT?: Array<UserCryptoProfileWhereInput>;

    @Field(() => StringFilter, { nullable: true })
    profileId?: StringFilter;

    @Field(() => IntFilter, { nullable: true })
    userId?: IntFilter;

    @Field(() => StringFilter, { nullable: true })
    exchanges?: StringFilter;

    @Field(() => EnumTradingTypeFilter, { nullable: true })
    tradingType?: EnumTradingTypeFilter;

    @Field(() => StringFilter, { nullable: true })
    apiKey?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    secretKey?: StringFilter;

    @Field(() => DateTimeNullableFilter, { nullable: true })
    updateTime?: DateTimeNullableFilter;

    @Field(() => AssetBalanceListRelationFilter, { nullable: true })
    balances?: AssetBalanceListRelationFilter;

    @Field(() => HistoricalCryptoBalanceListRelationFilter, { nullable: true })
    historicalBalances?: HistoricalCryptoBalanceListRelationFilter;

    @Field(() => UserRelationFilter, { nullable: true })
    user?: UserRelationFilter;
}
