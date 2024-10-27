import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { TradingType } from "./trading-type.enum";

@InputType()
export class EnumTradingTypeFieldUpdateOperationsInput {
    @Field(() => TradingType, { nullable: true })
    set?: keyof typeof TradingType;
}
