import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { TradingType } from "./trading-type.enum";
import { NestedIntFilter } from "./nested-int-filter.input";
import { NestedEnumTradingTypeFilter } from "./nested-enum-trading-type-filter.input";

@InputType()
export class NestedEnumTradingTypeWithAggregatesFilter {
    @Field(() => TradingType, { nullable: true })
    equals?: keyof typeof TradingType;

    @Field(() => [TradingType], { nullable: true })
    in?: Array<keyof typeof TradingType>;

    @Field(() => [TradingType], { nullable: true })
    notIn?: Array<keyof typeof TradingType>;

    @Field(() => NestedEnumTradingTypeWithAggregatesFilter, { nullable: true })
    not?: NestedEnumTradingTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, { nullable: true })
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTradingTypeFilter, { nullable: true })
    _min?: NestedEnumTradingTypeFilter;

    @Field(() => NestedEnumTradingTypeFilter, { nullable: true })
    _max?: NestedEnumTradingTypeFilter;
}
