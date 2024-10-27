import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1dWhereInput } from "../asset-price-1-d/asset-price-1-d-where.input";
import { Type } from "class-transformer";
import { asset_price_1dOrderByWithRelationInput } from "../asset-price-1-d/asset-price-1-d-order-by-with-relation.input";
import { asset_price_1dWhereUniqueInput } from "../asset-price-1-d/asset-price-1-d-where-unique.input";
import { Int } from "@nestjs/graphql";
import { Asset_price_1dScalarFieldEnum } from "./asset-price-1-d-scalar-field.enum";

@ArgsType()
export class FindFirstassetPrice1DOrThrowArgs {
    @Field(() => asset_price_1dWhereInput, { nullable: true })
    @Type(() => asset_price_1dWhereInput)
    where?: asset_price_1dWhereInput;

    @Field(() => [asset_price_1dOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<asset_price_1dOrderByWithRelationInput>;

    @Field(() => asset_price_1dWhereUniqueInput, { nullable: true })
    cursor?: asset_price_1dWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [Asset_price_1dScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof Asset_price_1dScalarFieldEnum>;
}
