/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends " $fragmentName" | "__typename"
              ? T[P]
              : never;
      };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
    DateTime: { input: any; output: any };
};

export type AssetBalanceCreateManyCryptoProfileInput = {
    assetInfoId: Scalars["String"]["input"];
    balance: Scalars["Float"]["input"];
    id?: InputMaybe<Scalars["String"]["input"]>;
    locked: Scalars["Float"]["input"];
};

export type AssetBalanceCreateManyCryptoProfileInputEnvelope = {
    data: Array<AssetBalanceCreateManyCryptoProfileInput>;
    skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetBalanceCreateNestedManyWithoutCryptoProfileInput = {
    connect?: InputMaybe<Array<AssetBalanceWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<
        Array<AssetBalanceCreateOrConnectWithoutCryptoProfileInput>
    >;
    create?: InputMaybe<Array<AssetBalanceCreateWithoutCryptoProfileInput>>;
    createMany?: InputMaybe<AssetBalanceCreateManyCryptoProfileInputEnvelope>;
};

export type AssetBalanceCreateOrConnectWithoutCryptoProfileInput = {
    create: AssetBalanceCreateWithoutCryptoProfileInput;
    where: AssetBalanceWhereUniqueInput;
};

export type AssetBalanceCreateWithoutCryptoProfileInput = {
    assetInfo: AssetInfoCreateNestedOneWithoutAssetBalancesInput;
    balance: Scalars["Float"]["input"];
    id?: InputMaybe<Scalars["String"]["input"]>;
    locked: Scalars["Float"]["input"];
};

export type AssetBalanceListRelationFilter = {
    every?: InputMaybe<AssetBalanceWhereInput>;
    none?: InputMaybe<AssetBalanceWhereInput>;
    some?: InputMaybe<AssetBalanceWhereInput>;
};

export type AssetBalanceWhereInput = {
    AND?: InputMaybe<Array<AssetBalanceWhereInput>>;
    NOT?: InputMaybe<Array<AssetBalanceWhereInput>>;
    OR?: InputMaybe<Array<AssetBalanceWhereInput>>;
    assetInfo?: InputMaybe<AssetInfoRelationFilter>;
    assetInfoId?: InputMaybe<StringFilter>;
    balance?: InputMaybe<FloatFilter>;
    cryptoProfile?: InputMaybe<UserCryptoProfileRelationFilter>;
    cryptoProfileId?: InputMaybe<StringFilter>;
    id?: InputMaybe<StringFilter>;
    locked?: InputMaybe<FloatFilter>;
};

export type AssetBalanceWhereUniqueInput = {
    AND?: InputMaybe<Array<AssetBalanceWhereInput>>;
    NOT?: InputMaybe<Array<AssetBalanceWhereInput>>;
    OR?: InputMaybe<Array<AssetBalanceWhereInput>>;
    assetInfo?: InputMaybe<AssetInfoRelationFilter>;
    assetInfoId?: InputMaybe<StringFilter>;
    balance?: InputMaybe<FloatFilter>;
    cryptoProfile?: InputMaybe<UserCryptoProfileRelationFilter>;
    cryptoProfileId?: InputMaybe<StringFilter>;
    id?: InputMaybe<Scalars["String"]["input"]>;
    locked?: InputMaybe<FloatFilter>;
};

export type AssetInfoCreateNestedOneWithoutAssetBalancesInput = {
    connect?: InputMaybe<AssetInfoWhereUniqueInput>;
    connectOrCreate?: InputMaybe<AssetInfoCreateOrConnectWithoutAssetBalancesInput>;
    create?: InputMaybe<AssetInfoCreateWithoutAssetBalancesInput>;
};

export type AssetInfoCreateOrConnectWithoutAssetBalancesInput = {
    create: AssetInfoCreateWithoutAssetBalancesInput;
    where: AssetInfoWhereUniqueInput;
};

export type AssetInfoCreateWithoutAssetBalancesInput = {
    assetPrices?: InputMaybe<AssetPriceCreateNestedManyWithoutAssetInfoInput>;
    category: Scalars["String"]["input"];
    desc: Scalars["String"]["input"];
    id?: InputMaybe<Scalars["String"]["input"]>;
    logo: Scalars["String"]["input"];
    name: Scalars["String"]["input"];
    symbol: Scalars["String"]["input"];
};

export type AssetInfoRelationFilter = {
    is?: InputMaybe<AssetInfoWhereInput>;
    isNot?: InputMaybe<AssetInfoWhereInput>;
};

export type AssetInfoWhereInput = {
    AND?: InputMaybe<Array<AssetInfoWhereInput>>;
    NOT?: InputMaybe<Array<AssetInfoWhereInput>>;
    OR?: InputMaybe<Array<AssetInfoWhereInput>>;
    assetBalances?: InputMaybe<AssetBalanceListRelationFilter>;
    assetPrices?: InputMaybe<AssetPriceListRelationFilter>;
    category?: InputMaybe<StringFilter>;
    desc?: InputMaybe<StringFilter>;
    id?: InputMaybe<StringFilter>;
    logo?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    symbol?: InputMaybe<StringFilter>;
};

export type AssetInfoWhereUniqueInput = {
    AND?: InputMaybe<Array<AssetInfoWhereInput>>;
    NOT?: InputMaybe<Array<AssetInfoWhereInput>>;
    OR?: InputMaybe<Array<AssetInfoWhereInput>>;
    assetBalances?: InputMaybe<AssetBalanceListRelationFilter>;
    assetPrices?: InputMaybe<AssetPriceListRelationFilter>;
    category?: InputMaybe<StringFilter>;
    desc?: InputMaybe<StringFilter>;
    id?: InputMaybe<Scalars["String"]["input"]>;
    logo?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    symbol?: InputMaybe<StringFilter>;
};

export type AssetPriceAssetInfoIdOpen_TimeCompoundUniqueInput = {
    assetInfoId: Scalars["String"]["input"];
    open_time: Scalars["DateTime"]["input"];
};

export type AssetPriceCreateManyAssetInfoInput = {
    closePrice: Scalars["Float"]["input"];
    close_time: Scalars["DateTime"]["input"];
    highPrice: Scalars["Float"]["input"];
    interval: Scalars["String"]["input"];
    lowPrice: Scalars["Float"]["input"];
    openPrice: Scalars["Float"]["input"];
    open_time: Scalars["DateTime"]["input"];
    volume: Scalars["Float"]["input"];
};

export type AssetPriceCreateManyAssetInfoInputEnvelope = {
    data: Array<AssetPriceCreateManyAssetInfoInput>;
    skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetPriceCreateNestedManyWithoutAssetInfoInput = {
    connect?: InputMaybe<Array<AssetPriceWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<
        Array<AssetPriceCreateOrConnectWithoutAssetInfoInput>
    >;
    create?: InputMaybe<Array<AssetPriceCreateWithoutAssetInfoInput>>;
    createMany?: InputMaybe<AssetPriceCreateManyAssetInfoInputEnvelope>;
};

export type AssetPriceCreateOrConnectWithoutAssetInfoInput = {
    create: AssetPriceCreateWithoutAssetInfoInput;
    where: AssetPriceWhereUniqueInput;
};

export type AssetPriceCreateWithoutAssetInfoInput = {
    closePrice: Scalars["Float"]["input"];
    close_time: Scalars["DateTime"]["input"];
    highPrice: Scalars["Float"]["input"];
    interval: Scalars["String"]["input"];
    lowPrice: Scalars["Float"]["input"];
    openPrice: Scalars["Float"]["input"];
    open_time: Scalars["DateTime"]["input"];
    volume: Scalars["Float"]["input"];
};

export type AssetPriceListRelationFilter = {
    every?: InputMaybe<AssetPriceWhereInput>;
    none?: InputMaybe<AssetPriceWhereInput>;
    some?: InputMaybe<AssetPriceWhereInput>;
};

export type AssetPriceWhereInput = {
    AND?: InputMaybe<Array<AssetPriceWhereInput>>;
    NOT?: InputMaybe<Array<AssetPriceWhereInput>>;
    OR?: InputMaybe<Array<AssetPriceWhereInput>>;
    assetInfo?: InputMaybe<AssetInfoRelationFilter>;
    assetInfoId?: InputMaybe<StringFilter>;
    closePrice?: InputMaybe<FloatFilter>;
    close_time?: InputMaybe<DateTimeFilter>;
    highPrice?: InputMaybe<FloatFilter>;
    interval?: InputMaybe<StringFilter>;
    lowPrice?: InputMaybe<FloatFilter>;
    openPrice?: InputMaybe<FloatFilter>;
    open_time?: InputMaybe<DateTimeFilter>;
    volume?: InputMaybe<FloatFilter>;
};

export type AssetPriceWhereUniqueInput = {
    AND?: InputMaybe<Array<AssetPriceWhereInput>>;
    NOT?: InputMaybe<Array<AssetPriceWhereInput>>;
    OR?: InputMaybe<Array<AssetPriceWhereInput>>;
    assetInfo?: InputMaybe<AssetInfoRelationFilter>;
    assetInfoId?: InputMaybe<StringFilter>;
    assetInfoId_open_time?: InputMaybe<AssetPriceAssetInfoIdOpen_TimeCompoundUniqueInput>;
    closePrice?: InputMaybe<FloatFilter>;
    close_time?: InputMaybe<DateTimeFilter>;
    highPrice?: InputMaybe<FloatFilter>;
    interval?: InputMaybe<StringFilter>;
    lowPrice?: InputMaybe<FloatFilter>;
    openPrice?: InputMaybe<FloatFilter>;
    open_time?: InputMaybe<DateTimeFilter>;
    volume?: InputMaybe<FloatFilter>;
};

export type CreateCryptoProfileInput = {
    apiKey: Scalars["String"]["input"];
    secretKey: Scalars["String"]["input"];
    userId: Scalars["Int"]["input"];
};

export type DateTimeFilter = {
    equals?: InputMaybe<Scalars["DateTime"]["input"]>;
    gt?: InputMaybe<Scalars["DateTime"]["input"]>;
    gte?: InputMaybe<Scalars["DateTime"]["input"]>;
    in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
    lt?: InputMaybe<Scalars["DateTime"]["input"]>;
    lte?: InputMaybe<Scalars["DateTime"]["input"]>;
    not?: InputMaybe<NestedDateTimeFilter>;
    notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type DateTimeNullableFilter = {
    equals?: InputMaybe<Scalars["DateTime"]["input"]>;
    gt?: InputMaybe<Scalars["DateTime"]["input"]>;
    gte?: InputMaybe<Scalars["DateTime"]["input"]>;
    in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
    lt?: InputMaybe<Scalars["DateTime"]["input"]>;
    lte?: InputMaybe<Scalars["DateTime"]["input"]>;
    not?: InputMaybe<NestedDateTimeNullableFilter>;
    notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type EnumOtpPurposeNullableFilter = {
    equals?: InputMaybe<OtpPurpose>;
    in?: InputMaybe<Array<OtpPurpose>>;
    not?: InputMaybe<NestedEnumOtpPurposeNullableFilter>;
    notIn?: InputMaybe<Array<OtpPurpose>>;
};

export type EnumTradingTypeFilter = {
    equals?: InputMaybe<TradingType>;
    in?: InputMaybe<Array<TradingType>>;
    not?: InputMaybe<NestedEnumTradingTypeFilter>;
    notIn?: InputMaybe<Array<TradingType>>;
};

export type FloatFilter = {
    equals?: InputMaybe<Scalars["Float"]["input"]>;
    gt?: InputMaybe<Scalars["Float"]["input"]>;
    gte?: InputMaybe<Scalars["Float"]["input"]>;
    in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    lt?: InputMaybe<Scalars["Float"]["input"]>;
    lte?: InputMaybe<Scalars["Float"]["input"]>;
    not?: InputMaybe<NestedFloatFilter>;
    notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type GetAssetInfoInput = {
    id: Scalars["String"]["input"];
};

export type GetAssetPriceInput = {
    assetInfoId: Scalars["String"]["input"];
    timeFrame: Scalars["String"]["input"];
};

export type GetCryptoProfileInput = {
    userId: Scalars["Int"]["input"];
};

export type HistoricalCryptoBalanceCreateManyCryptoProfileInput = {
    changeBalance: Scalars["Float"]["input"];
    changePercent: Scalars["Float"]["input"];
    estimatedBalance: Scalars["Float"]["input"];
    time: Scalars["DateTime"]["input"];
};

export type HistoricalCryptoBalanceCreateManyCryptoProfileInputEnvelope = {
    data: Array<HistoricalCryptoBalanceCreateManyCryptoProfileInput>;
    skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type HistoricalCryptoBalanceCreateNestedManyWithoutCryptoProfileInput = {
    connect?: InputMaybe<Array<HistoricalCryptoBalanceWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<
        Array<HistoricalCryptoBalanceCreateOrConnectWithoutCryptoProfileInput>
    >;
    create?: InputMaybe<
        Array<HistoricalCryptoBalanceCreateWithoutCryptoProfileInput>
    >;
    createMany?: InputMaybe<HistoricalCryptoBalanceCreateManyCryptoProfileInputEnvelope>;
};

export type HistoricalCryptoBalanceCreateOrConnectWithoutCryptoProfileInput = {
    create: HistoricalCryptoBalanceCreateWithoutCryptoProfileInput;
    where: HistoricalCryptoBalanceWhereUniqueInput;
};

export type HistoricalCryptoBalanceCreateWithoutCryptoProfileInput = {
    changeBalance: Scalars["Float"]["input"];
    changePercent: Scalars["Float"]["input"];
    estimatedBalance: Scalars["Float"]["input"];
    time: Scalars["DateTime"]["input"];
};

export type HistoricalCryptoBalanceCryptoProfileIdTimeCompoundUniqueInput = {
    cryptoProfileId: Scalars["String"]["input"];
    time: Scalars["DateTime"]["input"];
};

export type HistoricalCryptoBalanceListRelationFilter = {
    every?: InputMaybe<HistoricalCryptoBalanceWhereInput>;
    none?: InputMaybe<HistoricalCryptoBalanceWhereInput>;
    some?: InputMaybe<HistoricalCryptoBalanceWhereInput>;
};

export type HistoricalCryptoBalanceWhereInput = {
    AND?: InputMaybe<Array<HistoricalCryptoBalanceWhereInput>>;
    NOT?: InputMaybe<Array<HistoricalCryptoBalanceWhereInput>>;
    OR?: InputMaybe<Array<HistoricalCryptoBalanceWhereInput>>;
    changeBalance?: InputMaybe<FloatFilter>;
    changePercent?: InputMaybe<FloatFilter>;
    cryptoProfile?: InputMaybe<UserCryptoProfileRelationFilter>;
    cryptoProfileId?: InputMaybe<StringFilter>;
    estimatedBalance?: InputMaybe<FloatFilter>;
    time?: InputMaybe<DateTimeFilter>;
};

export type HistoricalCryptoBalanceWhereUniqueInput = {
    AND?: InputMaybe<Array<HistoricalCryptoBalanceWhereInput>>;
    NOT?: InputMaybe<Array<HistoricalCryptoBalanceWhereInput>>;
    OR?: InputMaybe<Array<HistoricalCryptoBalanceWhereInput>>;
    changeBalance?: InputMaybe<FloatFilter>;
    changePercent?: InputMaybe<FloatFilter>;
    cryptoProfile?: InputMaybe<UserCryptoProfileRelationFilter>;
    cryptoProfileId?: InputMaybe<StringFilter>;
    cryptoProfileId_time?: InputMaybe<HistoricalCryptoBalanceCryptoProfileIdTimeCompoundUniqueInput>;
    estimatedBalance?: InputMaybe<FloatFilter>;
    time?: InputMaybe<DateTimeFilter>;
};

export type IntFilter = {
    equals?: InputMaybe<Scalars["Int"]["input"]>;
    gt?: InputMaybe<Scalars["Int"]["input"]>;
    gte?: InputMaybe<Scalars["Int"]["input"]>;
    in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
    lt?: InputMaybe<Scalars["Int"]["input"]>;
    lte?: InputMaybe<Scalars["Int"]["input"]>;
    not?: InputMaybe<NestedIntFilter>;
    notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type LoginReqDto = {
    email: Scalars["String"]["input"];
    password: Scalars["String"]["input"];
};

export type NestedDateTimeFilter = {
    equals?: InputMaybe<Scalars["DateTime"]["input"]>;
    gt?: InputMaybe<Scalars["DateTime"]["input"]>;
    gte?: InputMaybe<Scalars["DateTime"]["input"]>;
    in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
    lt?: InputMaybe<Scalars["DateTime"]["input"]>;
    lte?: InputMaybe<Scalars["DateTime"]["input"]>;
    not?: InputMaybe<NestedDateTimeFilter>;
    notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type NestedDateTimeNullableFilter = {
    equals?: InputMaybe<Scalars["DateTime"]["input"]>;
    gt?: InputMaybe<Scalars["DateTime"]["input"]>;
    gte?: InputMaybe<Scalars["DateTime"]["input"]>;
    in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
    lt?: InputMaybe<Scalars["DateTime"]["input"]>;
    lte?: InputMaybe<Scalars["DateTime"]["input"]>;
    not?: InputMaybe<NestedDateTimeNullableFilter>;
    notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type NestedEnumOtpPurposeNullableFilter = {
    equals?: InputMaybe<OtpPurpose>;
    in?: InputMaybe<Array<OtpPurpose>>;
    not?: InputMaybe<NestedEnumOtpPurposeNullableFilter>;
    notIn?: InputMaybe<Array<OtpPurpose>>;
};

export type NestedEnumTradingTypeFilter = {
    equals?: InputMaybe<TradingType>;
    in?: InputMaybe<Array<TradingType>>;
    not?: InputMaybe<NestedEnumTradingTypeFilter>;
    notIn?: InputMaybe<Array<TradingType>>;
};

export type NestedFloatFilter = {
    equals?: InputMaybe<Scalars["Float"]["input"]>;
    gt?: InputMaybe<Scalars["Float"]["input"]>;
    gte?: InputMaybe<Scalars["Float"]["input"]>;
    in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    lt?: InputMaybe<Scalars["Float"]["input"]>;
    lte?: InputMaybe<Scalars["Float"]["input"]>;
    not?: InputMaybe<NestedFloatFilter>;
    notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type NestedIntFilter = {
    equals?: InputMaybe<Scalars["Int"]["input"]>;
    gt?: InputMaybe<Scalars["Int"]["input"]>;
    gte?: InputMaybe<Scalars["Int"]["input"]>;
    in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
    lt?: InputMaybe<Scalars["Int"]["input"]>;
    lte?: InputMaybe<Scalars["Int"]["input"]>;
    not?: InputMaybe<NestedIntFilter>;
    notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type NestedStringFilter = {
    contains?: InputMaybe<Scalars["String"]["input"]>;
    endsWith?: InputMaybe<Scalars["String"]["input"]>;
    equals?: InputMaybe<Scalars["String"]["input"]>;
    gt?: InputMaybe<Scalars["String"]["input"]>;
    gte?: InputMaybe<Scalars["String"]["input"]>;
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    lt?: InputMaybe<Scalars["String"]["input"]>;
    lte?: InputMaybe<Scalars["String"]["input"]>;
    not?: InputMaybe<NestedStringFilter>;
    notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
    startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedStringNullableFilter = {
    contains?: InputMaybe<Scalars["String"]["input"]>;
    endsWith?: InputMaybe<Scalars["String"]["input"]>;
    equals?: InputMaybe<Scalars["String"]["input"]>;
    gt?: InputMaybe<Scalars["String"]["input"]>;
    gte?: InputMaybe<Scalars["String"]["input"]>;
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    lt?: InputMaybe<Scalars["String"]["input"]>;
    lte?: InputMaybe<Scalars["String"]["input"]>;
    not?: InputMaybe<NestedStringNullableFilter>;
    notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
    startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export enum OtpPurpose {
    ResetPassword = "RESET_PASSWORD",
    VerifyAccount = "VERIFY_ACCOUNT",
}

export enum QueryMode {
    Default = "default",
    Insensitive = "insensitive",
}

export type StringFilter = {
    contains?: InputMaybe<Scalars["String"]["input"]>;
    endsWith?: InputMaybe<Scalars["String"]["input"]>;
    equals?: InputMaybe<Scalars["String"]["input"]>;
    gt?: InputMaybe<Scalars["String"]["input"]>;
    gte?: InputMaybe<Scalars["String"]["input"]>;
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    lt?: InputMaybe<Scalars["String"]["input"]>;
    lte?: InputMaybe<Scalars["String"]["input"]>;
    mode?: InputMaybe<QueryMode>;
    not?: InputMaybe<NestedStringFilter>;
    notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
    startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type StringNullableFilter = {
    contains?: InputMaybe<Scalars["String"]["input"]>;
    endsWith?: InputMaybe<Scalars["String"]["input"]>;
    equals?: InputMaybe<Scalars["String"]["input"]>;
    gt?: InputMaybe<Scalars["String"]["input"]>;
    gte?: InputMaybe<Scalars["String"]["input"]>;
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    lt?: InputMaybe<Scalars["String"]["input"]>;
    lte?: InputMaybe<Scalars["String"]["input"]>;
    mode?: InputMaybe<QueryMode>;
    not?: InputMaybe<NestedStringNullableFilter>;
    notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
    startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export enum TradingType {
    Futures = "FUTURES",
    Spot = "SPOT",
}

export type UserCreateInput = {
    cryptoProfiles?: InputMaybe<UserCryptoProfileCreateNestedManyWithoutUserInput>;
    email: Scalars["String"]["input"];
    name?: InputMaybe<Scalars["String"]["input"]>;
    otp?: InputMaybe<Scalars["String"]["input"]>;
    otpPurpose?: InputMaybe<OtpPurpose>;
    password: Scalars["String"]["input"];
};

export type UserCryptoProfileCreateManyUserInput = {
    apiKey: Scalars["String"]["input"];
    exchanges?: InputMaybe<Scalars["String"]["input"]>;
    profileId?: InputMaybe<Scalars["String"]["input"]>;
    secretKey: Scalars["String"]["input"];
    tradingType: TradingType;
    updateTime?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserCryptoProfileCreateManyUserInputEnvelope = {
    data: Array<UserCryptoProfileCreateManyUserInput>;
    skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserCryptoProfileCreateNestedManyWithoutUserInput = {
    connect?: InputMaybe<Array<UserCryptoProfileWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<
        Array<UserCryptoProfileCreateOrConnectWithoutUserInput>
    >;
    create?: InputMaybe<Array<UserCryptoProfileCreateWithoutUserInput>>;
    createMany?: InputMaybe<UserCryptoProfileCreateManyUserInputEnvelope>;
};

export type UserCryptoProfileCreateOrConnectWithoutUserInput = {
    create: UserCryptoProfileCreateWithoutUserInput;
    where: UserCryptoProfileWhereUniqueInput;
};

export type UserCryptoProfileCreateWithoutUserInput = {
    apiKey: Scalars["String"]["input"];
    balances?: InputMaybe<AssetBalanceCreateNestedManyWithoutCryptoProfileInput>;
    exchanges?: InputMaybe<Scalars["String"]["input"]>;
    historicalBalances?: InputMaybe<HistoricalCryptoBalanceCreateNestedManyWithoutCryptoProfileInput>;
    profileId?: InputMaybe<Scalars["String"]["input"]>;
    secretKey: Scalars["String"]["input"];
    tradingType: TradingType;
    updateTime?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserCryptoProfileListRelationFilter = {
    every?: InputMaybe<UserCryptoProfileWhereInput>;
    none?: InputMaybe<UserCryptoProfileWhereInput>;
    some?: InputMaybe<UserCryptoProfileWhereInput>;
};

export type UserCryptoProfileRelationFilter = {
    is?: InputMaybe<UserCryptoProfileWhereInput>;
    isNot?: InputMaybe<UserCryptoProfileWhereInput>;
};

export type UserCryptoProfileWhereInput = {
    AND?: InputMaybe<Array<UserCryptoProfileWhereInput>>;
    NOT?: InputMaybe<Array<UserCryptoProfileWhereInput>>;
    OR?: InputMaybe<Array<UserCryptoProfileWhereInput>>;
    apiKey?: InputMaybe<StringFilter>;
    balances?: InputMaybe<AssetBalanceListRelationFilter>;
    exchanges?: InputMaybe<StringFilter>;
    historicalBalances?: InputMaybe<HistoricalCryptoBalanceListRelationFilter>;
    profileId?: InputMaybe<StringFilter>;
    secretKey?: InputMaybe<StringFilter>;
    tradingType?: InputMaybe<EnumTradingTypeFilter>;
    updateTime?: InputMaybe<DateTimeNullableFilter>;
    user?: InputMaybe<UserRelationFilter>;
    userId?: InputMaybe<IntFilter>;
};

export type UserCryptoProfileWhereUniqueInput = {
    AND?: InputMaybe<Array<UserCryptoProfileWhereInput>>;
    NOT?: InputMaybe<Array<UserCryptoProfileWhereInput>>;
    OR?: InputMaybe<Array<UserCryptoProfileWhereInput>>;
    apiKey?: InputMaybe<StringFilter>;
    balances?: InputMaybe<AssetBalanceListRelationFilter>;
    exchanges?: InputMaybe<StringFilter>;
    historicalBalances?: InputMaybe<HistoricalCryptoBalanceListRelationFilter>;
    profileId?: InputMaybe<Scalars["String"]["input"]>;
    secretKey?: InputMaybe<StringFilter>;
    tradingType?: InputMaybe<EnumTradingTypeFilter>;
    updateTime?: InputMaybe<DateTimeNullableFilter>;
    user?: InputMaybe<UserRelationFilter>;
    userId?: InputMaybe<IntFilter>;
};

export type UserRelationFilter = {
    is?: InputMaybe<UserWhereInput>;
    isNot?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
    AND?: InputMaybe<Array<UserWhereInput>>;
    NOT?: InputMaybe<Array<UserWhereInput>>;
    OR?: InputMaybe<Array<UserWhereInput>>;
    cryptoProfiles?: InputMaybe<UserCryptoProfileListRelationFilter>;
    email?: InputMaybe<StringFilter>;
    id?: InputMaybe<IntFilter>;
    name?: InputMaybe<StringNullableFilter>;
    otp?: InputMaybe<StringNullableFilter>;
    otpPurpose?: InputMaybe<EnumOtpPurposeNullableFilter>;
    password?: InputMaybe<StringFilter>;
};

export type VerifyDto = {
    otp: Scalars["String"]["input"];
    otpPurpose: OtpPurpose;
};

export type SignupMutationVariables = Exact<{
    data: UserCreateInput;
}>;

export type SignupMutation = {
    __typename?: "Mutation";
    signup: {
        __typename?: "SignupResDto";
        accessToken: string;
        refreshToken: string;
    };
};

export type LoginMutationVariables = Exact<{
    data: LoginReqDto;
}>;

export type LoginMutation = {
    __typename?: "Mutation";
    login: { __typename?: "LoginResDto"; accessToken: string };
};

export type VerifyAccountMutationVariables = Exact<{
    data: VerifyDto;
}>;

export type VerifyAccountMutation = {
    __typename?: "Mutation";
    verifyAccount: { __typename?: "LoginResDto"; accessToken: string };
};

export type GetMeQueryVariables = Exact<{ [key: string]: never }>;

export type GetMeQuery = {
    __typename?: "Query";
    getMe: {
        __typename?: "User";
        email: string;
        id: string;
        name?: string | null;
        otp?: string | null;
        otpPurpose?: OtpPurpose | null;
    };
};

export type CreateCryptoProfileMutationVariables = Exact<{
    data: CreateCryptoProfileInput;
}>;

export type CreateCryptoProfileMutation = {
    __typename?: "Mutation";
    createCryptoProfile: { __typename?: "CreateCryptoRes"; userId: number };
};

export type GetCryptoProfileQueryVariables = Exact<{
    data: GetCryptoProfileInput;
}>;

export type GetCryptoProfileQuery = {
    __typename?: "Query";
    getCryptoProfiles: Array<{
        __typename?: "UserCryptoProfile";
        profileId: string;
        exchanges: string;
        tradingType: TradingType;
        historicalBalances: Array<{
            __typename?: "HistoricalCryptoBalance";
            time: any;
            estimatedBalance: number;
            changePercent: number;
            changeBalance: number;
        }>;
        balances: Array<{
            __typename?: "AssetBalance";
            balance: number;
            assetInfo: {
                __typename?: "AssetInfoOutput";
                id?: string | null;
                logo?: string | null;
                lastPrice: number;
                symbol?: string | null;
            };
        }>;
    }>;
};

export type GetAssetQueryVariables = Exact<{
    getAssetPriceData: GetAssetPriceInput;
    getAssetInfoData: GetAssetInfoInput;
}>;

export type GetAssetQuery = {
    __typename?: "Query";
    getAssetPrices: Array<{
        __typename?: "AssetPrice";
        open_time: any;
        openPrice: number;
        closePrice: number;
        highPrice: number;
        lowPrice: number;
    }>;
    getAssetInfo: {
        __typename?: "AssetInfo";
        logo: string;
        desc: string;
        category: string;
        symbol: string;
        name: string;
    };
};

export type NewAssetPrice1mSubscriptionVariables = Exact<{
    data: GetAssetPriceInput;
}>;

export type NewAssetPrice1mSubscription = {
    __typename?: "Subscription";
    newAssetPrice1m: {
        __typename?: "AssetPrice";
        assetInfoId: string;
        open_time: any;
        openPrice: number;
        closePrice: number;
        highPrice: number;
        lowPrice: number;
    };
};

export type NewAssetPrice5mSubscriptionVariables = Exact<{
    data: GetAssetPriceInput;
}>;

export type NewAssetPrice5mSubscription = {
    __typename?: "Subscription";
    newAssetPrice5m: {
        __typename?: "AssetPrice";
        assetInfoId: string;
        open_time: any;
        openPrice: number;
        closePrice: number;
        highPrice: number;
        lowPrice: number;
    };
};

export const SignupDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "Signup" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "UserCreateInput" },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "signup" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "data" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "data" },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "accessToken",
                                    },
                                },
                                {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "refreshToken",
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const LoginDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "Login" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "LoginReqDto" },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "login" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "data" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "data" },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "accessToken",
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const VerifyAccountDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "VerifyAccount" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "VerifyDto" },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "verifyAccount" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "data" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "data" },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "accessToken",
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<
    VerifyAccountMutation,
    VerifyAccountMutationVariables
>;
export const GetMeDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "GetMe" },
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "getMe" },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "email" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "otp" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "otpPurpose" },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const CreateCryptoProfileDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "CreateCryptoProfile" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "CreateCryptoProfileInput",
                            },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "createCryptoProfile" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "data" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "data" },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "userId" },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<
    CreateCryptoProfileMutation,
    CreateCryptoProfileMutationVariables
>;
export const GetCryptoProfileDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "GetCryptoProfile" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "GetCryptoProfileInput",
                            },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "getCryptoProfiles" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "data" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "data" },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "profileId" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "exchanges" },
                                },
                                {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tradingType",
                                    },
                                },
                                {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "historicalBalances",
                                    },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "time",
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "estimatedBalance",
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "changePercent",
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "changeBalance",
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "balances" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "balance",
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "assetInfo",
                                                },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "id",
                                                            },
                                                        },
                                                        {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "logo",
                                                            },
                                                        },
                                                        {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "lastPrice",
                                                            },
                                                        },
                                                        {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "symbol",
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<
    GetCryptoProfileQuery,
    GetCryptoProfileQueryVariables
>;
export const GetAssetDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "GetAsset" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "getAssetPriceData" },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "GetAssetPriceInput" },
                        },
                    },
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "getAssetInfoData" },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "GetAssetInfoInput" },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "getAssetPrices" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "data" },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "getAssetPriceData",
                                    },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "open_time" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "openPrice" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "closePrice" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "highPrice" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "lowPrice" },
                                },
                            ],
                        },
                    },
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "getAssetInfo" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "data" },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "getAssetInfoData",
                                    },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "logo" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "desc" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "category" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "symbol" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetAssetQuery, GetAssetQueryVariables>;
