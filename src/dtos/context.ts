/**
 * Represents the standard GraphQL execution context used by resolvers.
 * Provides access to both the incoming HTTP request and outgoing response.
 */

import type { KeycloakTokenPayload } from "./kc-token.dto.js";

/**
 * Express request type containing Keycloak cookies.
 */
export interface CookieReq {
  cookies: {
    access_token: string;
    refresh_token: string;
  };
}

export interface GqlCtx {
  req: Request & {
    cookies?: Record<string, string | undefined>;
    user?: KeycloakTokenPayload;
  };
  res: Response;
}