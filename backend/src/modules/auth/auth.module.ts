import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { LocalStrategy } from "./strategies/local.strategy";
import { UserService } from "src/modules/user/user.service";
import { JwtStrategy } from "./strategies/jwt.strategy";

@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            useFactory: (configService: ConfigService) => ({
                secret: configService.get<string>("JWT_SECRET"),
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [
        LocalStrategy,
        JwtStrategy,
        AuthResolver,
        AuthService,
        UserService,
    ],
})
export class AuthModule {}
