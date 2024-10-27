import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { HistoricalPnLWhereInput } from "./historical-pn-l-where.input";

@InputType()
export class HistoricalPnLListRelationFilter {
    @Field(() => HistoricalPnLWhereInput, { nullable: true })
    every?: HistoricalPnLWhereInput;

    @Field(() => HistoricalPnLWhereInput, { nullable: true })
    some?: HistoricalPnLWhereInput;

    @Field(() => HistoricalPnLWhereInput, { nullable: true })
    none?: HistoricalPnLWhereInput;
}
