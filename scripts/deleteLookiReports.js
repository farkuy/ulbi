const { promisify } = require('util');
const { readdir, unlink } = require('fs');
const { join: joinPath } = require('path');

const asyncReaddir = promisify(readdir);
const unlinkAsync = promisify(unlink);

const directoryPath = joinPath(__dirname, '..', '.loki');
const fileNames = ['report.html', 'report.json'];

(async function main() {
    try {
        const files = await asyncReaddir(directoryPath);

        const deletePromises = files.map(async (file) => {
            if (fileNames.includes(file)) {
                const filePath = joinPath(directoryPath, file);
                await unlinkAsync(filePath);
                console.log(`Файл ${filePath} удален.`);
            }
        });

        await Promise.all(deletePromises);
    } catch (error) {
        console.error(`Ошибка при удалении файлов: ${error.message}`);
    }
}());
