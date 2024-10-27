import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetBalanceScalarWhereInput } from "./asset-balance-scalar-where.input";
import { Type } from "class-transformer";
import { AssetBalanceUpdateManyMutationInput } from "./asset-balance-update-many-mutation.input";

@InputType()
export class AssetBalanceUpdateManyWithWhereWithoutCryptoProfileInput {
    @Field(() => AssetBalanceScalarWhereInput, { nullable: false })
    @Type(() => AssetBalanceScalarWhereInput)
    where!: AssetBalanceScalarWhereInput;

    @Field(() => AssetBalanceUpdateManyMutationInput, { nullable: false })
    @Type(() => AssetBalanceUpdateManyMutationInput)
    data!: AssetBalanceUpdateManyMutationInput;
}
