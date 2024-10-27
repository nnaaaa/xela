import { ArgsType, Field, InputType, Int, PickType } from "@nestjs/graphql";
import { UserCryptoProfile } from "../../../../entities/user-crypto-profile";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@InputType()
export class GetCryptoProfileInput extends PickType(UserCryptoProfile, [
    "userId",
]) {
    @Field(() => Int, { nullable: false })
    userId: number;
}

@ArgsType()
export class GetCryptoProfileArgs {
    @ValidateNested()
    @Field(() => GetCryptoProfileInput, { nullable: false })
    @Type(() => GetCryptoProfileInput)
    data!: GetCryptoProfileInput;
}
