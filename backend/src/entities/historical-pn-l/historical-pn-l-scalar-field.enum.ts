import { registerEnumType } from "@nestjs/graphql";

export enum HistoricalPnLScalarFieldEnum {
    cryptoProfileId = "cryptoProfileId",
    time = "time",
    estimatedBalance = "estimatedBalance",
    changePercent = "changePercent",
    changeBalance = "changeBalance",
}

registerEnumType(HistoricalPnLScalarFieldEnum, {
    name: "HistoricalPnLScalarFieldEnum",
    description: undefined,
});
