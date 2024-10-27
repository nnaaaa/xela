import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { AssetBalanceOrderByRelationAggregateInput } from "../asset-balance/asset-balance-order-by-relation-aggregate.input";
import { AssetPriceOrderByRelationAggregateInput } from "../asset-price/asset-price-order-by-relation-aggregate.input";

@InputType()
export class AssetInfoOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    symbol?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    category?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    desc?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    logo?: keyof typeof SortOrder;

    @Field(() => AssetBalanceOrderByRelationAggregateInput, { nullable: true })
    assetBalances?: AssetBalanceOrderByRelationAggregateInput;

    @Field(() => AssetPriceOrderByRelationAggregateInput, { nullable: true })
    assetPrices?: AssetPriceOrderByRelationAggregateInput;
}
