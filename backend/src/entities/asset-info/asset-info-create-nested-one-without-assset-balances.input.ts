import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoCreateWithoutAsssetBalancesInput } from "./asset-info-create-without-assset-balances.input";
import { Type } from "class-transformer";
import { AssetInfoCreateOrConnectWithoutAsssetBalancesInput } from "./asset-info-create-or-connect-without-assset-balances.input";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";

@InputType()
export class AssetInfoCreateNestedOneWithoutAsssetBalancesInput {
    @Field(() => AssetInfoCreateWithoutAsssetBalancesInput, { nullable: true })
    @Type(() => AssetInfoCreateWithoutAsssetBalancesInput)
    create?: AssetInfoCreateWithoutAsssetBalancesInput;

    @Field(() => AssetInfoCreateOrConnectWithoutAsssetBalancesInput, {
        nullable: true,
    })
    @Type(() => AssetInfoCreateOrConnectWithoutAsssetBalancesInput)
    connectOrCreate?: AssetInfoCreateOrConnectWithoutAsssetBalancesInput;

    @Field(() => AssetInfoWhereUniqueInput, { nullable: true })
    @Type(() => AssetInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;
}
