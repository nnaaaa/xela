import { ArgsType, Field, InputType, PickType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { User } from "../../../entities/user";
import { Length, ValidateNested } from "class-validator";
import { OtpPurpose } from "../../../entities/prisma";

@InputType()
export class VerifyDto extends PickType(User, ["otp", "otpPurpose"]) {
    @Length(6, 6)
    @Field(() => String, { nullable: false })
    otp!: string;

    @Field(() => OtpPurpose, { nullable: false })
    otpPurpose!: OtpPurpose;
}

@ArgsType()
export class VerifyArgs {
    @ValidateNested()
    @Field(() => VerifyDto, { nullable: false })
    @Type(() => VerifyDto)
    data!: VerifyDto;
}
