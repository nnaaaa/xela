import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFilter } from "../prisma/string-filter.input";
import { DateTimeFilter } from "../prisma/date-time-filter.input";
import { FloatFilter } from "../prisma/float-filter.input";
import { UserCryptoProfileRelationFilter } from "../user-crypto-profile/user-crypto-profile-relation-filter.input";

@InputType()
export class HistoricalCryptoBalanceWhereInput {
    @Field(() => [HistoricalCryptoBalanceWhereInput], { nullable: true })
    AND?: Array<HistoricalCryptoBalanceWhereInput>;

    @Field(() => [HistoricalCryptoBalanceWhereInput], { nullable: true })
    OR?: Array<HistoricalCryptoBalanceWhereInput>;

    @Field(() => [HistoricalCryptoBalanceWhereInput], { nullable: true })
    NOT?: Array<HistoricalCryptoBalanceWhereInput>;

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

    @Field(() => UserCryptoProfileRelationFilter, { nullable: true })
    cryptoProfile?: UserCryptoProfileRelationFilter;
}
