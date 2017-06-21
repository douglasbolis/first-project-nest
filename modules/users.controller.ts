import {
	Controller, Get, Post, HttpStatus, Response, Param, Body
} from '@nestjs/common'

@Controller( 'users' )
export class UsersController {
	constructor( private usersService: UsersController ) {}
	@Get()
	public async getAllUsers( @Response res ) {
		const users = await this.usersService.getAllUsers()
		return res.status( HttpStatus.OK ).json( users )
	}

	@Get( '/:id' )
	public async getUser( @Response() res, @Param( 'id' ) id ) {
		const user = await this.usersService.getUser( +id )
		return res.status( HttpStatus.OK ).json( user )
	}

	@Post()
	public async addUser( @Response res, @Body( 'users' ) user ) {
		const message = await this.usersService.addUser( user )
		return res.status( HttpStatus.CREATED ).json( message )
	}
}
