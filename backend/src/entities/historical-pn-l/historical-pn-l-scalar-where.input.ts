import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFilter } from "../prisma/string-filter.input";
import { DateTimeFilter } from "../prisma/date-time-filter.input";
import { FloatFilter } from "../prisma/float-filter.input";

@InputType()
export class HistoricalPnLScalarWhereInput {
    @Field(() => [HistoricalPnLScalarWhereInput], { nullable: true })
    AND?: Array<HistoricalPnLScalarWhereInput>;

    @Field(() => [HistoricalPnLScalarWhereInput], { nullable: true })
    OR?: Array<HistoricalPnLScalarWhereInput>;

    @Field(() => [HistoricalPnLScalarWhereInput], { nullable: true })
    NOT?: Array<HistoricalPnLScalarWhereInput>;

    @Field(() => StringFilter, { nullable: true })
    cryptoProfileId?: StringFilter;

    @Field(() => DateTimeFilter, { nullable: true })
    time?: DateTimeFilter;

    @Field(() => FloatFilter, { nullable: true })
    estimatedBalance?: FloatFilter;

    @Field(() => FloatFilter, { nullable: true })
    changePercent?: FloatFilter;

    @Field(() => FloatFilter, { nullable: true })
    changeBalance?: FloatFilter;
}
