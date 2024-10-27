import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Interval } from "../prisma/interval.enum";
import { Float } from "@nestjs/graphql";

@ObjectType()
export class AssetPriceDummyMaxAggregate {
    @Field(() => String, { nullable: true })
    assetInfoId?: string;

    @Field(() => Interval, { nullable: true })
    interval?: keyof typeof Interval;

    @Field(() => Date, { nullable: true })
    open_time?: Date | string;

    @Field(() => Date, { nullable: true })
    close_time?: Date | string;

    @Field(() => Float, { nullable: true })
    openPrice?: number;

    @Field(() => Float, { nullable: true })
    closePrice?: number;

    @Field(() => Float, { nullable: true })
    highPrice?: number;

    @Field(() => Float, { nullable: true })
    lowPrice?: number;

    @Field(() => Float, { nullable: true })
    volume?: number;
}
