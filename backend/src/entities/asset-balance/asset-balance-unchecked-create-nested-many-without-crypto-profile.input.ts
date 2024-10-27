import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetBalanceCreateWithoutCryptoProfileInput } from "./asset-balance-create-without-crypto-profile.input";
import { Type } from "class-transformer";
import { AssetBalanceCreateOrConnectWithoutCryptoProfileInput } from "./asset-balance-create-or-connect-without-crypto-profile.input";
import { AssetBalanceCreateManyCryptoProfileInputEnvelope } from "./asset-balance-create-many-crypto-profile-input-envelope.input";
import { Prisma } from "@prisma/client";
import { AssetBalanceWhereUniqueInput } from "./asset-balance-where-unique.input";

@InputType()
export class AssetBalanceUncheckedCreateNestedManyWithoutCryptoProfileInput {
    @Field(() => [AssetBalanceCreateWithoutCryptoProfileInput], {
        nullable: true,
    })
    @Type(() => AssetBalanceCreateWithoutCryptoProfileInput)
    create?: Array<AssetBalanceCreateWithoutCryptoProfileInput>;

    @Field(() => [AssetBalanceCreateOrConnectWithoutCryptoProfileInput], {
        nullable: true,
    })
    @Type(() => AssetBalanceCreateOrConnectWithoutCryptoProfileInput)
    connectOrCreate?: Array<AssetBalanceCreateOrConnectWithoutCryptoProfileInput>;

    @Field(() => AssetBalanceCreateManyCryptoProfileInputEnvelope, {
        nullable: true,
    })
    @Type(() => AssetBalanceCreateManyCryptoProfileInputEnvelope)
    createMany?: AssetBalanceCreateManyCryptoProfileInputEnvelope;

    @Field(() => [AssetBalanceWhereUniqueInput], { nullable: true })
    @Type(() => AssetBalanceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssetBalanceWhereUniqueInput, "id">>;
}
