#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');

let folder = '.';
if (argv.path) {
  folder = argv.path;
} else if (argv.p) {
  folder = argv.p;
}

let name = fs.readdirSync(`${folder}/drawable-mdpi`)[0].match(/(.*)\.png/)[1];
if (argv.name) {
  ({ name } = argv);
} else if (argv.n) {
  name = argv.n;
}

const fileName = fs.readdirSync(`${folder}/drawable-mdpi`)[0];
fs.copyFileSync(`${folder}/drawable-mdpi/${fileName}`, `${folder}/${name}.png`);
const fileName2 = fs.readdirSync(`${folder}/drawable-xhdpi`)[0];
fs.copyFileSync(`${folder}/drawable-xhdpi/${fileName2}`, `${folder}/${name}@2x.png`);
const fileName3 = fs.readdirSync(`${folder}/drawable-xxhdpi`)[0];
fs.copyFileSync(`${folder}/drawable-xxhdpi/${fileName3}`, `${folder}/${name}@3x.png`);
