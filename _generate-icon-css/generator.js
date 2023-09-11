import { readFile, writeFile } from "node:fs/promises";
import { getIconsCSS } from "@iconify/utils";
import { locate } from "@iconify/json";
import IconData from "./icons.js";

const icons = IconData;

// Parse each icon set
let code = "";
for (const prefix in icons) {
    // Find location of .json file
    const filename = locate(prefix);

    // Load file and parse it
    /** @type {import("@iconify/types").IconifyJSON} */
    const iconSet = JSON.parse(await readFile(filename, "utf8"));

    // Get CSS
    const css = getIconsCSS(iconSet, icons[prefix], {
        pseudoSelector: true,
    });

    // Add it to code
    code += css;
}

// Save CSS file
await writeFile("./../assets/style/icon/icon.scss", code, "utf8");
console.log(`Saved CSS (${code.length} bytes)`);
