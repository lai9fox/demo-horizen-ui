import type { App } from "vue";

const components: Record<string, { default: object }> = import.meta.glob('./*/*.vue', { eager: true });

/**
 * name-space -> NameSpace
 */
function toPascalName(name: string): string {
  return name.split('-').map(n => `${n.charAt(0).toUpperCase()}${n.substring(1)}`).join('');
}

export default function install(app: App) {
  Object.keys(components).forEach(component => {
    const name = toPascalName(component.slice(component.indexOf('/') + 1, component.lastIndexOf('/')));
    app.component(`H${name}`, components[component].default);
  });
}
