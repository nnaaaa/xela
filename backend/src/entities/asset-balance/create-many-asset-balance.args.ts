import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetBalanceCreateManyInput } from "./asset-balance-create-many.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateManyAssetBalanceArgs {
    @Field(() => [AssetBalanceCreateManyInput], { nullable: false })
    @Type(() => AssetBalanceCreateManyInput)
    data!: Array<AssetBalanceCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
