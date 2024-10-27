import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetBalanceUpdateManyMutationInput } from "./asset-balance-update-many-mutation.input";
import { Type } from "class-transformer";
import { AssetBalanceWhereInput } from "./asset-balance-where.input";

@ArgsType()
export class UpdateManyAssetBalanceArgs {
    @Field(() => AssetBalanceUpdateManyMutationInput, { nullable: false })
    @Type(() => AssetBalanceUpdateManyMutationInput)
    data!: AssetBalanceUpdateManyMutationInput;

    @Field(() => AssetBalanceWhereInput, { nullable: true })
    @Type(() => AssetBalanceWhereInput)
    where?: AssetBalanceWhereInput;
}
