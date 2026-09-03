import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SelfieCapture = {
  imageUrl: string | null;
  videoUrl: string | null;
};

export const selfieCaptureSchema: Schema<SelfieCapture> = s.object<SelfieCapture>({
  imageUrl: s.nullable(s.string()),
  videoUrl: s.nullable(s.string()),
  _keysMap: {
    imageUrl: "image_url",
    videoUrl: "video_url",
  },
});
