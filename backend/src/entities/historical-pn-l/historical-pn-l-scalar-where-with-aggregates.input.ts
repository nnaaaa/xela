import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringWithAggregatesFilter } from "../prisma/string-with-aggregates-filter.input";
import { DateTimeWithAggregatesFilter } from "../prisma/date-time-with-aggregates-filter.input";
import { FloatWithAggregatesFilter } from "../prisma/float-with-aggregates-filter.input";

@InputType()
export class HistoricalPnLScalarWhereWithAggregatesInput {
    @Field(() => [HistoricalPnLScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    AND?: Array<HistoricalPnLScalarWhereWithAggregatesInput>;

    @Field(() => [HistoricalPnLScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    OR?: Array<HistoricalPnLScalarWhereWithAggregatesInput>;

    @Field(() => [HistoricalPnLScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    NOT?: Array<HistoricalPnLScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    cryptoProfileId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
    time?: DateTimeWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, { nullable: true })
    estimatedBalance?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, { nullable: true })
    changePercent?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, { nullable: true })
    changeBalance?: FloatWithAggregatesFilter;
}
