import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { UserCryptoProfileWhereInput } from "./user-crypto-profile-where.input";
import { Type } from "class-transformer";
import { UserCryptoProfileOrderByWithRelationInput } from "./user-crypto-profile-order-by-with-relation.input";
import { Prisma } from "@prisma/client";
import { UserCryptoProfileWhereUniqueInput } from "./user-crypto-profile-where-unique.input";
import { Int } from "@nestjs/graphql";
import { UserCryptoProfileCountAggregateInput } from "./user-crypto-profile-count-aggregate.input";
import { UserCryptoProfileAvgAggregateInput } from "./user-crypto-profile-avg-aggregate.input";
import { UserCryptoProfileSumAggregateInput } from "./user-crypto-profile-sum-aggregate.input";
import { UserCryptoProfileMinAggregateInput } from "./user-crypto-profile-min-aggregate.input";
import { UserCryptoProfileMaxAggregateInput } from "./user-crypto-profile-max-aggregate.input";

@ArgsType()
export class UserCryptoProfileAggregateArgs {
    @Field(() => UserCryptoProfileWhereInput, { nullable: true })
    @Type(() => UserCryptoProfileWhereInput)
    where?: UserCryptoProfileWhereInput;

    @Field(() => [UserCryptoProfileOrderByWithRelationInput], {
        nullable: true,
    })
    orderBy?: Array<UserCryptoProfileOrderByWithRelationInput>;

    @Field(() => UserCryptoProfileWhereUniqueInput, { nullable: true })
    cursor?: Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => UserCryptoProfileCountAggregateInput, { nullable: true })
    _count?: UserCryptoProfileCountAggregateInput;

    @Field(() => UserCryptoProfileAvgAggregateInput, { nullable: true })
    _avg?: UserCryptoProfileAvgAggregateInput;

    @Field(() => UserCryptoProfileSumAggregateInput, { nullable: true })
    _sum?: UserCryptoProfileSumAggregateInput;

    @Field(() => UserCryptoProfileMinAggregateInput, { nullable: true })
    _min?: UserCryptoProfileMinAggregateInput;

    @Field(() => UserCryptoProfileMaxAggregateInput, { nullable: true })
    _max?: UserCryptoProfileMaxAggregateInput;
}
