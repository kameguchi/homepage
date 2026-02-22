export const themeOptions = [
  { value: "classic", label: "Classic" },
  { value: "modern", label: "Modern" },
  { value: "minimal", label: "Minimal" }
];

export const defaultTheme = "classic";

export const themeSet = new Set(themeOptions.map((option) => option.value));
