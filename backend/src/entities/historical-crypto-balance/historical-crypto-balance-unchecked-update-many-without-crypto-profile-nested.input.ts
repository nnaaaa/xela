import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { HistoricalCryptoBalanceCreateWithoutCryptoProfileInput } from "./historical-crypto-balance-create-without-crypto-profile.input";
import { Type } from "class-transformer";
import { HistoricalCryptoBalanceCreateOrConnectWithoutCryptoProfileInput } from "./historical-crypto-balance-create-or-connect-without-crypto-profile.input";
import { HistoricalCryptoBalanceUpsertWithWhereUniqueWithoutCryptoProfileInput } from "./historical-crypto-balance-upsert-with-where-unique-without-crypto-profile.input";
import { HistoricalCryptoBalanceCreateManyCryptoProfileInputEnvelope } from "./historical-crypto-balance-create-many-crypto-profile-input-envelope.input";
import { Prisma } from "@prisma/client";
import { HistoricalCryptoBalanceWhereUniqueInput } from "./historical-crypto-balance-where-unique.input";
import { HistoricalCryptoBalanceUpdateWithWhereUniqueWithoutCryptoProfileInput } from "./historical-crypto-balance-update-with-where-unique-without-crypto-profile.input";
import { HistoricalCryptoBalanceUpdateManyWithWhereWithoutCryptoProfileInput } from "./historical-crypto-balance-update-many-with-where-without-crypto-profile.input";
import { HistoricalCryptoBalanceScalarWhereInput } from "./historical-crypto-balance-scalar-where.input";

@InputType()
export class HistoricalCryptoBalanceUncheckedUpdateManyWithoutCryptoProfileNestedInput {
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

    @Field(
        () => [
            HistoricalCryptoBalanceUpsertWithWhereUniqueWithoutCryptoProfileInput,
        ],
        { nullable: true },
    )
    @Type(
        () =>
            HistoricalCryptoBalanceUpsertWithWhereUniqueWithoutCryptoProfileInput,
    )
    upsert?: Array<HistoricalCryptoBalanceUpsertWithWhereUniqueWithoutCryptoProfileInput>;

    @Field(() => HistoricalCryptoBalanceCreateManyCryptoProfileInputEnvelope, {
        nullable: true,
    })
    @Type(() => HistoricalCryptoBalanceCreateManyCryptoProfileInputEnvelope)
    createMany?: HistoricalCryptoBalanceCreateManyCryptoProfileInputEnvelope;

    @Field(() => [HistoricalCryptoBalanceWhereUniqueInput], { nullable: true })
    @Type(() => HistoricalCryptoBalanceWhereUniqueInput)
    set?: Array<
        Prisma.AtLeast<
            HistoricalCryptoBalanceWhereUniqueInput,
            "cryptoProfileId_time"
        >
    >;

    @Field(() => [HistoricalCryptoBalanceWhereUniqueInput], { nullable: true })
    @Type(() => HistoricalCryptoBalanceWhereUniqueInput)
    disconnect?: Array<
        Prisma.AtLeast<
            HistoricalCryptoBalanceWhereUniqueInput,
            "cryptoProfileId_time"
        >
    >;

    @Field(() => [HistoricalCryptoBalanceWhereUniqueInput], { nullable: true })
    @Type(() => HistoricalCryptoBalanceWhereUniqueInput)
    delete?: Array<
        Prisma.AtLeast<
            HistoricalCryptoBalanceWhereUniqueInput,
            "cryptoProfileId_time"
        >
    >;

    @Field(() => [HistoricalCryptoBalanceWhereUniqueInput], { nullable: true })
    @Type(() => HistoricalCryptoBalanceWhereUniqueInput)
    connect?: Array<
        Prisma.AtLeast<
            HistoricalCryptoBalanceWhereUniqueInput,
            "cryptoProfileId_time"
        >
    >;

    @Field(
        () => [
            HistoricalCryptoBalanceUpdateWithWhereUniqueWithoutCryptoProfileInput,
        ],
        { nullable: true },
    )
    @Type(
        () =>
            HistoricalCryptoBalanceUpdateWithWhereUniqueWithoutCryptoProfileInput,
    )
    update?: Array<HistoricalCryptoBalanceUpdateWithWhereUniqueWithoutCryptoProfileInput>;

    @Field(
        () => [
            HistoricalCryptoBalanceUpdateManyWithWhereWithoutCryptoProfileInput,
        ],
        { nullable: true },
    )
    @Type(
        () =>
            HistoricalCryptoBalanceUpdateManyWithWhereWithoutCryptoProfileInput,
    )
    updateMany?: Array<HistoricalCryptoBalanceUpdateManyWithWhereWithoutCryptoProfileInput>;

    @Field(() => [HistoricalCryptoBalanceScalarWhereInput], { nullable: true })
    @Type(() => HistoricalCryptoBalanceScalarWhereInput)
    deleteMany?: Array<HistoricalCryptoBalanceScalarWhereInput>;
}
