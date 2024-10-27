import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1hWhereInput } from "../asset-price-1-h/asset-price-1-h-where.input";
import { Type } from "class-transformer";
import { asset_price_1hOrderByWithRelationInput } from "../asset-price-1-h/asset-price-1-h-order-by-with-relation.input";
import { asset_price_1hWhereUniqueInput } from "../asset-price-1-h/asset-price-1-h-where-unique.input";
import { Int } from "@nestjs/graphql";

@ArgsType()
export class AggregateassetPrice1HArgs {
    @Field(() => asset_price_1hWhereInput, { nullable: true })
    @Type(() => asset_price_1hWhereInput)
    where?: asset_price_1hWhereInput;

    @Field(() => [asset_price_1hOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<asset_price_1hOrderByWithRelationInput>;

    @Field(() => asset_price_1hWhereUniqueInput, { nullable: true })
    cursor?: asset_price_1hWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;
}
