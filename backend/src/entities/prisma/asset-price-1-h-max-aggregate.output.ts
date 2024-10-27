import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";

@ObjectType()
export class Asset_price_1hMaxAggregate {
    @Field(() => Date, { nullable: true })
    open_time?: Date | string;

    @Field(() => String, { nullable: true })
    assetInfoId?: string;

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
