import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetBalanceWhereUniqueInput } from "./asset-balance-where-unique.input";
import { Type } from "class-transformer";
import { AssetBalanceCreateWithoutCryptoProfileInput } from "./asset-balance-create-without-crypto-profile.input";

@InputType()
export class AssetBalanceCreateOrConnectWithoutCryptoProfileInput {
    @Field(() => AssetBalanceWhereUniqueInput, { nullable: false })
    @Type(() => AssetBalanceWhereUniqueInput)
    where!: Prisma.AtLeast<AssetBalanceWhereUniqueInput, "id">;

    @Field(() => AssetBalanceCreateWithoutCryptoProfileInput, {
        nullable: false,
    })
    @Type(() => AssetBalanceCreateWithoutCryptoProfileInput)
    create!: AssetBalanceCreateWithoutCryptoProfileInput;
}
