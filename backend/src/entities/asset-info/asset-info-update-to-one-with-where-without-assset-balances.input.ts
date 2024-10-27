import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoWhereInput } from "./asset-info-where.input";
import { Type } from "class-transformer";
import { AssetInfoUpdateWithoutAsssetBalancesInput } from "./asset-info-update-without-assset-balances.input";

@InputType()
export class AssetInfoUpdateToOneWithWhereWithoutAsssetBalancesInput {
    @Field(() => AssetInfoWhereInput, { nullable: true })
    @Type(() => AssetInfoWhereInput)
    where?: AssetInfoWhereInput;

    @Field(() => AssetInfoUpdateWithoutAsssetBalancesInput, { nullable: false })
    @Type(() => AssetInfoUpdateWithoutAsssetBalancesInput)
    data!: AssetInfoUpdateWithoutAsssetBalancesInput;
}
