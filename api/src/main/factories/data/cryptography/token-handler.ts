import { env } from "../../../config/env"
import { JwtTokenHandler } from "../../../../data/cryptography"

export const makeJWTtokenHandler = (): JwtTokenHandler => {
  return new JwtTokenHandler(env.jwtSecret)
}