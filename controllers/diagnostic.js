import { DIAGNOSTICS_KEYS, GROWTH_STAGES_KEYS } from "../constants/plots.js";
import { changeFieldAndSave } from "../helpers/entities.js";
import { catchRequest, endRequest } from "../helpers/request.js";
import { getFieldById } from "../interactors/field.js";

export const addDiagnosic = async (req, res) => {
  try {
    const { diagnostic } = req.body;
    const fieldId = req.params.id;
    var field = await getFieldById(fieldId);
    const updatedPlots = field.plots.map((plot) => {
      const newElement = plot.history[plot.history.length - 1];
      if (newElement.diagnostics == DIAGNOSTICS_KEYS.PROBLEM) {
        newElement.diagnostics = diagnostic;
      }
      return plot;
    });
    await changeFieldAndSave(field, "plots", updatedPlots);
    field = await getFieldById(fieldId);
    endRequest({
      response: { field },
      code: 201,
      res,
    });
  } catch (err) {
    catchRequest({
      err,
      res,
      message: "Error while updating history",
      internalCode: "1007",
    });
  }
};
