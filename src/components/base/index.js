const components = import.meta.glob('./*.vue', { eager: true });

function transformName(name) {
  const names = name.split('-');
  return names.reduce((pre, cur) => {
    return pre + cur.charAt(0).toUpperCase() + cur.substring(1);
  }, '');
}

export default function install(app) {
  for (const [fileName, value] of Object.entries(components)) {
    const name = `Base${ transformName(fileName.substring(2).replace(/.vue/, '')) }`;
    app.component(name, value.default);
  }
}
