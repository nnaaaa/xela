import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetBalanceWhereUniqueInput } from "./asset-balance-where-unique.input";
import { Type } from "class-transformer";
import { AssetBalanceUpdateWithoutAssetInfoInput } from "./asset-balance-update-without-asset-info.input";

@InputType()
export class AssetBalanceUpdateWithWhereUniqueWithoutAssetInfoInput {
    @Field(() => AssetBalanceWhereUniqueInput, { nullable: false })
    @Type(() => AssetBalanceWhereUniqueInput)
    where!: Prisma.AtLeast<AssetBalanceWhereUniqueInput, "id">;

    @Field(() => AssetBalanceUpdateWithoutAssetInfoInput, { nullable: false })
    @Type(() => AssetBalanceUpdateWithoutAssetInfoInput)
    data!: AssetBalanceUpdateWithoutAssetInfoInput;
}
