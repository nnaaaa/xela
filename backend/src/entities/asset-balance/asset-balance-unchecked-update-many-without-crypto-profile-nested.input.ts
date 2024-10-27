import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetBalanceCreateWithoutCryptoProfileInput } from "./asset-balance-create-without-crypto-profile.input";
import { Type } from "class-transformer";
import { AssetBalanceCreateOrConnectWithoutCryptoProfileInput } from "./asset-balance-create-or-connect-without-crypto-profile.input";
import { AssetBalanceUpsertWithWhereUniqueWithoutCryptoProfileInput } from "./asset-balance-upsert-with-where-unique-without-crypto-profile.input";
import { AssetBalanceCreateManyCryptoProfileInputEnvelope } from "./asset-balance-create-many-crypto-profile-input-envelope.input";
import { Prisma } from "@prisma/client";
import { AssetBalanceWhereUniqueInput } from "./asset-balance-where-unique.input";
import { AssetBalanceUpdateWithWhereUniqueWithoutCryptoProfileInput } from "./asset-balance-update-with-where-unique-without-crypto-profile.input";
import { AssetBalanceUpdateManyWithWhereWithoutCryptoProfileInput } from "./asset-balance-update-many-with-where-without-crypto-profile.input";
import { AssetBalanceScalarWhereInput } from "./asset-balance-scalar-where.input";

@InputType()
export class AssetBalanceUncheckedUpdateManyWithoutCryptoProfileNestedInput {
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

    @Field(() => [AssetBalanceUpsertWithWhereUniqueWithoutCryptoProfileInput], {
        nullable: true,
    })
    @Type(() => AssetBalanceUpsertWithWhereUniqueWithoutCryptoProfileInput)
    upsert?: Array<AssetBalanceUpsertWithWhereUniqueWithoutCryptoProfileInput>;

    @Field(() => AssetBalanceCreateManyCryptoProfileInputEnvelope, {
        nullable: true,
    })
    @Type(() => AssetBalanceCreateManyCryptoProfileInputEnvelope)
    createMany?: AssetBalanceCreateManyCryptoProfileInputEnvelope;

    @Field(() => [AssetBalanceWhereUniqueInput], { nullable: true })
    @Type(() => AssetBalanceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AssetBalanceWhereUniqueInput, "id">>;

    @Field(() => [AssetBalanceWhereUniqueInput], { nullable: true })
    @Type(() => AssetBalanceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AssetBalanceWhereUniqueInput, "id">>;

    @Field(() => [AssetBalanceWhereUniqueInput], { nullable: true })
    @Type(() => AssetBalanceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AssetBalanceWhereUniqueInput, "id">>;

    @Field(() => [AssetBalanceWhereUniqueInput], { nullable: true })
    @Type(() => AssetBalanceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssetBalanceWhereUniqueInput, "id">>;

    @Field(() => [AssetBalanceUpdateWithWhereUniqueWithoutCryptoProfileInput], {
        nullable: true,
    })
    @Type(() => AssetBalanceUpdateWithWhereUniqueWithoutCryptoProfileInput)
    update?: Array<AssetBalanceUpdateWithWhereUniqueWithoutCryptoProfileInput>;

    @Field(() => [AssetBalanceUpdateManyWithWhereWithoutCryptoProfileInput], {
        nullable: true,
    })
    @Type(() => AssetBalanceUpdateManyWithWhereWithoutCryptoProfileInput)
    updateMany?: Array<AssetBalanceUpdateManyWithWhereWithoutCryptoProfileInput>;

    @Field(() => [AssetBalanceScalarWhereInput], { nullable: true })
    @Type(() => AssetBalanceScalarWhereInput)
    deleteMany?: Array<AssetBalanceScalarWhereInput>;
}
