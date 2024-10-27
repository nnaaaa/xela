import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetBalanceWhereInput } from "./asset-balance-where.input";

@InputType()
export class AssetBalanceListRelationFilter {
    @Field(() => AssetBalanceWhereInput, { nullable: true })
    every?: AssetBalanceWhereInput;

    @Field(() => AssetBalanceWhereInput, { nullable: true })
    some?: AssetBalanceWhereInput;

    @Field(() => AssetBalanceWhereInput, { nullable: true })
    none?: AssetBalanceWhereInput;
}
