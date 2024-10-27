import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFilter } from "../prisma/string-filter.input";
import { DateTimeFilter } from "../prisma/date-time-filter.input";
import { FloatFilter } from "../prisma/float-filter.input";

@InputType()
export class HistoricalCryptoBalanceScalarWhereInput {
    @Field(() => [HistoricalCryptoBalanceScalarWhereInput], { nullable: true })
    AND?: Array<HistoricalCryptoBalanceScalarWhereInput>;

    @Field(() => [HistoricalCryptoBalanceScalarWhereInput], { nullable: true })
    OR?: Array<HistoricalCryptoBalanceScalarWhereInput>;

    @Field(() => [HistoricalCryptoBalanceScalarWhereInput], { nullable: true })
    NOT?: Array<HistoricalCryptoBalanceScalarWhereInput>;

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
