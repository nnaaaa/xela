import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { HistoricalPnLCountOrderByAggregateInput } from "./historical-pn-l-count-order-by-aggregate.input";
import { HistoricalPnLAvgOrderByAggregateInput } from "./historical-pn-l-avg-order-by-aggregate.input";
import { HistoricalPnLMaxOrderByAggregateInput } from "./historical-pn-l-max-order-by-aggregate.input";
import { HistoricalPnLMinOrderByAggregateInput } from "./historical-pn-l-min-order-by-aggregate.input";
import { HistoricalPnLSumOrderByAggregateInput } from "./historical-pn-l-sum-order-by-aggregate.input";

@InputType()
export class HistoricalPnLOrderByWithAggregationInput {
    @Field(() => SortOrder, { nullable: true })
    cryptoProfileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    time?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    estimatedBalance?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    changePercent?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    changeBalance?: keyof typeof SortOrder;

    @Field(() => HistoricalPnLCountOrderByAggregateInput, { nullable: true })
    _count?: HistoricalPnLCountOrderByAggregateInput;

    @Field(() => HistoricalPnLAvgOrderByAggregateInput, { nullable: true })
    _avg?: HistoricalPnLAvgOrderByAggregateInput;

    @Field(() => HistoricalPnLMaxOrderByAggregateInput, { nullable: true })
    _max?: HistoricalPnLMaxOrderByAggregateInput;

    @Field(() => HistoricalPnLMinOrderByAggregateInput, { nullable: true })
    _min?: HistoricalPnLMinOrderByAggregateInput;

    @Field(() => HistoricalPnLSumOrderByAggregateInput, { nullable: true })
    _sum?: HistoricalPnLSumOrderByAggregateInput;
}
