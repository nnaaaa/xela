import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { UserCryptoProfileUpdateInput } from "./user-crypto-profile-update.input";
import { Type } from "class-transformer";
import { Prisma } from "@prisma/client";
import { UserCryptoProfileWhereUniqueInput } from "./user-crypto-profile-where-unique.input";

@ArgsType()
export class UpdateOneUserCryptoProfileArgs {
    @Field(() => UserCryptoProfileUpdateInput, { nullable: false })
    @Type(() => UserCryptoProfileUpdateInput)
    data!: UserCryptoProfileUpdateInput;

    @Field(() => UserCryptoProfileWhereUniqueInput, { nullable: false })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    where!: Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">;
}
