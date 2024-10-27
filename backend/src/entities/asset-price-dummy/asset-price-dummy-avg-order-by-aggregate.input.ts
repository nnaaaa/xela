import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";

@InputType()
export class AssetPriceDummyAvgOrderByAggregateInput {
    @Field(() => SortOrder, { nullable: true })
    openPrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    closePrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    highPrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    lowPrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    volume?: keyof typeof SortOrder;
}
