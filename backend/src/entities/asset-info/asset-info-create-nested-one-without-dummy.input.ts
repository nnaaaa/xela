import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoCreateWithoutDummyInput } from "./asset-info-create-without-dummy.input";
import { Type } from "class-transformer";
import { AssetInfoCreateOrConnectWithoutDummyInput } from "./asset-info-create-or-connect-without-dummy.input";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";

@InputType()
export class AssetInfoCreateNestedOneWithoutDummyInput {
    @Field(() => AssetInfoCreateWithoutDummyInput, { nullable: true })
    @Type(() => AssetInfoCreateWithoutDummyInput)
    create?: AssetInfoCreateWithoutDummyInput;

    @Field(() => AssetInfoCreateOrConnectWithoutDummyInput, { nullable: true })
    @Type(() => AssetInfoCreateOrConnectWithoutDummyInput)
    connectOrCreate?: AssetInfoCreateOrConnectWithoutDummyInput;

    @Field(() => AssetInfoWhereUniqueInput, { nullable: true })
    @Type(() => AssetInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;
}
