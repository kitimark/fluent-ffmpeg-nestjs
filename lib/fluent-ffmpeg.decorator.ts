import { Inject } from '@nestjs/common';
import { FLUENT_FFMPEG_TOKEN } from './fluent-ffmpeg.constant';

export const InjectFluentFfmpeg = () => {
  return Inject(FLUENT_FFMPEG_TOKEN);
}