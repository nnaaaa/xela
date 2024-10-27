import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { SortOrderInput } from "../prisma/sort-order.input";
import { asset_price_5mCountOrderByAggregateInput } from "./asset-price-5-m-count-order-by-aggregate.input";
import { asset_price_5mAvgOrderByAggregateInput } from "./asset-price-5-m-avg-order-by-aggregate.input";
import { asset_price_5mMaxOrderByAggregateInput } from "./asset-price-5-m-max-order-by-aggregate.input";
import { asset_price_5mMinOrderByAggregateInput } from "./asset-price-5-m-min-order-by-aggregate.input";
import { asset_price_5mSumOrderByAggregateInput } from "./asset-price-5-m-sum-order-by-aggregate.input";

@InputType()
export class asset_price_5mOrderByWithAggregationInput {
    @Field(() => SortOrder, { nullable: true })
    open_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    assetInfoId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, { nullable: true })
    openPrice?: SortOrderInput;

    @Field(() => SortOrderInput, { nullable: true })
    closePrice?: SortOrderInput;

    @Field(() => SortOrderInput, { nullable: true })
    highPrice?: SortOrderInput;

    @Field(() => SortOrderInput, { nullable: true })
    lowPrice?: SortOrderInput;

    @Field(() => SortOrderInput, { nullable: true })
    volume?: SortOrderInput;

    @Field(() => asset_price_5mCountOrderByAggregateInput, { nullable: true })
    _count?: asset_price_5mCountOrderByAggregateInput;

    @Field(() => asset_price_5mAvgOrderByAggregateInput, { nullable: true })
    _avg?: asset_price_5mAvgOrderByAggregateInput;

    @Field(() => asset_price_5mMaxOrderByAggregateInput, { nullable: true })
    _max?: asset_price_5mMaxOrderByAggregateInput;

    @Field(() => asset_price_5mMinOrderByAggregateInput, { nullable: true })
    _min?: asset_price_5mMinOrderByAggregateInput;

    @Field(() => asset_price_5mSumOrderByAggregateInput, { nullable: true })
    _sum?: asset_price_5mSumOrderByAggregateInput;
}
