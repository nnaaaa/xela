import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { SortOrderInput } from "../prisma/sort-order.input";
import { asset_price_1dCountOrderByAggregateInput } from "./asset-price-1-d-count-order-by-aggregate.input";
import { asset_price_1dAvgOrderByAggregateInput } from "./asset-price-1-d-avg-order-by-aggregate.input";
import { asset_price_1dMaxOrderByAggregateInput } from "./asset-price-1-d-max-order-by-aggregate.input";
import { asset_price_1dMinOrderByAggregateInput } from "./asset-price-1-d-min-order-by-aggregate.input";
import { asset_price_1dSumOrderByAggregateInput } from "./asset-price-1-d-sum-order-by-aggregate.input";

@InputType()
export class asset_price_1dOrderByWithAggregationInput {
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

    @Field(() => asset_price_1dCountOrderByAggregateInput, { nullable: true })
    _count?: asset_price_1dCountOrderByAggregateInput;

    @Field(() => asset_price_1dAvgOrderByAggregateInput, { nullable: true })
    _avg?: asset_price_1dAvgOrderByAggregateInput;

    @Field(() => asset_price_1dMaxOrderByAggregateInput, { nullable: true })
    _max?: asset_price_1dMaxOrderByAggregateInput;

    @Field(() => asset_price_1dMinOrderByAggregateInput, { nullable: true })
    _min?: asset_price_1dMinOrderByAggregateInput;

    @Field(() => asset_price_1dSumOrderByAggregateInput, { nullable: true })
    _sum?: asset_price_1dSumOrderByAggregateInput;
}
