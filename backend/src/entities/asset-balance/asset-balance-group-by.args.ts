import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetBalanceWhereInput } from "./asset-balance-where.input";
import { Type } from "class-transformer";
import { AssetBalanceOrderByWithAggregationInput } from "./asset-balance-order-by-with-aggregation.input";
import { AssetBalanceScalarFieldEnum } from "./asset-balance-scalar-field.enum";
import { AssetBalanceScalarWhereWithAggregatesInput } from "./asset-balance-scalar-where-with-aggregates.input";
import { Int } from "@nestjs/graphql";
import { AssetBalanceCountAggregateInput } from "./asset-balance-count-aggregate.input";
import { AssetBalanceAvgAggregateInput } from "./asset-balance-avg-aggregate.input";
import { AssetBalanceSumAggregateInput } from "./asset-balance-sum-aggregate.input";
import { AssetBalanceMinAggregateInput } from "./asset-balance-min-aggregate.input";
import { AssetBalanceMaxAggregateInput } from "./asset-balance-max-aggregate.input";

@ArgsType()
export class AssetBalanceGroupByArgs {
    @Field(() => AssetBalanceWhereInput, { nullable: true })
    @Type(() => AssetBalanceWhereInput)
    where?: AssetBalanceWhereInput;

    @Field(() => [AssetBalanceOrderByWithAggregationInput], { nullable: true })
    orderBy?: Array<AssetBalanceOrderByWithAggregationInput>;

    @Field(() => [AssetBalanceScalarFieldEnum], { nullable: false })
    by!: Array<keyof typeof AssetBalanceScalarFieldEnum>;

    @Field(() => AssetBalanceScalarWhereWithAggregatesInput, { nullable: true })
    having?: AssetBalanceScalarWhereWithAggregatesInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => AssetBalanceCountAggregateInput, { nullable: true })
    _count?: AssetBalanceCountAggregateInput;

    @Field(() => AssetBalanceAvgAggregateInput, { nullable: true })
    _avg?: AssetBalanceAvgAggregateInput;

    @Field(() => AssetBalanceSumAggregateInput, { nullable: true })
    _sum?: AssetBalanceSumAggregateInput;

    @Field(() => AssetBalanceMinAggregateInput, { nullable: true })
    _min?: AssetBalanceMinAggregateInput;

    @Field(() => AssetBalanceMaxAggregateInput, { nullable: true })
    _max?: AssetBalanceMaxAggregateInput;
}
