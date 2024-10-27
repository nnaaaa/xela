import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoWhereInput } from "./asset-info-where.input";
import { Type } from "class-transformer";
import { AssetInfoUpdateWithoutAssetBalancesInput } from "./asset-info-update-without-asset-balances.input";

@InputType()
export class AssetInfoUpdateToOneWithWhereWithoutAssetBalancesInput {
    @Field(() => AssetInfoWhereInput, { nullable: true })
    @Type(() => AssetInfoWhereInput)
    where?: AssetInfoWhereInput;

    @Field(() => AssetInfoUpdateWithoutAssetBalancesInput, { nullable: false })
    @Type(() => AssetInfoUpdateWithoutAssetBalancesInput)
    data!: AssetInfoUpdateWithoutAssetBalancesInput;
}
