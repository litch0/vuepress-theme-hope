---
title: Config
icon: config
---

## baseLang

- Type: `string`
- Default: `'en-US'`

The language of the home directory.

## showInstall

- Type: `boolean`
- Default: `true`

Whether display install button

## manifest

- Type: `ManifestOption`
- Required: No

You can fill with an object which will be parsed to manifest.webmanifest.

::: tip

Some options have their fallback if you donot set them.

- name: `siteConfig.title` || `themeConfig.title` || `'Site'`
- short_name: `siteConfig.title` || `themeConfig.title` || `'Site'`
- description: `siteConfig.description` || `themeConfig.description` || `'A site built with vuepress-theme-hope'`
- lang: `options.baseLang` || `themeConfig.baseLang` || `"en-US"`
- start_url: `context.base`
- scope: `context.base`

- display: `"standalone"`
- theme_color: `"#46bd87"`
- background_color: `'#ffffff'`
- orientation: `'portrait-primary'`
- prefer_related_applications: `false`

:::

::: info More

For docs of Manifest, please see [W3C Manifest](https://w3c.github.io/manifest/)

:::

## favicon

- Type: `string`
- Required: No

Path of favico.ico with absolute path.(We recommand you to set it for your site)

## themeColor

- 类型: `string`
- 默认值: `"#46bd87"`

Theme Color

## maxSize

- Type: `number`
- Default: `2048`

Max size which allows to cache, with KB unit

## cacheHTML

- Type: `boolean`
- Default: `true`

Whether cache HTML files besides home page and 404 page.

::: tip

This option is useful if your site is too large when containing HTML files.

:::

## cachePic

- Type: `boolean`
- Default: `false`

Whether cache pictures

> Any file ends with `.png`, `.jpg`, `.jpeg` , `.gif`, `.bmp`, `.webp` will be seen as picture files.

## maxPicSize

- Type: `number`
- Default: `1024`

Max picture size which allows to cache, with KB unit

## apple

Special settings for Apple

> If you don’t want to make detailed settings, you can safely ignore it; if you don’t want your site compatable with apple, please set it to `false`.

### apple.icon

- Type: `string`
- Required: No

Fill in the icon address used by Apple, the recommended size is 152×152

### apple.statusBarColor

- Type: `"black" | "white"`
- Default: `"black"`

Apple’s status bar color

### apple.maskIcon

- Type: `string`
- Required: No

Safari mask icon

## msTile

Special settings for Microsoft tiles

> If you don’t want to make detailed settings, you can safely ignore it; if you don’t want your site compatable with windows, please set it to `false`.

### msTile.image

- Type: `string`
- Required: No

Tile icon

### msTile.color

- Type: `string`
- Default value: `themeColor`

The tile color will automatically fall back to themeColor if you don’t set it.

## popupComponent

- Type: `string`
- Default: `'SWUpdatePopup'`

You can fill in the custom pop-up component path.

## generateSwConfig

Options passed to `workbox-build`, for details, see [Workbox documentation](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW)

::: tip

We will precache all site related files `**/*.{js,css,svg}` and font files `**/*.{woff,woff2,eot,ttf,otf}` for you.

If you set `cachePic` to `true`, we will also precache `**/*.{png,jpg,jpeg,gif,bmp,webp}` files for you.

All the files larger than `maxSize` will be dropped.

:::
