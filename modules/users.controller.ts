import {
	Controller, Get, Post, HttpStatus, Response, Param, Body
} from '@nestjs/common'

@Controller( 'users' )
export class UsersController {
	constructor( private usersService: UsersController ) {}
	@Get()
	public getAllUsers( @Response res ) {
		return this.usersService.getAllUsers()
			.then( users => res.status( HttpStatus.OK ).json( users ) )
	}

	@Get( '/:id' )
	public getUser( @Response() res, @Param( 'id' ) id ) {
		return this.usersService.getUser( +id )
			.then( user => res.status( HttpStatus.OK ).json( user ) )
	}

	@Post()
	public addUser( @Response res, @Body( 'users' ) user ) {
		return this.usersService.addUser( user )
			.then( message => res.status( HttpStatus.CREATED ).json( message ) )
	}
}
