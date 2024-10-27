import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetPriceDummyWhereUniqueInput } from "./asset-price-dummy-where-unique.input";
import { Type } from "class-transformer";
import { AssetPriceDummyCreateWithoutAssetInfoInput } from "./asset-price-dummy-create-without-asset-info.input";

@InputType()
export class AssetPriceDummyCreateOrConnectWithoutAssetInfoInput {
    @Field(() => AssetPriceDummyWhereUniqueInput, { nullable: false })
    @Type(() => AssetPriceDummyWhereUniqueInput)
    where!: Prisma.AtLeast<
        AssetPriceDummyWhereUniqueInput,
        "assetInfoId_open_time"
    >;

    @Field(() => AssetPriceDummyCreateWithoutAssetInfoInput, {
        nullable: false,
    })
    @Type(() => AssetPriceDummyCreateWithoutAssetInfoInput)
    create!: AssetPriceDummyCreateWithoutAssetInfoInput;
}
