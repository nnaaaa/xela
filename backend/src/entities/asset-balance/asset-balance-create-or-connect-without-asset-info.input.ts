import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetBalanceWhereUniqueInput } from "./asset-balance-where-unique.input";
import { Type } from "class-transformer";
import { AssetBalanceCreateWithoutAssetInfoInput } from "./asset-balance-create-without-asset-info.input";

@InputType()
export class AssetBalanceCreateOrConnectWithoutAssetInfoInput {
    @Field(() => AssetBalanceWhereUniqueInput, { nullable: false })
    @Type(() => AssetBalanceWhereUniqueInput)
    where!: Prisma.AtLeast<AssetBalanceWhereUniqueInput, "id">;

    @Field(() => AssetBalanceCreateWithoutAssetInfoInput, { nullable: false })
    @Type(() => AssetBalanceCreateWithoutAssetInfoInput)
    create!: AssetBalanceCreateWithoutAssetInfoInput;
}
