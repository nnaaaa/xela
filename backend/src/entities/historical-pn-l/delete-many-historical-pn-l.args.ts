import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { HistoricalPnLWhereInput } from "./historical-pn-l-where.input";
import { Type } from "class-transformer";

@ArgsType()
export class DeleteManyHistoricalPnLArgs {
    @Field(() => HistoricalPnLWhereInput, { nullable: true })
    @Type(() => HistoricalPnLWhereInput)
    where?: HistoricalPnLWhereInput;
}
