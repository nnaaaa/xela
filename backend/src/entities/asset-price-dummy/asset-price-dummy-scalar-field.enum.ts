import { registerEnumType } from "@nestjs/graphql";

export enum AssetPriceDummyScalarFieldEnum {
    assetInfoId = "assetInfoId",
    interval = "interval",
    open_time = "open_time",
    close_time = "close_time",
    openPrice = "openPrice",
    closePrice = "closePrice",
    highPrice = "highPrice",
    lowPrice = "lowPrice",
    volume = "volume",
}

registerEnumType(AssetPriceDummyScalarFieldEnum, {
    name: "AssetPriceDummyScalarFieldEnum",
    description: undefined,
});
