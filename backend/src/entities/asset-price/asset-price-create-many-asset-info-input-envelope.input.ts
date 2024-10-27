import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetPriceCreateManyAssetInfoInput } from "./asset-price-create-many-asset-info.input";
import { Type } from "class-transformer";

@InputType()
export class AssetPriceCreateManyAssetInfoInputEnvelope {
    @Field(() => [AssetPriceCreateManyAssetInfoInput], { nullable: false })
    @Type(() => AssetPriceCreateManyAssetInfoInput)
    data!: Array<AssetPriceCreateManyAssetInfoInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
