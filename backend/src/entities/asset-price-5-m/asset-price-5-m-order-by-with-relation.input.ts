import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { SortOrderInput } from "../prisma/sort-order.input";

@InputType()
export class asset_price_5mOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    open_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    assetInfoId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, { nullable: true })
    openPrice?: SortOrderInput;

    @Field(() => SortOrderInput, { nullable: true })
    closePrice?: SortOrderInput;

    @Field(() => SortOrderInput, { nullable: true })
    highPrice?: SortOrderInput;

    @Field(() => SortOrderInput, { nullable: true })
    lowPrice?: SortOrderInput;

    @Field(() => SortOrderInput, { nullable: true })
    volume?: SortOrderInput;
}
