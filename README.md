# Fluent-ffmpeg module for NestJS

## Installation
```bash
yarn add @mrkwskiti/fluent-ffmpeg-nestjs fluent-ffmpeg

yarn add --dev @types/fluent-ffmpeg
```

## Documentation
- [Fluent-Ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg#readme)

## Examples

### Import module
```typescript
import { Module } from '@nestjs/common';
import { FluentFfmpegModule } from '@mrkwskiti/fluent-ffmpeg-nestjs'
import { AppController } from './app.controller';

@Module({
  imports: [FluentFfmpegModule.forRoot()],
  controllers: [AppController],
})
export class AppModule {}
```

### Inject ffmpeg
```typescript
import { Controller, Get, } from '@nestjs/common';
import { InjectFluentFfmpeg, Ffmpeg } from '@mrkwskiti/fluent-ffmpeg-nestjs'

export class AppController {
  constructor(
    @InjectFluentFfmpeg() private readonly ffmpeg: Ffmpeg
  ) {}

  // ...
}
```

## License
MIT
