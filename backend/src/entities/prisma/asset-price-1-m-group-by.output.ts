import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";
import { Asset_price_1MCountAggregate } from "./asset-price-1-m-count-aggregate.output";
import { Asset_price_1MAvgAggregate } from "./asset-price-1-m-avg-aggregate.output";
import { Asset_price_1MSumAggregate } from "./asset-price-1-m-sum-aggregate.output";
import { Asset_price_1MMinAggregate } from "./asset-price-1-m-min-aggregate.output";
import { Asset_price_1MMaxAggregate } from "./asset-price-1-m-max-aggregate.output";

@ObjectType()
export class Asset_price_1MGroupBy {
    @Field(() => Date, { nullable: false })
    open_time!: Date | string;

    @Field(() => String, { nullable: false })
    assetInfoId!: string;

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

    @Field(() => Asset_price_1MCountAggregate, { nullable: true })
    _count?: Asset_price_1MCountAggregate;

    @Field(() => Asset_price_1MAvgAggregate, { nullable: true })
    _avg?: Asset_price_1MAvgAggregate;

    @Field(() => Asset_price_1MSumAggregate, { nullable: true })
    _sum?: Asset_price_1MSumAggregate;

    @Field(() => Asset_price_1MMinAggregate, { nullable: true })
    _min?: Asset_price_1MMinAggregate;

    @Field(() => Asset_price_1MMaxAggregate, { nullable: true })
    _max?: Asset_price_1MMaxAggregate;
}
