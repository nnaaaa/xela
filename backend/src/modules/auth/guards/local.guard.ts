import { ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";
import { LoginArgs } from "../dto/login.dto";

export class LocalGuard extends AuthGuard("local") {
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext();
        const { data } = ctx.getArgs<LoginArgs>();
        req.body = {
            ...req.body,
            ...data,
        };
        return req;
    }
}
