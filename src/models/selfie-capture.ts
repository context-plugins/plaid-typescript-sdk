import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The image or video capture of a selfie. Only one of `image_url` or `video_url` will be populated
 * per selfie. In the vast majority of sessions Plaid records a short video of the user, so
 * `video_url` is populated and `image_url` is `null`. `image_url` is only populated in the rare
 * passive-liveness fallback case, where the user's device could not complete the standard video
 * liveness capture (for example, a camera or streaming error) and submitted a single still image
 * instead.
 */
export type SelfieCapture = {
  /**
   * Temporary URL for downloading a still-image selfie capture. This field is only populated when
   * the session fell back to passive (image-based) liveness. For the majority of selfie checks this
   * field is `null` and `video_url` is populated instead.
   */
  imageUrl: string | null;
  /**
   * Temporary URL for downloading a video selfie capture. This is the standard selfie capture for
   * Identity Verification. Plaid records a short video of the user during the Selfie Check liveness
   * step, so this field is populated for the vast majority of selfie checks.
   */
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
