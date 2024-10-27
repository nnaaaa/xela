import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetPriceDummyWhereUniqueInput } from "./asset-price-dummy-where-unique.input";
import { Type } from "class-transformer";
import { AssetPriceDummyUpdateWithoutAssetInfoInput } from "./asset-price-dummy-update-without-asset-info.input";
import { AssetPriceDummyCreateWithoutAssetInfoInput } from "./asset-price-dummy-create-without-asset-info.input";

@InputType()
export class AssetPriceDummyUpsertWithWhereUniqueWithoutAssetInfoInput {
    @Field(() => AssetPriceDummyWhereUniqueInput, { nullable: false })
    @Type(() => AssetPriceDummyWhereUniqueInput)
    where!: Prisma.AtLeast<
        AssetPriceDummyWhereUniqueInput,
        "assetInfoId_open_time"
    >;

    @Field(() => AssetPriceDummyUpdateWithoutAssetInfoInput, {
        nullable: false,
    })
    @Type(() => AssetPriceDummyUpdateWithoutAssetInfoInput)
    update!: AssetPriceDummyUpdateWithoutAssetInfoInput;

    @Field(() => AssetPriceDummyCreateWithoutAssetInfoInput, {
        nullable: false,
    })
    @Type(() => AssetPriceDummyCreateWithoutAssetInfoInput)
    create!: AssetPriceDummyCreateWithoutAssetInfoInput;
}
