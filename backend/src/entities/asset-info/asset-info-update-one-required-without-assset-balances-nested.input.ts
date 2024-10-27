import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoCreateWithoutAsssetBalancesInput } from "./asset-info-create-without-assset-balances.input";
import { Type } from "class-transformer";
import { AssetInfoCreateOrConnectWithoutAsssetBalancesInput } from "./asset-info-create-or-connect-without-assset-balances.input";
import { AssetInfoUpsertWithoutAsssetBalancesInput } from "./asset-info-upsert-without-assset-balances.input";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";
import { AssetInfoUpdateToOneWithWhereWithoutAsssetBalancesInput } from "./asset-info-update-to-one-with-where-without-assset-balances.input";

@InputType()
export class AssetInfoUpdateOneRequiredWithoutAsssetBalancesNestedInput {
    @Field(() => AssetInfoCreateWithoutAsssetBalancesInput, { nullable: true })
    @Type(() => AssetInfoCreateWithoutAsssetBalancesInput)
    create?: AssetInfoCreateWithoutAsssetBalancesInput;

    @Field(() => AssetInfoCreateOrConnectWithoutAsssetBalancesInput, {
        nullable: true,
    })
    @Type(() => AssetInfoCreateOrConnectWithoutAsssetBalancesInput)
    connectOrCreate?: AssetInfoCreateOrConnectWithoutAsssetBalancesInput;

    @Field(() => AssetInfoUpsertWithoutAsssetBalancesInput, { nullable: true })
    @Type(() => AssetInfoUpsertWithoutAsssetBalancesInput)
    upsert?: AssetInfoUpsertWithoutAsssetBalancesInput;

    @Field(() => AssetInfoWhereUniqueInput, { nullable: true })
    @Type(() => AssetInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;

    @Field(() => AssetInfoUpdateToOneWithWhereWithoutAsssetBalancesInput, {
        nullable: true,
    })
    @Type(() => AssetInfoUpdateToOneWithWhereWithoutAsssetBalancesInput)
    update?: AssetInfoUpdateToOneWithWhereWithoutAsssetBalancesInput;
}
