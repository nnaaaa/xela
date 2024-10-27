import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";

@ObjectType()
export class AssetInfoCount {
    @Field(() => Int, { nullable: false })
    assetBalances?: number;

    @Field(() => Int, { nullable: false })
    assetPrices?: number;
}
