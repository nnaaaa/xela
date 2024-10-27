import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetPriceWhereInput } from "./asset-price-where.input";

@InputType()
export class AssetPriceListRelationFilter {
    @Field(() => AssetPriceWhereInput, { nullable: true })
    every?: AssetPriceWhereInput;

    @Field(() => AssetPriceWhereInput, { nullable: true })
    some?: AssetPriceWhereInput;

    @Field(() => AssetPriceWhereInput, { nullable: true })
    none?: AssetPriceWhereInput;
}
