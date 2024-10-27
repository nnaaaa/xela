
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum OtpPurpose {
    VERIFY_ACCOUNT = "VERIFY_ACCOUNT",
    RESET_PASSWORD = "RESET_PASSWORD"
}

export enum TradingType {
    FUTURES = "FUTURES",
    SPOT = "SPOT"
}

export enum QueryMode {
    "default" = "default",
    insensitive = "insensitive"
}

export interface GetCryptoProfileInput {
    userId: number;
}

export interface GetAssetInfoInput {
    id: string;
}

export interface GetAssetPriceInput {
    assetInfoId: string;
    timeFrame: string;
}

export interface CreateCryptoProfileInput {
    userId: number;
    apiKey: string;
    secretKey: string;
}

export interface LoginReqDto {
    email: string;
    password: string;
}

export interface UserCreateInput {
    email: string;
    name?: Nullable<string>;
    password: string;
    otp?: Nullable<string>;
    otpPurpose?: Nullable<OtpPurpose>;
    cryptoProfiles?: Nullable<UserCryptoProfileCreateNestedManyWithoutUserInput>;
}

export interface UserCryptoProfileCreateNestedManyWithoutUserInput {
    create?: Nullable<UserCryptoProfileCreateWithoutUserInput[]>;
    connectOrCreate?: Nullable<UserCryptoProfileCreateOrConnectWithoutUserInput[]>;
    createMany?: Nullable<UserCryptoProfileCreateManyUserInputEnvelope>;
    connect?: Nullable<UserCryptoProfileWhereUniqueInput[]>;
}

export interface UserCryptoProfileCreateWithoutUserInput {
    profileId?: Nullable<string>;
    exchanges?: Nullable<string>;
    tradingType: TradingType;
    apiKey: string;
    secretKey: string;
    updateTime?: Nullable<DateTime>;
    balances?: Nullable<AssetBalanceCreateNestedManyWithoutCryptoProfileInput>;
    historicalBalances?: Nullable<HistoricalCryptoBalanceCreateNestedManyWithoutCryptoProfileInput>;
}

export interface AssetBalanceCreateNestedManyWithoutCryptoProfileInput {
    create?: Nullable<AssetBalanceCreateWithoutCryptoProfileInput[]>;
    connectOrCreate?: Nullable<AssetBalanceCreateOrConnectWithoutCryptoProfileInput[]>;
    createMany?: Nullable<AssetBalanceCreateManyCryptoProfileInputEnvelope>;
    connect?: Nullable<AssetBalanceWhereUniqueInput[]>;
}

export interface AssetBalanceCreateWithoutCryptoProfileInput {
    id?: Nullable<string>;
    balance: number;
    locked: number;
    assetInfo: AssetInfoCreateNestedOneWithoutAssetBalancesInput;
}

export interface AssetInfoCreateNestedOneWithoutAssetBalancesInput {
    create?: Nullable<AssetInfoCreateWithoutAssetBalancesInput>;
    connectOrCreate?: Nullable<AssetInfoCreateOrConnectWithoutAssetBalancesInput>;
    connect?: Nullable<AssetInfoWhereUniqueInput>;
}

export interface AssetInfoCreateWithoutAssetBalancesInput {
    id?: Nullable<string>;
    name: string;
    symbol: string;
    category: string;
    desc: string;
    logo: string;
    assetPrices?: Nullable<AssetPriceCreateNestedManyWithoutAssetInfoInput>;
}

export interface AssetPriceCreateNestedManyWithoutAssetInfoInput {
    create?: Nullable<AssetPriceCreateWithoutAssetInfoInput[]>;
    connectOrCreate?: Nullable<AssetPriceCreateOrConnectWithoutAssetInfoInput[]>;
    createMany?: Nullable<AssetPriceCreateManyAssetInfoInputEnvelope>;
    connect?: Nullable<AssetPriceWhereUniqueInput[]>;
}

export interface AssetPriceCreateWithoutAssetInfoInput {
    interval: string;
    open_time: DateTime;
    close_time: DateTime;
    openPrice: number;
    closePrice: number;
    highPrice: number;
    lowPrice: number;
    volume: number;
}

