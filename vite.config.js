import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    test: {
        globals: true,
        /*
        onConsoleLog(log, type) {
            console.log('log in test: ', log);
            if (log === 'message from third party library' && type === 'stdout') {
                return false;
            }
        },
        */
        setupFiles: "src/tests/setupTests.ts",
        includeSource: ["src/**/*.{js,ts,vue}"]
    },
    define: {
        "import.meta.vitest": "undefined"
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    }
});
