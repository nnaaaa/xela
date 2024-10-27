import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetPriceUncheckedCreateNestedManyWithoutAssetInfoInput } from "../asset-price/asset-price-unchecked-create-nested-many-without-asset-info.input";

@InputType()
export class AssetInfoUncheckedCreateWithoutAsssetBalancesInput {
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

    @Field(() => AssetPriceUncheckedCreateNestedManyWithoutAssetInfoInput, {
        nullable: true,
    })
    assetPrices?: AssetPriceUncheckedCreateNestedManyWithoutAssetInfoInput;
}
