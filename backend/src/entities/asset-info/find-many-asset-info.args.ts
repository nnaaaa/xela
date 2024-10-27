import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetInfoWhereInput } from "./asset-info-where.input";
import { Type } from "class-transformer";
import { AssetInfoOrderByWithRelationInput } from "./asset-info-order-by-with-relation.input";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";
import { Int } from "@nestjs/graphql";
import { AssetInfoScalarFieldEnum } from "./asset-info-scalar-field.enum";

@ArgsType()
export class FindManyAssetInfoArgs {
    @Field(() => AssetInfoWhereInput, { nullable: true })
    @Type(() => AssetInfoWhereInput)
    where?: AssetInfoWhereInput;

    @Field(() => [AssetInfoOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<AssetInfoOrderByWithRelationInput>;

    @Field(() => AssetInfoWhereUniqueInput, { nullable: true })
    cursor?: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [AssetInfoScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof AssetInfoScalarFieldEnum>;
}
