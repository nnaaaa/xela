import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetBalanceCreateWithoutAssetInfoInput } from "./asset-balance-create-without-asset-info.input";
import { Type } from "class-transformer";
import { AssetBalanceCreateOrConnectWithoutAssetInfoInput } from "./asset-balance-create-or-connect-without-asset-info.input";
import { AssetBalanceUpsertWithWhereUniqueWithoutAssetInfoInput } from "./asset-balance-upsert-with-where-unique-without-asset-info.input";
import { AssetBalanceCreateManyAssetInfoInputEnvelope } from "./asset-balance-create-many-asset-info-input-envelope.input";
import { Prisma } from "@prisma/client";
import { AssetBalanceWhereUniqueInput } from "./asset-balance-where-unique.input";
import { AssetBalanceUpdateWithWhereUniqueWithoutAssetInfoInput } from "./asset-balance-update-with-where-unique-without-asset-info.input";
import { AssetBalanceUpdateManyWithWhereWithoutAssetInfoInput } from "./asset-balance-update-many-with-where-without-asset-info.input";
import { AssetBalanceScalarWhereInput } from "./asset-balance-scalar-where.input";

@InputType()
export class AssetBalanceUncheckedUpdateManyWithoutAssetInfoNestedInput {
    @Field(() => [AssetBalanceCreateWithoutAssetInfoInput], { nullable: true })
    @Type(() => AssetBalanceCreateWithoutAssetInfoInput)
    create?: Array<AssetBalanceCreateWithoutAssetInfoInput>;

    @Field(() => [AssetBalanceCreateOrConnectWithoutAssetInfoInput], {
        nullable: true,
    })
    @Type(() => AssetBalanceCreateOrConnectWithoutAssetInfoInput)
    connectOrCreate?: Array<AssetBalanceCreateOrConnectWithoutAssetInfoInput>;

    @Field(() => [AssetBalanceUpsertWithWhereUniqueWithoutAssetInfoInput], {
        nullable: true,
    })
    @Type(() => AssetBalanceUpsertWithWhereUniqueWithoutAssetInfoInput)
    upsert?: Array<AssetBalanceUpsertWithWhereUniqueWithoutAssetInfoInput>;

    @Field(() => AssetBalanceCreateManyAssetInfoInputEnvelope, {
        nullable: true,
    })
    @Type(() => AssetBalanceCreateManyAssetInfoInputEnvelope)
    createMany?: AssetBalanceCreateManyAssetInfoInputEnvelope;

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

    @Field(() => [AssetBalanceUpdateWithWhereUniqueWithoutAssetInfoInput], {
        nullable: true,
    })
    @Type(() => AssetBalanceUpdateWithWhereUniqueWithoutAssetInfoInput)
    update?: Array<AssetBalanceUpdateWithWhereUniqueWithoutAssetInfoInput>;

    @Field(() => [AssetBalanceUpdateManyWithWhereWithoutAssetInfoInput], {
        nullable: true,
    })
    @Type(() => AssetBalanceUpdateManyWithWhereWithoutAssetInfoInput)
    updateMany?: Array<AssetBalanceUpdateManyWithWhereWithoutAssetInfoInput>;

    @Field(() => [AssetBalanceScalarWhereInput], { nullable: true })
    @Type(() => AssetBalanceScalarWhereInput)
    deleteMany?: Array<AssetBalanceScalarWhereInput>;
}
