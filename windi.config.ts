import { defineConfig } from "windicss/helpers";

export default defineConfig({
    darkMode: "class",
    extract: {
        include: ["**/*.{vue,html,jsx,tsx,md}"],
    },
    theme: {
        extend: {
            fontFamily: {
                kumbhsans: ["kumbhsans"],
                poly: ["poly"],
                anton: ["anton"],
            },
        },
    },
});
