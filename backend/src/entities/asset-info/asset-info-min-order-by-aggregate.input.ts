import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";

@InputType()
export class AssetInfoMinOrderByAggregateInput {
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
}
