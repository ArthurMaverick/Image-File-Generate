import {makeJWTtokenHandler} from "../../data/cryptography/token-handler"
import {AuthenticationMiddleware} from "../../../../app/middlewares/authenticationMiddleware"

export const makeAuthenticationMiddleware = (): AuthenticationMiddleware => {
  const jwt = makeJWTtokenHandler()
  return new AuthenticationMiddleware(jwt.validate.bind(jwt))
}