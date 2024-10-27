import {
    InputType,
    Int,
    Field,
    ObjectType,
    ArgsType,
    PickType,
} from "@nestjs/graphql";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserCryptoProfile } from "../../../../entities/user-crypto-profile";

@InputType()
export class CreateCryptoProfileInput extends PickType(UserCryptoProfile, [
    "userId",
    "apiKey",
    "secretKey",
]) {
    @Field(() => Int, { nullable: false })
    userId: number;

    @Field({ nullable: false })
    apiKey: string;

    @Field({ nullable: false })
    secretKey: string;
}

@ArgsType()
export class CreateCryptoProfileArgs {
    @ValidateNested()
    @Field(() => CreateCryptoProfileInput, { nullable: false })
    @Type(() => CreateCryptoProfileInput)
    data!: CreateCryptoProfileInput;
}

@ObjectType()
export class CreateCryptoRes {
    @Field()
    userId: number;
}
