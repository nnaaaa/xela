import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { HistoricalCryptoBalanceWhereUniqueInput } from "./historical-crypto-balance-where-unique.input";
import { Type } from "class-transformer";
import { HistoricalCryptoBalanceUpdateWithoutCryptoProfileInput } from "./historical-crypto-balance-update-without-crypto-profile.input";

@InputType()
export class HistoricalCryptoBalanceUpdateWithWhereUniqueWithoutCryptoProfileInput {
    @Field(() => HistoricalCryptoBalanceWhereUniqueInput, { nullable: false })
    @Type(() => HistoricalCryptoBalanceWhereUniqueInput)
    where!: Prisma.AtLeast<
        HistoricalCryptoBalanceWhereUniqueInput,
        "cryptoProfileId_time"
    >;

    @Field(() => HistoricalCryptoBalanceUpdateWithoutCryptoProfileInput, {
        nullable: false,
    })
    @Type(() => HistoricalCryptoBalanceUpdateWithoutCryptoProfileInput)
    data!: HistoricalCryptoBalanceUpdateWithoutCryptoProfileInput;
}
