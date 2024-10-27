import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";

@ObjectType()
export class AssetInfoCountAggregate {
    @Field(() => Int, { nullable: false })
    id!: number;

    @Field(() => Int, { nullable: false })
    name!: number;

    @Field(() => Int, { nullable: false })
    symbol!: number;

    @Field(() => Int, { nullable: false })
    category!: number;

    @Field(() => Int, { nullable: false })
    desc!: number;

    @Field(() => Int, { nullable: false })
    logo!: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
