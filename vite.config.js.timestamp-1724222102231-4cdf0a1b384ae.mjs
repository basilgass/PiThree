// vite.config.js
import { defineConfig } from "file:///C:/websites/PiThree/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import dtsPlugin from "file:///C:/websites/PiThree/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\websites\\PiThree";
var vite_config_default = defineConfig({
  build: {
    outDir: "dist",
    copyPublicDir: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/index.ts"),
      name: "PiThree",
      formats: ["es"],
      fileName: "pithree"
    },
    emptyOutDir: true
  },
  plugins: [
    dtsPlugin({
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace("index.d.ts", "pithree.d.ts"),
        content
      }),
      include: ["lib", "es2022"]
    })
    // generate .d.ts files for the lib folder
  ],
  rollupOptions: {
    external: ["vue"],
    output: {
      globals: {
        Vue: "Vue"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx3ZWJzaXRlc1xcXFxQaVRocmVlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFx3ZWJzaXRlc1xcXFxQaVRocmVlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi93ZWJzaXRlcy9QaVRocmVlL3ZpdGUuY29uZmlnLmpzXCI7LyoqIEB0eXBlIHtpbXBvcnQoJ3ZpdGUnKS5Vc2VyQ29uZmlnfSAqL1xyXG5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIlxyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIlxyXG5pbXBvcnQgZHRzUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuXHRidWlsZDoge1xyXG5cdFx0b3V0RGlyOiBcImRpc3RcIixcclxuXHRcdGNvcHlQdWJsaWNEaXI6IGZhbHNlLFxyXG5cdFx0bGliOiB7XHJcblx0XHRcdGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJsaWIvaW5kZXgudHNcIiksXHJcblx0XHRcdG5hbWU6IFwiUGlUaHJlZVwiLFxyXG5cdFx0XHRmb3JtYXRzOiBbXCJlc1wiXSxcclxuXHRcdFx0ZmlsZU5hbWU6IFwicGl0aHJlZVwiXHJcblx0XHR9LFxyXG5cdFx0ZW1wdHlPdXREaXI6IHRydWUsXHJcblx0fSxcclxuXHRwbHVnaW5zOiBbXHJcblx0XHRkdHNQbHVnaW4oeyBcclxuXHRcdFx0YmVmb3JlV3JpdGVGaWxlOiAoZmlsZVBhdGgsIGNvbnRlbnQpID0+IChcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0ZmlsZVBhdGg6IGZpbGVQYXRoLnJlcGxhY2UoXCJpbmRleC5kLnRzXCIsIFwicGl0aHJlZS5kLnRzXCIpLFxyXG5cdFx0XHRcdGNvbnRlbnQsXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRpbmNsdWRlOiBbJ2xpYicsIFwiZXMyMDIyXCJdXHJcblx0XHR9KSwgLy8gZ2VuZXJhdGUgLmQudHMgZmlsZXMgZm9yIHRoZSBsaWIgZm9sZGVyXHJcblx0XSxcclxuXHRyb2xsdXBPcHRpb25zOiB7XHJcblx0XHRleHRlcm5hbDogW1widnVlXCJdLFxyXG5cdFx0b3V0cHV0OiB7XHJcblx0XHRcdGdsb2JhbHM6IHtcclxuXHRcdFx0XHRWdWU6IFwiVnVlXCJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sZUFBZTtBQUp0QixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixPQUFPO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsSUFDZixLQUFLO0FBQUEsTUFDSixPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxJQUFJO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDWDtBQUFBLElBQ0EsYUFBYTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLFVBQVU7QUFBQSxNQUNULGlCQUFpQixDQUFDLFVBQVUsYUFDM0I7QUFBQSxRQUNBLFVBQVUsU0FBUyxRQUFRLGNBQWMsY0FBYztBQUFBLFFBQ3ZEO0FBQUEsTUFDRDtBQUFBLE1BQ0EsU0FBUyxDQUFDLE9BQU8sUUFBUTtBQUFBLElBQzFCLENBQUM7QUFBQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGVBQWU7QUFBQSxJQUNkLFVBQVUsQ0FBQyxLQUFLO0FBQUEsSUFDaEIsUUFBUTtBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1IsS0FBSztBQUFBLE1BQ047QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
