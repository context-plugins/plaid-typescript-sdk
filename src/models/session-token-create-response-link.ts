import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SessionTokenCreateResponseLink = {
  linkToken: string;
  expiration: Date;
  userId?: string;
};

export const sessionTokenCreateResponseLinkSchema: Schema<SessionTokenCreateResponseLink> =
  s.object<SessionTokenCreateResponseLink>({
    linkToken: s.string(),
    expiration: s.dateTime(),
    userId: s.optional(s.string()),
    _keysMap: {
      linkToken: "link_token",
      userId: "user_id",
    },
  });
