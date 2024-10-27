import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringWithAggregatesFilter } from "../prisma/string-with-aggregates-filter.input";
import { IntWithAggregatesFilter } from "../prisma/int-with-aggregates-filter.input";
import { EnumTradingTypeWithAggregatesFilter } from "../prisma/enum-trading-type-with-aggregates-filter.input";
import { DateTimeNullableWithAggregatesFilter } from "../prisma/date-time-nullable-with-aggregates-filter.input";

@InputType()
export class UserCryptoProfileScalarWhereWithAggregatesInput {
    @Field(() => [UserCryptoProfileScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    AND?: Array<UserCryptoProfileScalarWhereWithAggregatesInput>;

    @Field(() => [UserCryptoProfileScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    OR?: Array<UserCryptoProfileScalarWhereWithAggregatesInput>;

    @Field(() => [UserCryptoProfileScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    NOT?: Array<UserCryptoProfileScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    profileId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, { nullable: true })
    userId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    exchanges?: StringWithAggregatesFilter;

    @Field(() => EnumTradingTypeWithAggregatesFilter, { nullable: true })
    tradingType?: EnumTradingTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    apiKey?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    secretKey?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
    updateTime?: DateTimeNullableWithAggregatesFilter;
}
