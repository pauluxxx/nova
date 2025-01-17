const fs = require("fs");
const path = require("path");

const dir = "examples/src/components/docs/";
const files = [];

const getFilesRecursively = (directory) => {
    const filesInDirectory = fs.readdirSync(directory);
    for (const file of filesInDirectory) {
        const absolute = path.join(directory, file);
        if (fs.statSync(absolute).isDirectory()) {
            getFilesRecursively(absolute);
        } else {
            files.push(`"${absolute}"`);
        }
    }
};

getFilesRecursively(dir);

const trimmedFiles = files.map((filePath) =>
    filePath.replace(/\\/g, "/").replace(dir, "")
);

fs.writeFileSync(
    `${dir}/demo.files.ts`,
    `// this file autogenerated, do not edit it manually please run the script\n// yarn run compile-demo-paths\nexport const DEMO_PATHS = [\n    ${trimmedFiles.join(
        ",\n    "
    )},\n];\n`
);
