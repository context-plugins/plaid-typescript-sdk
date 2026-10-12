import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * User authentication parameters, for clients making a request without an `access_token`. This is
 * only allowed for select clients and will not be supported in the future. Most clients should call
 * `/item/import` to obtain an access token before making a request.
 */
export type ItemApplicationListUserAuth = {
  /** Account username. */
  userId?: string | null;
  /** Account username hashed by FI. */
  fiUsernameHash?: string | null;
};

export const itemApplicationListUserAuthSchema: Schema<ItemApplicationListUserAuth> =
  s.object<ItemApplicationListUserAuth>({
    userId: s.optionalNullable(s.string()),
    fiUsernameHash: s.optionalNullable(s.string()),
    _keysMap: {
      userId: "user_id",
      fiUsernameHash: "fi_username_hash",
    },
  });
