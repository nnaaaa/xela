import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetPriceWhereUniqueInput } from "./asset-price-where-unique.input";
import { Type } from "class-transformer";

@ArgsType()
export class DeleteOneAssetPriceArgs {
    @Field(() => AssetPriceWhereUniqueInput, { nullable: false })
    @Type(() => AssetPriceWhereUniqueInput)
    where!: Prisma.AtLeast<AssetPriceWhereUniqueInput, "assetInfoId_open_time">;
}
