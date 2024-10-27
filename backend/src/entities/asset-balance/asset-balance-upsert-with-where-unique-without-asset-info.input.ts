import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetBalanceWhereUniqueInput } from "./asset-balance-where-unique.input";
import { Type } from "class-transformer";
import { AssetBalanceUpdateWithoutAssetInfoInput } from "./asset-balance-update-without-asset-info.input";
import { AssetBalanceCreateWithoutAssetInfoInput } from "./asset-balance-create-without-asset-info.input";

@InputType()
export class AssetBalanceUpsertWithWhereUniqueWithoutAssetInfoInput {
    @Field(() => AssetBalanceWhereUniqueInput, { nullable: false })
    @Type(() => AssetBalanceWhereUniqueInput)
    where!: Prisma.AtLeast<AssetBalanceWhereUniqueInput, "id">;

    @Field(() => AssetBalanceUpdateWithoutAssetInfoInput, { nullable: false })
    @Type(() => AssetBalanceUpdateWithoutAssetInfoInput)
    update!: AssetBalanceUpdateWithoutAssetInfoInput;

    @Field(() => AssetBalanceCreateWithoutAssetInfoInput, { nullable: false })
    @Type(() => AssetBalanceCreateWithoutAssetInfoInput)
    create!: AssetBalanceCreateWithoutAssetInfoInput;
}
