import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetPriceDummyWhereInput } from "./asset-price-dummy-where.input";

@InputType()
export class AssetPriceDummyListRelationFilter {
    @Field(() => AssetPriceDummyWhereInput, { nullable: true })
    every?: AssetPriceDummyWhereInput;

    @Field(() => AssetPriceDummyWhereInput, { nullable: true })
    some?: AssetPriceDummyWhereInput;

    @Field(() => AssetPriceDummyWhereInput, { nullable: true })
    none?: AssetPriceDummyWhereInput;
}
