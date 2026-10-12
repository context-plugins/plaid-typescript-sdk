import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Allows specifying the metadata of the test account */
export type Meta = {
  /** The account's name */
  name: string;
  /** The account's official name */
  officialName: string;
  /** The account's limit */
  limit: number;
  /**
   * The account's mask. Should be an empty string or a string of 2-4 alphanumeric characters. This
   * allows you to model a mask which does not match the account number (such as with a virtual
   * account number).
   */
  mask: string;
};

export const metaSchema: Schema<Meta> = s.object<Meta>({
  name: s.string(),
  officialName: s.string(),
  limit: s.float64(),
  mask: s.string(),
  _keysMap: {
    officialName: "official_name",
  },
});
