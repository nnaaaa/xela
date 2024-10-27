import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetPriceWhereUniqueInput } from "./asset-price-where-unique.input";
import { Type } from "class-transformer";
import { AssetPriceUpdateWithoutAssetInfoInput } from "./asset-price-update-without-asset-info.input";

@InputType()
export class AssetPriceUpdateWithWhereUniqueWithoutAssetInfoInput {
    @Field(() => AssetPriceWhereUniqueInput, { nullable: false })
    @Type(() => AssetPriceWhereUniqueInput)
    where!: Prisma.AtLeast<AssetPriceWhereUniqueInput, "assetInfoId_open_time">;

    @Field(() => AssetPriceUpdateWithoutAssetInfoInput, { nullable: false })
    @Type(() => AssetPriceUpdateWithoutAssetInfoInput)
    data!: AssetPriceUpdateWithoutAssetInfoInput;
}
