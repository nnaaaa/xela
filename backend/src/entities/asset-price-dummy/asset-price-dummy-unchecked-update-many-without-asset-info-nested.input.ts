import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetPriceDummyCreateWithoutAssetInfoInput } from "./asset-price-dummy-create-without-asset-info.input";
import { Type } from "class-transformer";
import { AssetPriceDummyCreateOrConnectWithoutAssetInfoInput } from "./asset-price-dummy-create-or-connect-without-asset-info.input";
import { AssetPriceDummyUpsertWithWhereUniqueWithoutAssetInfoInput } from "./asset-price-dummy-upsert-with-where-unique-without-asset-info.input";
import { AssetPriceDummyCreateManyAssetInfoInputEnvelope } from "./asset-price-dummy-create-many-asset-info-input-envelope.input";
import { Prisma } from "@prisma/client";
import { AssetPriceDummyWhereUniqueInput } from "./asset-price-dummy-where-unique.input";
import { AssetPriceDummyUpdateWithWhereUniqueWithoutAssetInfoInput } from "./asset-price-dummy-update-with-where-unique-without-asset-info.input";
import { AssetPriceDummyUpdateManyWithWhereWithoutAssetInfoInput } from "./asset-price-dummy-update-many-with-where-without-asset-info.input";
import { AssetPriceDummyScalarWhereInput } from "./asset-price-dummy-scalar-where.input";

@InputType()
export class AssetPriceDummyUncheckedUpdateManyWithoutAssetInfoNestedInput {
    @Field(() => [AssetPriceDummyCreateWithoutAssetInfoInput], {
        nullable: true,
    })
    @Type(() => AssetPriceDummyCreateWithoutAssetInfoInput)
    create?: Array<AssetPriceDummyCreateWithoutAssetInfoInput>;

    @Field(() => [AssetPriceDummyCreateOrConnectWithoutAssetInfoInput], {
        nullable: true,
    })
    @Type(() => AssetPriceDummyCreateOrConnectWithoutAssetInfoInput)
    connectOrCreate?: Array<AssetPriceDummyCreateOrConnectWithoutAssetInfoInput>;

    @Field(() => [AssetPriceDummyUpsertWithWhereUniqueWithoutAssetInfoInput], {
        nullable: true,
    })
    @Type(() => AssetPriceDummyUpsertWithWhereUniqueWithoutAssetInfoInput)
    upsert?: Array<AssetPriceDummyUpsertWithWhereUniqueWithoutAssetInfoInput>;

    @Field(() => AssetPriceDummyCreateManyAssetInfoInputEnvelope, {
        nullable: true,
    })
    @Type(() => AssetPriceDummyCreateManyAssetInfoInputEnvelope)
    createMany?: AssetPriceDummyCreateManyAssetInfoInputEnvelope;

    @Field(() => [AssetPriceDummyWhereUniqueInput], { nullable: true })
    @Type(() => AssetPriceDummyWhereUniqueInput)
    set?: Array<
        Prisma.AtLeast<AssetPriceDummyWhereUniqueInput, "assetInfoId_open_time">
    >;

    @Field(() => [AssetPriceDummyWhereUniqueInput], { nullable: true })
    @Type(() => AssetPriceDummyWhereUniqueInput)
    disconnect?: Array<
        Prisma.AtLeast<AssetPriceDummyWhereUniqueInput, "assetInfoId_open_time">
    >;

    @Field(() => [AssetPriceDummyWhereUniqueInput], { nullable: true })
    @Type(() => AssetPriceDummyWhereUniqueInput)
    delete?: Array<
        Prisma.AtLeast<AssetPriceDummyWhereUniqueInput, "assetInfoId_open_time">
    >;

    @Field(() => [AssetPriceDummyWhereUniqueInput], { nullable: true })
    @Type(() => AssetPriceDummyWhereUniqueInput)
    connect?: Array<
        Prisma.AtLeast<AssetPriceDummyWhereUniqueInput, "assetInfoId_open_time">
    >;

    @Field(() => [AssetPriceDummyUpdateWithWhereUniqueWithoutAssetInfoInput], {
        nullable: true,
    })
    @Type(() => AssetPriceDummyUpdateWithWhereUniqueWithoutAssetInfoInput)
    update?: Array<AssetPriceDummyUpdateWithWhereUniqueWithoutAssetInfoInput>;

    @Field(() => [AssetPriceDummyUpdateManyWithWhereWithoutAssetInfoInput], {
        nullable: true,
    })
    @Type(() => AssetPriceDummyUpdateManyWithWhereWithoutAssetInfoInput)
    updateMany?: Array<AssetPriceDummyUpdateManyWithWhereWithoutAssetInfoInput>;

    @Field(() => [AssetPriceDummyScalarWhereInput], { nullable: true })
    @Type(() => AssetPriceDummyScalarWhereInput)
    deleteMany?: Array<AssetPriceDummyScalarWhereInput>;
}
