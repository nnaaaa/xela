import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetBalanceWhereUniqueInput } from "./asset-balance-where-unique.input";
import { Type } from "class-transformer";
import { AssetBalanceCreateInput } from "./asset-balance-create.input";
import { AssetBalanceUpdateInput } from "./asset-balance-update.input";

@ArgsType()
export class UpsertOneAssetBalanceArgs {
    @Field(() => AssetBalanceWhereUniqueInput, { nullable: false })
    @Type(() => AssetBalanceWhereUniqueInput)
    where!: Prisma.AtLeast<AssetBalanceWhereUniqueInput, "id">;

    @Field(() => AssetBalanceCreateInput, { nullable: false })
    @Type(() => AssetBalanceCreateInput)
    create!: AssetBalanceCreateInput;

    @Field(() => AssetBalanceUpdateInput, { nullable: false })
    @Type(() => AssetBalanceUpdateInput)
    update!: AssetBalanceUpdateInput;
}
