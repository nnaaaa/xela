import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { asset_price_5mAssetInfoIdOpen_timeCompoundUniqueInput } from "./asset-price-5-m-asset-info-id-open-time-compound-unique.input";
import { asset_price_5mWhereInput } from "./asset-price-5-m-where.input";
import { DateTimeFilter } from "../prisma/date-time-filter.input";
import { StringFilter } from "../prisma/string-filter.input";
import { FloatNullableFilter } from "../prisma/float-nullable-filter.input";

@InputType()
export class asset_price_5mWhereUniqueInput {
    @Field(() => asset_price_5mAssetInfoIdOpen_timeCompoundUniqueInput, {
        nullable: true,
    })
    assetInfoId_open_time?: asset_price_5mAssetInfoIdOpen_timeCompoundUniqueInput;

    @Field(() => [asset_price_5mWhereInput], { nullable: true })
    AND?: Array<asset_price_5mWhereInput>;

    @Field(() => [asset_price_5mWhereInput], { nullable: true })
    OR?: Array<asset_price_5mWhereInput>;

    @Field(() => [asset_price_5mWhereInput], { nullable: true })
    NOT?: Array<asset_price_5mWhereInput>;

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
