import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";

@InputType()
export class UserCryptoProfileMaxOrderByAggregateInput {
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

    @Field(() => SortOrder, { nullable: true })
    updateTime?: keyof typeof SortOrder;
}
