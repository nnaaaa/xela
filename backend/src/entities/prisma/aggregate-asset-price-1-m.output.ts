import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Asset_price_1MCountAggregate } from "./asset-price-1-m-count-aggregate.output";
import { Asset_price_1MAvgAggregate } from "./asset-price-1-m-avg-aggregate.output";
import { Asset_price_1MSumAggregate } from "./asset-price-1-m-sum-aggregate.output";
import { Asset_price_1MMinAggregate } from "./asset-price-1-m-min-aggregate.output";
import { Asset_price_1MMaxAggregate } from "./asset-price-1-m-max-aggregate.output";

@ObjectType()
export class AggregateAsset_price_1M {
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
