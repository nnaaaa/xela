import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, { nullable: false })
    id!: number;

    @Field(() => Int, { nullable: false })
    email!: number;

    @Field(() => Int, { nullable: false })
    name!: number;

    @Field(() => Int, { nullable: false })
    password!: number;

    @Field(() => Int, { nullable: false })
    otp!: number;

    @Field(() => Int, { nullable: false })
    otpPurpose!: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
