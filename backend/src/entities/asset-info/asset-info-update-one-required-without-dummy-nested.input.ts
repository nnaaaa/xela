import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoCreateWithoutDummyInput } from "./asset-info-create-without-dummy.input";
import { Type } from "class-transformer";
import { AssetInfoCreateOrConnectWithoutDummyInput } from "./asset-info-create-or-connect-without-dummy.input";
import { AssetInfoUpsertWithoutDummyInput } from "./asset-info-upsert-without-dummy.input";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";
import { AssetInfoUpdateToOneWithWhereWithoutDummyInput } from "./asset-info-update-to-one-with-where-without-dummy.input";

@InputType()
export class AssetInfoUpdateOneRequiredWithoutDummyNestedInput {
    @Field(() => AssetInfoCreateWithoutDummyInput, { nullable: true })
    @Type(() => AssetInfoCreateWithoutDummyInput)
    create?: AssetInfoCreateWithoutDummyInput;

    @Field(() => AssetInfoCreateOrConnectWithoutDummyInput, { nullable: true })
    @Type(() => AssetInfoCreateOrConnectWithoutDummyInput)
    connectOrCreate?: AssetInfoCreateOrConnectWithoutDummyInput;

    @Field(() => AssetInfoUpsertWithoutDummyInput, { nullable: true })
    @Type(() => AssetInfoUpsertWithoutDummyInput)
    upsert?: AssetInfoUpsertWithoutDummyInput;

    @Field(() => AssetInfoWhereUniqueInput, { nullable: true })
    @Type(() => AssetInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;

    @Field(() => AssetInfoUpdateToOneWithWhereWithoutDummyInput, {
        nullable: true,
    })
    @Type(() => AssetInfoUpdateToOneWithWhereWithoutDummyInput)
    update?: AssetInfoUpdateToOneWithWhereWithoutDummyInput;
}
