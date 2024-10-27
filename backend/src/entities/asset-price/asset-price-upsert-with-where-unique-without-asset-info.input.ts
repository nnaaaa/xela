import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetPriceWhereUniqueInput } from "./asset-price-where-unique.input";
import { Type } from "class-transformer";
import { AssetPriceUpdateWithoutAssetInfoInput } from "./asset-price-update-without-asset-info.input";
import { AssetPriceCreateWithoutAssetInfoInput } from "./asset-price-create-without-asset-info.input";

@InputType()
export class AssetPriceUpsertWithWhereUniqueWithoutAssetInfoInput {
    @Field(() => AssetPriceWhereUniqueInput, { nullable: false })
    @Type(() => AssetPriceWhereUniqueInput)
    where!: Prisma.AtLeast<AssetPriceWhereUniqueInput, "assetInfoId_open_time">;

    @Field(() => AssetPriceUpdateWithoutAssetInfoInput, { nullable: false })
    @Type(() => AssetPriceUpdateWithoutAssetInfoInput)
    update!: AssetPriceUpdateWithoutAssetInfoInput;

    @Field(() => AssetPriceCreateWithoutAssetInfoInput, { nullable: false })
    @Type(() => AssetPriceCreateWithoutAssetInfoInput)
    create!: AssetPriceCreateWithoutAssetInfoInput;
}
