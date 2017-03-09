#!/usr/bin/env node
const spawn = require('child_process').spawnSync;
const path = require('path');
const filename = path.parse(process.cwd()).name;

const folder = '';

spawn('zip', ['-r', `${filename}.zip`, `../${filename}`]);
const aws = spawn('aws', ['s3', 'cp', `${filename}.zip`, `s3://${folder}/`]);
console.log(aws.stdout.toString());
spawn('rm', [`${filename}.zip`]);
console.log(`Download link: http://${folder}.s3.amazonaws.com/${filename}.zip`)