export interface FormConfig {
  label: string
  rdfClass: string
  schema: () => Promise<Record<string, unknown>>
  template: () => Promise<string>
  templateFormat: string
}

const formsRegistry: Record<string, FormConfig> = {
  mobility_v1_1: {
    label: 'v1.1 (mandatory)',
    rdfClass: 'Dataset',
    schema: () => import('./mobility_v1_1.json').then((m) => m.default as Record<string, unknown>),
    template: () => import('./mobility_v1_1.jinja?raw').then((m) => m.default),
    templateFormat: 'text/turtle',
  },
  mobility_v3_0: {
    label: 'v3.0 (mandatory)',
    rdfClass: 'Dataset',
    schema: () => import('./mobility_v3_0.json').then((m) => m.default as Record<string, unknown>),
    template: () => import('./mobility_v3_0.jinja?raw').then((m) => m.default),
    templateFormat: 'text/turtle',
  }
}

export function getFormKeys(): string[] {
  return Object.keys(formsRegistry)
}

export function getFormOptions(): { title: string; value: string }[] {
  return Object.entries(formsRegistry).map(([key, cfg]) => ({
    title: cfg.label,
    value: key,
  }))
}

export default formsRegistry
