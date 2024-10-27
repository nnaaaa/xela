import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { asset_price_1hAssetInfoIdOpen_timeCompoundUniqueInput } from "./asset-price-1-h-asset-info-id-open-time-compound-unique.input";
import { asset_price_1hWhereInput } from "./asset-price-1-h-where.input";
import { DateTimeFilter } from "../prisma/date-time-filter.input";
import { StringFilter } from "../prisma/string-filter.input";
import { FloatNullableFilter } from "../prisma/float-nullable-filter.input";

@InputType()
export class asset_price_1hWhereUniqueInput {
    @Field(() => asset_price_1hAssetInfoIdOpen_timeCompoundUniqueInput, {
        nullable: true,
    })
    assetInfoId_open_time?: asset_price_1hAssetInfoIdOpen_timeCompoundUniqueInput;

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
