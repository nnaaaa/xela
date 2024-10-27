import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetBalanceWhereInput } from "./asset-balance-where.input";
import { Type } from "class-transformer";
import { AssetBalanceOrderByWithRelationInput } from "./asset-balance-order-by-with-relation.input";
import { Prisma } from "@prisma/client";
import { AssetBalanceWhereUniqueInput } from "./asset-balance-where-unique.input";
import { Int } from "@nestjs/graphql";
import { AssetBalanceScalarFieldEnum } from "./asset-balance-scalar-field.enum";

@ArgsType()
export class FindManyAssetBalanceArgs {
    @Field(() => AssetBalanceWhereInput, { nullable: true })
    @Type(() => AssetBalanceWhereInput)
    where?: AssetBalanceWhereInput;

    @Field(() => [AssetBalanceOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<AssetBalanceOrderByWithRelationInput>;

    @Field(() => AssetBalanceWhereUniqueInput, { nullable: true })
    cursor?: Prisma.AtLeast<AssetBalanceWhereUniqueInput, "id">;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [AssetBalanceScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof AssetBalanceScalarFieldEnum>;
}
