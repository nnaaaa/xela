import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetBalanceUpdateInput } from "./asset-balance-update.input";
import { Type } from "class-transformer";
import { Prisma } from "@prisma/client";
import { AssetBalanceWhereUniqueInput } from "./asset-balance-where-unique.input";

@ArgsType()
export class UpdateOneAssetBalanceArgs {
    @Field(() => AssetBalanceUpdateInput, { nullable: false })
    @Type(() => AssetBalanceUpdateInput)
    data!: AssetBalanceUpdateInput;

    @Field(() => AssetBalanceWhereUniqueInput, { nullable: false })
    @Type(() => AssetBalanceWhereUniqueInput)
    where!: Prisma.AtLeast<AssetBalanceWhereUniqueInput, "id">;
}
