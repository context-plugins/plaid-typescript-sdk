import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** User email information. */
export type ClientUserIdentityEmail = {
  /** User's email. */
  data: string;
  /** Indicates whether this is the primary email for the User. */
  primary: boolean;
};

export const clientUserIdentityEmailSchema: Schema<ClientUserIdentityEmail> =
  s.object<ClientUserIdentityEmail>({
    data: s.string(),
    primary: s.boolean(),
  });
