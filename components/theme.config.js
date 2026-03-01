export const themeOptions = [
  { value: "classic", label: "Classic" },
  { value: "modern", label: "Modern" },
  { value: "minimal", label: "Minimal" },
  { value: "industrial", label: "Design 2" }
];

export const defaultTheme = "classic";

export const themeSet = new Set(themeOptions.map((option) => option.value));
