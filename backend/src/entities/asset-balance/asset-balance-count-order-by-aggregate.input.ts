import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";

@InputType()
export class AssetBalanceCountOrderByAggregateInput {
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
}
