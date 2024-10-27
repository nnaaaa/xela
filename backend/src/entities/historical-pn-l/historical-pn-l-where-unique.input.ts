import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { HistoricalPnLCryptoProfileIdTimeCompoundUniqueInput } from "./historical-pn-l-crypto-profile-id-time-compound-unique.input";
import { HistoricalPnLWhereInput } from "./historical-pn-l-where.input";
import { StringFilter } from "../prisma/string-filter.input";
import { DateTimeFilter } from "../prisma/date-time-filter.input";
import { FloatFilter } from "../prisma/float-filter.input";
import { UserCryptoProfileRelationFilter } from "../user-crypto-profile/user-crypto-profile-relation-filter.input";

@InputType()
export class HistoricalPnLWhereUniqueInput {
    @Field(() => HistoricalPnLCryptoProfileIdTimeCompoundUniqueInput, {
        nullable: true,
    })
    cryptoProfileId_time?: HistoricalPnLCryptoProfileIdTimeCompoundUniqueInput;

    @Field(() => [HistoricalPnLWhereInput], { nullable: true })
    AND?: Array<HistoricalPnLWhereInput>;

    @Field(() => [HistoricalPnLWhereInput], { nullable: true })
    OR?: Array<HistoricalPnLWhereInput>;

    @Field(() => [HistoricalPnLWhereInput], { nullable: true })
    NOT?: Array<HistoricalPnLWhereInput>;

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
