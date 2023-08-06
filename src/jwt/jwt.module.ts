import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { jwtConfig } from './jwt.config';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        JwtModule.register({
            secret: jwtConfig.secret,
            signOptions: { expiresIn: jwtConfig.expiresIn },
        }),
    ],
    providers: [JwtStrategy],
    exports: [JwtModule],
})
export class JwtAuthModule {}
