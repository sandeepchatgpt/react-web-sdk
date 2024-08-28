/* eslint-disable @typescript-eslint/no-explicit-any */
import { axe } from 'jest-axe';

export async function checkAccessibility(container: HTMLElement) {
  return await axe(container);
}

export function formatAxeResults(results:any) {
  if (results.violations.length === 0) {
    return 'No accessibility violations found.';
  } else {
    return `Accessibility violations found: ${results.violations.map((v: { description: string; }) => v.description).join(', ')}`;
  }
}