import { registerEnumType } from "@nestjs/graphql";

export enum HistoricalCryptoBalanceScalarFieldEnum {
    cryptoProfileId = "cryptoProfileId",
    time = "time",
    estimatedBalance = "estimatedBalance",
    changePercent = "changePercent",
    changeBalance = "changeBalance",
}

registerEnumType(HistoricalCryptoBalanceScalarFieldEnum, {
    name: "HistoricalCryptoBalanceScalarFieldEnum",
    description: undefined,
});
