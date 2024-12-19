import { Module } from '@nestjs/common';
import { InfrastructureLayerModule } from '../infrastructure/infrastructureLayer.module';

@Module({
    imports: [
        InfrastructureLayerModule,
    ],
    providers: [

    ]
})
export class ApplicationLayerModule { }
