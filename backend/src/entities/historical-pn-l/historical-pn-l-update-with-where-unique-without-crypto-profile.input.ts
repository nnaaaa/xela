import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { HistoricalPnLWhereUniqueInput } from "./historical-pn-l-where-unique.input";
import { Type } from "class-transformer";
import { HistoricalPnLUpdateWithoutCryptoProfileInput } from "./historical-pn-l-update-without-crypto-profile.input";

@InputType()
export class HistoricalPnLUpdateWithWhereUniqueWithoutCryptoProfileInput {
    @Field(() => HistoricalPnLWhereUniqueInput, { nullable: false })
    @Type(() => HistoricalPnLWhereUniqueInput)
    where!: Prisma.AtLeast<
        HistoricalPnLWhereUniqueInput,
        "cryptoProfileId_time"
    >;

    @Field(() => HistoricalPnLUpdateWithoutCryptoProfileInput, {
        nullable: false,
    })
    @Type(() => HistoricalPnLUpdateWithoutCryptoProfileInput)
    data!: HistoricalPnLUpdateWithoutCryptoProfileInput;
}
