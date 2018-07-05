#!/usr/bin/env node
const { resolve } = require("path");
const { getProgramFromFiles, buildGenerator } = require('typescript-json-schema');
const prettyjson = require('prettyjson');
const glob = require('glob');

// optionally pass argument to schema generator
const settings = {
    required: true,
};

const GLOB_SETTINGS = {
    ignore: ['**/node_modules/**'],
};

if (!process.argv[2]) {
    console.log('Interface name is required. Please provide the name');
    console.log('Example: interface-search IAbstractPlugin [--ext]');
    process.exit(1);
}

const interfaceToSearch = process.argv[2];
const  extendedInfo = process.argv[3] === '--ext';
const searchPath = `${process.cwd()}/**/*.ts`;

glob(searchPath, GLOB_SETTINGS, (err, files) => {
    if (err) {
        throw err;
    }

    const program = getProgramFromFiles(files);
    const generator = buildGenerator(program, settings);

    try {
        const schema = generator.getSchemaForSymbol(interfaceToSearch, extendedInfo);
        console.log(prettyjson.render(schema));
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }
});
