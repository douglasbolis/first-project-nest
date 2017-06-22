import { Component } from '@nestjs/common'
import { HttpException } from '@nestjs/core'

@Component()
export class UsersService {
	private users: Array< any > = [
		{ id: 1, name: "joao" },
		{ id: 2, name: "maria" },
		{ id: 3, name: "pedro" },
	]
	private countId: number = this.users.length

	public getAllUsers() {
		return Promise.resolve( this.users )
	}

	public getUser( id: number ) {
		const user = this.users.find( user => user.id === id )
		if ( !user ) {
			throw new HttpException( "User not found", 404 )
		}
		return Promise.resolve( user )
	}

	public addUser( user: any ) {
		this.users.push( Object.assign( user, { id: ++this.countId } ) )
		return Promise.resolve( 'Usuário inserido' )
	}
}
