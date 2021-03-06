import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { WalletModule } from 'wallet/wallet.module';
// imoprt {}

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CategoryModule,
    UserModule,
    AuthModule,
    WalletModule,
  ],
  controllers: [
    AppController,
    AuthController,
    UserController,
    CategoryController,
  ],
  providers: [AppService, UserService, AuthService, CategoryService],
})
export class AppModule {}
