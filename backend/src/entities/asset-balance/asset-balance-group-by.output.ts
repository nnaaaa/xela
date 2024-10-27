import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";
import { AssetBalanceCountAggregate } from "./asset-balance-count-aggregate.output";
import { AssetBalanceAvgAggregate } from "./asset-balance-avg-aggregate.output";
import { AssetBalanceSumAggregate } from "./asset-balance-sum-aggregate.output";
import { AssetBalanceMinAggregate } from "./asset-balance-min-aggregate.output";
import { AssetBalanceMaxAggregate } from "./asset-balance-max-aggregate.output";

@ObjectType()
export class AssetBalanceGroupBy {
    @Field(() => String, { nullable: false })
    id!: string;

    @Field(() => String, { nullable: false })
    cryptoProfileId!: string;

    @Field(() => String, { nullable: false })
    assetInfoId!: string;

    @Field(() => Float, { nullable: false })
    balance!: number;

    @Field(() => Float, { nullable: false })
    locked!: number;

    @Field(() => AssetBalanceCountAggregate, { nullable: true })
    _count?: AssetBalanceCountAggregate;

    @Field(() => AssetBalanceAvgAggregate, { nullable: true })
    _avg?: AssetBalanceAvgAggregate;

    @Field(() => AssetBalanceSumAggregate, { nullable: true })
    _sum?: AssetBalanceSumAggregate;

    @Field(() => AssetBalanceMinAggregate, { nullable: true })
    _min?: AssetBalanceMinAggregate;

    @Field(() => AssetBalanceMaxAggregate, { nullable: true })
    _max?: AssetBalanceMaxAggregate;
}
