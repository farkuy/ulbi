import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isCore(path: string) {
    const names = [
        'app',
        'features',
        'entities',
        'widgets',
        'pages',
        'shared',
    ];

    return names.some((name) => path.startsWith(name));
}

files.forEach((file) => {
    const imports = file.getImportDeclarations();
    imports.forEach((importDecl) => {
        const imp = importDecl.getModuleSpecifierValue();
        if (isCore(imp)) {
            importDecl.setModuleSpecifier(`@/${imp}`);
        }
    });
});

project.save();
