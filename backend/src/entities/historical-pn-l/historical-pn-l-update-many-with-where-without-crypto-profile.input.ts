import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { HistoricalPnLScalarWhereInput } from "./historical-pn-l-scalar-where.input";
import { Type } from "class-transformer";
import { HistoricalPnLUpdateManyMutationInput } from "./historical-pn-l-update-many-mutation.input";

@InputType()
export class HistoricalPnLUpdateManyWithWhereWithoutCryptoProfileInput {
    @Field(() => HistoricalPnLScalarWhereInput, { nullable: false })
    @Type(() => HistoricalPnLScalarWhereInput)
    where!: HistoricalPnLScalarWhereInput;

    @Field(() => HistoricalPnLUpdateManyMutationInput, { nullable: false })
    @Type(() => HistoricalPnLUpdateManyMutationInput)
    data!: HistoricalPnLUpdateManyMutationInput;
}
