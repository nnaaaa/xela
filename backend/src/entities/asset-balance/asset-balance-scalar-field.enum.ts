import { registerEnumType } from "@nestjs/graphql";

export enum AssetBalanceScalarFieldEnum {
    id = "id",
    cryptoProfileId = "cryptoProfileId",
    assetInfoId = "assetInfoId",
    balance = "balance",
    locked = "locked",
}

registerEnumType(AssetBalanceScalarFieldEnum, {
    name: "AssetBalanceScalarFieldEnum",
    description: undefined,
});
