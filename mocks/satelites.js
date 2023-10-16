const SANO = (index, size) => Math.random() * 0.15 + 0.85;
const PROBLEMA_ABAJO = (index, size) =>
  index < size * 0.7 ? Math.random() * 0.15 + 0.85 : Math.random() * 0.15;
const PROBLEMA_ARRIBA = (index, size) =>
  index < size * 0.3 ? Math.random() * 0.15 : Math.random() * 0.15 + 0.85;
const PROBLEMA_MEDIO = (index, size) =>
  index < size * 0.4
    ? Math.random() * 0.15 + 0.85
    : index < size * 0.6
    ? Math.random() * 0.15
    : Math.random() * 0.15 + 0.85;

export const mockAddSateliteData = (plots) => {
  const valRandomIndex = Math.random();
  const problematicIndex =
    valRandomIndex < 0.25
      ? "ndvi"
      : valRandomIndex < 0.5
      ? "ndsi"
      : valRandomIndex < 0.75
      ? "ndmi"
      : "";
  const valRandom = Math.random();
  const ESTADO_CAMPO =
    valRandom < 0.25
      ? SANO
      : valRandom < 0.5
      ? PROBLEMA_ABAJO
      : valRandom < 0.75
      ? PROBLEMA_ARRIBA
      : PROBLEMA_MEDIO;
  return plots.map((plot, index) => ({
    color: Math.floor(Math.random() * 16777215).toString(16),
    ndmi:
      problematicIndex == "ndmi"
        ? ESTADO_CAMPO(index, plots.length)
        : SANO(1, 1),
    ndsi:
      problematicIndex == "ndsi"
        ? 1 - ESTADO_CAMPO(index, plots.length)
        : SANO(1, 1),
    ndvi:
      problematicIndex == "ndvi"
        ? ESTADO_CAMPO(index, plots.length)
        : SANO(1, 1),
  }));
};
