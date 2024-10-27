import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoCreateWithoutAssetBalanceInput } from "./asset-info-create-without-asset-balance.input";
import { Type } from "class-transformer";
import { AssetInfoCreateOrConnectWithoutAssetBalanceInput } from "./asset-info-create-or-connect-without-asset-balance.input";
import { AssetInfoUpsertWithoutAssetBalanceInput } from "./asset-info-upsert-without-asset-balance.input";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";
import { AssetInfoUpdateToOneWithWhereWithoutAssetBalanceInput } from "./asset-info-update-to-one-with-where-without-asset-balance.input";

@InputType()
export class AssetInfoUpdateOneRequiredWithoutAssetBalanceNestedInput {
    @Field(() => AssetInfoCreateWithoutAssetBalanceInput, { nullable: true })
    @Type(() => AssetInfoCreateWithoutAssetBalanceInput)
    create?: AssetInfoCreateWithoutAssetBalanceInput;

    @Field(() => AssetInfoCreateOrConnectWithoutAssetBalanceInput, {
        nullable: true,
    })
    @Type(() => AssetInfoCreateOrConnectWithoutAssetBalanceInput)
    connectOrCreate?: AssetInfoCreateOrConnectWithoutAssetBalanceInput;

    @Field(() => AssetInfoUpsertWithoutAssetBalanceInput, { nullable: true })
    @Type(() => AssetInfoUpsertWithoutAssetBalanceInput)
    upsert?: AssetInfoUpsertWithoutAssetBalanceInput;

    @Field(() => AssetInfoWhereUniqueInput, { nullable: true })
    @Type(() => AssetInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;

    @Field(() => AssetInfoUpdateToOneWithWhereWithoutAssetBalanceInput, {
        nullable: true,
    })
    @Type(() => AssetInfoUpdateToOneWithWhereWithoutAssetBalanceInput)
    update?: AssetInfoUpdateToOneWithWhereWithoutAssetBalanceInput;
}
