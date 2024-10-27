import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { TradingType } from "./trading-type.enum";
import { NestedEnumTradingTypeFilter } from "./nested-enum-trading-type-filter.input";

@InputType()
export class EnumTradingTypeFilter {
    @Field(() => TradingType, { nullable: true })
    equals?: keyof typeof TradingType;

    @Field(() => [TradingType], { nullable: true })
    in?: Array<keyof typeof TradingType>;

    @Field(() => [TradingType], { nullable: true })
    notIn?: Array<keyof typeof TradingType>;

    @Field(() => NestedEnumTradingTypeFilter, { nullable: true })
    not?: NestedEnumTradingTypeFilter;
}