export interface AssetPriceCreateOrConnectWithoutAssetInfoInput {
    where: AssetPriceWhereUniqueInput;
    create: AssetPriceCreateWithoutAssetInfoInput;
}

export interface AssetPriceWhereUniqueInput {
    assetInfoId_open_time?: Nullable<AssetPriceAssetInfoIdOpen_timeCompoundUniqueInput>;
    AND?: Nullable<AssetPriceWhereInput[]>;
    OR?: Nullable<AssetPriceWhereInput[]>;
    NOT?: Nullable<AssetPriceWhereInput[]>;
    assetInfoId?: Nullable<StringFilter>;
    interval?: Nullable<StringFilter>;
    open_time?: Nullable<DateTimeFilter>;
    close_time?: Nullable<DateTimeFilter>;
    openPrice?: Nullable<FloatFilter>;
    closePrice?: Nullable<FloatFilter>;
    highPrice?: Nullable<FloatFilter>;
    lowPrice?: Nullable<FloatFilter>;
    volume?: Nullable<FloatFilter>;
    assetInfo?: Nullable<AssetInfoRelationFilter>;
}

export interface AssetPriceAssetInfoIdOpen_timeCompoundUniqueInput {
    assetInfoId: string;
    open_time: DateTime;
}

export interface AssetPriceWhereInput {
    AND?: Nullable<AssetPriceWhereInput[]>;
    OR?: Nullable<AssetPriceWhereInput[]>;
    NOT?: Nullable<AssetPriceWhereInput[]>;
    assetInfoId?: Nullable<StringFilter>;
    interval?: Nullable<StringFilter>;
    open_time?: Nullable<DateTimeFilter>;
    close_time?: Nullable<DateTimeFilter>;
    openPrice?: Nullable<FloatFilter>;
    closePrice?: Nullable<FloatFilter>;
    highPrice?: Nullable<FloatFilter>;
    lowPrice?: Nullable<FloatFilter>;
    volume?: Nullable<FloatFilter>;
    assetInfo?: Nullable<AssetInfoRelationFilter>;
}

export interface StringFilter {
    equals?: Nullable<string>;
    in?: Nullable<string[]>;
    notIn?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    contains?: Nullable<string>;
    startsWith?: Nullable<string>;
    endsWith?: Nullable<string>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<NestedStringFilter>;
}

export interface NestedStringFilter {
    equals?: Nullable<string>;
    in?: Nullable<string[]>;
    notIn?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    contains?: Nullable<string>;
    startsWith?: Nullable<string>;
    endsWith?: Nullable<string>;
    not?: Nullable<NestedStringFilter>;
}

export interface DateTimeFilter {
    equals?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    notIn?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeFilter>;
}

export interface NestedDateTimeFilter {
    equals?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    notIn?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeFilter>;
}

export interface FloatFilter {
    equals?: Nullable<number>;
    in?: Nullable<number[]>;
    notIn?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    not?: Nullable<NestedFloatFilter>;
}

export interface NestedFloatFilter {
    equals?: Nullable<number>;
    in?: Nullable<number[]>;
    notIn?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    not?: Nullable<NestedFloatFilter>;
}

export interface AssetInfoRelationFilter {
    is?: Nullable<AssetInfoWhereInput>;
    isNot?: Nullable<AssetInfoWhereInput>;
}

export interface AssetInfoWhereInput {
    AND?: Nullable<AssetInfoWhereInput[]>;
    OR?: Nullable<AssetInfoWhereInput[]>;
    NOT?: Nullable<AssetInfoWhereInput[]>;
    id?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    symbol?: Nullable<StringFilter>;
    category?: Nullable<StringFilter>;
    desc?: Nullable<StringFilter>;
    logo?: Nullable<StringFilter>;
    assetBalances?: Nullable<AssetBalanceListRelationFilter>;
    assetPrices?: Nullable<AssetPriceListRelationFilter>;
}

export interface AssetBalanceListRelationFilter {
    every?: Nullable<AssetBalanceWhereInput>;
    some?: Nullable<AssetBalanceWhereInput>;
    none?: Nullable<AssetBalanceWhereInput>;
}

