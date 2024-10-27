import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoCreateWithoutAssetBalancesInput } from "./asset-info-create-without-asset-balances.input";
import { Type } from "class-transformer";
import { AssetInfoCreateOrConnectWithoutAssetBalancesInput } from "./asset-info-create-or-connect-without-asset-balances.input";
import { AssetInfoUpsertWithoutAssetBalancesInput } from "./asset-info-upsert-without-asset-balances.input";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";
import { AssetInfoUpdateToOneWithWhereWithoutAssetBalancesInput } from "./asset-info-update-to-one-with-where-without-asset-balances.input";

@InputType()
export class AssetInfoUpdateOneRequiredWithoutAssetBalancesNestedInput {
    @Field(() => AssetInfoCreateWithoutAssetBalancesInput, { nullable: true })
    @Type(() => AssetInfoCreateWithoutAssetBalancesInput)
    create?: AssetInfoCreateWithoutAssetBalancesInput;

    @Field(() => AssetInfoCreateOrConnectWithoutAssetBalancesInput, {
        nullable: true,
    })
    @Type(() => AssetInfoCreateOrConnectWithoutAssetBalancesInput)
    connectOrCreate?: AssetInfoCreateOrConnectWithoutAssetBalancesInput;

    @Field(() => AssetInfoUpsertWithoutAssetBalancesInput, { nullable: true })
    @Type(() => AssetInfoUpsertWithoutAssetBalancesInput)
    upsert?: AssetInfoUpsertWithoutAssetBalancesInput;

    @Field(() => AssetInfoWhereUniqueInput, { nullable: true })
    @Type(() => AssetInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;

    @Field(() => AssetInfoUpdateToOneWithWhereWithoutAssetBalancesInput, {
        nullable: true,
    })
    @Type(() => AssetInfoUpdateToOneWithWhereWithoutAssetBalancesInput)
    update?: AssetInfoUpdateToOneWithWhereWithoutAssetBalancesInput;
}
