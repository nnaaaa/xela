import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileScalarWhereInput } from "./user-crypto-profile-scalar-where.input";
import { Type } from "class-transformer";
import { UserCryptoProfileUpdateManyMutationInput } from "./user-crypto-profile-update-many-mutation.input";

@InputType()
export class UserCryptoProfileUpdateManyWithWhereWithoutUserInput {
    @Field(() => UserCryptoProfileScalarWhereInput, { nullable: false })
    @Type(() => UserCryptoProfileScalarWhereInput)
    where!: UserCryptoProfileScalarWhereInput;

    @Field(() => UserCryptoProfileUpdateManyMutationInput, { nullable: false })
    @Type(() => UserCryptoProfileUpdateManyMutationInput)
    data!: UserCryptoProfileUpdateManyMutationInput;
}
