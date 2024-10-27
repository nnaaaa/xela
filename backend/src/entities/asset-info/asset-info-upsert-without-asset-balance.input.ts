import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoUpdateWithoutAssetBalanceInput } from "./asset-info-update-without-asset-balance.input";
import { Type } from "class-transformer";
import { AssetInfoCreateWithoutAssetBalanceInput } from "./asset-info-create-without-asset-balance.input";
import { AssetInfoWhereInput } from "./asset-info-where.input";

@InputType()
export class AssetInfoUpsertWithoutAssetBalanceInput {
    @Field(() => AssetInfoUpdateWithoutAssetBalanceInput, { nullable: false })
    @Type(() => AssetInfoUpdateWithoutAssetBalanceInput)
    update!: AssetInfoUpdateWithoutAssetBalanceInput;

    @Field(() => AssetInfoCreateWithoutAssetBalanceInput, { nullable: false })
    @Type(() => AssetInfoCreateWithoutAssetBalanceInput)
    create!: AssetInfoCreateWithoutAssetBalanceInput;

    @Field(() => AssetInfoWhereInput, { nullable: true })
    @Type(() => AssetInfoWhereInput)
    where?: AssetInfoWhereInput;
}
