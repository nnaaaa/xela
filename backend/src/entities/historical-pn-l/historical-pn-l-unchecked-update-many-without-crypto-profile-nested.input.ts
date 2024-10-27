import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { HistoricalPnLCreateWithoutCryptoProfileInput } from "./historical-pn-l-create-without-crypto-profile.input";
import { Type } from "class-transformer";
import { HistoricalPnLCreateOrConnectWithoutCryptoProfileInput } from "./historical-pn-l-create-or-connect-without-crypto-profile.input";
import { HistoricalPnLUpsertWithWhereUniqueWithoutCryptoProfileInput } from "./historical-pn-l-upsert-with-where-unique-without-crypto-profile.input";
import { HistoricalPnLCreateManyCryptoProfileInputEnvelope } from "./historical-pn-l-create-many-crypto-profile-input-envelope.input";
import { Prisma } from "@prisma/client";
import { HistoricalPnLWhereUniqueInput } from "./historical-pn-l-where-unique.input";
import { HistoricalPnLUpdateWithWhereUniqueWithoutCryptoProfileInput } from "./historical-pn-l-update-with-where-unique-without-crypto-profile.input";
import { HistoricalPnLUpdateManyWithWhereWithoutCryptoProfileInput } from "./historical-pn-l-update-many-with-where-without-crypto-profile.input";
import { HistoricalPnLScalarWhereInput } from "./historical-pn-l-scalar-where.input";

@InputType()
export class HistoricalPnLUncheckedUpdateManyWithoutCryptoProfileNestedInput {
    @Field(() => [HistoricalPnLCreateWithoutCryptoProfileInput], {
        nullable: true,
    })
    @Type(() => HistoricalPnLCreateWithoutCryptoProfileInput)
    create?: Array<HistoricalPnLCreateWithoutCryptoProfileInput>;

    @Field(() => [HistoricalPnLCreateOrConnectWithoutCryptoProfileInput], {
        nullable: true,
    })
    @Type(() => HistoricalPnLCreateOrConnectWithoutCryptoProfileInput)
    connectOrCreate?: Array<HistoricalPnLCreateOrConnectWithoutCryptoProfileInput>;

    @Field(
        () => [HistoricalPnLUpsertWithWhereUniqueWithoutCryptoProfileInput],
        { nullable: true },
    )
    @Type(() => HistoricalPnLUpsertWithWhereUniqueWithoutCryptoProfileInput)
    upsert?: Array<HistoricalPnLUpsertWithWhereUniqueWithoutCryptoProfileInput>;

    @Field(() => HistoricalPnLCreateManyCryptoProfileInputEnvelope, {
        nullable: true,
    })
    @Type(() => HistoricalPnLCreateManyCryptoProfileInputEnvelope)
    createMany?: HistoricalPnLCreateManyCryptoProfileInputEnvelope;

    @Field(() => [HistoricalPnLWhereUniqueInput], { nullable: true })
    @Type(() => HistoricalPnLWhereUniqueInput)
    set?: Array<
        Prisma.AtLeast<HistoricalPnLWhereUniqueInput, "cryptoProfileId_time">
    >;

    @Field(() => [HistoricalPnLWhereUniqueInput], { nullable: true })
    @Type(() => HistoricalPnLWhereUniqueInput)
    disconnect?: Array<
        Prisma.AtLeast<HistoricalPnLWhereUniqueInput, "cryptoProfileId_time">
    >;

    @Field(() => [HistoricalPnLWhereUniqueInput], { nullable: true })
    @Type(() => HistoricalPnLWhereUniqueInput)
    delete?: Array<
        Prisma.AtLeast<HistoricalPnLWhereUniqueInput, "cryptoProfileId_time">
    >;

    @Field(() => [HistoricalPnLWhereUniqueInput], { nullable: true })
    @Type(() => HistoricalPnLWhereUniqueInput)
    connect?: Array<
        Prisma.AtLeast<HistoricalPnLWhereUniqueInput, "cryptoProfileId_time">
    >;

    @Field(
        () => [HistoricalPnLUpdateWithWhereUniqueWithoutCryptoProfileInput],
        { nullable: true },
    )
    @Type(() => HistoricalPnLUpdateWithWhereUniqueWithoutCryptoProfileInput)
    update?: Array<HistoricalPnLUpdateWithWhereUniqueWithoutCryptoProfileInput>;

    @Field(() => [HistoricalPnLUpdateManyWithWhereWithoutCryptoProfileInput], {
        nullable: true,
    })
    @Type(() => HistoricalPnLUpdateManyWithWhereWithoutCryptoProfileInput)
    updateMany?: Array<HistoricalPnLUpdateManyWithWhereWithoutCryptoProfileInput>;

    @Field(() => [HistoricalPnLScalarWhereInput], { nullable: true })
    @Type(() => HistoricalPnLScalarWhereInput)
    deleteMany?: Array<HistoricalPnLScalarWhereInput>;
}
