import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";

@ObjectType()
export class AssetPriceDummyCountAggregate {
    @Field(() => Int, { nullable: false })
    assetInfoId!: number;

    @Field(() => Int, { nullable: false })
    interval!: number;

    @Field(() => Int, { nullable: false })
    open_time!: number;

    @Field(() => Int, { nullable: false })
    close_time!: number;

    @Field(() => Int, { nullable: false })
    openPrice!: number;

    @Field(() => Int, { nullable: false })
    closePrice!: number;

    @Field(() => Int, { nullable: false })
    highPrice!: number;

    @Field(() => Int, { nullable: false })
    lowPrice!: number;

    @Field(() => Int, { nullable: false })
    volume!: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
