import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetBalanceCreateManyAssetInfoInput } from "./asset-balance-create-many-asset-info.input";
import { Type } from "class-transformer";

@InputType()
export class AssetBalanceCreateManyAssetInfoInputEnvelope {
    @Field(() => [AssetBalanceCreateManyAssetInfoInput], { nullable: false })
    @Type(() => AssetBalanceCreateManyAssetInfoInput)
    data!: Array<AssetBalanceCreateManyAssetInfoInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
