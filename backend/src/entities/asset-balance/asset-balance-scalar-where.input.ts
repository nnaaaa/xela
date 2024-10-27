import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFilter } from "../prisma/string-filter.input";
import { FloatFilter } from "../prisma/float-filter.input";

@InputType()
export class AssetBalanceScalarWhereInput {
    @Field(() => [AssetBalanceScalarWhereInput], { nullable: true })
    AND?: Array<AssetBalanceScalarWhereInput>;

    @Field(() => [AssetBalanceScalarWhereInput], { nullable: true })
    OR?: Array<AssetBalanceScalarWhereInput>;

    @Field(() => [AssetBalanceScalarWhereInput], { nullable: true })
    NOT?: Array<AssetBalanceScalarWhereInput>;

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    cryptoProfileId?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    assetInfoId?: StringFilter;

    @Field(() => FloatFilter, { nullable: true })
    balance?: FloatFilter;

    @Field(() => FloatFilter, { nullable: true })
    locked?: FloatFilter;
}
