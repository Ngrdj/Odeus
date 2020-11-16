import { Module } from '@nestjs/common';
import { GoogleOauthService } from './google-oauth.service';
import { GoogleOauthController } from './google-oauth.controller';
import { GoogleStrategy } from 'src/strategies/google.strategy';

@Module({
  controllers: [GoogleOauthController],
  providers: [GoogleOauthService,GoogleStrategy]
})
export class GoogleOauthModule {}
