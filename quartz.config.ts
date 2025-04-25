import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "doincreative.com",
    pageTitleSuffix: "Do in Creative",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Recoleta", // soft, retro-modern serif – welcoming and stylish
        body: "Work Sans", // clean but a bit quirky – easy to read with personality
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f4f1ec", // soft warm white – feels natural, easy on the eyes
          lightgray: "#e4e1dc", // warm light gray – used in UI backgrounds
          gray: "#7a736d", // matte taupe gray – great for subtle text & icons
          darkgray: "#57534e", // rich, warm gray – good for strong text without harshness
          dark: "#3e3a36", // Coal brown – rich, warm, soft but strong
          secondary: "#5a7f8e", // desaturated slate blue – serious but inviting
          tertiary: "#b8c1c1", // muted sage gray – adds freshness without being loud
          highlight: "rgba(90, 127, 142, 0.1)", // soft blue-gray hover – quiet and clean
          textHighlight: "#ffe58588", // buttery yellow glow – cozy and noticeable
        },
        darkMode: {
          light: "#1b1b1a", // deep charcoal – avoids pure black for warmth
          lightgray: "#2c2b2a", // elevated surfaces in dark UI
          gray: "#8f8c87", // warm matte gray – for inactive UI and text
          darkgray: "#e6e3dc", // creamy light tone for text (off-white with warmth)
          dark: "#fafaf9", // super light bone white – great for contrast
          secondary: "#7b9ea5", // softened blue-gray – clean and calm
          tertiary: "#a8c4bb", // dusty mint – adds a quiet personality
          highlight: "rgba(168, 196, 187, 0.12)", // low-key hover with a hint of sage
          textHighlight: "#ffdca188", // subtle peach-yellow – adds a soft glow
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
