import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { AssetInfoOrderByWithRelationInput } from "../asset-info/asset-info-order-by-with-relation.input";

@InputType()
export class AssetPriceOrderByWithRelationInput {
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

    @Field(() => AssetInfoOrderByWithRelationInput, { nullable: true })
    assetInfo?: AssetInfoOrderByWithRelationInput;
}
