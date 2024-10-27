import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";

@ObjectType()
export class AssetBalanceCountAggregate {
    @Field(() => Int, { nullable: false })
    id!: number;

    @Field(() => Int, { nullable: false })
    cryptoProfileId!: number;

    @Field(() => Int, { nullable: false })
    assetInfoId!: number;

    @Field(() => Int, { nullable: false })
    balance!: number;

    @Field(() => Int, { nullable: false })
    locked!: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
