import { Module, Shared, MiddlewaresConsumer } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { AuthMiddleware } from './auth.middleware'

@Shared()
@Module( {
	controllers: [ UsersController ],
	components: [ UsersService ],
	exports: [ UsersService ]
} )
export class UsersModule {
	configure( consumer: MiddlewaresConsumer ) {
		consumer.apply( AuthMiddleware ).forRoutes( UsersController )
	}
}
