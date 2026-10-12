import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A type indicating who or what last touched this object. `dashboard`, `link`, and `api` indicate
 * the originating surface; `system` indicates Plaid. `retro` indicates a screening created
 * retroactively via a bulk screening creation.
 */
export const Source = {
  Dashboard: "dashboard",
  Link: "link",
  Api: "api",
  System: "system",
  Retro: "retro",
} as const;
export type Source = (typeof Source)[keyof typeof Source] | (string & {});

export const sourceSchema: EnumSchema<Source> = s.enumOf<Source>(Source);
