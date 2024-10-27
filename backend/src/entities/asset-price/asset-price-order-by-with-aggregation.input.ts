import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { AssetPriceCountOrderByAggregateInput } from "./asset-price-count-order-by-aggregate.input";
import { AssetPriceAvgOrderByAggregateInput } from "./asset-price-avg-order-by-aggregate.input";
import { AssetPriceMaxOrderByAggregateInput } from "./asset-price-max-order-by-aggregate.input";
import { AssetPriceMinOrderByAggregateInput } from "./asset-price-min-order-by-aggregate.input";
import { AssetPriceSumOrderByAggregateInput } from "./asset-price-sum-order-by-aggregate.input";

@InputType()
export class AssetPriceOrderByWithAggregationInput {
    @Field(() => SortOrder, { nullable: true })
    assetInfoId?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    interval?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    open_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    close_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    openPrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    closePrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    highPrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    lowPrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    volume?: keyof typeof SortOrder;

    @Field(() => AssetPriceCountOrderByAggregateInput, { nullable: true })
    _count?: AssetPriceCountOrderByAggregateInput;

    @Field(() => AssetPriceAvgOrderByAggregateInput, { nullable: true })
    _avg?: AssetPriceAvgOrderByAggregateInput;

    @Field(() => AssetPriceMaxOrderByAggregateInput, { nullable: true })
    _max?: AssetPriceMaxOrderByAggregateInput;

    @Field(() => AssetPriceMinOrderByAggregateInput, { nullable: true })
    _min?: AssetPriceMinOrderByAggregateInput;

    @Field(() => AssetPriceSumOrderByAggregateInput, { nullable: true })
    _sum?: AssetPriceSumOrderByAggregateInput;
}