export interface AssetBalanceWhereInput {
    AND?: Nullable<AssetBalanceWhereInput[]>;
    OR?: Nullable<AssetBalanceWhereInput[]>;
    NOT?: Nullable<AssetBalanceWhereInput[]>;
    id?: Nullable<StringFilter>;
    cryptoProfileId?: Nullable<StringFilter>;
    assetInfoId?: Nullable<StringFilter>;
    balance?: Nullable<FloatFilter>;
    locked?: Nullable<FloatFilter>;
    assetInfo?: Nullable<AssetInfoRelationFilter>;
    cryptoProfile?: Nullable<UserCryptoProfileRelationFilter>;
}

export interface UserCryptoProfileRelationFilter {
    is?: Nullable<UserCryptoProfileWhereInput>;
    isNot?: Nullable<UserCryptoProfileWhereInput>;
}

export interface UserCryptoProfileWhereInput {
    AND?: Nullable<UserCryptoProfileWhereInput[]>;
    OR?: Nullable<UserCryptoProfileWhereInput[]>;
    NOT?: Nullable<UserCryptoProfileWhereInput[]>;
    profileId?: Nullable<StringFilter>;
    userId?: Nullable<IntFilter>;
    exchanges?: Nullable<StringFilter>;
    tradingType?: Nullable<EnumTradingTypeFilter>;
    apiKey?: Nullable<StringFilter>;
    secretKey?: Nullable<StringFilter>;
    updateTime?: Nullable<DateTimeNullableFilter>;
    balances?: Nullable<AssetBalanceListRelationFilter>;
    historicalBalances?: Nullable<HistoricalCryptoBalanceListRelationFilter>;
    user?: Nullable<UserRelationFilter>;
}

export interface IntFilter {
    equals?: Nullable<number>;
    in?: Nullable<number[]>;
    notIn?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    not?: Nullable<NestedIntFilter>;
}

export interface NestedIntFilter {
    equals?: Nullable<number>;
    in?: Nullable<number[]>;
    notIn?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    not?: Nullable<NestedIntFilter>;
}

export interface EnumTradingTypeFilter {
    equals?: Nullable<TradingType>;
    in?: Nullable<TradingType[]>;
    notIn?: Nullable<TradingType[]>;
    not?: Nullable<NestedEnumTradingTypeFilter>;
}

export interface NestedEnumTradingTypeFilter {
    equals?: Nullable<TradingType>;
    in?: Nullable<TradingType[]>;
    notIn?: Nullable<TradingType[]>;
    not?: Nullable<NestedEnumTradingTypeFilter>;
}

export interface DateTimeNullableFilter {
    equals?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    notIn?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeNullableFilter>;
}

export interface NestedDateTimeNullableFilter {
    equals?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    notIn?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeNullableFilter>;
}

export interface HistoricalCryptoBalanceListRelationFilter {
    every?: Nullable<HistoricalCryptoBalanceWhereInput>;
    some?: Nullable<HistoricalCryptoBalanceWhereInput>;
    none?: Nullable<HistoricalCryptoBalanceWhereInput>;
}

export interface HistoricalCryptoBalanceWhereInput {
    AND?: Nullable<HistoricalCryptoBalanceWhereInput[]>;
    OR?: Nullable<HistoricalCryptoBalanceWhereInput[]>;
    NOT?: Nullable<HistoricalCryptoBalanceWhereInput[]>;
    cryptoProfileId?: Nullable<StringFilter>;
    time?: Nullable<DateTimeFilter>;
    estimatedBalance?: Nullable<FloatFilter>;
    changePercent?: Nullable<FloatFilter>;
    changeBalance?: Nullable<FloatFilter>;
    cryptoProfile?: Nullable<UserCryptoProfileRelationFilter>;
}

export interface UserRelationFilter {
    is?: Nullable<UserWhereInput>;
    isNot?: Nullable<UserWhereInput>;
}

