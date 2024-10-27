import { Injectable } from "@nestjs/common";
import {
    CreateManyUserArgs,
    CreateOneUserArgs,
    DeleteManyUserArgs,
    DeleteOneUserArgs,
    FindFirstUserArgs,
    FindManyUserArgs,
    FindUniqueUserArgs,
    UpdateManyUserArgs,
    UpdateOneUserArgs,
    User,
    UserAggregateArgs,
    UserGroupByArgs,
} from "src/entities/user";
import { BaseCrudService } from "../../shared/base.service";
import { PrismaService } from "nestjs-prisma";
import { LoginReqDto } from "../auth/dto/login.dto";

@Injectable()
export class UserService extends BaseCrudService<
    User,
    FindFirstUserArgs,
    FindUniqueUserArgs,
    FindManyUserArgs,
    UserGroupByArgs,
    UserAggregateArgs,
    CreateOneUserArgs,
    CreateManyUserArgs,
    UpdateOneUserArgs,
    UpdateManyUserArgs,
    DeleteOneUserArgs,
    DeleteManyUserArgs
> {
    constructor(prisma: PrismaService) {
        super(prisma);
    }
    async findById(userId: number): Promise<User> {
        return this.findUnique({ where: { id: userId } });
    }

    async findByAccount(email: string): Promise<LoginReqDto> {
        return this.prisma.user.findUnique({
            where: { email },
            select: { id: true, email: true, password: true },
        });
    }
}
