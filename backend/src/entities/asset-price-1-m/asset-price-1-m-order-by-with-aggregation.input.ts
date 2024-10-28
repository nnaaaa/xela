import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { SortOrderInput } from "../prisma/sort-order.input";
import { asset_price_1MCountOrderByAggregateInput } from "./asset-price-1-m-count-order-by-aggregate.input";
import { asset_price_1MAvgOrderByAggregateInput } from "./asset-price-1-m-avg-order-by-aggregate.input";
import { asset_price_1MMaxOrderByAggregateInput } from "./asset-price-1-m-max-order-by-aggregate.input";
import { asset_price_1MMinOrderByAggregateInput } from "./asset-price-1-m-min-order-by-aggregate.input";
import { asset_price_1MSumOrderByAggregateInput } from "./asset-price-1-m-sum-order-by-aggregate.input";

@InputType()
export class asset_price_1MOrderByWithAggregationInput {
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

    @Field(() => asset_price_1MCountOrderByAggregateInput, { nullable: true })
    _count?: asset_price_1MCountOrderByAggregateInput;

    @Field(() => asset_price_1MAvgOrderByAggregateInput, { nullable: true })
    _avg?: asset_price_1MAvgOrderByAggregateInput;

    @Field(() => asset_price_1MMaxOrderByAggregateInput, { nullable: true })
    _max?: asset_price_1MMaxOrderByAggregateInput;

    @Field(() => asset_price_1MMinOrderByAggregateInput, { nullable: true })
    _min?: asset_price_1MMinOrderByAggregateInput;

    @Field(() => asset_price_1MSumOrderByAggregateInput, { nullable: true })
    _sum?: asset_price_1MSumOrderByAggregateInput;
}
