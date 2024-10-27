import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";
import { AssetInfoCreateNestedOneWithoutAssetPricesInput } from "../asset-info/asset-info-create-nested-one-without-asset-prices.input";

@InputType()
export class AssetPriceCreateInput {
    @Field(() => String, { nullable: false })
    interval!: string;

    @Field(() => Date, { nullable: false })
    open_time!: Date | string;

    @Field(() => Date, { nullable: false })
    close_time!: Date | string;

    @Field(() => Float, { nullable: false })
    openPrice!: number;

    @Field(() => Float, { nullable: false })
    closePrice!: number;

    @Field(() => Float, { nullable: false })
    highPrice!: number;

    @Field(() => Float, { nullable: false })
    lowPrice!: number;

    @Field(() => Float, { nullable: false })
    volume!: number;

    @Field(() => AssetInfoCreateNestedOneWithoutAssetPricesInput, {
        nullable: false,
    })
    assetInfo!: AssetInfoCreateNestedOneWithoutAssetPricesInput;
}
