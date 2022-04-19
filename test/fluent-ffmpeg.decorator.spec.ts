import { InjectFluentFfmpeg } from '../lib/fluent-ffmpeg.decorator';
import { FLUENT_FFMPEG_TOKEN } from '../lib/fluent-ffmpeg.constant';
import { Inject } from '@nestjs/common';

jest.mock('@nestjs/common', () => ({
  Inject: jest.fn(),
}));

describe('FluentFfmpegDecorator', () => {
  it('should call Inject', () => {
    InjectFluentFfmpeg();

    expect(InjectFluentFfmpeg).toBeDefined();
    expect(Inject).toBeCalledWith(FLUENT_FFMPEG_TOKEN);
    expect(Inject).toBeCalledTimes(1);
  })
});