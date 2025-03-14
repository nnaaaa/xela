import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PortfolioStatus } from '../prisma/portfolio-status.enum';
import { CEXExchanges } from '../prisma/cex-exchanges.enum';
import { TradingType } from '../prisma/trading-type.enum';
import { AssetBalance } from '../asset-balance/asset-balance.model';
import { User } from '../user/user.model';
import { HistoricalAssetProfit } from '../historical-asset-profit/historical-asset-profit.model';
import { HistoricalCryptoBalance } from '../historical-crypto-balance/historical-crypto-balance.model';
import { Trade } from '../trade/trade.model';

@ObjectType()
export class CryptoPortfolio {

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {defaultValue:'',nullable:false})
    name!: string;

    @Field(() => PortfolioStatus, {defaultValue:'ACTIVE',nullable:false})
    status!: `${PortfolioStatus}`;

    @Field(() => CEXExchanges, {defaultValue:'BINANCE',nullable:false})
    exchanges!: `${CEXExchanges}`;

    @Field(() => TradingType, {nullable:false})
    tradingType!: `${TradingType}`;

    @Field(() => String, {nullable:false})
    apiKey!: string;

    @Field(() => String, {nullable:false})
    secretKey!: string;

    @Field(() => Date, {nullable:true})
    updateTime!: Date | null;

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    investmentCategoryName!: string | null;

    @Field(() => String, {nullable:true})
    parentPortfolioId!: string | null;

    @Field(() => [AssetBalance], {nullable:true})
    balances?: Array<AssetBalance>;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [HistoricalAssetProfit], {nullable:true})
    historicalAssetProfits?: Array<HistoricalAssetProfit>;

    @Field(() => [HistoricalCryptoBalance], {nullable:true})
    historicalBalances?: Array<HistoricalCryptoBalance>;

    @Field(() => [Trade], {nullable:true})
    trades?: Array<Trade>;

    @Field(() => CryptoPortfolio, {nullable:true})
    parentPortfolio?: CryptoPortfolio | null;

    @Field(() => [CryptoPortfolio], {nullable:true})
    childPortfolios?: Array<CryptoPortfolio>;
}
