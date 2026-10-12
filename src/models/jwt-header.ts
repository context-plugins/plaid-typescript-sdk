import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A JWT Header, used for webhook validation */
export type JwtHeader = {
  id: string;
  kid: string;
  alg: string;
};

export const jwtHeaderSchema: Schema<JwtHeader> = s.object<JwtHeader>({
  id: s.string(),
  kid: s.string(),
  alg: s.string(),
});
