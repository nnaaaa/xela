import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoUpdateWithoutAssetBalancesInput } from "./asset-info-update-without-asset-balances.input";
import { Type } from "class-transformer";
import { AssetInfoCreateWithoutAssetBalancesInput } from "./asset-info-create-without-asset-balances.input";
import { AssetInfoWhereInput } from "./asset-info-where.input";

@InputType()
export class AssetInfoUpsertWithoutAssetBalancesInput {
    @Field(() => AssetInfoUpdateWithoutAssetBalancesInput, { nullable: false })
    @Type(() => AssetInfoUpdateWithoutAssetBalancesInput)
    update!: AssetInfoUpdateWithoutAssetBalancesInput;

    @Field(() => AssetInfoCreateWithoutAssetBalancesInput, { nullable: false })
    @Type(() => AssetInfoCreateWithoutAssetBalancesInput)
    create!: AssetInfoCreateWithoutAssetBalancesInput;

    @Field(() => AssetInfoWhereInput, { nullable: true })
    @Type(() => AssetInfoWhereInput)
    where?: AssetInfoWhereInput;
}
