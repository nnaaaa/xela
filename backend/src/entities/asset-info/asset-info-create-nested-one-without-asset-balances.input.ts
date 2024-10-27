import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoCreateWithoutAssetBalancesInput } from "./asset-info-create-without-asset-balances.input";
import { Type } from "class-transformer";
import { AssetInfoCreateOrConnectWithoutAssetBalancesInput } from "./asset-info-create-or-connect-without-asset-balances.input";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";

@InputType()
export class AssetInfoCreateNestedOneWithoutAssetBalancesInput {
    @Field(() => AssetInfoCreateWithoutAssetBalancesInput, { nullable: true })
    @Type(() => AssetInfoCreateWithoutAssetBalancesInput)
    create?: AssetInfoCreateWithoutAssetBalancesInput;

    @Field(() => AssetInfoCreateOrConnectWithoutAssetBalancesInput, {
        nullable: true,
    })
    @Type(() => AssetInfoCreateOrConnectWithoutAssetBalancesInput)
    connectOrCreate?: AssetInfoCreateOrConnectWithoutAssetBalancesInput;

    @Field(() => AssetInfoWhereUniqueInput, { nullable: true })
    @Type(() => AssetInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;
}
