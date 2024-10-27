import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringWithAggregatesFilter } from "../prisma/string-with-aggregates-filter.input";

@InputType()
export class AssetInfoScalarWhereWithAggregatesInput {
    @Field(() => [AssetInfoScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<AssetInfoScalarWhereWithAggregatesInput>;

    @Field(() => [AssetInfoScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<AssetInfoScalarWhereWithAggregatesInput>;

    @Field(() => [AssetInfoScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<AssetInfoScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    symbol?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    category?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    desc?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    logo?: StringWithAggregatesFilter;
}
