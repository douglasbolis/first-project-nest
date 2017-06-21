import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.component'

@Module( {
	controllers: [ UsersController ],
	components: [ UsersService ]
} )
export class ApplicationModule {}
