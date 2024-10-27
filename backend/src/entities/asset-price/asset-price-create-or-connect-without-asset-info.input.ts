import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetPriceWhereUniqueInput } from "./asset-price-where-unique.input";
import { Type } from "class-transformer";
import { AssetPriceCreateWithoutAssetInfoInput } from "./asset-price-create-without-asset-info.input";

@InputType()
export class AssetPriceCreateOrConnectWithoutAssetInfoInput {
    @Field(() => AssetPriceWhereUniqueInput, { nullable: false })
    @Type(() => AssetPriceWhereUniqueInput)
    where!: Prisma.AtLeast<AssetPriceWhereUniqueInput, "assetInfoId_open_time">;

    @Field(() => AssetPriceCreateWithoutAssetInfoInput, { nullable: false })
    @Type(() => AssetPriceCreateWithoutAssetInfoInput)
    create!: AssetPriceCreateWithoutAssetInfoInput;
}
