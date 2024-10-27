import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoWhereInput } from "./asset-info-where.input";
import { Type } from "class-transformer";
import { AssetInfoUpdateWithoutAssetPricesInput } from "./asset-info-update-without-asset-prices.input";

@InputType()
export class AssetInfoUpdateToOneWithWhereWithoutAssetPricesInput {
    @Field(() => AssetInfoWhereInput, { nullable: true })
    @Type(() => AssetInfoWhereInput)
    where?: AssetInfoWhereInput;

    @Field(() => AssetInfoUpdateWithoutAssetPricesInput, { nullable: false })
    @Type(() => AssetInfoUpdateWithoutAssetPricesInput)
    data!: AssetInfoUpdateWithoutAssetPricesInput;
}
