import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Status = {
  statusCode: string | null;
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
