import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetPriceWhereUniqueInput } from "./asset-price-where-unique.input";
import { Type } from "class-transformer";
import { AssetPriceCreateInput } from "./asset-price-create.input";
import { AssetPriceUpdateInput } from "./asset-price-update.input";

@ArgsType()
export class UpsertOneAssetPriceArgs {
    @Field(() => AssetPriceWhereUniqueInput, { nullable: false })
    @Type(() => AssetPriceWhereUniqueInput)
    where!: Prisma.AtLeast<AssetPriceWhereUniqueInput, "assetInfoId_open_time">;

    @Field(() => AssetPriceCreateInput, { nullable: false })
    @Type(() => AssetPriceCreateInput)
    create!: AssetPriceCreateInput;

    @Field(() => AssetPriceUpdateInput, { nullable: false })
    @Type(() => AssetPriceUpdateInput)
    update!: AssetPriceUpdateInput;
}
