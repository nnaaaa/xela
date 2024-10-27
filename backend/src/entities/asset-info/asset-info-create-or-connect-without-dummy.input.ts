import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";
import { Type } from "class-transformer";
import { AssetInfoCreateWithoutDummyInput } from "./asset-info-create-without-dummy.input";

@InputType()
export class AssetInfoCreateOrConnectWithoutDummyInput {
    @Field(() => AssetInfoWhereUniqueInput, { nullable: false })
    @Type(() => AssetInfoWhereUniqueInput)
    where!: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;

    @Field(() => AssetInfoCreateWithoutDummyInput, { nullable: false })
    @Type(() => AssetInfoCreateWithoutDummyInput)
    create!: AssetInfoCreateWithoutDummyInput;
}
