import { Page, PluginConfig, ResolvedComponent } from "@mr-hope/vuepress-types";
import { ResolvedHopeThemeConfig } from "../../types";
import { resolve } from "path";

const pluginConfig = (themeConfig: ResolvedHopeThemeConfig): PluginConfig[] => {
  // 设置作者
  if (themeConfig.comment && themeConfig.author)
    themeConfig.comment.author = themeConfig.author;

  return [
    // FIXME: 目前启用导航栏会报错，原因正在寻找中
    /** 使 VuePress 站点支持简洁链接 */
    // ['clean-urls', { normalSuffix: '/' }],

    /** 评论插件 */
    ["@mr-hope/comment", themeConfig.comment],

    /** 全屏插件 */
    ["@mr-hope/components"],

    /** 更新时间插件 */
    [
      "@mr-hope/last-update",
      themeConfig.lastUpdated === false
        ? false
        : themeConfig.lastUpdatedTransformer
        ? { transformer: themeConfig.lastUpdatedTransformer }
        : {},
    ],

    /** PWA 插件 */
    ["@mr-hope/pwa", themeConfig.pwa],

    ["@mr-hope/seo", themeConfig.seo],

    [
      "@mr-hope/sitemap",
      themeConfig.hostname ? { hostname: themeConfig.hostname } : false,
    ],

    /** 自动激活侧边栏标题 */
    ["@vuepress/active-header-links", themeConfig.activeHeaderLinks],

    /** 博客插件 */
    [
      "@vuepress/blog",
      themeConfig.blog === false
        ? false
        : {
            frontmatters: [
              {
                id: "tag",
                keys: ["tag", "tags"],
                path: "/tag/",
                layout: "Blog",
                scopeLayout: "Blog",
              },
              {
                id: "category",
                keys: ["category", "categories"],
                path: "/category/",
                layout: "Blog",
                scopeLayout: "Blog",
              },
            ],
          },
    ],
    ["@vuepress/last-updated", false],

    /** 进度条 */
    "@vuepress/nprogress",

    /** 搜索插件 */
    [
      "@vuepress/search",
      {
        /** 搜索展示数量 */
        searchMaxSuggestions: themeConfig.searchMaxSuggestions || 10,
      },
    ],

    /** 复制操作处理 */
    [
      "copyright",
      {
        authorName: themeConfig.author,
        minLength: 100,
        clipboardComponent: resolve(__dirname, "../components/Clipboard.vue"),
      },
    ],

    /** Markdown 增强插件 */
    ["md-enhance", themeConfig.markdown || false],

    /** Chunk命名 */
    [
      "named-chunks",
      {
        pageChunkName: (page: Page): string =>
          /^(?!\.)[^\\/:*?"<>|]{1,255}$/u.test(page.title)
            ? `page-${page.title}`
            : `page-${page.key.slice(1)}`,
        layoutChunkName: (layout: ResolvedComponent): string =>
          `layout-${layout.componentName}`,
      },
    ],

    /** Photo-swipe 插件 */
    ["photo-swipe", themeConfig.photoSwipe],

    /** 平滑滚动 */
    ["smooth-scroll", themeConfig.smoothScroll],

    /** typescript 支持 */
    ["typescript", {}],
  ];
};

export default pluginConfig;
