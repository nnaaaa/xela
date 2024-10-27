import { ObjectType } from "@nestjs/graphql";
import { LoginResDto } from "./login.dto";

@ObjectType()
export class SignupResDto extends LoginResDto {}
