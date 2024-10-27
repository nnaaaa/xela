import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { UserCryptoProfileWhereUniqueInput } from "./user-crypto-profile-where-unique.input";
import { Type } from "class-transformer";
import { UserCryptoProfileCreateInput } from "./user-crypto-profile-create.input";
import { UserCryptoProfileUpdateInput } from "./user-crypto-profile-update.input";

@ArgsType()
export class UpsertOneUserCryptoProfileArgs {
    @Field(() => UserCryptoProfileWhereUniqueInput, { nullable: false })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    where!: Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">;

    @Field(() => UserCryptoProfileCreateInput, { nullable: false })
    @Type(() => UserCryptoProfileCreateInput)
    create!: UserCryptoProfileCreateInput;

    @Field(() => UserCryptoProfileUpdateInput, { nullable: false })
    @Type(() => UserCryptoProfileUpdateInput)
    update!: UserCryptoProfileUpdateInput;
}
