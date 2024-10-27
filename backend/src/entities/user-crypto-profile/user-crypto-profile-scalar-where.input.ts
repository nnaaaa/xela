import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFilter } from "../prisma/string-filter.input";
import { IntFilter } from "../prisma/int-filter.input";
import { EnumTradingTypeFilter } from "../prisma/enum-trading-type-filter.input";
import { DateTimeNullableFilter } from "../prisma/date-time-nullable-filter.input";

@InputType()
export class UserCryptoProfileScalarWhereInput {
    @Field(() => [UserCryptoProfileScalarWhereInput], { nullable: true })
    AND?: Array<UserCryptoProfileScalarWhereInput>;

    @Field(() => [UserCryptoProfileScalarWhereInput], { nullable: true })
    OR?: Array<UserCryptoProfileScalarWhereInput>;

    @Field(() => [UserCryptoProfileScalarWhereInput], { nullable: true })
    NOT?: Array<UserCryptoProfileScalarWhereInput>;

    @Field(() => StringFilter, { nullable: true })
    profileId?: StringFilter;

    @Field(() => IntFilter, { nullable: true })
    userId?: IntFilter;

    @Field(() => StringFilter, { nullable: true })
    exchanges?: StringFilter;

    @Field(() => EnumTradingTypeFilter, { nullable: true })
    tradingType?: EnumTradingTypeFilter;

    @Field(() => StringFilter, { nullable: true })
    apiKey?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    secretKey?: StringFilter;

    @Field(() => DateTimeNullableFilter, { nullable: true })
    updateTime?: DateTimeNullableFilter;
}
