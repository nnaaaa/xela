import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { UserCryptoProfileWhereInput } from "./user-crypto-profile-where.input";
import { Type } from "class-transformer";
import { UserCryptoProfileOrderByWithRelationInput } from "./user-crypto-profile-order-by-with-relation.input";
import { Prisma } from "@prisma/client";
import { UserCryptoProfileWhereUniqueInput } from "./user-crypto-profile-where-unique.input";
import { Int } from "@nestjs/graphql";
import { UserCryptoProfileScalarFieldEnum } from "./user-crypto-profile-scalar-field.enum";

@ArgsType()
export class FindFirstUserCryptoProfileOrThrowArgs {
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

    @Field(() => [UserCryptoProfileScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof UserCryptoProfileScalarFieldEnum>;
}
