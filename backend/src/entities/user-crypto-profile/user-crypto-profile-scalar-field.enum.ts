import { registerEnumType } from "@nestjs/graphql";

export enum UserCryptoProfileScalarFieldEnum {
    profileId = "profileId",
    userId = "userId",
    exchanges = "exchanges",
    tradingType = "tradingType",
    apiKey = "apiKey",
    secretKey = "secretKey",
    updateTime = "updateTime",
}

registerEnumType(UserCryptoProfileScalarFieldEnum, {
    name: "UserCryptoProfileScalarFieldEnum",
    description: undefined,
});
