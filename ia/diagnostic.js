import { DIAGNOSTICS_KEYS } from "../constants/plots.js";

export const generateDiagnostics = (plots, plotsWithData) =>
  plots.map(({ crop, history }, index) => {
    var newHistory = history.slice(-1);
    const { ndmi, ndsi, color, ndvi } = plotsWithData[index];
    newHistory = { ...newHistory, ndmi, ndsi, color, ndvi };
    const plotDiagnostic = getPlotDiagnostic(newHistory);
    newHistory.diagnostics = plotDiagnostic;
    history.push(newHistory);
    return { crop, history };
  });

const getPlotDiagnostic = ({ ndvi, ndsi, ndmi }) =>
  ndsi > 0.8
    ? DIAGNOSTICS_KEYS.FROSTING
    : ndmi < 0.2
    ? DIAGNOSTICS_KEYS.DEHYDRATION
    : ndvi < 0.16
    ? DIAGNOSTICS_KEYS.PROBLEM
    : ndvi < 0.6
    ? DIAGNOSTICS_KEYS.GOOD
    : ndvi < 0.8
    ? DIAGNOSTICS_KEYS.VERY_GOOD
    : DIAGNOSTICS_KEYS.EXCELENT;
