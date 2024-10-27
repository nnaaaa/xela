import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { SortOrderInput } from "../prisma/sort-order.input";
import { AssetBalanceOrderByRelationAggregateInput } from "../asset-balance/asset-balance-order-by-relation-aggregate.input";
import { HistoricalCryptoBalanceOrderByRelationAggregateInput } from "../historical-crypto-balance/historical-crypto-balance-order-by-relation-aggregate.input";
import { UserOrderByWithRelationInput } from "../user/user-order-by-with-relation.input";

@InputType()
export class UserCryptoProfileOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    profileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    exchanges?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    tradingType?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    apiKey?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    secretKey?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, { nullable: true })
    updateTime?: SortOrderInput;

    @Field(() => AssetBalanceOrderByRelationAggregateInput, { nullable: true })
    balances?: AssetBalanceOrderByRelationAggregateInput;

    @Field(() => HistoricalCryptoBalanceOrderByRelationAggregateInput, {
        nullable: true,
    })
    historicalBalances?: HistoricalCryptoBalanceOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationInput, { nullable: true })
    user?: UserOrderByWithRelationInput;
}
