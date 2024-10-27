import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Interval } from "../prisma/interval.enum";
import { Float } from "@nestjs/graphql";
import { AssetInfo } from "../asset-info/asset-info.model";
import { HideField } from "@nestjs/graphql";

@ObjectType()
export class AssetPriceDummy {
    @Field(() => String, { nullable: false })
    assetInfoId!: string;

    @Field(() => Interval, { nullable: false })
    interval!: keyof typeof Interval;

    @Field(() => Date, { nullable: false })
    open_time!: Date;

    @Field(() => Date, { nullable: false })
    close_time!: Date;

    @Field(() => Float, { nullable: false })
    openPrice!: number;

    @Field(() => Float, { nullable: false })
    closePrice!: number;

    @Field(() => Float, { nullable: false })
    highPrice!: number;

    @Field(() => Float, { nullable: false })
    lowPrice!: number;

    @Field(() => Float, { nullable: false })
    volume!: number;

    @HideField()
    assetInfo?: AssetInfo;
}
