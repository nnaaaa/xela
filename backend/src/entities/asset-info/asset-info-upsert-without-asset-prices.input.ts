import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoUpdateWithoutAssetPricesInput } from "./asset-info-update-without-asset-prices.input";
import { Type } from "class-transformer";
import { AssetInfoCreateWithoutAssetPricesInput } from "./asset-info-create-without-asset-prices.input";
import { AssetInfoWhereInput } from "./asset-info-where.input";

@InputType()
export class AssetInfoUpsertWithoutAssetPricesInput {
    @Field(() => AssetInfoUpdateWithoutAssetPricesInput, { nullable: false })
    @Type(() => AssetInfoUpdateWithoutAssetPricesInput)
    update!: AssetInfoUpdateWithoutAssetPricesInput;

    @Field(() => AssetInfoCreateWithoutAssetPricesInput, { nullable: false })
    @Type(() => AssetInfoCreateWithoutAssetPricesInput)
    create!: AssetInfoCreateWithoutAssetPricesInput;

    @Field(() => AssetInfoWhereInput, { nullable: true })
    @Type(() => AssetInfoWhereInput)
    where?: AssetInfoWhereInput;
}
