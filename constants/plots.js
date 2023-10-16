// https://www.usna.edu/Users/oceano/pguth/md_help/html/approx_equivalents.htm
// 111 metros
export const PLOT_SIZE = 0.00001;

export const DIAGNOSTICS_KEYS = {
  DEHYDRATION: "dehydration",
  FROSTING: "frosting",
  PROBLEM: "problem",
  GOOD: "good",
  VERY_GOOD: "very-good",
  EXCELENT: "excelent",
  NONE: "none",
  FAL_NUT_1: "fal_nut_1",
  FAL_NUT_2: "fal_nut_2",
  PLAG_1: "plag_1",
  PLAG_2: "plag_2",
};

export const SOLUTION_KEYS = {
  [DIAGNOSTICS_KEYS.DEHYDRATION]: "ACONDICIONADOR DE SUELO",
  [DIAGNOSTICS_KEYS.FROSTING]: "TELA ANTI HELADA",
  [DIAGNOSTICS_KEYS.FAL_NUT_1]: "NUTRIENTE 1",
  [DIAGNOSTICS_KEYS.FAL_NUT_2]: "NUTRIENTE 2",
  [DIAGNOSTICS_KEYS.PLAG_1]: "MATA PLAGA 1",
  [DIAGNOSTICS_KEYS.PLAG_2]: "MATA PLAGA 2",
};

export const GROWTH_STAGES_KEYS = {
  NONE: "none",
  GERMINATION: "germination",
  VEGETATIVE_GROWTH: "vegetative_growth",
  FLOWERING: "flowering",
  POD_FORMATION: "pod_formation",
  MATURITY: "maturity",
};

export const CROP_TYPES_KEYS = {
  SOY: "soy",
  WHEAT: "wheat",
  SUNFLOWER: "sunflower",
  CORN: "corn",
  NONE: "none",
};
