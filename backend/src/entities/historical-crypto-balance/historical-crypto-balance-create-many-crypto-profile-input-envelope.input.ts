import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { HistoricalCryptoBalanceCreateManyCryptoProfileInput } from "./historical-crypto-balance-create-many-crypto-profile.input";
import { Type } from "class-transformer";

@InputType()
export class HistoricalCryptoBalanceCreateManyCryptoProfileInputEnvelope {
    @Field(() => [HistoricalCryptoBalanceCreateManyCryptoProfileInput], {
        nullable: false,
    })
    @Type(() => HistoricalCryptoBalanceCreateManyCryptoProfileInput)
    data!: Array<HistoricalCryptoBalanceCreateManyCryptoProfileInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
