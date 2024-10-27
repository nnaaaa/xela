import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetPriceUpdateInput } from "./asset-price-update.input";
import { Type } from "class-transformer";
import { Prisma } from "@prisma/client";
import { AssetPriceWhereUniqueInput } from "./asset-price-where-unique.input";

@ArgsType()
export class UpdateOneAssetPriceArgs {
    @Field(() => AssetPriceUpdateInput, { nullable: false })
    @Type(() => AssetPriceUpdateInput)
    data!: AssetPriceUpdateInput;

    @Field(() => AssetPriceWhereUniqueInput, { nullable: false })
    @Type(() => AssetPriceWhereUniqueInput)
    where!: Prisma.AtLeast<AssetPriceWhereUniqueInput, "assetInfoId_open_time">;
}
