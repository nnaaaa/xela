import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserResolver } from "./user.resolver";
import { CryptoModule } from "../crypto/crypto.module";

@Module({
    imports: [CryptoModule],
    providers: [UserResolver, UserService],
})
export class UserModule {}
