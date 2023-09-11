import { defineConfig } from "windicss/helpers";

export default defineConfig({
    darkMode: "class",
    extract: {
        include: ["**/*.{vue,html,jsx,tsx,md}"],
    },
    // theme: {
    //     extend: {
    //         fontFamily: {
    //             Roboto: ["Roboto"],
    //             RobotoBold: ["Roboto-Bold"],
    //             RobotoThin: ["Roboto-Thin"],
    //             RobotoLight: ["Roboto-Light"]
    //         },
    //     },
    // },
});