export const NewAssetPrice1mDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "subscription",
            name: { kind: "Name", value: "NewAssetPrice1m" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "GetAssetPriceInput" },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "newAssetPrice1m" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "data" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "data" },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "assetInfoId",
                                    },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "open_time" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "openPrice" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "closePrice" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "highPrice" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "lowPrice" },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<
    NewAssetPrice1mSubscription,
    NewAssetPrice1mSubscriptionVariables
>;
export const NewAssetPrice5mDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "subscription",
            name: { kind: "Name", value: "NewAssetPrice5m" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "GetAssetPriceInput" },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "newAssetPrice5m" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "data" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "data" },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "assetInfoId",
                                    },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "open_time" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "openPrice" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "closePrice" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "highPrice" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "lowPrice" },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<
    NewAssetPrice5mSubscription,
    NewAssetPrice5mSubscriptionVariables
>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
    DateTime: { input: any; output: any };
};

export type AssetBalance = {
    __typename?: "AssetBalance";
    assetInfo: AssetInfoOutput;
    assetInfoId: Scalars["String"]["output"];
    balance: Scalars["Float"]["output"];
    cryptoProfile: UserCryptoProfile;
    cryptoProfileId: Scalars["String"]["output"];
    id: Scalars["ID"]["output"];
    locked: Scalars["Float"]["output"];
};

