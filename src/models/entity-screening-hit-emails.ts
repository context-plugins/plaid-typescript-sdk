import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Email address information for the associated entity watchlist hit */
export type EntityScreeningHitEmails = {
  /**
   * A valid email address. Must not have leading or trailing spaces and address must be RFC
   * compliant. For more information, see [RFC 3696](https://datatracker.ietf.org/doc/html/rfc3696).
   */
  emailAddress: string;
};

export const entityScreeningHitEmailsSchema: Schema<EntityScreeningHitEmails> =
  s.object<EntityScreeningHitEmails>({
    emailAddress: s.string(),
    _keysMap: {
      emailAddress: "email_address",
    },
  });
