import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetPriceDummyAssetInfoIdOpen_timeCompoundUniqueInput } from "./asset-price-dummy-asset-info-id-open-time-compound-unique.input";
import { AssetPriceDummyWhereInput } from "./asset-price-dummy-where.input";
import { StringFilter } from "../prisma/string-filter.input";
import { EnumIntervalFilter } from "../prisma/enum-interval-filter.input";
import { DateTimeFilter } from "../prisma/date-time-filter.input";
import { FloatFilter } from "../prisma/float-filter.input";
import { AssetInfoRelationFilter } from "../asset-info/asset-info-relation-filter.input";

@InputType()
export class AssetPriceDummyWhereUniqueInput {
    @Field(() => AssetPriceDummyAssetInfoIdOpen_timeCompoundUniqueInput, {
        nullable: true,
    })
    assetInfoId_open_time?: AssetPriceDummyAssetInfoIdOpen_timeCompoundUniqueInput;

    @Field(() => [AssetPriceDummyWhereInput], { nullable: true })
    AND?: Array<AssetPriceDummyWhereInput>;

    @Field(() => [AssetPriceDummyWhereInput], { nullable: true })
    OR?: Array<AssetPriceDummyWhereInput>;

    @Field(() => [AssetPriceDummyWhereInput], { nullable: true })
    NOT?: Array<AssetPriceDummyWhereInput>;

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

    @Field(() => AssetInfoRelationFilter, { nullable: true })
    assetInfo?: AssetInfoRelationFilter;
}
