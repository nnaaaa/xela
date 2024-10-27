import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoCreateWithoutAssetPricesInput } from "./asset-info-create-without-asset-prices.input";
import { Type } from "class-transformer";
import { AssetInfoCreateOrConnectWithoutAssetPricesInput } from "./asset-info-create-or-connect-without-asset-prices.input";
import { AssetInfoUpsertWithoutAssetPricesInput } from "./asset-info-upsert-without-asset-prices.input";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";
import { AssetInfoUpdateToOneWithWhereWithoutAssetPricesInput } from "./asset-info-update-to-one-with-where-without-asset-prices.input";

@InputType()
export class AssetInfoUpdateOneRequiredWithoutAssetPricesNestedInput {
    @Field(() => AssetInfoCreateWithoutAssetPricesInput, { nullable: true })
    @Type(() => AssetInfoCreateWithoutAssetPricesInput)
    create?: AssetInfoCreateWithoutAssetPricesInput;

    @Field(() => AssetInfoCreateOrConnectWithoutAssetPricesInput, {
        nullable: true,
    })
    @Type(() => AssetInfoCreateOrConnectWithoutAssetPricesInput)
    connectOrCreate?: AssetInfoCreateOrConnectWithoutAssetPricesInput;

    @Field(() => AssetInfoUpsertWithoutAssetPricesInput, { nullable: true })
    @Type(() => AssetInfoUpsertWithoutAssetPricesInput)
    upsert?: AssetInfoUpsertWithoutAssetPricesInput;

    @Field(() => AssetInfoWhereUniqueInput, { nullable: true })
    @Type(() => AssetInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;

    @Field(() => AssetInfoUpdateToOneWithWhereWithoutAssetPricesInput, {
        nullable: true,
    })
    @Type(() => AssetInfoUpdateToOneWithWhereWithoutAssetPricesInput)
    update?: AssetInfoUpdateToOneWithWhereWithoutAssetPricesInput;
}
