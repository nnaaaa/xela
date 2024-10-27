import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { SortOrderInput } from "../prisma/sort-order.input";
import { UserCryptoProfileCountOrderByAggregateInput } from "./user-crypto-profile-count-order-by-aggregate.input";
import { UserCryptoProfileAvgOrderByAggregateInput } from "./user-crypto-profile-avg-order-by-aggregate.input";
import { UserCryptoProfileMaxOrderByAggregateInput } from "./user-crypto-profile-max-order-by-aggregate.input";
import { UserCryptoProfileMinOrderByAggregateInput } from "./user-crypto-profile-min-order-by-aggregate.input";
import { UserCryptoProfileSumOrderByAggregateInput } from "./user-crypto-profile-sum-order-by-aggregate.input";

@InputType()
export class UserCryptoProfileOrderByWithAggregationInput {
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

    @Field(() => UserCryptoProfileCountOrderByAggregateInput, {
        nullable: true,
    })
    _count?: UserCryptoProfileCountOrderByAggregateInput;

    @Field(() => UserCryptoProfileAvgOrderByAggregateInput, { nullable: true })
    _avg?: UserCryptoProfileAvgOrderByAggregateInput;

    @Field(() => UserCryptoProfileMaxOrderByAggregateInput, { nullable: true })
    _max?: UserCryptoProfileMaxOrderByAggregateInput;

    @Field(() => UserCryptoProfileMinOrderByAggregateInput, { nullable: true })
    _min?: UserCryptoProfileMinOrderByAggregateInput;

    @Field(() => UserCryptoProfileSumOrderByAggregateInput, { nullable: true })
    _sum?: UserCryptoProfileSumOrderByAggregateInput;
}
