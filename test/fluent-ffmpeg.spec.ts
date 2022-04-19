import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { FluentFfmpegModule, FLUENT_FFMPEG_TOKEN } from '../lib';
import ffmpeg from 'fluent-ffmpeg';

describe("FluentFfmpegModule", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [FluentFfmpegModule.forRoot()],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Fluent ffmpeg lib should be intialized', () => {
    const actual = app.get(FLUENT_FFMPEG_TOKEN);

    expect(actual).toBeDefined();
    expect(actual).toEqual(ffmpeg);
  });
});
