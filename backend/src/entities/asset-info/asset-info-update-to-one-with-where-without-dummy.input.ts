import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoWhereInput } from "./asset-info-where.input";
import { Type } from "class-transformer";
import { AssetInfoUpdateWithoutDummyInput } from "./asset-info-update-without-dummy.input";

@InputType()
export class AssetInfoUpdateToOneWithWhereWithoutDummyInput {
    @Field(() => AssetInfoWhereInput, { nullable: true })
    @Type(() => AssetInfoWhereInput)
    where?: AssetInfoWhereInput;

    @Field(() => AssetInfoUpdateWithoutDummyInput, { nullable: false })
    @Type(() => AssetInfoUpdateWithoutDummyInput)
    data!: AssetInfoUpdateWithoutDummyInput;
}
