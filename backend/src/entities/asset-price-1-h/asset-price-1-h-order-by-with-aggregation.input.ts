import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { SortOrderInput } from "../prisma/sort-order.input";
import { asset_price_1hCountOrderByAggregateInput } from "./asset-price-1-h-count-order-by-aggregate.input";
import { asset_price_1hAvgOrderByAggregateInput } from "./asset-price-1-h-avg-order-by-aggregate.input";
import { asset_price_1hMaxOrderByAggregateInput } from "./asset-price-1-h-max-order-by-aggregate.input";
import { asset_price_1hMinOrderByAggregateInput } from "./asset-price-1-h-min-order-by-aggregate.input";
import { asset_price_1hSumOrderByAggregateInput } from "./asset-price-1-h-sum-order-by-aggregate.input";

@InputType()
export class asset_price_1hOrderByWithAggregationInput {
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

    @Field(() => asset_price_1hCountOrderByAggregateInput, { nullable: true })
    _count?: asset_price_1hCountOrderByAggregateInput;

    @Field(() => asset_price_1hAvgOrderByAggregateInput, { nullable: true })
    _avg?: asset_price_1hAvgOrderByAggregateInput;

    @Field(() => asset_price_1hMaxOrderByAggregateInput, { nullable: true })
    _max?: asset_price_1hMaxOrderByAggregateInput;

    @Field(() => asset_price_1hMinOrderByAggregateInput, { nullable: true })
    _min?: asset_price_1hMinOrderByAggregateInput;

    @Field(() => asset_price_1hSumOrderByAggregateInput, { nullable: true })
    _sum?: asset_price_1hSumOrderByAggregateInput;
}
