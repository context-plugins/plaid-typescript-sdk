import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type Status = {
  /** Status Code. */
  statusCode: string | null;
  /** Status Description. */
  statusDescription: string | null;
};

export const statusSchema: Schema<Status> = s.object<Status>({
  statusCode: s.nullable(s.string()),
  statusDescription: s.nullable(s.string()),
  _keysMap: {
    statusCode: "StatusCode",
    statusDescription: "StatusDescription",
  },
});
