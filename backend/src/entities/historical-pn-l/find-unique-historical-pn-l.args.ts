import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { HistoricalPnLWhereUniqueInput } from "./historical-pn-l-where-unique.input";
import { Type } from "class-transformer";

@ArgsType()
export class FindUniqueHistoricalPnLArgs {
    @Field(() => HistoricalPnLWhereUniqueInput, { nullable: false })
    @Type(() => HistoricalPnLWhereUniqueInput)
    where!: Prisma.AtLeast<
        HistoricalPnLWhereUniqueInput,
        "cryptoProfileId_time"
    >;
}
