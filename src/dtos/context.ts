/**
 * Represents the standard GraphQL execution context used by resolvers.
 * Provides access to both the incoming HTTP request and outgoing response.
 */

import { Locale } from '../types/locale.type.js';
import type { KeycloakRawOutput, KeycloakTokenPayload } from './kc.dto.js';
import { TraceContextDTO } from './trace.dto.js';

/**
 * Express request type containing Keycloak cookies.
 */
export interface OmnixysCookieRequest {
  access_token?: string;
  refresh_token?: string;
  locale: Locale;
}

export interface GqlCtx {
  req: Request & {
    cookies?: OmnixysCookieRequest;
    user?: KeycloakTokenPayload;
  };
  res: Response;
}

export interface ClientContext {
  ip: string | undefined;
  userAgent: string | undefined;
  device: string;
  browser: string;
  os: string;
  location: string;
  locale: Locale;
}


export interface ActorContext {
  actorId?: string;
  roles?: string[];
}

export interface TenantContext {
  tenantId?: string;
}

export interface RequestContext {
  requestId?: string;
  correlationId?: string;
  ip?: string;
  locale?: string;
  userAgent?: string;
}

export interface RuntimeContext {
  service?: string;
  operation?: string;
  version?: string;
}

export interface UnifiedContext {
  trace?: TraceContextDTO;
  actor?: ActorContext;
  tenant?: TenantContext;
  request?: RequestContext;
  runtime?: RuntimeContext;
}

export interface AuthUser {
  id: string;
  username: string;
  email: string;

  roles: string[];

  raw: KeycloakRawOutput;

  sub: string;
  preferred_username: string;
  given_name: string;
  family_name: string;

  tenantId: string;

  realm_access: {
    roles: string[];
  };

  access_token: string;
  refresh_token: string;
}