export interface UserWhereInput {
    AND?: Nullable<UserWhereInput[]>;
    OR?: Nullable<UserWhereInput[]>;
    NOT?: Nullable<UserWhereInput[]>;
    id?: Nullable<IntFilter>;
    email?: Nullable<StringFilter>;
    name?: Nullable<StringNullableFilter>;
    password?: Nullable<StringFilter>;
    otp?: Nullable<StringNullableFilter>;
    otpPurpose?: Nullable<EnumOtpPurposeNullableFilter>;
    cryptoProfiles?: Nullable<UserCryptoProfileListRelationFilter>;
}

export interface StringNullableFilter {
    equals?: Nullable<string>;
    in?: Nullable<string[]>;
    notIn?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    contains?: Nullable<string>;
    startsWith?: Nullable<string>;
    endsWith?: Nullable<string>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<NestedStringNullableFilter>;
}

export interface NestedStringNullableFilter {
    equals?: Nullable<string>;
    in?: Nullable<string[]>;
    notIn?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    contains?: Nullable<string>;
    startsWith?: Nullable<string>;
    endsWith?: Nullable<string>;
    not?: Nullable<NestedStringNullableFilter>;
}

export interface EnumOtpPurposeNullableFilter {
    equals?: Nullable<OtpPurpose>;
    in?: Nullable<OtpPurpose[]>;
    notIn?: Nullable<OtpPurpose[]>;
    not?: Nullable<NestedEnumOtpPurposeNullableFilter>;
}

export interface NestedEnumOtpPurposeNullableFilter {
    equals?: Nullable<OtpPurpose>;
    in?: Nullable<OtpPurpose[]>;
    notIn?: Nullable<OtpPurpose[]>;
    not?: Nullable<NestedEnumOtpPurposeNullableFilter>;
}

export interface UserCryptoProfileListRelationFilter {
    every?: Nullable<UserCryptoProfileWhereInput>;
    some?: Nullable<UserCryptoProfileWhereInput>;
    none?: Nullable<UserCryptoProfileWhereInput>;
}

export interface AssetPriceListRelationFilter {
    every?: Nullable<AssetPriceWhereInput>;
    some?: Nullable<AssetPriceWhereInput>;
    none?: Nullable<AssetPriceWhereInput>;
}

export interface AssetPriceCreateManyAssetInfoInputEnvelope {
    data: AssetPriceCreateManyAssetInfoInput[];
    skipDuplicates?: Nullable<boolean>;
}

export interface AssetPriceCreateManyAssetInfoInput {
    interval: string;
    open_time: DateTime;
    close_time: DateTime;
    openPrice: number;
    closePrice: number;
    highPrice: number;
    lowPrice: number;
    volume: number;
}

export interface AssetInfoCreateOrConnectWithoutAssetBalancesInput {
    where: AssetInfoWhereUniqueInput;
    create: AssetInfoCreateWithoutAssetBalancesInput;
}

export interface AssetInfoWhereUniqueInput {
    id?: Nullable<string>;
    AND?: Nullable<AssetInfoWhereInput[]>;
    OR?: Nullable<AssetInfoWhereInput[]>;
    NOT?: Nullable<AssetInfoWhereInput[]>;
    name?: Nullable<StringFilter>;
    symbol?: Nullable<StringFilter>;
    category?: Nullable<StringFilter>;
    desc?: Nullable<StringFilter>;
    logo?: Nullable<StringFilter>;
    assetBalances?: Nullable<AssetBalanceListRelationFilter>;
    assetPrices?: Nullable<AssetPriceListRelationFilter>;
}

export interface AssetBalanceCreateOrConnectWithoutCryptoProfileInput {
    where: AssetBalanceWhereUniqueInput;
    create: AssetBalanceCreateWithoutCryptoProfileInput;
}

export interface AssetBalanceWhereUniqueInput {
    id?: Nullable<string>;
    AND?: Nullable<AssetBalanceWhereInput[]>;
    OR?: Nullable<AssetBalanceWhereInput[]>;
    NOT?: Nullable<AssetBalanceWhereInput[]>;
    cryptoProfileId?: Nullable<StringFilter>;
    assetInfoId?: Nullable<StringFilter>;
    balance?: Nullable<FloatFilter>;
    locked?: Nullable<FloatFilter>;
    assetInfo?: Nullable<AssetInfoRelationFilter>;
    cryptoProfile?: Nullable<UserCryptoProfileRelationFilter>;
}

