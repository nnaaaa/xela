import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class HistoricalPnLSumAggregateInput {
    @Field(() => Boolean, { nullable: true })
    estimatedBalance?: true;

    @Field(() => Boolean, { nullable: true })
    changePercent?: true;

    @Field(() => Boolean, { nullable: true })
    changeBalance?: true;
}
