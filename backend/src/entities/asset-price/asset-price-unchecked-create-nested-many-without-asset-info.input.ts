import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetPriceCreateWithoutAssetInfoInput } from "./asset-price-create-without-asset-info.input";
import { Type } from "class-transformer";
import { AssetPriceCreateOrConnectWithoutAssetInfoInput } from "./asset-price-create-or-connect-without-asset-info.input";
import { AssetPriceCreateManyAssetInfoInputEnvelope } from "./asset-price-create-many-asset-info-input-envelope.input";
import { Prisma } from "@prisma/client";
import { AssetPriceWhereUniqueInput } from "./asset-price-where-unique.input";

@InputType()
export class AssetPriceUncheckedCreateNestedManyWithoutAssetInfoInput {
    @Field(() => [AssetPriceCreateWithoutAssetInfoInput], { nullable: true })
    @Type(() => AssetPriceCreateWithoutAssetInfoInput)
    create?: Array<AssetPriceCreateWithoutAssetInfoInput>;

    @Field(() => [AssetPriceCreateOrConnectWithoutAssetInfoInput], {
        nullable: true,
    })
    @Type(() => AssetPriceCreateOrConnectWithoutAssetInfoInput)
    connectOrCreate?: Array<AssetPriceCreateOrConnectWithoutAssetInfoInput>;

    @Field(() => AssetPriceCreateManyAssetInfoInputEnvelope, { nullable: true })
    @Type(() => AssetPriceCreateManyAssetInfoInputEnvelope)
    createMany?: AssetPriceCreateManyAssetInfoInputEnvelope;

    @Field(() => [AssetPriceWhereUniqueInput], { nullable: true })
    @Type(() => AssetPriceWhereUniqueInput)
    connect?: Array<
        Prisma.AtLeast<AssetPriceWhereUniqueInput, "assetInfoId_open_time">
    >;
}
