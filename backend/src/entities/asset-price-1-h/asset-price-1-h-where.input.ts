import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { DateTimeFilter } from "../prisma/date-time-filter.input";
import { StringFilter } from "../prisma/string-filter.input";
import { FloatNullableFilter } from "../prisma/float-nullable-filter.input";

@InputType()
export class asset_price_1hWhereInput {
    @Field(() => [asset_price_1hWhereInput], { nullable: true })
    AND?: Array<asset_price_1hWhereInput>;

    @Field(() => [asset_price_1hWhereInput], { nullable: true })
    OR?: Array<asset_price_1hWhereInput>;

    @Field(() => [asset_price_1hWhereInput], { nullable: true })
    NOT?: Array<asset_price_1hWhereInput>;

    @Field(() => DateTimeFilter, { nullable: true })
    open_time?: DateTimeFilter;

    @Field(() => StringFilter, { nullable: true })
    assetInfoId?: StringFilter;

    @Field(() => FloatNullableFilter, { nullable: true })
    openPrice?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, { nullable: true })
    closePrice?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, { nullable: true })
    highPrice?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, { nullable: true })
    lowPrice?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, { nullable: true })
    volume?: FloatNullableFilter;
}
