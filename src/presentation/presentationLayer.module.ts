import { Module } from '@nestjs/common';
import { ApplicationLayerModule } from '../application/applicationLayer.module';
import { InfrastructureLayerModule } from '../infrastructure/infrastructureLayer.module';
import { AccessTokenStrategy } from './auth-strategies/accessToken.strategy';
import { RefreshTokenStrategy } from './auth-strategies/refreshToken.strategy';

@Module({
    imports: [ ApplicationLayerModule, InfrastructureLayerModule],
    controllers: [
 
    ],
    providers: [AccessTokenStrategy, RefreshTokenStrategy],
})
export class PresentationLayerModule { }
