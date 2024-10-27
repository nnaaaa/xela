import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { AssetPriceDummyCountOrderByAggregateInput } from "./asset-price-dummy-count-order-by-aggregate.input";
import { AssetPriceDummyAvgOrderByAggregateInput } from "./asset-price-dummy-avg-order-by-aggregate.input";
import { AssetPriceDummyMaxOrderByAggregateInput } from "./asset-price-dummy-max-order-by-aggregate.input";
import { AssetPriceDummyMinOrderByAggregateInput } from "./asset-price-dummy-min-order-by-aggregate.input";
import { AssetPriceDummySumOrderByAggregateInput } from "./asset-price-dummy-sum-order-by-aggregate.input";

@InputType()
export class AssetPriceDummyOrderByWithAggregationInput {
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

    @Field(() => AssetPriceDummyCountOrderByAggregateInput, { nullable: true })
    _count?: AssetPriceDummyCountOrderByAggregateInput;

    @Field(() => AssetPriceDummyAvgOrderByAggregateInput, { nullable: true })
    _avg?: AssetPriceDummyAvgOrderByAggregateInput;

    @Field(() => AssetPriceDummyMaxOrderByAggregateInput, { nullable: true })
    _max?: AssetPriceDummyMaxOrderByAggregateInput;

    @Field(() => AssetPriceDummyMinOrderByAggregateInput, { nullable: true })
    _min?: AssetPriceDummyMinOrderByAggregateInput;

    @Field(() => AssetPriceDummySumOrderByAggregateInput, { nullable: true })
    _sum?: AssetPriceDummySumOrderByAggregateInput;
}
