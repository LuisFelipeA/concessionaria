import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModelosModule } from './modelos/modelos.module';
import { MarcasModule } from './marcas/marcas.module';

@Module({
  imports: [ModelosModule, MarcasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
