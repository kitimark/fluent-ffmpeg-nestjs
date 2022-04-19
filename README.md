# Fluent-ffmpeg module for NestJS

## Installation
```bash
yarn add @mrkwskiti/fluent-ffmpeg-nestjs fluent-ffmpeg

yarn add --dev @types/fluent-ffmpeg
```

## Documentation
- [Fluent-Ffmpeg](github.com/fluent-ffmpeg/node-fluent-ffmpeg#readme)

## Examples

### Import module
```typescript
import { Module } from '@nestjs/common';
import { FluentFfmpegModule } from '@mrkwskiti/fluent-ffmpeg-nestjs'
import { AppController } from './app.controller';

@Module({
  imports: [FluentFfmpegMedule.forRoot()],
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