export interface AssetBalanceCreateManyCryptoProfileInputEnvelope {
    data: AssetBalanceCreateManyCryptoProfileInput[];
    skipDuplicates?: Nullable<boolean>;
}

export interface AssetBalanceCreateManyCryptoProfileInput {
    id?: Nullable<string>;
    assetInfoId: string;
    balance: number;
    locked: number;
}

export interface HistoricalCryptoBalanceCreateNestedManyWithoutCryptoProfileInput {
    create?: Nullable<HistoricalCryptoBalanceCreateWithoutCryptoProfileInput[]>;
    connectOrCreate?: Nullable<HistoricalCryptoBalanceCreateOrConnectWithoutCryptoProfileInput[]>;
    createMany?: Nullable<HistoricalCryptoBalanceCreateManyCryptoProfileInputEnvelope>;
    connect?: Nullable<HistoricalCryptoBalanceWhereUniqueInput[]>;
}

export interface HistoricalCryptoBalanceCreateWithoutCryptoProfileInput {
    time: DateTime;
    estimatedBalance: number;
    changePercent: number;
    changeBalance: number;
}

export interface HistoricalCryptoBalanceCreateOrConnectWithoutCryptoProfileInput {
    where: HistoricalCryptoBalanceWhereUniqueInput;
    create: HistoricalCryptoBalanceCreateWithoutCryptoProfileInput;
}

export interface HistoricalCryptoBalanceWhereUniqueInput {
    cryptoProfileId_time?: Nullable<HistoricalCryptoBalanceCryptoProfileIdTimeCompoundUniqueInput>;
    AND?: Nullable<HistoricalCryptoBalanceWhereInput[]>;
    OR?: Nullable<HistoricalCryptoBalanceWhereInput[]>;
    NOT?: Nullable<HistoricalCryptoBalanceWhereInput[]>;
    cryptoProfileId?: Nullable<StringFilter>;
    time?: Nullable<DateTimeFilter>;
    estimatedBalance?: Nullable<FloatFilter>;
    changePercent?: Nullable<FloatFilter>;
    changeBalance?: Nullable<FloatFilter>;
    cryptoProfile?: Nullable<UserCryptoProfileRelationFilter>;
}

export interface HistoricalCryptoBalanceCryptoProfileIdTimeCompoundUniqueInput {
    cryptoProfileId: string;
    time: DateTime;
}

export interface HistoricalCryptoBalanceCreateManyCryptoProfileInputEnvelope {
    data: HistoricalCryptoBalanceCreateManyCryptoProfileInput[];
    skipDuplicates?: Nullable<boolean>;
}

export interface HistoricalCryptoBalanceCreateManyCryptoProfileInput {
    time: DateTime;
    estimatedBalance: number;
    changePercent: number;
    changeBalance: number;
}

export interface UserCryptoProfileCreateOrConnectWithoutUserInput {
    where: UserCryptoProfileWhereUniqueInput;
    create: UserCryptoProfileCreateWithoutUserInput;
}

export interface UserCryptoProfileWhereUniqueInput {
    profileId?: Nullable<string>;
    AND?: Nullable<UserCryptoProfileWhereInput[]>;
    OR?: Nullable<UserCryptoProfileWhereInput[]>;
    NOT?: Nullable<UserCryptoProfileWhereInput[]>;
    userId?: Nullable<IntFilter>;
    exchanges?: Nullable<StringFilter>;
    tradingType?: Nullable<EnumTradingTypeFilter>;
    apiKey?: Nullable<StringFilter>;
    secretKey?: Nullable<StringFilter>;
    updateTime?: Nullable<DateTimeNullableFilter>;
    balances?: Nullable<AssetBalanceListRelationFilter>;
    historicalBalances?: Nullable<HistoricalCryptoBalanceListRelationFilter>;
    user?: Nullable<UserRelationFilter>;
}

export interface UserCryptoProfileCreateManyUserInputEnvelope {
    data: UserCryptoProfileCreateManyUserInput[];
    skipDuplicates?: Nullable<boolean>;
}

