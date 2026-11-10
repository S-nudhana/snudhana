/**
 * Section-level toggles for the portfolio.
 *
 * Flipping one of these off keeps the section's code, data and components in
 * place — it only stops them rendering and hides the matching nav entry.
 */
export const features = {
  projects: false,
} as const satisfies Record<string, boolean>;
