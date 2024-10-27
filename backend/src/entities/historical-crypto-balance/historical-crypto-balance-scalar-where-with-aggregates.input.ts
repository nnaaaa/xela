import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringWithAggregatesFilter } from "../prisma/string-with-aggregates-filter.input";
import { DateTimeWithAggregatesFilter } from "../prisma/date-time-with-aggregates-filter.input";
import { FloatWithAggregatesFilter } from "../prisma/float-with-aggregates-filter.input";

@InputType()
export class HistoricalCryptoBalanceScalarWhereWithAggregatesInput {
    @Field(() => [HistoricalCryptoBalanceScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    AND?: Array<HistoricalCryptoBalanceScalarWhereWithAggregatesInput>;

    @Field(() => [HistoricalCryptoBalanceScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    OR?: Array<HistoricalCryptoBalanceScalarWhereWithAggregatesInput>;

    @Field(() => [HistoricalCryptoBalanceScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    NOT?: Array<HistoricalCryptoBalanceScalarWhereWithAggregatesInput>;

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