export interface UserCryptoProfileCreateManyUserInput {
    profileId?: Nullable<string>;
    exchanges?: Nullable<string>;
    tradingType: TradingType;
    apiKey: string;
    secretKey: string;
    updateTime?: Nullable<DateTime>;
}

export interface VerifyDto {
    otp: string;
    otpPurpose: OtpPurpose;
}

export interface Asset_price_1dCountAggregate {
    open_time: number;
    assetInfoId: number;
    openPrice: number;
    closePrice: number;
    highPrice: number;
    lowPrice: number;
    volume: number;
    _all: number;
}

export interface Asset_price_1dAvgAggregate {
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface Asset_price_1dSumAggregate {
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface Asset_price_1dMinAggregate {
    open_time?: Nullable<DateTime>;
    assetInfoId?: Nullable<string>;
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface Asset_price_1dMaxAggregate {
    open_time?: Nullable<DateTime>;
    assetInfoId?: Nullable<string>;
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface Asset_price_1hCountAggregate {
    open_time: number;
    assetInfoId: number;
    openPrice: number;
    closePrice: number;
    highPrice: number;
    lowPrice: number;
    volume: number;
    _all: number;
}

export interface Asset_price_1hAvgAggregate {
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface Asset_price_1hSumAggregate {
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface Asset_price_1hMinAggregate {
    open_time?: Nullable<DateTime>;
    assetInfoId?: Nullable<string>;
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface Asset_price_1hMaxAggregate {
    open_time?: Nullable<DateTime>;
    assetInfoId?: Nullable<string>;
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface Asset_price_1MCountAggregate {
    open_time: number;
    assetInfoId: number;
    openPrice: number;
    closePrice: number;
    highPrice: number;
    lowPrice: number;
    volume: number;
    _all: number;
}

export interface Asset_price_1MAvgAggregate {
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface Asset_price_1MSumAggregate {
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface Asset_price_1MMinAggregate {
    open_time?: Nullable<DateTime>;
    assetInfoId?: Nullable<string>;
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface Asset_price_1MMaxAggregate {
    open_time?: Nullable<DateTime>;
    assetInfoId?: Nullable<string>;
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface Asset_price_5mCountAggregate {
    open_time: number;
    assetInfoId: number;
    openPrice: number;
    closePrice: number;
    highPrice: number;
    lowPrice: number;
    volume: number;
    _all: number;
}

export interface Asset_price_5mAvgAggregate {
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface Asset_price_5mSumAggregate {
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface Asset_price_5mMinAggregate {
    open_time?: Nullable<DateTime>;
    assetInfoId?: Nullable<string>;
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface Asset_price_5mMaxAggregate {
    open_time?: Nullable<DateTime>;
    assetInfoId?: Nullable<string>;
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface UserCountAggregate {
    id: number;
    email: number;
    name: number;
    password: number;
    otp: number;
    otpPurpose: number;
    _all: number;
}

export interface UserAvgAggregate {
    id?: Nullable<number>;
}

export interface UserSumAggregate {
    id?: Nullable<number>;
}

export interface UserMinAggregate {
    id?: Nullable<number>;
    email?: Nullable<string>;
    name?: Nullable<string>;
    password?: Nullable<string>;
    otp?: Nullable<string>;
    otpPurpose?: Nullable<OtpPurpose>;
}

export interface UserMaxAggregate {
    id?: Nullable<number>;
    email?: Nullable<string>;
    name?: Nullable<string>;
    password?: Nullable<string>;
    otp?: Nullable<string>;
    otpPurpose?: Nullable<OtpPurpose>;
}

export interface UserCount {
    cryptoProfiles: number;
}

export interface AssetPrice {
    assetInfoId: string;
    interval: string;
    open_time: DateTime;
    close_time: DateTime;
    openPrice: number;
    closePrice: number;
    highPrice: number;
    lowPrice: number;
    volume: number;
    assetInfo: AssetInfo;
}

export interface AssetInfoCount {
    assetBalances: number;
    assetPrices: number;
}

export interface AssetInfo {
    id: string;
    name: string;
    symbol: string;
    category: string;
    desc: string;
    logo: string;
    assetBalances?: Nullable<AssetBalance[]>;
    assetPrices?: Nullable<AssetPrice[]>;
    _count: AssetInfoCount;
}

export interface AssetBalance {
    id: string;
    cryptoProfileId: string;
    assetInfoId: string;
    balance: number;
    locked: number;
    assetInfo: AssetInfoOutput;
    cryptoProfile: UserCryptoProfile;
}

export interface HistoricalCryptoBalance {
    cryptoProfileId: string;
    time: DateTime;
    estimatedBalance: number;
    changePercent: number;
    changeBalance: number;
    cryptoProfile: UserCryptoProfile;
}

export interface UserCryptoProfileCount {
    balances: number;
    historicalBalances: number;
}

export interface UserCryptoProfile {
    profileId: string;
    userId: number;
    exchanges: string;
    tradingType: TradingType;
    apiKey: string;
    secretKey: string;
    updateTime?: Nullable<DateTime>;
    balances: AssetBalance[];
    historicalBalances: HistoricalCryptoBalance[];
    user: User;
    _count: UserCryptoProfileCount;
}

export interface User {
    id: string;
    email: string;
    name?: Nullable<string>;
    password: string;
    otp?: Nullable<string>;
    otpPurpose?: Nullable<OtpPurpose>;
    cryptoProfiles: UserCryptoProfile;
    _count: UserCount;
}

export interface LoginResDto {
    accessToken: string;
    refreshToken: string;
}

export interface SignupResDto {
    accessToken: string;
    refreshToken: string;
}

export interface UserCryptoProfileCountAggregate {
    profileId: number;
    userId: number;
    exchanges: number;
    tradingType: number;
    apiKey: number;
    secretKey: number;
    updateTime: number;
    _all: number;
}

export interface UserCryptoProfileAvgAggregate {
    userId?: Nullable<number>;
}

export interface UserCryptoProfileSumAggregate {
    userId?: Nullable<number>;
}

export interface UserCryptoProfileMinAggregate {
    profileId?: Nullable<string>;
    userId?: Nullable<number>;
    exchanges?: Nullable<string>;
    tradingType?: Nullable<TradingType>;
    apiKey?: Nullable<string>;
    secretKey?: Nullable<string>;
    updateTime?: Nullable<DateTime>;
}

export interface UserCryptoProfileMaxAggregate {
    profileId?: Nullable<string>;
    userId?: Nullable<number>;
    exchanges?: Nullable<string>;
    tradingType?: Nullable<TradingType>;
    apiKey?: Nullable<string>;
    secretKey?: Nullable<string>;
    updateTime?: Nullable<DateTime>;
}

export interface CreateCryptoRes {
    userId: number;
}

export interface HistoricalCryptoBalanceCountAggregate {
    cryptoProfileId: number;
    time: number;
    estimatedBalance: number;
    changePercent: number;
    changeBalance: number;
    _all: number;
}

export interface HistoricalCryptoBalanceAvgAggregate {
    estimatedBalance?: Nullable<number>;
    changePercent?: Nullable<number>;
    changeBalance?: Nullable<number>;
}

export interface HistoricalCryptoBalanceSumAggregate {
    estimatedBalance?: Nullable<number>;
    changePercent?: Nullable<number>;
    changeBalance?: Nullable<number>;
}

export interface HistoricalCryptoBalanceMinAggregate {
    cryptoProfileId?: Nullable<string>;
    time?: Nullable<DateTime>;
    estimatedBalance?: Nullable<number>;
    changePercent?: Nullable<number>;
    changeBalance?: Nullable<number>;
}

export interface HistoricalCryptoBalanceMaxAggregate {
    cryptoProfileId?: Nullable<string>;
    time?: Nullable<DateTime>;
    estimatedBalance?: Nullable<number>;
    changePercent?: Nullable<number>;
    changeBalance?: Nullable<number>;
}

export interface AssetBalanceCountAggregate {
    id: number;
    cryptoProfileId: number;
    assetInfoId: number;
    balance: number;
    locked: number;
    _all: number;
}

export interface AssetBalanceAvgAggregate {
    balance?: Nullable<number>;
    locked?: Nullable<number>;
}

export interface AssetBalanceSumAggregate {
    balance?: Nullable<number>;
    locked?: Nullable<number>;
}

export interface AssetBalanceMinAggregate {
    id?: Nullable<string>;
    cryptoProfileId?: Nullable<string>;
    assetInfoId?: Nullable<string>;
    balance?: Nullable<number>;
    locked?: Nullable<number>;
}

export interface AssetBalanceMaxAggregate {
    id?: Nullable<string>;
    cryptoProfileId?: Nullable<string>;
    assetInfoId?: Nullable<string>;
    balance?: Nullable<number>;
    locked?: Nullable<number>;
}

export interface AssetInfoCountAggregate {
    id: number;
    name: number;
    symbol: number;
    category: number;
    desc: number;
    logo: number;
    _all: number;
}

export interface AssetInfoMinAggregate {
    id?: Nullable<string>;
    name?: Nullable<string>;
    symbol?: Nullable<string>;
    category?: Nullable<string>;
    desc?: Nullable<string>;
    logo?: Nullable<string>;
}

export interface AssetInfoMaxAggregate {
    id?: Nullable<string>;
    name?: Nullable<string>;
    symbol?: Nullable<string>;
    category?: Nullable<string>;
    desc?: Nullable<string>;
    logo?: Nullable<string>;
}

export interface AssetInfoOutput {
    id?: Nullable<string>;
    name?: Nullable<string>;
    symbol?: Nullable<string>;
    category?: Nullable<string>;
    desc?: Nullable<string>;
    logo?: Nullable<string>;
    assetBalances?: Nullable<AssetBalance[]>;
    assetPrices?: Nullable<AssetPrice[]>;
    _count?: Nullable<AssetInfoCount>;
    lastPrice: number;
}

export interface AssetPriceCountAggregate {
    assetInfoId: number;
    interval: number;
    open_time: number;
    close_time: number;
    openPrice: number;
    closePrice: number;
    highPrice: number;
    lowPrice: number;
    volume: number;
    _all: number;
}

export interface AssetPriceAvgAggregate {
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface AssetPriceSumAggregate {
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface AssetPriceMinAggregate {
    assetInfoId?: Nullable<string>;
    interval?: Nullable<string>;
    open_time?: Nullable<DateTime>;
    close_time?: Nullable<DateTime>;
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface AssetPriceMaxAggregate {
    assetInfoId?: Nullable<string>;
    interval?: Nullable<string>;
    open_time?: Nullable<DateTime>;
    close_time?: Nullable<DateTime>;
    openPrice?: Nullable<number>;
    closePrice?: Nullable<number>;
    highPrice?: Nullable<number>;
    lowPrice?: Nullable<number>;
    volume?: Nullable<number>;
}

export interface IQuery {
    getMe(): User | Promise<User>;
    getCryptoProfiles(data: GetCryptoProfileInput): UserCryptoProfile[] | Promise<UserCryptoProfile[]>;
    getAssetInfo(data: GetAssetInfoInput): AssetInfo | Promise<AssetInfo>;
    getAssetPrices(data: GetAssetPriceInput): AssetPrice[] | Promise<AssetPrice[]>;
}

export interface IMutation {
    createCryptoProfile(data: CreateCryptoProfileInput): CreateCryptoRes | Promise<CreateCryptoRes>;
    login(data: LoginReqDto): LoginResDto | Promise<LoginResDto>;
    signup(data: UserCreateInput): SignupResDto | Promise<SignupResDto>;
    verifyAccount(data: VerifyDto): LoginResDto | Promise<LoginResDto>;
}

export interface ISubscription {
    profileCreated(data: GetCryptoProfileInput): UserCryptoProfile | Promise<UserCryptoProfile>;
    newAssetPrice1m(data: GetAssetPriceInput): AssetPrice | Promise<AssetPrice>;
    newAssetPrice5m(data: GetAssetPriceInput): AssetPrice | Promise<AssetPrice>;
}

export type DateTime = any;
type Nullable<T> = T | null;
