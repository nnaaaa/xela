import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";

@ObjectType()
export class AssetBalanceMaxAggregate {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: true })
    cryptoProfileId?: string;

    @Field(() => String, { nullable: true })
    assetInfoId?: string;

    @Field(() => Float, { nullable: true })
    balance?: number;

    @Field(() => Float, { nullable: true })
    locked?: number;
}
