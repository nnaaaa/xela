import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetPriceCreateNestedManyWithoutAssetInfoInput } from "../asset-price/asset-price-create-nested-many-without-asset-info.input";

@InputType()
export class AssetInfoCreateWithoutAsssetBalancesInput {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => String, { nullable: false })
    symbol!: string;

    @Field(() => String, { nullable: false })
    category!: string;

    @Field(() => String, { nullable: false })
    desc!: string;

    @Field(() => String, { nullable: false })
    logo!: string;

    @Field(() => AssetPriceCreateNestedManyWithoutAssetInfoInput, {
        nullable: true,
    })
    assetPrices?: AssetPriceCreateNestedManyWithoutAssetInfoInput;
}
