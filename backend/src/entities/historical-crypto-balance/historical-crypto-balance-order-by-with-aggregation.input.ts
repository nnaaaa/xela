import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { HistoricalCryptoBalanceCountOrderByAggregateInput } from "./historical-crypto-balance-count-order-by-aggregate.input";
import { HistoricalCryptoBalanceAvgOrderByAggregateInput } from "./historical-crypto-balance-avg-order-by-aggregate.input";
import { HistoricalCryptoBalanceMaxOrderByAggregateInput } from "./historical-crypto-balance-max-order-by-aggregate.input";
import { HistoricalCryptoBalanceMinOrderByAggregateInput } from "./historical-crypto-balance-min-order-by-aggregate.input";
import { HistoricalCryptoBalanceSumOrderByAggregateInput } from "./historical-crypto-balance-sum-order-by-aggregate.input";

@InputType()
export class HistoricalCryptoBalanceOrderByWithAggregationInput {
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

    @Field(() => HistoricalCryptoBalanceCountOrderByAggregateInput, {
        nullable: true,
    })
    _count?: HistoricalCryptoBalanceCountOrderByAggregateInput;

    @Field(() => HistoricalCryptoBalanceAvgOrderByAggregateInput, {
        nullable: true,
    })
    _avg?: HistoricalCryptoBalanceAvgOrderByAggregateInput;

    @Field(() => HistoricalCryptoBalanceMaxOrderByAggregateInput, {
        nullable: true,
    })
    _max?: HistoricalCryptoBalanceMaxOrderByAggregateInput;

    @Field(() => HistoricalCryptoBalanceMinOrderByAggregateInput, {
        nullable: true,
    })
    _min?: HistoricalCryptoBalanceMinOrderByAggregateInput;

    @Field(() => HistoricalCryptoBalanceSumOrderByAggregateInput, {
        nullable: true,
    })
    _sum?: HistoricalCryptoBalanceSumOrderByAggregateInput;
}
