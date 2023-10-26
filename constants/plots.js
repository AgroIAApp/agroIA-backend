// https://www.usna.edu/Users/oceano/pguth/md_help/html/approx_equivalents.htm
// 111 metros
export const PLOT_SIZE = 0.00001;

export const DIAGNOSTICS_KEYS = {
  DEHYDRATION: "dehydration",
  FROSTING: "frosting",
  PROBLEM: "problem",
  GOOD: "good",
  VERY_GOOD: "very_good",
  EXCELENT: "excelent",
  NONE: "none",
  FAL_NUT: "fal_nut",
  MALEZA: "maleza",
  INSECTOS: "insectos",
};

export const SOLUTION_KEYS = {
  [DIAGNOSTICS_KEYS.DEHYDRATION]: "ACONDICIONADOR DE SUELO",
  [DIAGNOSTICS_KEYS.FROSTING]: "TELA ANTI HELADA",
  [DIAGNOSTICS_KEYS.FAL_NUT]: "FERTILIZANTE",
  [DIAGNOSTICS_KEYS.MALEZA]: "HERBICIDA",
  [DIAGNOSTICS_KEYS.INSECTOS]: "INSECTICIDA",
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
