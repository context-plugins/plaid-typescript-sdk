import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JwkPublicKey = {
  alg: string;
  crv: string;
  kid: string;
  kty: string;
  use: string;
  x: string;
  y: string;
  createdAt: number;
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
  createdAt: s.number(),
  expiredAt: s.nullable(s.number()),
  _keysMap: {
    createdAt: "created_at",
    expiredAt: "expired_at",
  },
});
