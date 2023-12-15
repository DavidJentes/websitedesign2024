import path from "path";
import { glob } from "glob";
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: path.join(__dirname, "../docs"),
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, "src", "*.html"))
    },
  },
});