import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetBalanceCreateWithoutAssetInfoInput } from "./asset-balance-create-without-asset-info.input";
import { Type } from "class-transformer";
import { AssetBalanceCreateOrConnectWithoutAssetInfoInput } from "./asset-balance-create-or-connect-without-asset-info.input";
import { AssetBalanceCreateManyAssetInfoInputEnvelope } from "./asset-balance-create-many-asset-info-input-envelope.input";
import { Prisma } from "@prisma/client";
import { AssetBalanceWhereUniqueInput } from "./asset-balance-where-unique.input";

@InputType()
export class AssetBalanceCreateNestedManyWithoutAssetInfoInput {
    @Field(() => [AssetBalanceCreateWithoutAssetInfoInput], { nullable: true })
    @Type(() => AssetBalanceCreateWithoutAssetInfoInput)
    create?: Array<AssetBalanceCreateWithoutAssetInfoInput>;

    @Field(() => [AssetBalanceCreateOrConnectWithoutAssetInfoInput], {
        nullable: true,
    })
    @Type(() => AssetBalanceCreateOrConnectWithoutAssetInfoInput)
    connectOrCreate?: Array<AssetBalanceCreateOrConnectWithoutAssetInfoInput>;

    @Field(() => AssetBalanceCreateManyAssetInfoInputEnvelope, {
        nullable: true,
    })
    @Type(() => AssetBalanceCreateManyAssetInfoInputEnvelope)
    createMany?: AssetBalanceCreateManyAssetInfoInputEnvelope;

    @Field(() => [AssetBalanceWhereUniqueInput], { nullable: true })
    @Type(() => AssetBalanceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssetBalanceWhereUniqueInput, "id">>;
}
