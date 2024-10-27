/* eslint-disable */
import * as types from "./graphql.js";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "mutation Signup($data: UserCreateInput!) {\n  signup(data: $data) {\n    accessToken\n    refreshToken\n  }\n}\n\nmutation Login($data: LoginReqDto!) {\n  login(data: $data) {\n    accessToken\n  }\n}\n\nmutation VerifyAccount($data: VerifyDto!) {\n  verifyAccount(data: $data) {\n    accessToken\n  }\n}\n\nquery GetMe {\n  getMe {\n    email\n    id\n    name\n    otp\n    otpPurpose\n  }\n}\n\nmutation CreateCryptoProfile($data: CreateCryptoProfileInput!) {\n  createCryptoProfile(data: $data) {\n    userId\n  }\n}\n\nquery GetCryptoProfile($data: GetCryptoProfileInput!) {\n  getCryptoProfiles(data: $data) {\n    profileId\n    exchanges\n    tradingType\n    historicalBalances {\n      time\n      estimatedBalance\n      changePercent\n      changeBalance\n    }\n    balances {\n      balance\n      assetInfo {\n        id\n        logo\n        lastPrice\n        symbol\n      }\n    }\n  }\n}\n\nquery GetAsset($getAssetPriceData: GetAssetPriceInput!, $getAssetInfoData: GetAssetInfoInput!) {\n  getAssetPrices(data: $getAssetPriceData) {\n    open_time\n    openPrice\n    closePrice\n    highPrice\n    lowPrice\n  }\n  getAssetInfo(data: $getAssetInfoData) {\n    logo\n    desc\n    category\n    symbol\n    name\n  }\n}\n\nsubscription NewAssetPrice1m($data: GetAssetPriceInput!) {\n  newAssetPrice1m(data: $data) {\n    assetInfoId\n    open_time\n    openPrice\n    closePrice\n    highPrice\n    lowPrice\n  }\n}\n\nsubscription NewAssetPrice5m($data: GetAssetPriceInput!) {\n  newAssetPrice5m(data: $data) {\n    assetInfoId\n    open_time\n    openPrice\n    closePrice\n    highPrice\n    lowPrice\n  }\n}":
        types.SignupDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "mutation Signup($data: UserCreateInput!) {\n  signup(data: $data) {\n    accessToken\n    refreshToken\n  }\n}\n\nmutation Login($data: LoginReqDto!) {\n  login(data: $data) {\n    accessToken\n  }\n}\n\nmutation VerifyAccount($data: VerifyDto!) {\n  verifyAccount(data: $data) {\n    accessToken\n  }\n}\n\nquery GetMe {\n  getMe {\n    email\n    id\n    name\n    otp\n    otpPurpose\n  }\n}\n\nmutation CreateCryptoProfile($data: CreateCryptoProfileInput!) {\n  createCryptoProfile(data: $data) {\n    userId\n  }\n}\n\nquery GetCryptoProfile($data: GetCryptoProfileInput!) {\n  getCryptoProfiles(data: $data) {\n    profileId\n    exchanges\n    tradingType\n    historicalBalances {\n      time\n      estimatedBalance\n      changePercent\n      changeBalance\n    }\n    balances {\n      balance\n      assetInfo {\n        id\n        logo\n        lastPrice\n        symbol\n      }\n    }\n  }\n}\n\nquery GetAsset($getAssetPriceData: GetAssetPriceInput!, $getAssetInfoData: GetAssetInfoInput!) {\n  getAssetPrices(data: $getAssetPriceData) {\n    open_time\n    openPrice\n    closePrice\n    highPrice\n    lowPrice\n  }\n  getAssetInfo(data: $getAssetInfoData) {\n    logo\n    desc\n    category\n    symbol\n    name\n  }\n}\n\nsubscription NewAssetPrice1m($data: GetAssetPriceInput!) {\n  newAssetPrice1m(data: $data) {\n    assetInfoId\n    open_time\n    openPrice\n    closePrice\n    highPrice\n    lowPrice\n  }\n}\n\nsubscription NewAssetPrice5m($data: GetAssetPriceInput!) {\n  newAssetPrice5m(data: $data) {\n    assetInfoId\n    open_time\n    openPrice\n    closePrice\n    highPrice\n    lowPrice\n  }\n}",
): (typeof documents)["mutation Signup($data: UserCreateInput!) {\n  signup(data: $data) {\n    accessToken\n    refreshToken\n  }\n}\n\nmutation Login($data: LoginReqDto!) {\n  login(data: $data) {\n    accessToken\n  }\n}\n\nmutation VerifyAccount($data: VerifyDto!) {\n  verifyAccount(data: $data) {\n    accessToken\n  }\n}\n\nquery GetMe {\n  getMe {\n    email\n    id\n    name\n    otp\n    otpPurpose\n  }\n}\n\nmutation CreateCryptoProfile($data: CreateCryptoProfileInput!) {\n  createCryptoProfile(data: $data) {\n    userId\n  }\n}\n\nquery GetCryptoProfile($data: GetCryptoProfileInput!) {\n  getCryptoProfiles(data: $data) {\n    profileId\n    exchanges\n    tradingType\n    historicalBalances {\n      time\n      estimatedBalance\n      changePercent\n      changeBalance\n    }\n    balances {\n      balance\n      assetInfo {\n        id\n        logo\n        lastPrice\n        symbol\n      }\n    }\n  }\n}\n\nquery GetAsset($getAssetPriceData: GetAssetPriceInput!, $getAssetInfoData: GetAssetInfoInput!) {\n  getAssetPrices(data: $getAssetPriceData) {\n    open_time\n    openPrice\n    closePrice\n    highPrice\n    lowPrice\n  }\n  getAssetInfo(data: $getAssetInfoData) {\n    logo\n    desc\n    category\n    symbol\n    name\n  }\n}\n\nsubscription NewAssetPrice1m($data: GetAssetPriceInput!) {\n  newAssetPrice1m(data: $data) {\n    assetInfoId\n    open_time\n    openPrice\n    closePrice\n    highPrice\n    lowPrice\n  }\n}\n\nsubscription NewAssetPrice5m($data: GetAssetPriceInput!) {\n  newAssetPrice5m(data: $data) {\n    assetInfoId\n    open_time\n    openPrice\n    closePrice\n    highPrice\n    lowPrice\n  }\n}"];

export function graphql(source: string) {
    return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
    TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
