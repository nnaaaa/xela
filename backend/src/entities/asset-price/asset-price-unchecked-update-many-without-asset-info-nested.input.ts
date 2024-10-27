import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetPriceCreateWithoutAssetInfoInput } from "./asset-price-create-without-asset-info.input";
import { Type } from "class-transformer";
import { AssetPriceCreateOrConnectWithoutAssetInfoInput } from "./asset-price-create-or-connect-without-asset-info.input";
import { AssetPriceUpsertWithWhereUniqueWithoutAssetInfoInput } from "./asset-price-upsert-with-where-unique-without-asset-info.input";
import { AssetPriceCreateManyAssetInfoInputEnvelope } from "./asset-price-create-many-asset-info-input-envelope.input";
import { Prisma } from "@prisma/client";
import { AssetPriceWhereUniqueInput } from "./asset-price-where-unique.input";
import { AssetPriceUpdateWithWhereUniqueWithoutAssetInfoInput } from "./asset-price-update-with-where-unique-without-asset-info.input";
import { AssetPriceUpdateManyWithWhereWithoutAssetInfoInput } from "./asset-price-update-many-with-where-without-asset-info.input";
import { AssetPriceScalarWhereInput } from "./asset-price-scalar-where.input";

@InputType()
export class AssetPriceUncheckedUpdateManyWithoutAssetInfoNestedInput {
    @Field(() => [AssetPriceCreateWithoutAssetInfoInput], { nullable: true })
    @Type(() => AssetPriceCreateWithoutAssetInfoInput)
    create?: Array<AssetPriceCreateWithoutAssetInfoInput>;

    @Field(() => [AssetPriceCreateOrConnectWithoutAssetInfoInput], {
        nullable: true,
    })
    @Type(() => AssetPriceCreateOrConnectWithoutAssetInfoInput)
    connectOrCreate?: Array<AssetPriceCreateOrConnectWithoutAssetInfoInput>;

    @Field(() => [AssetPriceUpsertWithWhereUniqueWithoutAssetInfoInput], {
        nullable: true,
    })
    @Type(() => AssetPriceUpsertWithWhereUniqueWithoutAssetInfoInput)
    upsert?: Array<AssetPriceUpsertWithWhereUniqueWithoutAssetInfoInput>;

    @Field(() => AssetPriceCreateManyAssetInfoInputEnvelope, { nullable: true })
    @Type(() => AssetPriceCreateManyAssetInfoInputEnvelope)
    createMany?: AssetPriceCreateManyAssetInfoInputEnvelope;

    @Field(() => [AssetPriceWhereUniqueInput], { nullable: true })
    @Type(() => AssetPriceWhereUniqueInput)
    set?: Array<
        Prisma.AtLeast<AssetPriceWhereUniqueInput, "assetInfoId_open_time">
    >;

    @Field(() => [AssetPriceWhereUniqueInput], { nullable: true })
    @Type(() => AssetPriceWhereUniqueInput)
    disconnect?: Array<
        Prisma.AtLeast<AssetPriceWhereUniqueInput, "assetInfoId_open_time">
    >;

    @Field(() => [AssetPriceWhereUniqueInput], { nullable: true })
    @Type(() => AssetPriceWhereUniqueInput)
    delete?: Array<
        Prisma.AtLeast<AssetPriceWhereUniqueInput, "assetInfoId_open_time">
    >;

    @Field(() => [AssetPriceWhereUniqueInput], { nullable: true })
    @Type(() => AssetPriceWhereUniqueInput)
    connect?: Array<
        Prisma.AtLeast<AssetPriceWhereUniqueInput, "assetInfoId_open_time">
    >;

    @Field(() => [AssetPriceUpdateWithWhereUniqueWithoutAssetInfoInput], {
        nullable: true,
    })
    @Type(() => AssetPriceUpdateWithWhereUniqueWithoutAssetInfoInput)
    update?: Array<AssetPriceUpdateWithWhereUniqueWithoutAssetInfoInput>;

    @Field(() => [AssetPriceUpdateManyWithWhereWithoutAssetInfoInput], {
        nullable: true,
    })
    @Type(() => AssetPriceUpdateManyWithWhereWithoutAssetInfoInput)
    updateMany?: Array<AssetPriceUpdateManyWithWhereWithoutAssetInfoInput>;

    @Field(() => [AssetPriceScalarWhereInput], { nullable: true })
    @Type(() => AssetPriceScalarWhereInput)
    deleteMany?: Array<AssetPriceScalarWhereInput>;
}
