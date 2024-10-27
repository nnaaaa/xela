import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";
import { Type } from "class-transformer";
import { AssetInfoCreateWithoutAssetBalanceInput } from "./asset-info-create-without-asset-balance.input";

@InputType()
export class AssetInfoCreateOrConnectWithoutAssetBalanceInput {
    @Field(() => AssetInfoWhereUniqueInput, { nullable: false })
    @Type(() => AssetInfoWhereUniqueInput)
    where!: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;

    @Field(() => AssetInfoCreateWithoutAssetBalanceInput, { nullable: false })
    @Type(() => AssetInfoCreateWithoutAssetBalanceInput)
    create!: AssetInfoCreateWithoutAssetBalanceInput;
}
