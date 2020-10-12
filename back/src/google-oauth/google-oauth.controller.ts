import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleOauthService } from './google-oauth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('google')
export class GoogleOauthController {
  constructor(private readonly googleService: GoogleOauthService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.googleService.googleLogin(req)
  }
}
