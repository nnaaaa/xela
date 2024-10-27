import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { HistoricalPnLCreateInput } from "./historical-pn-l-create.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateOneHistoricalPnLArgs {
    @Field(() => HistoricalPnLCreateInput, { nullable: false })
    @Type(() => HistoricalPnLCreateInput)
    data!: HistoricalPnLCreateInput;
}
