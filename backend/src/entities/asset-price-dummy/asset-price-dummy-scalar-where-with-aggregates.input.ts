import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringWithAggregatesFilter } from "../prisma/string-with-aggregates-filter.input";
import { EnumIntervalWithAggregatesFilter } from "../prisma/enum-interval-with-aggregates-filter.input";
import { DateTimeWithAggregatesFilter } from "../prisma/date-time-with-aggregates-filter.input";
import { FloatWithAggregatesFilter } from "../prisma/float-with-aggregates-filter.input";

@InputType()
export class AssetPriceDummyScalarWhereWithAggregatesInput {
    @Field(() => [AssetPriceDummyScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    AND?: Array<AssetPriceDummyScalarWhereWithAggregatesInput>;

    @Field(() => [AssetPriceDummyScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    OR?: Array<AssetPriceDummyScalarWhereWithAggregatesInput>;

    @Field(() => [AssetPriceDummyScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    NOT?: Array<AssetPriceDummyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    assetInfoId?: StringWithAggregatesFilter;

    @Field(() => EnumIntervalWithAggregatesFilter, { nullable: true })
    interval?: EnumIntervalWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
    open_time?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
    close_time?: DateTimeWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, { nullable: true })
    openPrice?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, { nullable: true })
    closePrice?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, { nullable: true })
    highPrice?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, { nullable: true })
    lowPrice?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, { nullable: true })
    volume?: FloatWithAggregatesFilter;
}
