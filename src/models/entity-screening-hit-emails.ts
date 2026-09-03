import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EntityScreeningHitEmails = {
  emailAddress: string;
};

export const entityScreeningHitEmailsSchema: Schema<EntityScreeningHitEmails> =
  s.object<EntityScreeningHitEmails>({
    emailAddress: s.string(),
    _keysMap: {
      emailAddress: "email_address",
    },
  });
