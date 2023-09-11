import fs from "fs";
import { spawn } from "node:child_process";

const watchFile = "icons.js";
const filePath = "generator.js";

// Function to run the script
function runScript() {
    console.log("Changes detected. Running generator.js...");
    const child = spawn("node", [filePath]);

    child.stdout.on("data", (data) => {
        console.log(`Script output:\n${data}`);
    });

    child.stderr.on("data", (data) => {
        console.error(`Script error:\n${data}`);
    });

    child.on("close", (code) => {
        console.log(`Script exited with code ${code}`);
    });
}

// Watch the file for changes
fs.watch(watchFile, (event, filename) => {
    if (event === "change" && filename === watchFile) {
        runScript();
    }
});

console.log(`Watching ${watchFile} for changes...`);
