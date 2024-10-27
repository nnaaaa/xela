import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoUpdateWithoutAsssetBalancesInput } from "./asset-info-update-without-assset-balances.input";
import { Type } from "class-transformer";
import { AssetInfoCreateWithoutAsssetBalancesInput } from "./asset-info-create-without-assset-balances.input";
import { AssetInfoWhereInput } from "./asset-info-where.input";

@InputType()
export class AssetInfoUpsertWithoutAsssetBalancesInput {
    @Field(() => AssetInfoUpdateWithoutAsssetBalancesInput, { nullable: false })
    @Type(() => AssetInfoUpdateWithoutAsssetBalancesInput)
    update!: AssetInfoUpdateWithoutAsssetBalancesInput;

    @Field(() => AssetInfoCreateWithoutAsssetBalancesInput, { nullable: false })
    @Type(() => AssetInfoCreateWithoutAsssetBalancesInput)
    create!: AssetInfoCreateWithoutAsssetBalancesInput;

    @Field(() => AssetInfoWhereInput, { nullable: true })
    @Type(() => AssetInfoWhereInput)
    where?: AssetInfoWhereInput;
}
