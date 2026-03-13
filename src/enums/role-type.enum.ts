/* eslint-disable @typescript-eslint/no-non-null-assertion */

/**
 * Realm roles used by Omnixys services.
 * NOTE: Only ONE effective role is resolved.
 */
export enum RealmRole {
  ADMIN = 'ADMIN',
  SUPREME = 'SUPREME',
  ELITE = 'ELITE',
  BASIC = 'BASIC',
  USER = 'USER',
  GUEST = 'GUEST',
}

export interface RoleData {
  id: string;
  name: string;
}

/** Enum → Keycloak role name */
export const ENUM_TO_KC: Record<RealmRole, string> = {
  [RealmRole.ADMIN]: 'ADMIN',
  [RealmRole.SUPREME]: 'SUPREME',
  [RealmRole.ELITE]: 'ELITE',
  [RealmRole.BASIC]: 'BASIC',
  [RealmRole.USER]: 'USER',
  [RealmRole.GUEST]: 'GUEST',
};

/** Keycloak role string → enum */
export const KC_TO_ENUM: Record<string, RealmRole> = {
  admin: RealmRole.ADMIN,
  ADMIN: RealmRole.ADMIN,

  supreme: RealmRole.SUPREME,
  SUPREME: RealmRole.SUPREME,

  elite: RealmRole.ELITE,
  ELITE: RealmRole.ELITE,

  basic: RealmRole.BASIC,
  BASIC: RealmRole.BASIC,

  user: RealmRole.USER,
  USER: RealmRole.USER,

  guest: RealmRole.GUEST,
  GUEST: RealmRole.GUEST,
};

/** Convert single string → enum */
export function roleStrToEnum(
  s: string | undefined | null,
): RealmRole | null {
  if (!s) return null;

  const raw = String(s).trim();

  const normalized = raw
    .replace(/^ROLE_/i, '')
    .replace(/^REALM:/i, '')
    .replace(/^CLIENT:/i, '')
    .trim();

  const lastSegment = normalized.includes(':')
    ? normalized.split(':').pop()!.trim()
    : normalized;

  return (
    KC_TO_ENUM[lastSegment] ??
    KC_TO_ENUM[lastSegment.toLowerCase()] ??
    null
  );
}

/** Convert string list → enum list */
export function toEnumRoles(
  list: Array<string | null | undefined>,
): RealmRole[] {
  const out: RealmRole[] = [];
  const seen = new Set<RealmRole>();

  for (const raw of list) {
    const r = roleStrToEnum(raw ?? undefined);

    if (r && !seen.has(r)) {
      seen.add(r);
      out.push(r);
    }
  }

  return out;
}

/** Enum → Keycloak role string */
export function enumToKcName(r: RealmRole): string {
  return ENUM_TO_KC[r] ?? String(r);
}

/**
 * Resolve ONE effective role.
 */
export function resolveEffectiveRole(
  isAuthenticated: boolean,
  raw?: string[] | null,
): RealmRole {

  if (!isAuthenticated) {
    return RealmRole.GUEST;
  }

  const roles = toEnumRoles(raw ?? []);

  const PRIORITY: RealmRole[] = [
    RealmRole.ADMIN,
    RealmRole.SUPREME,
    RealmRole.ELITE,
    RealmRole.BASIC,
    RealmRole.USER,
    RealmRole.GUEST,
  ];

  for (const p of PRIORITY) {
    if (roles.includes(p)) {
      return p;
    }
  }

  return RealmRole.GUEST;
}