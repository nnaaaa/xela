import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";
import { Type } from "class-transformer";
import { AssetInfoCreateWithoutAssetBalancesInput } from "./asset-info-create-without-asset-balances.input";

@InputType()
export class AssetInfoCreateOrConnectWithoutAssetBalancesInput {
    @Field(() => AssetInfoWhereUniqueInput, { nullable: false })
    @Type(() => AssetInfoWhereUniqueInput)
    where!: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;

    @Field(() => AssetInfoCreateWithoutAssetBalancesInput, { nullable: false })
    @Type(() => AssetInfoCreateWithoutAssetBalancesInput)
    create!: AssetInfoCreateWithoutAssetBalancesInput;
}
