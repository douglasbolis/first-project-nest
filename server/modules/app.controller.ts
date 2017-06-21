import { Controller, Get, HttpStatus, Response } from '@nestjs/common'

@Controller()
export class ApplicationController {

	@Get( '/ping' )
	public getHandler( @Response() res ) {
		return res.status( HttpStatus.OK ).json( 'pong' )
	}
}
