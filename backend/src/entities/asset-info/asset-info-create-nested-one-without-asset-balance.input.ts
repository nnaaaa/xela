import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoCreateWithoutAssetBalanceInput } from "./asset-info-create-without-asset-balance.input";
import { Type } from "class-transformer";
import { AssetInfoCreateOrConnectWithoutAssetBalanceInput } from "./asset-info-create-or-connect-without-asset-balance.input";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";

@InputType()
export class AssetInfoCreateNestedOneWithoutAssetBalanceInput {
    @Field(() => AssetInfoCreateWithoutAssetBalanceInput, { nullable: true })
    @Type(() => AssetInfoCreateWithoutAssetBalanceInput)
    create?: AssetInfoCreateWithoutAssetBalanceInput;

    @Field(() => AssetInfoCreateOrConnectWithoutAssetBalanceInput, {
        nullable: true,
    })
    @Type(() => AssetInfoCreateOrConnectWithoutAssetBalanceInput)
    connectOrCreate?: AssetInfoCreateOrConnectWithoutAssetBalanceInput;

    @Field(() => AssetInfoWhereUniqueInput, { nullable: true })
    @Type(() => AssetInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;
}
