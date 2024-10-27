import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { UserCryptoProfileWhereUniqueInput } from "./user-crypto-profile-where-unique.input";
import { Type } from "class-transformer";
import { UserCryptoProfileCreateWithoutHistoricalPnLInput } from "./user-crypto-profile-create-without-historical-pn-l.input";

@InputType()
export class UserCryptoProfileCreateOrConnectWithoutHistoricalPnLInput {
    @Field(() => UserCryptoProfileWhereUniqueInput, { nullable: false })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    where!: Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">;

    @Field(() => UserCryptoProfileCreateWithoutHistoricalPnLInput, {
        nullable: false,
    })
    @Type(() => UserCryptoProfileCreateWithoutHistoricalPnLInput)
    create!: UserCryptoProfileCreateWithoutHistoricalPnLInput;
}
