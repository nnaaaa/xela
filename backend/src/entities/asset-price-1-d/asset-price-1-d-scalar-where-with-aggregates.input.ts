import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../prisma/date-time-with-aggregates-filter.input";
import { StringWithAggregatesFilter } from "../prisma/string-with-aggregates-filter.input";
import { FloatNullableWithAggregatesFilter } from "../prisma/float-nullable-with-aggregates-filter.input";

@InputType()
export class asset_price_1dScalarWhereWithAggregatesInput {
    @Field(() => [asset_price_1dScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    AND?: Array<asset_price_1dScalarWhereWithAggregatesInput>;

    @Field(() => [asset_price_1dScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    OR?: Array<asset_price_1dScalarWhereWithAggregatesInput>;

    @Field(() => [asset_price_1dScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    NOT?: Array<asset_price_1dScalarWhereWithAggregatesInput>;

    @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
    open_time?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    assetInfoId?: StringWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
    openPrice?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
    closePrice?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
    highPrice?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
    lowPrice?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
    volume?: FloatNullableWithAggregatesFilter;
}