export type AssetBalanceAvgAggregate = {
    __typename?: "AssetBalanceAvgAggregate";
    balance?: Maybe<Scalars["Float"]["output"]>;
    locked?: Maybe<Scalars["Float"]["output"]>;
};

export type AssetBalanceCountAggregate = {
    __typename?: "AssetBalanceCountAggregate";
    _all: Scalars["Int"]["output"];
    assetInfoId: Scalars["Int"]["output"];
    balance: Scalars["Int"]["output"];
    cryptoProfileId: Scalars["Int"]["output"];
    id: Scalars["Int"]["output"];
    locked: Scalars["Int"]["output"];
};

export type AssetBalanceCreateManyCryptoProfileInputEnvelope = {
    data: Array<AssetBalanceCreateManyCryptoProfileInput>;
    skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetBalanceCreateNestedManyWithoutCryptoProfileInput = {
    connect?: InputMaybe<Array<AssetBalanceWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<
        Array<AssetBalanceCreateOrConnectWithoutCryptoProfileInput>
    >;
    create?: InputMaybe<Array<AssetBalanceCreateWithoutCryptoProfileInput>>;
    createMany?: InputMaybe<AssetBalanceCreateManyCryptoProfileInputEnvelope>;
};

export type AssetBalanceCreateOrConnectWithoutCryptoProfileInput = {
    create: AssetBalanceCreateWithoutCryptoProfileInput;
    where: AssetBalanceWhereUniqueInput;
};

export type AssetBalanceCreateWithoutCryptoProfileInput = {
    assetInfo: AssetInfoCreateNestedOneWithoutAssetBalancesInput;
    balance: Scalars["Float"]["input"];
    id?: InputMaybe<Scalars["String"]["input"]>;
    locked: Scalars["Float"]["input"];
};

export type AssetBalanceListRelationFilter = {
    every?: InputMaybe<AssetBalanceWhereInput>;
    none?: InputMaybe<AssetBalanceWhereInput>;
    some?: InputMaybe<AssetBalanceWhereInput>;
};

export type AssetBalanceMaxAggregate = {
    __typename?: "AssetBalanceMaxAggregate";
    assetInfoId?: Maybe<Scalars["String"]["output"]>;
    balance?: Maybe<Scalars["Float"]["output"]>;
    cryptoProfileId?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["String"]["output"]>;
    locked?: Maybe<Scalars["Float"]["output"]>;
};

export type AssetBalanceMinAggregate = {
    __typename?: "AssetBalanceMinAggregate";
    assetInfoId?: Maybe<Scalars["String"]["output"]>;
    balance?: Maybe<Scalars["Float"]["output"]>;
    cryptoProfileId?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["String"]["output"]>;
    locked?: Maybe<Scalars["Float"]["output"]>;
};

export type AssetBalanceSumAggregate = {
    __typename?: "AssetBalanceSumAggregate";
    balance?: Maybe<Scalars["Float"]["output"]>;
    locked?: Maybe<Scalars["Float"]["output"]>;
};

export type AssetBalanceWhereInput = {
    AND?: InputMaybe<Array<AssetBalanceWhereInput>>;
    NOT?: InputMaybe<Array<AssetBalanceWhereInput>>;
    OR?: InputMaybe<Array<AssetBalanceWhereInput>>;
    assetInfo?: InputMaybe<AssetInfoRelationFilter>;
    assetInfoId?: InputMaybe<StringFilter>;
    balance?: InputMaybe<FloatFilter>;
    cryptoProfile?: InputMaybe<UserCryptoProfileRelationFilter>;
    cryptoProfileId?: InputMaybe<StringFilter>;
    id?: InputMaybe<StringFilter>;
    locked?: InputMaybe<FloatFilter>;
};

export type AssetBalanceWhereUniqueInput = {
    AND?: InputMaybe<Array<AssetBalanceWhereInput>>;
    NOT?: InputMaybe<Array<AssetBalanceWhereInput>>;
    OR?: InputMaybe<Array<AssetBalanceWhereInput>>;
    assetInfo?: InputMaybe<AssetInfoRelationFilter>;
    assetInfoId?: InputMaybe<StringFilter>;
    balance?: InputMaybe<FloatFilter>;
    cryptoProfile?: InputMaybe<UserCryptoProfileRelationFilter>;
    cryptoProfileId?: InputMaybe<StringFilter>;
    id?: InputMaybe<Scalars["String"]["input"]>;
    locked?: InputMaybe<FloatFilter>;
};

export type AssetInfo = {
    __typename?: "AssetInfo";
    _count: AssetInfoCount;
    assetBalances?: Maybe<Array<AssetBalance>>;
    assetPrices?: Maybe<Array<AssetPrice>>;
    category: Scalars["String"]["output"];
    desc: Scalars["String"]["output"];
    id: Scalars["ID"]["output"];
    logo: Scalars["String"]["output"];
    name: Scalars["String"]["output"];
    symbol: Scalars["String"]["output"];
};

export type AssetInfoCount = {
    __typename?: "AssetInfoCount";
    assetBalances: Scalars["Int"]["output"];
    assetPrices: Scalars["Int"]["output"];
};

export type AssetInfoCountAggregate = {
    __typename?: "AssetInfoCountAggregate";
    _all: Scalars["Int"]["output"];
    category: Scalars["Int"]["output"];
    desc: Scalars["Int"]["output"];
    id: Scalars["Int"]["output"];
    logo: Scalars["Int"]["output"];
    name: Scalars["Int"]["output"];
    symbol: Scalars["Int"]["output"];
};

export type AssetInfoCreateNestedOneWithoutAssetBalancesInput = {
    connect?: InputMaybe<AssetInfoWhereUniqueInput>;
    connectOrCreate?: InputMaybe<AssetInfoCreateOrConnectWithoutAssetBalancesInput>;
    create?: InputMaybe<AssetInfoCreateWithoutAssetBalancesInput>;
};

export type AssetInfoCreateOrConnectWithoutAssetBalancesInput = {
    create: AssetInfoCreateWithoutAssetBalancesInput;
    where: AssetInfoWhereUniqueInput;
};

export type AssetInfoCreateWithoutAssetBalancesInput = {
    assetPrices?: InputMaybe<AssetPriceCreateNestedManyWithoutAssetInfoInput>;
    category: Scalars["String"]["input"];
    desc: Scalars["String"]["input"];
    id?: InputMaybe<Scalars["String"]["input"]>;
    logo: Scalars["String"]["input"];
    name: Scalars["String"]["input"];
    symbol: Scalars["String"]["input"];
};

export type AssetInfoMaxAggregate = {
    __typename?: "AssetInfoMaxAggregate";
    category?: Maybe<Scalars["String"]["output"]>;
    desc?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["String"]["output"]>;
    logo?: Maybe<Scalars["String"]["output"]>;
    name?: Maybe<Scalars["String"]["output"]>;
    symbol?: Maybe<Scalars["String"]["output"]>;
};

export type AssetInfoMinAggregate = {
    __typename?: "AssetInfoMinAggregate";
    category?: Maybe<Scalars["String"]["output"]>;
    desc?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["String"]["output"]>;
    logo?: Maybe<Scalars["String"]["output"]>;
    name?: Maybe<Scalars["String"]["output"]>;
    symbol?: Maybe<Scalars["String"]["output"]>;
};

export type AssetInfoOutput = {
    __typename?: "AssetInfoOutput";
    _count?: Maybe<AssetInfoCount>;
    assetBalances?: Maybe<Array<AssetBalance>>;
    assetPrices?: Maybe<Array<AssetPrice>>;
    category?: Maybe<Scalars["String"]["output"]>;
    desc?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    lastPrice: Scalars["Float"]["output"];
    logo?: Maybe<Scalars["String"]["output"]>;
    name?: Maybe<Scalars["String"]["output"]>;
    symbol?: Maybe<Scalars["String"]["output"]>;
};

export type AssetInfoRelationFilter = {
    is?: InputMaybe<AssetInfoWhereInput>;
    isNot?: InputMaybe<AssetInfoWhereInput>;
};

export type AssetInfoWhereInput = {
    AND?: InputMaybe<Array<AssetInfoWhereInput>>;
    NOT?: InputMaybe<Array<AssetInfoWhereInput>>;
    OR?: InputMaybe<Array<AssetInfoWhereInput>>;
    assetBalances?: InputMaybe<AssetBalanceListRelationFilter>;
    assetPrices?: InputMaybe<AssetPriceListRelationFilter>;
    category?: InputMaybe<StringFilter>;
    desc?: InputMaybe<StringFilter>;
    id?: InputMaybe<StringFilter>;
    logo?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    symbol?: InputMaybe<StringFilter>;
};

export type AssetInfoWhereUniqueInput = {
    AND?: InputMaybe<Array<AssetInfoWhereInput>>;
    NOT?: InputMaybe<Array<AssetInfoWhereInput>>;
    OR?: InputMaybe<Array<AssetInfoWhereInput>>;
    assetBalances?: InputMaybe<AssetBalanceListRelationFilter>;
    assetPrices?: InputMaybe<AssetPriceListRelationFilter>;
    category?: InputMaybe<StringFilter>;
    desc?: InputMaybe<StringFilter>;
    id?: InputMaybe<Scalars["String"]["input"]>;
    logo?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    symbol?: InputMaybe<StringFilter>;
};

export type AssetPrice = {
    __typename?: "AssetPrice";
    assetInfo: AssetInfo;
    assetInfoId: Scalars["String"]["output"];
    closePrice: Scalars["Float"]["output"];
    close_time: Scalars["DateTime"]["output"];
    highPrice: Scalars["Float"]["output"];
    interval: Scalars["String"]["output"];
    lowPrice: Scalars["Float"]["output"];
    openPrice: Scalars["Float"]["output"];
    open_time: Scalars["DateTime"]["output"];
    volume: Scalars["Float"]["output"];
};

export type AssetPriceAssetInfoIdOpen_TimeCompoundUniqueInput = {
    assetInfoId: Scalars["String"]["input"];
    open_time: Scalars["DateTime"]["input"];
};

export type AssetPriceAvgAggregate = {
    __typename?: "AssetPriceAvgAggregate";
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type AssetPriceCountAggregate = {
    __typename?: "AssetPriceCountAggregate";
    _all: Scalars["Int"]["output"];
    assetInfoId: Scalars["Int"]["output"];
    closePrice: Scalars["Int"]["output"];
    close_time: Scalars["Int"]["output"];
    highPrice: Scalars["Int"]["output"];
    interval: Scalars["Int"]["output"];
    lowPrice: Scalars["Int"]["output"];
    openPrice: Scalars["Int"]["output"];
    open_time: Scalars["Int"]["output"];
    volume: Scalars["Int"]["output"];
};

export type AssetPriceCreateManyAssetInfoInput = {
    closePrice: Scalars["Float"]["input"];
    close_time: Scalars["DateTime"]["input"];
    highPrice: Scalars["Float"]["input"];
    interval: Scalars["String"]["input"];
    lowPrice: Scalars["Float"]["input"];
    openPrice: Scalars["Float"]["input"];
    open_time: Scalars["DateTime"]["input"];
    volume: Scalars["Float"]["input"];
};

export type AssetPriceCreateManyAssetInfoInputEnvelope = {
    data: Array<AssetPriceCreateManyAssetInfoInput>;
    skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetPriceCreateNestedManyWithoutAssetInfoInput = {
    connect?: InputMaybe<Array<AssetPriceWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<
        Array<AssetPriceCreateOrConnectWithoutAssetInfoInput>
    >;
    create?: InputMaybe<Array<AssetPriceCreateWithoutAssetInfoInput>>;
    createMany?: InputMaybe<AssetPriceCreateManyAssetInfoInputEnvelope>;
};

export type AssetPriceCreateOrConnectWithoutAssetInfoInput = {
    create: AssetPriceCreateWithoutAssetInfoInput;
    where: AssetPriceWhereUniqueInput;
};

export type AssetPriceCreateWithoutAssetInfoInput = {
    closePrice: Scalars["Float"]["input"];
    close_time: Scalars["DateTime"]["input"];
    highPrice: Scalars["Float"]["input"];
    interval: Scalars["String"]["input"];
    lowPrice: Scalars["Float"]["input"];
    openPrice: Scalars["Float"]["input"];
    open_time: Scalars["DateTime"]["input"];
    volume: Scalars["Float"]["input"];
};

export type AssetPriceListRelationFilter = {
    every?: InputMaybe<AssetPriceWhereInput>;
    none?: InputMaybe<AssetPriceWhereInput>;
    some?: InputMaybe<AssetPriceWhereInput>;
};

export type AssetPriceMaxAggregate = {
    __typename?: "AssetPriceMaxAggregate";
    assetInfoId?: Maybe<Scalars["String"]["output"]>;
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    close_time?: Maybe<Scalars["DateTime"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    interval?: Maybe<Scalars["String"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    open_time?: Maybe<Scalars["DateTime"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type AssetPriceMinAggregate = {
    __typename?: "AssetPriceMinAggregate";
    assetInfoId?: Maybe<Scalars["String"]["output"]>;
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    close_time?: Maybe<Scalars["DateTime"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    interval?: Maybe<Scalars["String"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    open_time?: Maybe<Scalars["DateTime"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type AssetPriceSumAggregate = {
    __typename?: "AssetPriceSumAggregate";
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type AssetPriceWhereInput = {
    AND?: InputMaybe<Array<AssetPriceWhereInput>>;
    NOT?: InputMaybe<Array<AssetPriceWhereInput>>;
    OR?: InputMaybe<Array<AssetPriceWhereInput>>;
    assetInfo?: InputMaybe<AssetInfoRelationFilter>;
    assetInfoId?: InputMaybe<StringFilter>;
    closePrice?: InputMaybe<FloatFilter>;
    close_time?: InputMaybe<DateTimeFilter>;
    highPrice?: InputMaybe<FloatFilter>;
    interval?: InputMaybe<StringFilter>;
    lowPrice?: InputMaybe<FloatFilter>;
    openPrice?: InputMaybe<FloatFilter>;
    open_time?: InputMaybe<DateTimeFilter>;
    volume?: InputMaybe<FloatFilter>;
};

export type AssetPriceWhereUniqueInput = {
    AND?: InputMaybe<Array<AssetPriceWhereInput>>;
    NOT?: InputMaybe<Array<AssetPriceWhereInput>>;
    OR?: InputMaybe<Array<AssetPriceWhereInput>>;
    assetInfo?: InputMaybe<AssetInfoRelationFilter>;
    assetInfoId?: InputMaybe<StringFilter>;
    assetInfoId_open_time?: InputMaybe<AssetPriceAssetInfoIdOpen_TimeCompoundUniqueInput>;
    closePrice?: InputMaybe<FloatFilter>;
    close_time?: InputMaybe<DateTimeFilter>;
    highPrice?: InputMaybe<FloatFilter>;
    interval?: InputMaybe<StringFilter>;
    lowPrice?: InputMaybe<FloatFilter>;
    openPrice?: InputMaybe<FloatFilter>;
    open_time?: InputMaybe<DateTimeFilter>;
    volume?: InputMaybe<FloatFilter>;
};

export type Asset_Price_1MAvgAggregate = {
    __typename?: "Asset_price_1MAvgAggregate";
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type Asset_Price_1MCountAggregate = {
    __typename?: "Asset_price_1MCountAggregate";
    _all: Scalars["Int"]["output"];
    assetInfoId: Scalars["Int"]["output"];
    closePrice: Scalars["Int"]["output"];
    highPrice: Scalars["Int"]["output"];
    lowPrice: Scalars["Int"]["output"];
    openPrice: Scalars["Int"]["output"];
    open_time: Scalars["Int"]["output"];
    volume: Scalars["Int"]["output"];
};

export type Asset_Price_1MMaxAggregate = {
    __typename?: "Asset_price_1MMaxAggregate";
    assetInfoId?: Maybe<Scalars["String"]["output"]>;
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    open_time?: Maybe<Scalars["DateTime"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type Asset_Price_1MMinAggregate = {
    __typename?: "Asset_price_1MMinAggregate";
    assetInfoId?: Maybe<Scalars["String"]["output"]>;
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    open_time?: Maybe<Scalars["DateTime"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type Asset_Price_1MSumAggregate = {
    __typename?: "Asset_price_1MSumAggregate";
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type Asset_Price_1dAvgAggregate = {
    __typename?: "Asset_price_1dAvgAggregate";
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type Asset_Price_1dCountAggregate = {
    __typename?: "Asset_price_1dCountAggregate";
    _all: Scalars["Int"]["output"];
    assetInfoId: Scalars["Int"]["output"];
    closePrice: Scalars["Int"]["output"];
    highPrice: Scalars["Int"]["output"];
    lowPrice: Scalars["Int"]["output"];
    openPrice: Scalars["Int"]["output"];
    open_time: Scalars["Int"]["output"];
    volume: Scalars["Int"]["output"];
};

export type Asset_Price_1dMaxAggregate = {
    __typename?: "Asset_price_1dMaxAggregate";
    assetInfoId?: Maybe<Scalars["String"]["output"]>;
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    open_time?: Maybe<Scalars["DateTime"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type Asset_Price_1dMinAggregate = {
    __typename?: "Asset_price_1dMinAggregate";
    assetInfoId?: Maybe<Scalars["String"]["output"]>;
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    open_time?: Maybe<Scalars["DateTime"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type Asset_Price_1dSumAggregate = {
    __typename?: "Asset_price_1dSumAggregate";
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type Asset_Price_1hAvgAggregate = {
    __typename?: "Asset_price_1hAvgAggregate";
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type Asset_Price_1hCountAggregate = {
    __typename?: "Asset_price_1hCountAggregate";
    _all: Scalars["Int"]["output"];
    assetInfoId: Scalars["Int"]["output"];
    closePrice: Scalars["Int"]["output"];
    highPrice: Scalars["Int"]["output"];
    lowPrice: Scalars["Int"]["output"];
    openPrice: Scalars["Int"]["output"];
    open_time: Scalars["Int"]["output"];
    volume: Scalars["Int"]["output"];
};

export type Asset_Price_1hMaxAggregate = {
    __typename?: "Asset_price_1hMaxAggregate";
    assetInfoId?: Maybe<Scalars["String"]["output"]>;
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    open_time?: Maybe<Scalars["DateTime"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type Asset_Price_1hMinAggregate = {
    __typename?: "Asset_price_1hMinAggregate";
    assetInfoId?: Maybe<Scalars["String"]["output"]>;
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    open_time?: Maybe<Scalars["DateTime"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type Asset_Price_1hSumAggregate = {
    __typename?: "Asset_price_1hSumAggregate";
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type Asset_Price_5mAvgAggregate = {
    __typename?: "Asset_price_5mAvgAggregate";
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type Asset_Price_5mCountAggregate = {
    __typename?: "Asset_price_5mCountAggregate";
    _all: Scalars["Int"]["output"];
    assetInfoId: Scalars["Int"]["output"];
    closePrice: Scalars["Int"]["output"];
    highPrice: Scalars["Int"]["output"];
    lowPrice: Scalars["Int"]["output"];
    openPrice: Scalars["Int"]["output"];
    open_time: Scalars["Int"]["output"];
    volume: Scalars["Int"]["output"];
};

export type Asset_Price_5mMaxAggregate = {
    __typename?: "Asset_price_5mMaxAggregate";
    assetInfoId?: Maybe<Scalars["String"]["output"]>;
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    open_time?: Maybe<Scalars["DateTime"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type Asset_Price_5mMinAggregate = {
    __typename?: "Asset_price_5mMinAggregate";
    assetInfoId?: Maybe<Scalars["String"]["output"]>;
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    open_time?: Maybe<Scalars["DateTime"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type Asset_Price_5mSumAggregate = {
    __typename?: "Asset_price_5mSumAggregate";
    closePrice?: Maybe<Scalars["Float"]["output"]>;
    highPrice?: Maybe<Scalars["Float"]["output"]>;
    lowPrice?: Maybe<Scalars["Float"]["output"]>;
    openPrice?: Maybe<Scalars["Float"]["output"]>;
    volume?: Maybe<Scalars["Float"]["output"]>;
};

export type CreateCryptoProfileInput = {
    apiKey: Scalars["String"]["input"];
    secretKey: Scalars["String"]["input"];
    userId: Scalars["Int"]["input"];
};

export type CreateCryptoRes = {
    __typename?: "CreateCryptoRes";
    userId: Scalars["Float"]["output"];
};

export type DateTimeFilter = {
    equals?: InputMaybe<Scalars["DateTime"]["input"]>;
    gt?: InputMaybe<Scalars["DateTime"]["input"]>;
    gte?: InputMaybe<Scalars["DateTime"]["input"]>;
    in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
    lt?: InputMaybe<Scalars["DateTime"]["input"]>;
    lte?: InputMaybe<Scalars["DateTime"]["input"]>;
    not?: InputMaybe<NestedDateTimeFilter>;
    notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type DateTimeNullableFilter = {
    equals?: InputMaybe<Scalars["DateTime"]["input"]>;
    gt?: InputMaybe<Scalars["DateTime"]["input"]>;
    gte?: InputMaybe<Scalars["DateTime"]["input"]>;
    in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
    lt?: InputMaybe<Scalars["DateTime"]["input"]>;
    lte?: InputMaybe<Scalars["DateTime"]["input"]>;
    not?: InputMaybe<NestedDateTimeNullableFilter>;
    notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type EnumOtpPurposeNullableFilter = {
    equals?: InputMaybe<OtpPurpose>;
    in?: InputMaybe<Array<OtpPurpose>>;
    not?: InputMaybe<NestedEnumOtpPurposeNullableFilter>;
    notIn?: InputMaybe<Array<OtpPurpose>>;
};

export type EnumTradingTypeFilter = {
    equals?: InputMaybe<TradingType>;
    in?: InputMaybe<Array<TradingType>>;
    not?: InputMaybe<NestedEnumTradingTypeFilter>;
    notIn?: InputMaybe<Array<TradingType>>;
};

export type FloatFilter = {
    equals?: InputMaybe<Scalars["Float"]["input"]>;
    gt?: InputMaybe<Scalars["Float"]["input"]>;
    gte?: InputMaybe<Scalars["Float"]["input"]>;
    in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    lt?: InputMaybe<Scalars["Float"]["input"]>;
    lte?: InputMaybe<Scalars["Float"]["input"]>;
    not?: InputMaybe<NestedFloatFilter>;
    notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type GetAssetInfoInput = {
    id: Scalars["String"]["input"];
};

export type GetAssetPriceInput = {
    assetInfoId: Scalars["String"]["input"];
    timeFrame: Scalars["String"]["input"];
};

export type GetCryptoProfileInput = {
    userId: Scalars["Int"]["input"];
};

export type HistoricalCryptoBalance = {
    __typename?: "HistoricalCryptoBalance";
    changeBalance: Scalars["Float"]["output"];
    changePercent: Scalars["Float"]["output"];
    cryptoProfile: UserCryptoProfile;
    cryptoProfileId: Scalars["String"]["output"];
    estimatedBalance: Scalars["Float"]["output"];
    time: Scalars["DateTime"]["output"];
};

export type HistoricalCryptoBalanceAvgAggregate = {
    __typename?: "HistoricalCryptoBalanceAvgAggregate";
    changeBalance?: Maybe<Scalars["Float"]["output"]>;
    changePercent?: Maybe<Scalars["Float"]["output"]>;
    estimatedBalance?: Maybe<Scalars["Float"]["output"]>;
};

export type HistoricalCryptoBalanceCountAggregate = {
    __typename?: "HistoricalCryptoBalanceCountAggregate";
    _all: Scalars["Int"]["output"];
    changeBalance: Scalars["Int"]["output"];
    changePercent: Scalars["Int"]["output"];
    cryptoProfileId: Scalars["Int"]["output"];
    estimatedBalance: Scalars["Int"]["output"];
    time: Scalars["Int"]["output"];
};

export type HistoricalCryptoBalanceCreateManyCryptoProfileInput = {
    changeBalance: Scalars["Float"]["input"];
    changePercent: Scalars["Float"]["input"];
    estimatedBalance: Scalars["Float"]["input"];
    time: Scalars["DateTime"]["input"];
};

export type HistoricalCryptoBalanceCreateManyCryptoProfileInputEnvelope = {
    data: Array<HistoricalCryptoBalanceCreateManyCryptoProfileInput>;
    skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type HistoricalCryptoBalanceCreateNestedManyWithoutCryptoProfileInput = {
    connect?: InputMaybe<Array<HistoricalCryptoBalanceWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<
        Array<HistoricalCryptoBalanceCreateOrConnectWithoutCryptoProfileInput>
    >;
    create?: InputMaybe<
        Array<HistoricalCryptoBalanceCreateWithoutCryptoProfileInput>
    >;
    createMany?: InputMaybe<HistoricalCryptoBalanceCreateManyCryptoProfileInputEnvelope>;
};

export type HistoricalCryptoBalanceCreateOrConnectWithoutCryptoProfileInput = {
    create: HistoricalCryptoBalanceCreateWithoutCryptoProfileInput;
    where: HistoricalCryptoBalanceWhereUniqueInput;
};

export type HistoricalCryptoBalanceCreateWithoutCryptoProfileInput = {
    changeBalance: Scalars["Float"]["input"];
    changePercent: Scalars["Float"]["input"];
    estimatedBalance: Scalars["Float"]["input"];
    time: Scalars["DateTime"]["input"];
};

export type HistoricalCryptoBalanceCryptoProfileIdTimeCompoundUniqueInput = {
    cryptoProfileId: Scalars["String"]["input"];
    time: Scalars["DateTime"]["input"];
};

export type HistoricalCryptoBalanceListRelationFilter = {
    every?: InputMaybe<HistoricalCryptoBalanceWhereInput>;
    none?: InputMaybe<HistoricalCryptoBalanceWhereInput>;
    some?: InputMaybe<HistoricalCryptoBalanceWhereInput>;
};

export type HistoricalCryptoBalanceMaxAggregate = {
    __typename?: "HistoricalCryptoBalanceMaxAggregate";
    changeBalance?: Maybe<Scalars["Float"]["output"]>;
    changePercent?: Maybe<Scalars["Float"]["output"]>;
    cryptoProfileId?: Maybe<Scalars["String"]["output"]>;
    estimatedBalance?: Maybe<Scalars["Float"]["output"]>;
    time?: Maybe<Scalars["DateTime"]["output"]>;
};

export type HistoricalCryptoBalanceMinAggregate = {
    __typename?: "HistoricalCryptoBalanceMinAggregate";
    changeBalance?: Maybe<Scalars["Float"]["output"]>;
    changePercent?: Maybe<Scalars["Float"]["output"]>;
    cryptoProfileId?: Maybe<Scalars["String"]["output"]>;
    estimatedBalance?: Maybe<Scalars["Float"]["output"]>;
    time?: Maybe<Scalars["DateTime"]["output"]>;
};

export type HistoricalCryptoBalanceSumAggregate = {
    __typename?: "HistoricalCryptoBalanceSumAggregate";
    changeBalance?: Maybe<Scalars["Float"]["output"]>;
    changePercent?: Maybe<Scalars["Float"]["output"]>;
    estimatedBalance?: Maybe<Scalars["Float"]["output"]>;
};

export type HistoricalCryptoBalanceWhereInput = {
    AND?: InputMaybe<Array<HistoricalCryptoBalanceWhereInput>>;
    NOT?: InputMaybe<Array<HistoricalCryptoBalanceWhereInput>>;
    OR?: InputMaybe<Array<HistoricalCryptoBalanceWhereInput>>;
    changeBalance?: InputMaybe<FloatFilter>;
    changePercent?: InputMaybe<FloatFilter>;
    cryptoProfile?: InputMaybe<UserCryptoProfileRelationFilter>;
    cryptoProfileId?: InputMaybe<StringFilter>;
    estimatedBalance?: InputMaybe<FloatFilter>;
    time?: InputMaybe<DateTimeFilter>;
};

export type HistoricalCryptoBalanceWhereUniqueInput = {
    AND?: InputMaybe<Array<HistoricalCryptoBalanceWhereInput>>;
    NOT?: InputMaybe<Array<HistoricalCryptoBalanceWhereInput>>;
    OR?: InputMaybe<Array<HistoricalCryptoBalanceWhereInput>>;
    changeBalance?: InputMaybe<FloatFilter>;
    changePercent?: InputMaybe<FloatFilter>;
    cryptoProfile?: InputMaybe<UserCryptoProfileRelationFilter>;
    cryptoProfileId?: InputMaybe<StringFilter>;
    cryptoProfileId_time?: InputMaybe<HistoricalCryptoBalanceCryptoProfileIdTimeCompoundUniqueInput>;
    estimatedBalance?: InputMaybe<FloatFilter>;
    time?: InputMaybe<DateTimeFilter>;
};

export type IntFilter = {
    equals?: InputMaybe<Scalars["Int"]["input"]>;
    gt?: InputMaybe<Scalars["Int"]["input"]>;
    gte?: InputMaybe<Scalars["Int"]["input"]>;
    in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
    lt?: InputMaybe<Scalars["Int"]["input"]>;
    lte?: InputMaybe<Scalars["Int"]["input"]>;
    not?: InputMaybe<NestedIntFilter>;
    notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type LoginReqDto = {
    email: Scalars["String"]["input"];
    password: Scalars["String"]["input"];
};

export type LoginResDto = {
    __typename?: "LoginResDto";
    accessToken: Scalars["String"]["output"];
    refreshToken: Scalars["String"]["output"];
};

export type Mutation = {
    __typename?: "Mutation";
    createCryptoProfile: CreateCryptoRes;
    login: LoginResDto;
    signup: SignupResDto;
    verifyAccount: LoginResDto;
};

export type MutationCreateCryptoProfileArgs = {
    data: CreateCryptoProfileInput;
};

export type MutationLoginArgs = {
    data: LoginReqDto;
};

export type MutationSignupArgs = {
    data: UserCreateInput;
};

export type MutationVerifyAccountArgs = {
    data: VerifyDto;
};

export type NestedDateTimeFilter = {
    equals?: InputMaybe<Scalars["DateTime"]["input"]>;
    gt?: InputMaybe<Scalars["DateTime"]["input"]>;
    gte?: InputMaybe<Scalars["DateTime"]["input"]>;
    in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
    lt?: InputMaybe<Scalars["DateTime"]["input"]>;
    lte?: InputMaybe<Scalars["DateTime"]["input"]>;
    not?: InputMaybe<NestedDateTimeFilter>;
    notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type NestedDateTimeNullableFilter = {
    equals?: InputMaybe<Scalars["DateTime"]["input"]>;
    gt?: InputMaybe<Scalars["DateTime"]["input"]>;
    gte?: InputMaybe<Scalars["DateTime"]["input"]>;
    in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
    lt?: InputMaybe<Scalars["DateTime"]["input"]>;
    lte?: InputMaybe<Scalars["DateTime"]["input"]>;
    not?: InputMaybe<NestedDateTimeNullableFilter>;
    notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type NestedEnumOtpPurposeNullableFilter = {
    equals?: InputMaybe<OtpPurpose>;
    in?: InputMaybe<Array<OtpPurpose>>;
    not?: InputMaybe<NestedEnumOtpPurposeNullableFilter>;
    notIn?: InputMaybe<Array<OtpPurpose>>;
};

export type NestedEnumTradingTypeFilter = {
    equals?: InputMaybe<TradingType>;
    in?: InputMaybe<Array<TradingType>>;
    not?: InputMaybe<NestedEnumTradingTypeFilter>;
    notIn?: InputMaybe<Array<TradingType>>;
};

export type NestedFloatFilter = {
    equals?: InputMaybe<Scalars["Float"]["input"]>;
    gt?: InputMaybe<Scalars["Float"]["input"]>;
    gte?: InputMaybe<Scalars["Float"]["input"]>;
    in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    lt?: InputMaybe<Scalars["Float"]["input"]>;
    lte?: InputMaybe<Scalars["Float"]["input"]>;
    not?: InputMaybe<NestedFloatFilter>;
    notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type NestedIntFilter = {
    equals?: InputMaybe<Scalars["Int"]["input"]>;
    gt?: InputMaybe<Scalars["Int"]["input"]>;
    gte?: InputMaybe<Scalars["Int"]["input"]>;
    in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
    lt?: InputMaybe<Scalars["Int"]["input"]>;
    lte?: InputMaybe<Scalars["Int"]["input"]>;
    not?: InputMaybe<NestedIntFilter>;
    notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type NestedStringFilter = {
    contains?: InputMaybe<Scalars["String"]["input"]>;
    endsWith?: InputMaybe<Scalars["String"]["input"]>;
    equals?: InputMaybe<Scalars["String"]["input"]>;
    gt?: InputMaybe<Scalars["String"]["input"]>;
    gte?: InputMaybe<Scalars["String"]["input"]>;
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    lt?: InputMaybe<Scalars["String"]["input"]>;
    lte?: InputMaybe<Scalars["String"]["input"]>;
    not?: InputMaybe<NestedStringFilter>;
    notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
    startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedStringNullableFilter = {
    contains?: InputMaybe<Scalars["String"]["input"]>;
    endsWith?: InputMaybe<Scalars["String"]["input"]>;
    equals?: InputMaybe<Scalars["String"]["input"]>;
    gt?: InputMaybe<Scalars["String"]["input"]>;
    gte?: InputMaybe<Scalars["String"]["input"]>;
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    lt?: InputMaybe<Scalars["String"]["input"]>;
    lte?: InputMaybe<Scalars["String"]["input"]>;
    not?: InputMaybe<NestedStringNullableFilter>;
    notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
    startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export enum OtpPurpose {
    ResetPassword = "RESET_PASSWORD",
    VerifyAccount = "VERIFY_ACCOUNT",
}

export type Query = {
    __typename?: "Query";
    getAssetInfo: AssetInfo;
    getAssetPrices: Array<AssetPrice>;
    getCryptoProfiles: Array<UserCryptoProfile>;
    getMe: User;
};

export type QueryGetAssetInfoArgs = {
    data: GetAssetInfoInput;
};

export type QueryGetAssetPricesArgs = {
    data: GetAssetPriceInput;
};

export type QueryGetCryptoProfilesArgs = {
    data: GetCryptoProfileInput;
};

export enum QueryMode {
    Default = "default",
    Insensitive = "insensitive",
}

export type SignupResDto = {
    __typename?: "SignupResDto";
    accessToken: Scalars["String"]["output"];
    refreshToken: Scalars["String"]["output"];
};

export type StringFilter = {
    contains?: InputMaybe<Scalars["String"]["input"]>;
    endsWith?: InputMaybe<Scalars["String"]["input"]>;
    equals?: InputMaybe<Scalars["String"]["input"]>;
    gt?: InputMaybe<Scalars["String"]["input"]>;
    gte?: InputMaybe<Scalars["String"]["input"]>;
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    lt?: InputMaybe<Scalars["String"]["input"]>;
    lte?: InputMaybe<Scalars["String"]["input"]>;
    mode?: InputMaybe<QueryMode>;
    not?: InputMaybe<NestedStringFilter>;
    notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
    startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type StringNullableFilter = {
    contains?: InputMaybe<Scalars["String"]["input"]>;
    endsWith?: InputMaybe<Scalars["String"]["input"]>;
    equals?: InputMaybe<Scalars["String"]["input"]>;
    gt?: InputMaybe<Scalars["String"]["input"]>;
    gte?: InputMaybe<Scalars["String"]["input"]>;
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    lt?: InputMaybe<Scalars["String"]["input"]>;
    lte?: InputMaybe<Scalars["String"]["input"]>;
    mode?: InputMaybe<QueryMode>;
    not?: InputMaybe<NestedStringNullableFilter>;
    notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
    startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type Subscription = {
    __typename?: "Subscription";
    newAssetPrice1m: AssetPrice;
    newAssetPrice5m: AssetPrice;
    profileCreated: UserCryptoProfile;
};

export type SubscriptionNewAssetPrice1mArgs = {
    data: GetAssetPriceInput;
};

export type SubscriptionNewAssetPrice5mArgs = {
    data: GetAssetPriceInput;
};

export type SubscriptionProfileCreatedArgs = {
    data: GetCryptoProfileInput;
};

export enum TradingType {
    Futures = "FUTURES",
    Spot = "SPOT",
}

export type User = {
    __typename?: "User";
    _count: UserCount;
    cryptoProfiles: UserCryptoProfile;
    email: Scalars["String"]["output"];
    id: Scalars["ID"]["output"];
    name?: Maybe<Scalars["String"]["output"]>;
    otp?: Maybe<Scalars["String"]["output"]>;
    otpPurpose?: Maybe<OtpPurpose>;
    password: Scalars["String"]["output"];
};

export type UserAvgAggregate = {
    __typename?: "UserAvgAggregate";
    id?: Maybe<Scalars["Float"]["output"]>;
};

export type UserCount = {
    __typename?: "UserCount";
    cryptoProfiles: Scalars["Int"]["output"];
};

export type UserCountAggregate = {
    __typename?: "UserCountAggregate";
    _all: Scalars["Int"]["output"];
    email: Scalars["Int"]["output"];
    id: Scalars["Int"]["output"];
    name: Scalars["Int"]["output"];
    otp: Scalars["Int"]["output"];
    otpPurpose: Scalars["Int"]["output"];
    password: Scalars["Int"]["output"];
};

export type UserCreateInput = {
    cryptoProfiles?: InputMaybe<UserCryptoProfileCreateNestedManyWithoutUserInput>;
    email: Scalars["String"]["input"];
    name?: InputMaybe<Scalars["String"]["input"]>;
    otp?: InputMaybe<Scalars["String"]["input"]>;
    otpPurpose?: InputMaybe<OtpPurpose>;
    password: Scalars["String"]["input"];
};

export type UserCryptoProfile = {
    __typename?: "UserCryptoProfile";
    _count: UserCryptoProfileCount;
    apiKey: Scalars["String"]["output"];
    balances: Array<AssetBalance>;
    exchanges: Scalars["String"]["output"];
    historicalBalances: Array<HistoricalCryptoBalance>;
    profileId: Scalars["ID"]["output"];
    secretKey: Scalars["String"]["output"];
    tradingType: TradingType;
    updateTime?: Maybe<Scalars["DateTime"]["output"]>;
    user: User;
    userId: Scalars["Int"]["output"];
};

export type UserCryptoProfileAvgAggregate = {
    __typename?: "UserCryptoProfileAvgAggregate";
    userId?: Maybe<Scalars["Float"]["output"]>;
};

export type UserCryptoProfileCount = {
    __typename?: "UserCryptoProfileCount";
    balances: Scalars["Int"]["output"];
    historicalBalances: Scalars["Int"]["output"];
};

export type UserCryptoProfileCountAggregate = {
    __typename?: "UserCryptoProfileCountAggregate";
    _all: Scalars["Int"]["output"];
    apiKey: Scalars["Int"]["output"];
    exchanges: Scalars["Int"]["output"];
    profileId: Scalars["Int"]["output"];
    secretKey: Scalars["Int"]["output"];
    tradingType: Scalars["Int"]["output"];
    updateTime: Scalars["Int"]["output"];
    userId: Scalars["Int"]["output"];
};

export type UserCryptoProfileCreateManyUserInput = {
    apiKey: Scalars["String"]["input"];
    exchanges?: InputMaybe<Scalars["String"]["input"]>;
    profileId?: InputMaybe<Scalars["String"]["input"]>;
    secretKey: Scalars["String"]["input"];
    tradingType: TradingType;
    updateTime?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserCryptoProfileCreateManyUserInputEnvelope = {
    data: Array<UserCryptoProfileCreateManyUserInput>;
    skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserCryptoProfileCreateNestedManyWithoutUserInput = {
    connect?: InputMaybe<Array<UserCryptoProfileWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<
        Array<UserCryptoProfileCreateOrConnectWithoutUserInput>
    >;
    create?: InputMaybe<Array<UserCryptoProfileCreateWithoutUserInput>>;
    createMany?: InputMaybe<UserCryptoProfileCreateManyUserInputEnvelope>;
};

export type UserCryptoProfileCreateOrConnectWithoutUserInput = {
    create: UserCryptoProfileCreateWithoutUserInput;
    where: UserCryptoProfileWhereUniqueInput;
};

export type UserCryptoProfileCreateWithoutUserInput = {
    apiKey: Scalars["String"]["input"];
    balances?: InputMaybe<AssetBalanceCreateNestedManyWithoutCryptoProfileInput>;
    exchanges?: InputMaybe<Scalars["String"]["input"]>;
    historicalBalances?: InputMaybe<HistoricalCryptoBalanceCreateNestedManyWithoutCryptoProfileInput>;
    profileId?: InputMaybe<Scalars["String"]["input"]>;
    secretKey: Scalars["String"]["input"];
    tradingType: TradingType;
    updateTime?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserCryptoProfileListRelationFilter = {
    every?: InputMaybe<UserCryptoProfileWhereInput>;
    none?: InputMaybe<UserCryptoProfileWhereInput>;
    some?: InputMaybe<UserCryptoProfileWhereInput>;
};

export type UserCryptoProfileMaxAggregate = {
    __typename?: "UserCryptoProfileMaxAggregate";
    apiKey?: Maybe<Scalars["String"]["output"]>;
    exchanges?: Maybe<Scalars["String"]["output"]>;
    profileId?: Maybe<Scalars["String"]["output"]>;
    secretKey?: Maybe<Scalars["String"]["output"]>;
    tradingType?: Maybe<TradingType>;
    updateTime?: Maybe<Scalars["DateTime"]["output"]>;
    userId?: Maybe<Scalars["Int"]["output"]>;
};

export type UserCryptoProfileMinAggregate = {
    __typename?: "UserCryptoProfileMinAggregate";
    apiKey?: Maybe<Scalars["String"]["output"]>;
    exchanges?: Maybe<Scalars["String"]["output"]>;
    profileId?: Maybe<Scalars["String"]["output"]>;
    secretKey?: Maybe<Scalars["String"]["output"]>;
    tradingType?: Maybe<TradingType>;
    updateTime?: Maybe<Scalars["DateTime"]["output"]>;
    userId?: Maybe<Scalars["Int"]["output"]>;
};

export type UserCryptoProfileRelationFilter = {
    is?: InputMaybe<UserCryptoProfileWhereInput>;
    isNot?: InputMaybe<UserCryptoProfileWhereInput>;
};

export type UserCryptoProfileSumAggregate = {
    __typename?: "UserCryptoProfileSumAggregate";
    userId?: Maybe<Scalars["Int"]["output"]>;
};

export type UserCryptoProfileWhereInput = {
    AND?: InputMaybe<Array<UserCryptoProfileWhereInput>>;
    NOT?: InputMaybe<Array<UserCryptoProfileWhereInput>>;
    OR?: InputMaybe<Array<UserCryptoProfileWhereInput>>;
    apiKey?: InputMaybe<StringFilter>;
    balances?: InputMaybe<AssetBalanceListRelationFilter>;
    exchanges?: InputMaybe<StringFilter>;
    historicalBalances?: InputMaybe<HistoricalCryptoBalanceListRelationFilter>;
    profileId?: InputMaybe<StringFilter>;
    secretKey?: InputMaybe<StringFilter>;
    tradingType?: InputMaybe<EnumTradingTypeFilter>;
    updateTime?: InputMaybe<DateTimeNullableFilter>;
    user?: InputMaybe<UserRelationFilter>;
    userId?: InputMaybe<IntFilter>;
};

export type UserCryptoProfileWhereUniqueInput = {
    AND?: InputMaybe<Array<UserCryptoProfileWhereInput>>;
    NOT?: InputMaybe<Array<UserCryptoProfileWhereInput>>;
    OR?: InputMaybe<Array<UserCryptoProfileWhereInput>>;
    apiKey?: InputMaybe<StringFilter>;
    balances?: InputMaybe<AssetBalanceListRelationFilter>;
    exchanges?: InputMaybe<StringFilter>;
    historicalBalances?: InputMaybe<HistoricalCryptoBalanceListRelationFilter>;
    profileId?: InputMaybe<Scalars["String"]["input"]>;
    secretKey?: InputMaybe<StringFilter>;
    tradingType?: InputMaybe<EnumTradingTypeFilter>;
    updateTime?: InputMaybe<DateTimeNullableFilter>;
    user?: InputMaybe<UserRelationFilter>;
    userId?: InputMaybe<IntFilter>;
};

export type UserMaxAggregate = {
    __typename?: "UserMaxAggregate";
    email?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    name?: Maybe<Scalars["String"]["output"]>;
    otp?: Maybe<Scalars["String"]["output"]>;
    otpPurpose?: Maybe<OtpPurpose>;
    password?: Maybe<Scalars["String"]["output"]>;
};

export type UserMinAggregate = {
    __typename?: "UserMinAggregate";
    email?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    name?: Maybe<Scalars["String"]["output"]>;
    otp?: Maybe<Scalars["String"]["output"]>;
    otpPurpose?: Maybe<OtpPurpose>;
    password?: Maybe<Scalars["String"]["output"]>;
};

export type UserRelationFilter = {
    is?: InputMaybe<UserWhereInput>;
    isNot?: InputMaybe<UserWhereInput>;
};

export type UserSumAggregate = {
    __typename?: "UserSumAggregate";
    id?: Maybe<Scalars["Int"]["output"]>;
};

export type UserWhereInput = {
    AND?: InputMaybe<Array<UserWhereInput>>;
    NOT?: InputMaybe<Array<UserWhereInput>>;
    OR?: InputMaybe<Array<UserWhereInput>>;
    cryptoProfiles?: InputMaybe<UserCryptoProfileListRelationFilter>;
    email?: InputMaybe<StringFilter>;
    id?: InputMaybe<IntFilter>;
    name?: InputMaybe<StringNullableFilter>;
    otp?: InputMaybe<StringNullableFilter>;
    otpPurpose?: InputMaybe<EnumOtpPurposeNullableFilter>;
    password?: InputMaybe<StringFilter>;
};

export type VerifyDto = {
    otp: Scalars["String"]["input"];
    otpPurpose: OtpPurpose;
};
