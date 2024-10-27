import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Interval } from "./interval.enum";
import { NestedEnumIntervalWithAggregatesFilter } from "./nested-enum-interval-with-aggregates-filter.input";
import { NestedIntFilter } from "./nested-int-filter.input";
import { NestedEnumIntervalFilter } from "./nested-enum-interval-filter.input";

@InputType()
export class EnumIntervalWithAggregatesFilter {
    @Field(() => Interval, { nullable: true })
    equals?: keyof typeof Interval;

    @Field(() => [Interval], { nullable: true })
    in?: Array<keyof typeof Interval>;

    @Field(() => [Interval], { nullable: true })
    notIn?: Array<keyof typeof Interval>;

    @Field(() => NestedEnumIntervalWithAggregatesFilter, { nullable: true })
    not?: NestedEnumIntervalWithAggregatesFilter;

    @Field(() => NestedIntFilter, { nullable: true })
    _count?: NestedIntFilter;

    @Field(() => NestedEnumIntervalFilter, { nullable: true })
    _min?: NestedEnumIntervalFilter;

    @Field(() => NestedEnumIntervalFilter, { nullable: true })
    _max?: NestedEnumIntervalFilter;
}
