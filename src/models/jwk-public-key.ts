import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A JSON Web Key (JWK) that can be used in conjunction with [JWT
 * libraries](https://jwt.io/#libraries-io) to verify Plaid webhooks
 */
export type JwkPublicKey = {
  /** The alg member identifies the cryptographic algorithm family used with the key. */
  alg: string;
  /** The crv member identifies the cryptographic curve used with the key. */
  crv: string;
  /**
   * The kid (Key ID) member can be used to match a specific key. This can be used, for instance, to
   * choose among a set of keys within the JWK during key rollover.
   */
  kid: string;
  /**
   * The kty (key type) parameter identifies the cryptographic algorithm family used with the key,
   * such as RSA or EC.
   */
  kty: string;
  /** The use (public key use) parameter identifies the intended use of the public key. */
  use: string;
  /**
   * The x member contains the x coordinate for the elliptic curve point, provided as a
   * base64url-encoded string of the coordinate's big endian representation.
   */
  x: string;
  /**
   * The y member contains the y coordinate for the elliptic curve point, provided as a
   * base64url-encoded string of the coordinate's big endian representation.
   */
  y: string;
  /** The timestamp when the key was created, in Unix time. */
  createdAt: number;
  /** The timestamp when the key expired, in Unix time. */
  expiredAt: number | null;
};

export const jwkPublicKeySchema: Schema<JwkPublicKey> = s.object<JwkPublicKey>({
  alg: s.string(),
  crv: s.string(),
  kid: s.string(),
  kty: s.string(),
  use: s.string(),
  x: s.string(),
  y: s.string(),
  createdAt: s.int(),
  expiredAt: s.nullable(s.int()),
  _keysMap: {
    createdAt: "created_at",
    expiredAt: "expired_at",
  },
});
