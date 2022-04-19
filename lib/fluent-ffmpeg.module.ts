import { DynamicModule, Module, Provider } from '@nestjs/common'
import { FLUENT_FFMPEG_TOKEN } from './fluent-ffmpeg.constant';
import ffmpeg from 'fluent-ffmpeg'

@Module({})
export class FluentFfmpegModule {
  public static forRoot(): DynamicModule {
    const fluentFfmpegProvider: Provider<any> = {
      provide: FLUENT_FFMPEG_TOKEN,
      useValue: ffmpeg,
    };

    return {
      module: FluentFfmpegModule,
      providers: [fluentFfmpegProvider],
      exports: [fluentFfmpegProvider],
    };
  }
}