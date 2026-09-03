import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientUserIdentityEmail = {
  data: string;
  primary: boolean;
};

export const clientUserIdentityEmailSchema: Schema<ClientUserIdentityEmail> =
  s.object<ClientUserIdentityEmail>({
    data: s.string(),
    primary: s.boolean(),
  });
