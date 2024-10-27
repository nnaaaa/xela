import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetPriceDummyCreateWithoutAssetInfoInput } from "./asset-price-dummy-create-without-asset-info.input";
import { Type } from "class-transformer";
import { AssetPriceDummyCreateOrConnectWithoutAssetInfoInput } from "./asset-price-dummy-create-or-connect-without-asset-info.input";
import { AssetPriceDummyCreateManyAssetInfoInputEnvelope } from "./asset-price-dummy-create-many-asset-info-input-envelope.input";
import { Prisma } from "@prisma/client";
import { AssetPriceDummyWhereUniqueInput } from "./asset-price-dummy-where-unique.input";

@InputType()
export class AssetPriceDummyUncheckedCreateNestedManyWithoutAssetInfoInput {
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

    @Field(() => AssetPriceDummyCreateManyAssetInfoInputEnvelope, {
        nullable: true,
    })
    @Type(() => AssetPriceDummyCreateManyAssetInfoInputEnvelope)
    createMany?: AssetPriceDummyCreateManyAssetInfoInputEnvelope;

    @Field(() => [AssetPriceDummyWhereUniqueInput], { nullable: true })
    @Type(() => AssetPriceDummyWhereUniqueInput)
    connect?: Array<
        Prisma.AtLeast<AssetPriceDummyWhereUniqueInput, "assetInfoId_open_time">
    >;
}
