import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { HistoricalPnLWhereInput } from "./historical-pn-l-where.input";
import { Type } from "class-transformer";
import { HistoricalPnLOrderByWithRelationInput } from "./historical-pn-l-order-by-with-relation.input";
import { Prisma } from "@prisma/client";
import { HistoricalPnLWhereUniqueInput } from "./historical-pn-l-where-unique.input";
import { Int } from "@nestjs/graphql";
import { HistoricalPnLScalarFieldEnum } from "./historical-pn-l-scalar-field.enum";

@ArgsType()
export class FindManyHistoricalPnLArgs {
    @Field(() => HistoricalPnLWhereInput, { nullable: true })
    @Type(() => HistoricalPnLWhereInput)
    where?: HistoricalPnLWhereInput;

    @Field(() => [HistoricalPnLOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<HistoricalPnLOrderByWithRelationInput>;

    @Field(() => HistoricalPnLWhereUniqueInput, { nullable: true })
    cursor?: Prisma.AtLeast<
        HistoricalPnLWhereUniqueInput,
        "cryptoProfileId_time"
    >;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [HistoricalPnLScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof HistoricalPnLScalarFieldEnum>;
}
