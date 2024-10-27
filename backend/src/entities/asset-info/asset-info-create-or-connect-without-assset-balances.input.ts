import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";
import { Type } from "class-transformer";
import { AssetInfoCreateWithoutAsssetBalancesInput } from "./asset-info-create-without-assset-balances.input";

@InputType()
export class AssetInfoCreateOrConnectWithoutAsssetBalancesInput {
    @Field(() => AssetInfoWhereUniqueInput, { nullable: false })
    @Type(() => AssetInfoWhereUniqueInput)
    where!: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;

    @Field(() => AssetInfoCreateWithoutAsssetBalancesInput, { nullable: false })
    @Type(() => AssetInfoCreateWithoutAsssetBalancesInput)
    create!: AssetInfoCreateWithoutAsssetBalancesInput;
}
