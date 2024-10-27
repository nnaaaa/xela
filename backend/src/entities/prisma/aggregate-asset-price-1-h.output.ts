import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Asset_price_1hCountAggregate } from "./asset-price-1-h-count-aggregate.output";
import { Asset_price_1hAvgAggregate } from "./asset-price-1-h-avg-aggregate.output";
import { Asset_price_1hSumAggregate } from "./asset-price-1-h-sum-aggregate.output";
import { Asset_price_1hMinAggregate } from "./asset-price-1-h-min-aggregate.output";
import { Asset_price_1hMaxAggregate } from "./asset-price-1-h-max-aggregate.output";

@ObjectType()
export class AggregateAsset_price_1h {
    @Field(() => Asset_price_1hCountAggregate, { nullable: true })
    _count?: Asset_price_1hCountAggregate;

    @Field(() => Asset_price_1hAvgAggregate, { nullable: true })
    _avg?: Asset_price_1hAvgAggregate;

    @Field(() => Asset_price_1hSumAggregate, { nullable: true })
    _sum?: Asset_price_1hSumAggregate;

    @Field(() => Asset_price_1hMinAggregate, { nullable: true })
    _min?: Asset_price_1hMinAggregate;

    @Field(() => Asset_price_1hMaxAggregate, { nullable: true })
    _max?: Asset_price_1hMaxAggregate;
}
