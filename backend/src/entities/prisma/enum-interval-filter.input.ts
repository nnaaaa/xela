import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Interval } from "./interval.enum";
import { NestedEnumIntervalFilter } from "./nested-enum-interval-filter.input";

@InputType()
export class EnumIntervalFilter {
    @Field(() => Interval, { nullable: true })
    equals?: keyof typeof Interval;

    @Field(() => [Interval], { nullable: true })
    in?: Array<keyof typeof Interval>;

    @Field(() => [Interval], { nullable: true })
    notIn?: Array<keyof typeof Interval>;

    @Field(() => NestedEnumIntervalFilter, { nullable: true })
    not?: NestedEnumIntervalFilter;
}
