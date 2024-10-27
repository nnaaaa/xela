import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { ID } from "@nestjs/graphql";
import { AssetBalance } from "../asset-balance/asset-balance.model";
import { AssetPrice } from "../asset-price/asset-price.model";
import { AssetInfoCount } from "./asset-info-count.output";

@ObjectType()
export class AssetInfo {
    @Field(() => ID, { nullable: false })
    id!: string;

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

    @Field(() => [AssetBalance], { nullable: true })
    assetBalances?: Array<AssetBalance>;

    @Field(() => [AssetPrice], { nullable: true })
    assetPrices?: Array<AssetPrice>;

    @Field(() => AssetInfoCount, { nullable: false })
    _count?: AssetInfoCount;
}
