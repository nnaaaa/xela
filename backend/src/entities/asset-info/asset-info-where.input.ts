import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFilter } from "../prisma/string-filter.input";
import { AssetBalanceListRelationFilter } from "../asset-balance/asset-balance-list-relation-filter.input";
import { AssetPriceListRelationFilter } from "../asset-price/asset-price-list-relation-filter.input";

@InputType()
export class AssetInfoWhereInput {
    @Field(() => [AssetInfoWhereInput], { nullable: true })
    AND?: Array<AssetInfoWhereInput>;

    @Field(() => [AssetInfoWhereInput], { nullable: true })
    OR?: Array<AssetInfoWhereInput>;

    @Field(() => [AssetInfoWhereInput], { nullable: true })
    NOT?: Array<AssetInfoWhereInput>;

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    name?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    symbol?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    category?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    desc?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    logo?: StringFilter;

    @Field(() => AssetBalanceListRelationFilter, { nullable: true })
    assetBalances?: AssetBalanceListRelationFilter;

    @Field(() => AssetPriceListRelationFilter, { nullable: true })
    assetPrices?: AssetPriceListRelationFilter;
}
