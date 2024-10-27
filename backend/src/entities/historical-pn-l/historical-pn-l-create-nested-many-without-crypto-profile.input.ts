import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { HistoricalPnLCreateWithoutCryptoProfileInput } from "./historical-pn-l-create-without-crypto-profile.input";
import { Type } from "class-transformer";
import { HistoricalPnLCreateOrConnectWithoutCryptoProfileInput } from "./historical-pn-l-create-or-connect-without-crypto-profile.input";
import { HistoricalPnLCreateManyCryptoProfileInputEnvelope } from "./historical-pn-l-create-many-crypto-profile-input-envelope.input";
import { Prisma } from "@prisma/client";
import { HistoricalPnLWhereUniqueInput } from "./historical-pn-l-where-unique.input";

@InputType()
export class HistoricalPnLCreateNestedManyWithoutCryptoProfileInput {
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

    @Field(() => HistoricalPnLCreateManyCryptoProfileInputEnvelope, {
        nullable: true,
    })
    @Type(() => HistoricalPnLCreateManyCryptoProfileInputEnvelope)
    createMany?: HistoricalPnLCreateManyCryptoProfileInputEnvelope;

    @Field(() => [HistoricalPnLWhereUniqueInput], { nullable: true })
    @Type(() => HistoricalPnLWhereUniqueInput)
    connect?: Array<
        Prisma.AtLeast<HistoricalPnLWhereUniqueInput, "cryptoProfileId_time">
    >;
}
