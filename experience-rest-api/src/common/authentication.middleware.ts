import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    jwt({
      secret: expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://nestjs-shopping.auth0.com/.well-known/jwks.json',
      }),

      audience: 'http://localhost:3000',
      issuer: 'https://nestjs-shopping.auth0.com/',
      algorithm: 'RS256',
    })//(req, res, err => {
/* (parameter) req: Request 
  Argument of type 'Request' is not assignable to parameter of type 
  'import("/home/mrj/Projects/NestJS/experience/experience-rest-api/node_modules/@types/express-serve-static-core/index")
  .Request'. Type 'Request' is missing the following properties from type 
  'Request': get, header, accepts, acceptsCharsets, and 67 more.ts(2345) 
*/
      // if (err) {
      //   const status = err.status || 500;
      //   const message =
      //     err.message || 'Sorry, we were unable to process your request.';
      //   return res.status(status).send({ 
      //     /* const status: any Cannot invoke an expression whose type 
      //     lacks a call signature. Type 'Number' has no compatible call signatures.ts(2349) */
      //     message,
      //   });
      // }
      next();
    // });
  }
}
