import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetBalanceWhereInput } from "./asset-balance-where.input";
import { Type } from "class-transformer";

@ArgsType()
export class DeleteManyAssetBalanceArgs {
    @Field(() => AssetBalanceWhereInput, { nullable: true })
    @Type(() => AssetBalanceWhereInput)
    where?: AssetBalanceWhereInput;
}
