import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoUpdateWithoutDummyInput } from "./asset-info-update-without-dummy.input";
import { Type } from "class-transformer";
import { AssetInfoCreateWithoutDummyInput } from "./asset-info-create-without-dummy.input";
import { AssetInfoWhereInput } from "./asset-info-where.input";

@InputType()
export class AssetInfoUpsertWithoutDummyInput {
    @Field(() => AssetInfoUpdateWithoutDummyInput, { nullable: false })
    @Type(() => AssetInfoUpdateWithoutDummyInput)
    update!: AssetInfoUpdateWithoutDummyInput;

    @Field(() => AssetInfoCreateWithoutDummyInput, { nullable: false })
    @Type(() => AssetInfoCreateWithoutDummyInput)
    create!: AssetInfoCreateWithoutDummyInput;

    @Field(() => AssetInfoWhereInput, { nullable: true })
    @Type(() => AssetInfoWhereInput)
    where?: AssetInfoWhereInput;
}
