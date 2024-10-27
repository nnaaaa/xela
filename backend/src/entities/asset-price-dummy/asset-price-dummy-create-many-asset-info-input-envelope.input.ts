import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetPriceDummyCreateManyAssetInfoInput } from "./asset-price-dummy-create-many-asset-info.input";
import { Type } from "class-transformer";

@InputType()
export class AssetPriceDummyCreateManyAssetInfoInputEnvelope {
    @Field(() => [AssetPriceDummyCreateManyAssetInfoInput], { nullable: false })
    @Type(() => AssetPriceDummyCreateManyAssetInfoInput)
    data!: Array<AssetPriceDummyCreateManyAssetInfoInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
