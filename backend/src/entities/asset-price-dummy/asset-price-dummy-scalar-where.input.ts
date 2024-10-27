import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFilter } from "../prisma/string-filter.input";
import { EnumIntervalFilter } from "../prisma/enum-interval-filter.input";
import { DateTimeFilter } from "../prisma/date-time-filter.input";
import { FloatFilter } from "../prisma/float-filter.input";

@InputType()
export class AssetPriceDummyScalarWhereInput {
    @Field(() => [AssetPriceDummyScalarWhereInput], { nullable: true })
    AND?: Array<AssetPriceDummyScalarWhereInput>;

    @Field(() => [AssetPriceDummyScalarWhereInput], { nullable: true })
    OR?: Array<AssetPriceDummyScalarWhereInput>;

    @Field(() => [AssetPriceDummyScalarWhereInput], { nullable: true })
    NOT?: Array<AssetPriceDummyScalarWhereInput>;

    @Field(() => StringFilter, { nullable: true })
    assetInfoId?: StringFilter;

    @Field(() => EnumIntervalFilter, { nullable: true })
    interval?: EnumIntervalFilter;

    @Field(() => DateTimeFilter, { nullable: true })
    open_time?: DateTimeFilter;

    @Field(() => DateTimeFilter, { nullable: true })
    close_time?: DateTimeFilter;

    @Field(() => FloatFilter, { nullable: true })
    openPrice?: FloatFilter;

    @Field(() => FloatFilter, { nullable: true })
    closePrice?: FloatFilter;

    @Field(() => FloatFilter, { nullable: true })
    highPrice?: FloatFilter;

    @Field(() => FloatFilter, { nullable: true })
    lowPrice?: FloatFilter;

    @Field(() => FloatFilter, { nullable: true })
    volume?: FloatFilter;
}
