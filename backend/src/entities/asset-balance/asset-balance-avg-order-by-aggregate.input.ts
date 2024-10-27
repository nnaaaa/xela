import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";

@InputType()
export class AssetBalanceAvgOrderByAggregateInput {
    @Field(() => SortOrder, { nullable: true })
    balance?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    locked?: keyof typeof SortOrder;
}
