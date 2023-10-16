import { schema as Schema, mongoose } from "../db.js";
import {
  CROP_TYPES_KEYS,
  DIAGNOSTICS_KEYS,
  GROWTH_STAGES_KEYS,
} from "../constants/plots.js";

export const schema = new Schema(
  {
    color: String,
    ndmi: Number,
    ndvi: Number,
    ndsi: Number,
    diagnostics: {
      type: String,
      enum: Object.values(DIAGNOSTICS_KEYS),
    },
    growthStage: {
      type: String,
      enum: Object.values(GROWTH_STAGES_KEYS),
    },
    crop: {
      type: String,
      enum: Object.values(CROP_TYPES_KEYS),
    },
  },
  { timestamps: true }
);

export default mongoose.model("PlotHistory", schema);
