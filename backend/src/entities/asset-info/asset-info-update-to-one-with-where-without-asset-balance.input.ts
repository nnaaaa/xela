import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoWhereInput } from "./asset-info-where.input";
import { Type } from "class-transformer";
import { AssetInfoUpdateWithoutAssetBalanceInput } from "./asset-info-update-without-asset-balance.input";

@InputType()
export class AssetInfoUpdateToOneWithWhereWithoutAssetBalanceInput {
    @Field(() => AssetInfoWhereInput, { nullable: true })
    @Type(() => AssetInfoWhereInput)
    where?: AssetInfoWhereInput;

    @Field(() => AssetInfoUpdateWithoutAssetBalanceInput, { nullable: false })
    @Type(() => AssetInfoUpdateWithoutAssetBalanceInput)
    data!: AssetInfoUpdateWithoutAssetBalanceInput;
}
