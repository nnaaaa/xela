import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringWithAggregatesFilter } from "../prisma/string-with-aggregates-filter.input";
import { FloatWithAggregatesFilter } from "../prisma/float-with-aggregates-filter.input";

@InputType()
export class AssetBalanceScalarWhereWithAggregatesInput {
    @Field(() => [AssetBalanceScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    AND?: Array<AssetBalanceScalarWhereWithAggregatesInput>;

    @Field(() => [AssetBalanceScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    OR?: Array<AssetBalanceScalarWhereWithAggregatesInput>;

    @Field(() => [AssetBalanceScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    NOT?: Array<AssetBalanceScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    cryptoProfileId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    assetInfoId?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, { nullable: true })
    balance?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, { nullable: true })
    locked?: FloatWithAggregatesFilter;
}
