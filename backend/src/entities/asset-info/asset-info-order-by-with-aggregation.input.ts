import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { AssetInfoCountOrderByAggregateInput } from "./asset-info-count-order-by-aggregate.input";
import { AssetInfoMaxOrderByAggregateInput } from "./asset-info-max-order-by-aggregate.input";
import { AssetInfoMinOrderByAggregateInput } from "./asset-info-min-order-by-aggregate.input";

@InputType()
export class AssetInfoOrderByWithAggregationInput {
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

    @Field(() => AssetInfoCountOrderByAggregateInput, { nullable: true })
    _count?: AssetInfoCountOrderByAggregateInput;

    @Field(() => AssetInfoMaxOrderByAggregateInput, { nullable: true })
    _max?: AssetInfoMaxOrderByAggregateInput;

    @Field(() => AssetInfoMinOrderByAggregateInput, { nullable: true })
    _min?: AssetInfoMinOrderByAggregateInput;
}
