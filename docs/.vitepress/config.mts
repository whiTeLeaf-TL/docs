import { defineConfig } from "vitepress";

import pkg from "../../package.json";

export default defineConfig({
  lang: "zh-CN",
  title: "白叶 Wiki",
  description: "感谢每一位玩家的到来💡",
  head: [
    ["link", { rel: "icon", href: "/server-icon.png" }],
    ["script", { async: "", src: "/m.js" }],
    ["script", { async: "true", src: "/cursor.js" }],
  ],
  ignoreDeadLinks: true,
  cleanUrls: true,
  sitemap: {
    hostname: "https://docs.clock-fun.top",
  },
  themeConfig: {
    // logo: { src: "/server-icon.png", width: 30, height: 38 },
    nav: [
      { text: "主页", link: "/" },
      { text: "百科", link: "/intro" },
      { text: "更新日志", link: "/update" },
      {
        text: "关于",
        items: [
          { text: "认识成员", link: "/about/team" },
          { text: "联系我们", link: "/about/contact" },
        ],
      },
    ],
    sidebar: [
      {
        text: "👋 文档介绍",
        link: "/intro",
      },
      {
        text: "❓ 常见问题",
        link: "/issues",
      },
      {
        text: "📘 服务器介绍",
        link: "/server-intro",
      },
      {
        text: "入门",
        items: [
          { text: "🔦 一个正确的游戏名", link: "/入门/username" },
          { text: "🎓 我该如何进入服务器", link: "/入门/how2join" },
          { text: "🧳 注册与登录", link: "/入门/register-and-login" },
        ],
      },
      {
        text: "规则",
        items: [
          { text: "📃 服务器规则", link: "/规则/server-rule" },
          { text: "📃 QQ 群规则", link: "/规则/group-rule" },
        ],
      },
      {
        text: "教程",
        items: [
          { text: "🖨 常用指令", link: "/教程/useful-commands" },
          { text: "💡 小技巧", link: "/教程/tips" },
          { text: "⚖️ 商店", link: "/教程/esguishop" },
          { text: "🏙️ 建筑", link: "/教程/buildingselection" },
          { text: "🖼️ 地皮", link: "/教程/plot" },
          {
            text: "🔒 领地",
            link: "/教程/intro",
          },
        ],
      },
      {
        text: "玩法",
        items: [
          { text: "😊 更好的 Minecraft", link: "/玩法/better-minecraft" },
          { text: "🎗 箱子锁", link: "/玩法/lock" },
          { text: "⚔️ 单挑", link: "/玩法/pvp" },
          { text: "🧷 玩家档案", link: "/玩法/player-profile" },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "🌍 地图", link: "/其他/map" },
          /* { text: '🏭 展示自己', link: '/其他/show' }, */
          { text: "❤ 支持我们", link: "/其他/support" },
        ],
      },
    ],
    editLink: {
      pattern: "https://github.com/CrashVibe/docs/edit/master/docs/:path",
      text: "在 Github 上编辑此页",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/CrashVibe/docs" },
    ],
    search: {
      provider: "local",
      options: {
        _render(src, env, md) {
          const html = md.render(src, env);
          if (env.frontmatter?.search === false) {
            return "";
          }
          return html;
        },
      },
    },
    externalLinkIcon: true, // 展示站外链接箭头 ↗
    // 下方是文档中文适配内容
    footer: {
      message: `基于 MPL 2.0 许可发布 | 文档版本 ${pkg.version}`,
      copyright: `版权所有 © 2023-${new Date().getFullYear()} 白叶服务器`,
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
  markdown: {
    image: {
      // 图片懒加载
      lazyLoading: true,
    },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
});
