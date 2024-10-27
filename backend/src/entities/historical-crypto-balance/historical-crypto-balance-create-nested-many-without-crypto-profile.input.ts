import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { HistoricalCryptoBalanceCreateWithoutCryptoProfileInput } from "./historical-crypto-balance-create-without-crypto-profile.input";
import { Type } from "class-transformer";
import { HistoricalCryptoBalanceCreateOrConnectWithoutCryptoProfileInput } from "./historical-crypto-balance-create-or-connect-without-crypto-profile.input";
import { HistoricalCryptoBalanceCreateManyCryptoProfileInputEnvelope } from "./historical-crypto-balance-create-many-crypto-profile-input-envelope.input";
import { Prisma } from "@prisma/client";
import { HistoricalCryptoBalanceWhereUniqueInput } from "./historical-crypto-balance-where-unique.input";

@InputType()
export class HistoricalCryptoBalanceCreateNestedManyWithoutCryptoProfileInput {
    @Field(() => [HistoricalCryptoBalanceCreateWithoutCryptoProfileInput], {
        nullable: true,
    })
    @Type(() => HistoricalCryptoBalanceCreateWithoutCryptoProfileInput)
    create?: Array<HistoricalCryptoBalanceCreateWithoutCryptoProfileInput>;

    @Field(
        () => [HistoricalCryptoBalanceCreateOrConnectWithoutCryptoProfileInput],
        { nullable: true },
    )
    @Type(() => HistoricalCryptoBalanceCreateOrConnectWithoutCryptoProfileInput)
    connectOrCreate?: Array<HistoricalCryptoBalanceCreateOrConnectWithoutCryptoProfileInput>;

    @Field(() => HistoricalCryptoBalanceCreateManyCryptoProfileInputEnvelope, {
        nullable: true,
    })
    @Type(() => HistoricalCryptoBalanceCreateManyCryptoProfileInputEnvelope)
    createMany?: HistoricalCryptoBalanceCreateManyCryptoProfileInputEnvelope;

    @Field(() => [HistoricalCryptoBalanceWhereUniqueInput], { nullable: true })
    @Type(() => HistoricalCryptoBalanceWhereUniqueInput)
    connect?: Array<
        Prisma.AtLeast<
            HistoricalCryptoBalanceWhereUniqueInput,
            "cryptoProfileId_time"
        >
    >;
}
