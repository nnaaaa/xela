import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { AssetBalanceCountOrderByAggregateInput } from "./asset-balance-count-order-by-aggregate.input";
import { AssetBalanceAvgOrderByAggregateInput } from "./asset-balance-avg-order-by-aggregate.input";
import { AssetBalanceMaxOrderByAggregateInput } from "./asset-balance-max-order-by-aggregate.input";
import { AssetBalanceMinOrderByAggregateInput } from "./asset-balance-min-order-by-aggregate.input";
import { AssetBalanceSumOrderByAggregateInput } from "./asset-balance-sum-order-by-aggregate.input";

@InputType()
export class AssetBalanceOrderByWithAggregationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    cryptoProfileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    assetInfoId?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    balance?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    locked?: keyof typeof SortOrder;

    @Field(() => AssetBalanceCountOrderByAggregateInput, { nullable: true })
    _count?: AssetBalanceCountOrderByAggregateInput;

    @Field(() => AssetBalanceAvgOrderByAggregateInput, { nullable: true })
    _avg?: AssetBalanceAvgOrderByAggregateInput;

    @Field(() => AssetBalanceMaxOrderByAggregateInput, { nullable: true })
    _max?: AssetBalanceMaxOrderByAggregateInput;

    @Field(() => AssetBalanceMinOrderByAggregateInput, { nullable: true })
    _min?: AssetBalanceMinOrderByAggregateInput;

    @Field(() => AssetBalanceSumOrderByAggregateInput, { nullable: true })
    _sum?: AssetBalanceSumOrderByAggregateInput;
}
