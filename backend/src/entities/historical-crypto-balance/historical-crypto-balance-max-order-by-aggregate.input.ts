import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";

@InputType()
export class HistoricalCryptoBalanceMaxOrderByAggregateInput {
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
}
