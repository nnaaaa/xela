import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { HistoricalPnLUpdateManyMutationInput } from "./historical-pn-l-update-many-mutation.input";
import { Type } from "class-transformer";
import { HistoricalPnLWhereInput } from "./historical-pn-l-where.input";

@ArgsType()
export class UpdateManyHistoricalPnLArgs {
    @Field(() => HistoricalPnLUpdateManyMutationInput, { nullable: false })
    @Type(() => HistoricalPnLUpdateManyMutationInput)
    data!: HistoricalPnLUpdateManyMutationInput;

    @Field(() => HistoricalPnLWhereInput, { nullable: true })
    @Type(() => HistoricalPnLWhereInput)
    where?: HistoricalPnLWhereInput;
}
