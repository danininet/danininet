const fs = require('fs');

const files = [
  'app/[locale]/proizvodi/digitalna-prodaja-lokacije/page.tsx',
  'app/[locale]/produkte/digitaler-verkauf-von-standorten/page.tsx',
  'app/[locale]/products/digital-location-sales/page.tsx'
];

const replacements = [
  ['DaniniHub Prompt Pack', 'DaniniHub Dialogue Method Pack'],
  ['DaniniHub Prompt', 'DaniniHub Dialogue Method'],
  ['Prompt Pack', 'Dialogue Method Pack'],
  ['prompt pack', 'dialogue method pack'],
  ['Promt', 'Dialogue'],
  ['prompt', 'dialogue'],
  ['Prompt', 'Dialogue'],
  ['Calije artifact', 'Lead Calculator'],
  ['Calije Artifact', 'Lead Calculator'],
  ['Calije case study', 'Lead Calculator + Metrics Tracker'],
  ['Calije Case Study', 'Lead Calculator + Metrics Tracker']
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;

  let s = fs.readFileSync(file, 'utf8');

  for (const [from, to] of replacements) {
    s = s.split(from).join(to);
  }

  fs.writeFileSync(file, s);
}

console.log('DaniniNet no-prompt sanitizer completed');
