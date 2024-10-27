import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetBalanceWhereUniqueInput } from "./asset-balance-where-unique.input";
import { Type } from "class-transformer";
import { AssetBalanceUpdateWithoutCryptoProfileInput } from "./asset-balance-update-without-crypto-profile.input";

@InputType()
export class AssetBalanceUpdateWithWhereUniqueWithoutCryptoProfileInput {
    @Field(() => AssetBalanceWhereUniqueInput, { nullable: false })
    @Type(() => AssetBalanceWhereUniqueInput)
    where!: Prisma.AtLeast<AssetBalanceWhereUniqueInput, "id">;

    @Field(() => AssetBalanceUpdateWithoutCryptoProfileInput, {
        nullable: false,
    })
    @Type(() => AssetBalanceUpdateWithoutCryptoProfileInput)
    data!: AssetBalanceUpdateWithoutCryptoProfileInput;
}
