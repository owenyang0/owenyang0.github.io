"use strict";(self.webpackChunkowenyang_website=self.webpackChunkowenyang_website||[]).push([[2184],{8764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var o=n(7624),r=n(2172);const a={title:"\u5229\u7528 Shell \u811a\u672c\u548c systemd \u670d\u52a1\u5b9e\u73b0 Proxmox VE \u65e5\u5fd7\u76d1\u63a7\u4e0e\u63a8\u9001",date:"2024-09-15 10:08:06",authors:"owen",tags:["PVE","Bark"]},s=void 0,l={permalink:"/blog/2024/09/15/\u5229\u7528 Shell \u811a\u672c\u548c systemd \u670d\u52a1\u5b9e\u73b0 Proxmox VE \u65e5\u5fd7\u76d1\u63a7\u4e0e\u63a8\u9001",source:"@site/blog/2024-09-15-\u5229\u7528 Shell \u811a\u672c\u548c systemd \u670d\u52a1\u5b9e\u73b0 Proxmox VE \u65e5\u5fd7\u76d1\u63a7\u4e0e\u63a8\u9001.md",title:"\u5229\u7528 Shell \u811a\u672c\u548c systemd \u670d\u52a1\u5b9e\u73b0 Proxmox VE \u65e5\u5fd7\u76d1\u63a7\u4e0e\u63a8\u9001",description:"\u73b0\u4ee3 IT \u57fa\u7840\u8bbe\u65bd\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u5176\u4e2d\u65e5\u5fd7\u7ba1\u7406\u548c\u76d1\u63a7\u66f4\u6210\u4e3a\u8fd0\u7ef4\u4eba\u5458\u7684\u91cd\u8981\u4efb\u52a1\u4e4b\u4e00\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Shell \u811a\u672c\u5b9e\u65f6\u76d1\u63a7 Proxmox VE \u7cfb\u7edf\u65e5\u5fd7\uff0c\u5e76\u5c06\u76d1\u63a7\u7ed3\u679c\u63a8\u9001\u5230 Bark \u5e94\u7528\u3002\u540c\u65f6\uff0c\u6211\u4eec\u4f1a\u5229\u7528 systemd \u670d\u52a1\u786e\u4fdd\u811a\u672c\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u81ea\u52a8\u8fd0\u884c\uff0c\u4e00\u65e6\u51fa\u73b0\u5f02\u5e38\u81ea\u52a8\u91cd\u542f\uff0c\u786e\u4fdd\u670d\u52a1\u7684\u7a33\u5b9a\u8fd0\u884c\u3002",date:"2024-09-15T10:08:06.000Z",formattedDate:"2024\u5e749\u670815\u65e5",tags:[{label:"PVE",permalink:"/blog/tags/pve"},{label:"Bark",permalink:"/blog/tags/bark"}],readingTime:7.375,hasTruncateMarker:!0,authors:[{name:"\u6728\u6613(OwenYang)",title:"\u4e92\u8054\u7f51\u4eba\u3001\u7535\u5b50\u5783\u573e\u4f53\u9a8c\u8005\u3001\u6328\u8e22FEer\u3001\u6728\u6613\u8ddf\u6253\u5668\u4f5c\u8005",url:"https://github.com/owenyang0",imageURL:"https://static.owenyang.top/blogs/avatar.jpg",key:"owen"}],frontMatter:{title:"\u5229\u7528 Shell \u811a\u672c\u548c systemd \u670d\u52a1\u5b9e\u73b0 Proxmox VE \u65e5\u5fd7\u76d1\u63a7\u4e0e\u63a8\u9001",date:"2024-09-15 10:08:06",authors:"owen",tags:["PVE","Bark"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528 Uptime Kuma \u548c Shell \u811a\u672c\u76d1\u63a7\u5bb6\u5ead WiFi \u7f51\u7edc\u72b6\u6001\u5e76\u901a\u8fc7 Bark \u63a8\u9001\u901a\u77e5",permalink:"/blog/2024/09/26/\u4f7f\u7528 Uptime Kuma \u548c Shell \u811a\u672c\u76d1\u63a7\u5bb6\u5ead WiFi \u7f51\u7edc\u72b6\u6001\u5e76\u901a\u8fc7 Bark \u63a8\u9001\u901a\u77e5"},nextItem:{title:"\u5de5\u5177 | \u9ad8\u6027\u80fdZed\u7f16\u8f91\u5668\u5f00\u6e90\uff0c\u54cd\u5e94\u901f\u5ea6\u8d85\u5feb\u3001\u5e72\u6389VS Code\uff1f",permalink:"/blog/2024/01/31/high-performace-editor-zed-in-rust"}},i={authorsImageUrls:[void 0]},m=[{value:"\u573a\u666f\u63cf\u8ff0",id:"\u573a\u666f\u63cf\u8ff0",level:4}];function c(e){const t={h4:"h4",p:"p",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"\u73b0\u4ee3 IT \u57fa\u7840\u8bbe\u65bd\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u5176\u4e2d\u65e5\u5fd7\u7ba1\u7406\u548c\u76d1\u63a7\u66f4\u6210\u4e3a\u8fd0\u7ef4\u4eba\u5458\u7684\u91cd\u8981\u4efb\u52a1\u4e4b\u4e00\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Shell \u811a\u672c\u5b9e\u65f6\u76d1\u63a7 Proxmox VE \u7cfb\u7edf\u65e5\u5fd7\uff0c\u5e76\u5c06\u76d1\u63a7\u7ed3\u679c\u63a8\u9001\u5230 Bark \u5e94\u7528\u3002\u540c\u65f6\uff0c\u6211\u4eec\u4f1a\u5229\u7528 systemd \u670d\u52a1\u786e\u4fdd\u811a\u672c\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u81ea\u52a8\u8fd0\u884c\uff0c\u4e00\u65e6\u51fa\u73b0\u5f02\u5e38\u81ea\u52a8\u91cd\u542f\uff0c\u786e\u4fdd\u670d\u52a1\u7684\u7a33\u5b9a\u8fd0\u884c\u3002"}),"\n",(0,o.jsx)(t.h4,{id:"\u573a\u666f\u63cf\u8ff0",children:"\u573a\u666f\u63cf\u8ff0"}),"\n",(0,o.jsx)(t.p,{children:"\u5728 Proxmox VE \u73af\u5883\u4e2d\uff0c\u7cfb\u7edf\u65e5\u5fd7\u4e2d\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e00\u4e9b\u5f02\u5e38\u4fe1\u606f\u9700\u8981\u53ca\u65f6\u5904\u7406\u3002\u4e3a\u4e86\u4fdd\u8bc1\u7cfb\u7edf\u8fd0\u884c\u7a33\u5b9a\uff0c\u6211\u4eec\u9700\u8981\u4e00\u79cd\u5b9e\u65f6\u76d1\u63a7\u65e5\u5fd7\uff0c\u5e76\u5728\u68c0\u6d4b\u5230\u5173\u952e\u5b57\u65f6\u7acb\u5373\u901a\u77e5\u6216\u62a5\u8b66\u7684\u673a\u5236\u3002\u901a\u8fc7 Shell \u811a\u672c\u548c Bark \u63a8\u9001\uff0c\u6211\u4eec\u53ef\u4ee5\u9ad8\u6548\u5730\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\u3002"})]})}function d(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>s});var o=n(1504);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);