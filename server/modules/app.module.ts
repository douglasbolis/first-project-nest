import { Module } from '@nestjs/common'
import { UsersModule } from './users.module'
import { ApplicationController } from './app.controller'

@Module( {
	modules: [ UsersModule ],
	controllers: [ ApplicationController ]
} )
export class ApplicationModule {}
