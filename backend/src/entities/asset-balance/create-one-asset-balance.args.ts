import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetBalanceCreateInput } from "./asset-balance-create.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateOneAssetBalanceArgs {
    @Field(() => AssetBalanceCreateInput, { nullable: false })
    @Type(() => AssetBalanceCreateInput)
    data!: AssetBalanceCreateInput;
}
