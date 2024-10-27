import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { UserCryptoProfileWhereUniqueInput } from "./user-crypto-profile-where-unique.input";
import { Type } from "class-transformer";
import { UserCryptoProfileUpdateWithoutUserInput } from "./user-crypto-profile-update-without-user.input";

@InputType()
export class UserCryptoProfileUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => UserCryptoProfileWhereUniqueInput, { nullable: false })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    where!: Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">;

    @Field(() => UserCryptoProfileUpdateWithoutUserInput, { nullable: false })
    @Type(() => UserCryptoProfileUpdateWithoutUserInput)
    data!: UserCryptoProfileUpdateWithoutUserInput;
}
