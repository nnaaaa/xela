import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { PrismaModule } from "nestjs-prisma";
import { join } from "path";
import { AuthModule } from "./modules/auth/auth.module";
import { UserModule } from "./modules/user/user.module";
import { CryptoModule } from "./modules/crypto/crypto.module";

@Module({
    imports: [
        GraphQLModule.forRootAsync<ApolloDriverConfig>({
            driver: ApolloDriver,
            useFactory: (configService: ConfigService) => {
                const subscription_path = configService.get(
                    "SUBSCRIPTION_PATH",
                    "/graphql",
                );


                let devVariables = {};
                if (process.env.NODE_ENV === "development") {
                    devVariables = {
                        autoSchemaFile: join(
                            process.cwd(),
                            "graphql/schema.gql",
                        ),
                        definitions: {
                            path: join(process.cwd(), "graphql/graphql.ts"),
                        },
                    };
                }
                return {
                    playground: false,
                    plugins: [ApolloServerPluginLandingPageLocalDefault()],
                    typePaths: ["./**/*.gql"],
                    ...devVariables,
                    subscriptions: {
                        "graphql-ws": {
                            path: subscription_path,
                            onConnect: (context) => {
                                const { connectionParams, extra } = context;
                                // user validation will remain the same as in the example above
                                // when using with graphql-ws, additional context value should be stored in the extra field
                                // extra.user = { user: {} };
                            },
                        },
                    },
                };
            },
            inject: [ConfigService],
        }),
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        PrismaModule.forRoot({
            isGlobal: true,
            prismaServiceOptions: {
                prismaOptions: {
                    log: ["info", "warn", "error"],
                },
                explicitConnect: true,
            },
        }),
        UserModule,
        AuthModule,
        CryptoModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
