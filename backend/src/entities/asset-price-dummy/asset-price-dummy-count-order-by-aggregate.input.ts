import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";

@InputType()
export class AssetPriceDummyCountOrderByAggregateInput {
    @Field(() => SortOrder, { nullable: true })
    assetInfoId?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    interval?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    open_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    close_time?: keyof typeof SortOrder;

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
