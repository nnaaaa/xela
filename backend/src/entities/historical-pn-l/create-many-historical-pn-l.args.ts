import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { HistoricalPnLCreateManyInput } from "./historical-pn-l-create-many.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateManyHistoricalPnLArgs {
    @Field(() => [HistoricalPnLCreateManyInput], { nullable: false })
    @Type(() => HistoricalPnLCreateManyInput)
    data!: Array<HistoricalPnLCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
