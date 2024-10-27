import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const AuthUser = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
        const request = GqlExecutionContext.create(ctx);
        const { user } = request.getContext().req;
        return user;
    },
);
