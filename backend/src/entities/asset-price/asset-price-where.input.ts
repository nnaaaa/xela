import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFilter } from "../prisma/string-filter.input";
import { DateTimeFilter } from "../prisma/date-time-filter.input";
import { FloatFilter } from "../prisma/float-filter.input";
import { AssetInfoRelationFilter } from "../asset-info/asset-info-relation-filter.input";

@InputType()
export class AssetPriceWhereInput {
    @Field(() => [AssetPriceWhereInput], { nullable: true })
    AND?: Array<AssetPriceWhereInput>;

    @Field(() => [AssetPriceWhereInput], { nullable: true })
    OR?: Array<AssetPriceWhereInput>;

    @Field(() => [AssetPriceWhereInput], { nullable: true })
    NOT?: Array<AssetPriceWhereInput>;

    @Field(() => StringFilter, { nullable: true })
    assetInfoId?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    interval?: StringFilter;

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
