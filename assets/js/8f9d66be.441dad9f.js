"use strict";(self.webpackChunkowenyang_website=self.webpackChunkowenyang_website||[]).push([[8340],{5844:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var l=s(7624),t=s(2172);const o={title:"\u5229\u7528 Shell \u811a\u672c\u548c systemd \u670d\u52a1\u5b9e\u73b0 Proxmox VE \u65e5\u5fd7\u76d1\u63a7\u4e0e\u63a8\u9001",date:"2024-09-15 10:08:06",authors:"owen",tags:["PVE","Bark"]},i=void 0,r={permalink:"/blog/2024/09/15/\u5229\u7528 Shell \u811a\u672c\u548c systemd \u670d\u52a1\u5b9e\u73b0 Proxmox VE \u65e5\u5fd7\u76d1\u63a7\u4e0e\u63a8\u9001",source:"@site/blog/2024-09-15-\u5229\u7528 Shell \u811a\u672c\u548c systemd \u670d\u52a1\u5b9e\u73b0 Proxmox VE \u65e5\u5fd7\u76d1\u63a7\u4e0e\u63a8\u9001.md",title:"\u5229\u7528 Shell \u811a\u672c\u548c systemd \u670d\u52a1\u5b9e\u73b0 Proxmox VE \u65e5\u5fd7\u76d1\u63a7\u4e0e\u63a8\u9001",description:"\u73b0\u4ee3 IT \u57fa\u7840\u8bbe\u65bd\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u5176\u4e2d\u65e5\u5fd7\u7ba1\u7406\u548c\u76d1\u63a7\u66f4\u6210\u4e3a\u8fd0\u7ef4\u4eba\u5458\u7684\u91cd\u8981\u4efb\u52a1\u4e4b\u4e00\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Shell \u811a\u672c\u5b9e\u65f6\u76d1\u63a7 Proxmox VE \u7cfb\u7edf\u65e5\u5fd7\uff0c\u5e76\u5c06\u76d1\u63a7\u7ed3\u679c\u63a8\u9001\u5230 Bark \u5e94\u7528\u3002\u540c\u65f6\uff0c\u6211\u4eec\u4f1a\u5229\u7528 systemd \u670d\u52a1\u786e\u4fdd\u811a\u672c\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u81ea\u52a8\u8fd0\u884c\uff0c\u4e00\u65e6\u51fa\u73b0\u5f02\u5e38\u81ea\u52a8\u91cd\u542f\uff0c\u786e\u4fdd\u670d\u52a1\u7684\u7a33\u5b9a\u8fd0\u884c\u3002",date:"2024-09-15T10:08:06.000Z",formattedDate:"2024\u5e749\u670815\u65e5",tags:[{label:"PVE",permalink:"/blog/tags/pve"},{label:"Bark",permalink:"/blog/tags/bark"}],readingTime:7.375,hasTruncateMarker:!0,authors:[{name:"\u6728\u6613(OwenYang)",title:"\u4e92\u8054\u7f51\u4eba\u3001\u7535\u5b50\u5783\u573e\u4f53\u9a8c\u8005\u3001\u6328\u8e22FEer\u3001\u6728\u6613\u8ddf\u6253\u5668\u4f5c\u8005",url:"https://github.com/owenyang0",imageURL:"https://static.owenyang.top/blogs/avatar.jpg",key:"owen"}],frontMatter:{title:"\u5229\u7528 Shell \u811a\u672c\u548c systemd \u670d\u52a1\u5b9e\u73b0 Proxmox VE \u65e5\u5fd7\u76d1\u63a7\u4e0e\u63a8\u9001",date:"2024-09-15 10:08:06",authors:"owen",tags:["PVE","Bark"]},unlisted:!1,nextItem:{title:"\u5de5\u5177 | \u9ad8\u6027\u80fdZed\u7f16\u8f91\u5668\u5f00\u6e90\uff0c\u54cd\u5e94\u901f\u5ea6\u8d85\u5feb\u3001\u5e72\u6389VS Code\uff1f",permalink:"/blog/2024/01/31/high-performace-editor-zed-in-rust"}},a={authorsImageUrls:[void 0]},c=[{value:"\u573a\u666f\u63cf\u8ff0",id:"\u573a\u666f\u63cf\u8ff0",level:4},{value:"\u6b65\u9aa4\u6982\u89c8",id:"\u6b65\u9aa4\u6982\u89c8",level:4},{value:"\u7f16\u5199 Shell \u811a\u672c <code>monitor_pve_logs.sh</code>",id:"\u7f16\u5199-shell-\u811a\u672c-monitor_pve_logssh",level:3},{value:"\u521b\u5efa\u7b26\u53f7\u94fe\u63a5",id:"\u521b\u5efa\u7b26\u53f7\u94fe\u63a5",level:3},{value:"\u521b\u5efa systemd \u670d\u52a1\u5355\u5143\u6587\u4ef6",id:"\u521b\u5efa-systemd-\u670d\u52a1\u5355\u5143\u6587\u4ef6",level:3},{value:"\u542f\u7528\u5e76\u542f\u52a8\u670d\u52a1",id:"\u542f\u7528\u5e76\u542f\u52a8\u670d\u52a1",level:3},{value:"\u624b\u52a8\u505c\u6b62\u548c\u7981\u7528\u670d\u52a1",id:"\u624b\u52a8\u505c\u6b62\u548c\u7981\u7528\u670d\u52a1",level:3},{value:"\u8c03\u8bd5\u548c\u65e5\u5fd7\u4fe1\u606f",id:"\u8c03\u8bd5\u548c\u65e5\u5fd7\u4fe1\u606f",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3}];function d(e){const n={code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u73b0\u4ee3 IT \u57fa\u7840\u8bbe\u65bd\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u5176\u4e2d\u65e5\u5fd7\u7ba1\u7406\u548c\u76d1\u63a7\u66f4\u6210\u4e3a\u8fd0\u7ef4\u4eba\u5458\u7684\u91cd\u8981\u4efb\u52a1\u4e4b\u4e00\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Shell \u811a\u672c\u5b9e\u65f6\u76d1\u63a7 Proxmox VE \u7cfb\u7edf\u65e5\u5fd7\uff0c\u5e76\u5c06\u76d1\u63a7\u7ed3\u679c\u63a8\u9001\u5230 Bark \u5e94\u7528\u3002\u540c\u65f6\uff0c\u6211\u4eec\u4f1a\u5229\u7528 systemd \u670d\u52a1\u786e\u4fdd\u811a\u672c\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u81ea\u52a8\u8fd0\u884c\uff0c\u4e00\u65e6\u51fa\u73b0\u5f02\u5e38\u81ea\u52a8\u91cd\u542f\uff0c\u786e\u4fdd\u670d\u52a1\u7684\u7a33\u5b9a\u8fd0\u884c\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u573a\u666f\u63cf\u8ff0",children:"\u573a\u666f\u63cf\u8ff0"}),"\n",(0,l.jsx)(n.p,{children:"\u5728 Proxmox VE \u73af\u5883\u4e2d\uff0c\u7cfb\u7edf\u65e5\u5fd7\u4e2d\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e00\u4e9b\u5f02\u5e38\u4fe1\u606f\u9700\u8981\u53ca\u65f6\u5904\u7406\u3002\u4e3a\u4e86\u4fdd\u8bc1\u7cfb\u7edf\u8fd0\u884c\u7a33\u5b9a\uff0c\u6211\u4eec\u9700\u8981\u4e00\u79cd\u5b9e\u65f6\u76d1\u63a7\u65e5\u5fd7\uff0c\u5e76\u5728\u68c0\u6d4b\u5230\u5173\u952e\u5b57\u65f6\u7acb\u5373\u901a\u77e5\u6216\u62a5\u8b66\u7684\u673a\u5236\u3002\u901a\u8fc7 Shell \u811a\u672c\u548c Bark \u63a8\u9001\uff0c\u6211\u4eec\u53ef\u4ee5\u9ad8\u6548\u5730\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u6b65\u9aa4\u6982\u89c8",children:"\u6b65\u9aa4\u6982\u89c8"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u7f16\u5199 Shell \u811a\u672c ",(0,l.jsx)(n.code,{children:"monitor_pve_logs.sh"}),"\uff0c\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf\u65e5\u5fd7\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u521b\u5efa\u7b26\u53f7\u94fe\u63a5\uff0c\u5c06\u811a\u672c\u94fe\u63a5\u5230 ",(0,l.jsx)(n.code,{children:"/usr/local/bin/"})," \u76ee\u5f55\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u521b\u5efa systemd \u670d\u52a1\u5355\u5143\u6587\u4ef6\uff0c\u4ee5\u786e\u4fdd\u811a\u672c\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u81ea\u52a8\u8fd0\u884c\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u542f\u7528\u5e76\u542f\u52a8 systemd \u670d\u52a1\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"\u7f16\u5199-shell-\u811a\u672c-monitor_pve_logssh",children:["\u7f16\u5199 Shell \u811a\u672c ",(0,l.jsx)(n.code,{children:"monitor_pve_logs.sh"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f\u5b8c\u6574\u7684 Shell \u811a\u672c\uff0c\u7528\u4e8e\u76d1\u542c Proxmox VE \u7684\u7cfb\u7edf\u65e5\u5fd7\u6587\u4ef6 ",(0,l.jsx)(n.code,{children:"/var/log/syslog"}),"\u3002\u4e00\u65e6\u68c0\u6d4b\u5230\u9884\u5b9a\u4e49\u7684\u5173\u952e\u5b57\uff0c\u5c06\u622a\u53d6\u8be5\u65e5\u5fd7\u884c\u7684\u524d\u540e\u82e5\u5e72\u884c\uff0c\u5e76\u901a\u8fc7 Bark API \u63a8\u9001\u901a\u77e5\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'#!/bin/bash\n\n# \u6821\u9a8c jq \u662f\u5426\u5b89\u88c5\uff0c\u5982\u679c\u672a\u5b89\u88c5\u5219\u9000\u51fa\u811a\u672c\nif ! command -v jq &> /dev/null; then\n    echo "jq \u547d\u4ee4\u672a\u627e\u5230\uff0c\u8bf7\u5148\u5b89\u88c5 jq\u3002" >&2\n    exit 1\nfi\n\n# \u914d\u7f6e\u90e8\u5206\nKEYWORDS=("\u5173\u952e\u5b571" "\u5173\u952e\u5b572" "\u5173\u952e\u5b573")  # \u8981\u76d1\u63a7\u7684\u5173\u952e\u5b57\u5217\u8868\nLINES_BEFORE=5   # \u5173\u952e\u5b57\u524d\u7684\u884c\u6570\nLINES_AFTER=5    # \u5173\u952e\u5b57\u540e\u7684\u884c\u6570\nBARK_API_URL="https://api.day.app/push"\nBARK_DEVICE_KEY="<your_key>"  # \u66ff\u6362\u4e3a\u4f60\u7684 Bark \u8bbe\u5907 key\nGROUP="pve"      # Bark \u5206\u7ec4\nMAX_ALERTS=10    # \u6bcf\u5206\u949f\u6700\u591a\u63a8\u9001\u6b21\u6570\nALERT_INTERVAL=60 # \u9632\u6296\u65f6\u95f4\u7a97\u53e3\uff08\u79d2\uff09\nMIN_TIME_DELTA=10 # \u6700\u5c0f\u63a8\u9001\u65f6\u95f4\u95f4\u9694\uff08\u79d2\uff09\n\n# \u5b58\u50a8\u65f6\u95f4\u6233\u7684\u6570\u7ec4\uff0c\u7528\u4e8e\u9632\u6296\ntimestamps=()\n\n# \u5b58\u50a8\u5df2\u7ecf\u63a8\u9001\u8fc7\u7684\u65e5\u5fd7\u884c\u7684\u96c6\u5408\ndeclare -A sent_lines\n\n# \u6700\u8fd1\u4e00\u6b21\u63a8\u9001\u7684\u65f6\u95f4\u6233\uff0c\u7528\u4e8e\u5ef6\u8fdf\u63a8\u9001\nlast_push_time=0\n\n# \u5224\u65ad\u65e5\u5fd7\u884c\u662f\u5426\u5305\u542b\u4efb\u610f\u5173\u952e\u5b57\ncontains_keyword() {\n    local line="$1"\n    for keyword in "${KEYWORDS[@]}"; do\n        if echo "$line" | grep -qi "$keyword"; then\n            return 0\n        fi\n    done\n    return 1\n}\n\n# \u89e3\u6790\u65e5\u5fd7\u884c\u4e2d\u7684\u65f6\u95f4\u6233\nextract_timestamp() {\n    local line="$1"\n    echo "$line" | awk \'{print $1 "T" $2}\'\n}\n\n# \u76d1\u542c /var/log/syslog\ntail -F /var/log/syslog | while read -r LINE; do\n    # \u68c0\u67e5\u662f\u5426\u5305\u542b\u4efb\u610f\u5173\u952e\u5b57\n    if contains_keyword "$LINE"; then\n        # \u68c0\u67e5\u8be5\u884c\u662f\u5426\u5df2\u7ecf\u63a8\u9001\u8fc7\n        if [[ ${sent_lines["$LINE"]} ]]; then\n            continue\n        fi\n        # \u5c06\u8be5\u884c\u6807\u8bb0\u4e3a\u5df2\u63a8\u9001\n        sent_lines["$LINE"]=1\n\n        # \u83b7\u53d6\u5f53\u524d\u65e5\u5fd7\u884c\u7684\u65f6\u95f4\u6233\n        log_timestamp=$(extract_timestamp "$LINE")\n        # \u53bb\u6389\u5c3e\u90e8\u7684\u65f6\u533a\u90e8\u5206\n        log_timestamp="${log_timestamp%+*}"\n        log_time=$(date -d "$log_timestamp" +%s 2>/dev/null)\n\n        # \u68c0\u67e5\u65e5\u671f\u89e3\u6790\u662f\u5426\u6210\u529f\n        if [[ -z "$log_time" ]]; then\n            echo "\u8b66\u544a\uff1a\u65e0\u6cd5\u89e3\u6790\u65f6\u95f4\u6233 \'$log_timestamp\'\uff0c\u8df3\u8fc7\u8be5\u65e5\u5fd7\u884c\u3002"\n            continue\n        fi\n\n        # \u68c0\u67e5\u65f6\u95f4\u95f4\u9694\u662f\u5426\u5c0f\u4e8e\u6700\u5c0f\u65f6\u95f4\u95f4\u9694\n        if (( log_time - last_push_time < MIN_TIME_DELTA )); then\n            echo "\u8b66\u544a\uff1a\u65f6\u95f4\u95f4\u9694\u5c0f\u4e8e $MIN_TIME_DELTA \u79d2\uff0c\u8df3\u8fc7\u63a8\u9001\u3002"\n            continue\n        fi\n\n        # \u83b7\u53d6\u5f53\u524d\u65f6\u95f4\u6233\uff08\u79d2\uff09\n        current_time=$(date +%s)\n\n        # \u8fc7\u6ee4\u6389\u65f6\u95f4\u7a97\u53e3\u4e4b\u5916\u7684\u65e7\u65f6\u95f4\u6233\n        timestamps=($(for ts in "${timestamps[@]}"; do\n            if (( current_time - ts < ALERT_INTERVAL )); then\n                echo "$ts"\n            fi\n        done))\n\n        # \u68c0\u67e5\u662f\u5426\u8d85\u8fc7\u63a8\u9001\u9650\u5236\n        if (( ${#timestamps[@]} < MAX_ALERTS )); then\n            # \u5c06\u5f53\u524d\u65f6\u95f4\u6233\u6dfb\u52a0\u5230\u6570\u7ec4\u4e2d\n            timestamps+=("$current_time")\n\n            # \u66f4\u65b0\u6700\u8fd1\u4e00\u6b21\u63a8\u9001\u7684\u65f6\u95f4\u6233\n            last_push_time=$log_time\n\n            # \u83b7\u53d6\u5f53\u524d\u65e5\u5fd7\u6587\u4ef6\u540d\u548c\u884c\u53f7\n            LOG_FILE="/var/log/syslog"\n            \n            # \u4f7f\u7528 awk \u83b7\u53d6\u65e5\u5fd7\u884c\u53f7\n            LINE_NUMBER=$(awk -v line="$LINE" \'$0 == line {print NR; exit}\' "$LOG_FILE")\n\n            # \u786e\u4fdd START_LINE \u548c END_LINE \u4e0d\u5c0f\u4e8e 1\uff0c\u4e14\u5728\u65e5\u5fd7\u6587\u4ef6\u884c\u6570\u8303\u56f4\u5185\n            START_LINE=$((LINE_NUMBER - LINES_BEFORE))\n            ((START_LINE < 1)) && START_LINE=1\n            END_LINE=$((LINE_NUMBER + LINES_AFTER))\n\n            # \u622a\u53d6\u524d\u540e n \u884c\u7684\u65e5\u5fd7\n            LOG_SNIPPET=$(sed -n "${START_LINE},${END_LINE}p" "$LOG_FILE")\n\n            # \u5bf9\u65e5\u5fd7\u4fe1\u606f\u8fdb\u884c\u5b57\u7b26\u4e32\u8f6c\u4e49\n            ESCAPED_MESSAGE=$(echo "$LOG_SNIPPET" | jq -sR .)\n\n            # \u901a\u8fc7 Bark API \u53d1\u9001\u901a\u77e5\n            curl -X "POST" "$BARK_API_URL" \\\n                -H \'Content-Type: application/json; charset=utf-8\' \\\n                -d $\'{\n                "body": \'"$ESCAPED_MESSAGE"\',\n                "title": "PVE\u7cfb\u7edf\u65e5\u5fd7\u5f02\u5e38",\n                "group": "\'"$GROUP"\'",\n                "device_key": "\'"$BARK_DEVICE_KEY"\'"\n            }\' > /dev/null 2>&1\n        else\n            echo "\u8b66\u544a\uff1a\u6bcf\u5206\u949f\u63a8\u9001\u6b21\u6570\u8d85\u8fc7\u9650\u5236\uff0c\u8df3\u8fc7\u63a8\u9001\u3002"\n        fi\n    fi\ndone\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u521b\u5efa\u7b26\u53f7\u94fe\u63a5",children:"\u521b\u5efa\u7b26\u53f7\u94fe\u63a5"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06\u811a\u672c\u6587\u4ef6\u94fe\u63a5\u5230 ",(0,l.jsx)(n.code,{children:"/usr/local/bin/"})," \u76ee\u5f55\uff0c\u4ee5\u4fbf systemd \u670d\u52a1\u53ef\u4ee5\u65b9\u4fbf\u5730\u627e\u5230\u811a\u672c\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo ln -s ~/scripts/monitor_pve_logs.sh /usr/local/bin/monitor_pve_logs.sh\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u521b\u5efa-systemd-\u670d\u52a1\u5355\u5143\u6587\u4ef6",children:"\u521b\u5efa systemd \u670d\u52a1\u5355\u5143\u6587\u4ef6"}),"\n",(0,l.jsx)(n.p,{children:"\u4e3a\u4e86\u4f7f\u811a\u672c\u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c\uff0c\u5e76\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u81ea\u52a8\u8fd0\u884c\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa systemd \u670d\u52a1\u5355\u5143\u6587\u4ef6\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u521b\u5efa\u670d\u52a1\u5355\u5143\u6587\u4ef6 ",(0,l.jsx)(n.code,{children:"monitor_pve_logs.service"})," \u5e76\u653e\u7f6e\u5728 ",(0,l.jsx)(n.code,{children:"/etc/systemd/system/"})," \u76ee\u5f55\u4e0b\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/monitor_pve_logs.service\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ini",children:"[Unit]\nDescription=Proxmox VE Logs Monitor Service\nAfter=network.target\n\n[Service]\nExecStart=/usr/local/bin/monitor_pve_logs.sh\nRestart=always\nUser=root\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u542f\u7528\u5e76\u542f\u52a8\u670d\u52a1",children:"\u542f\u7528\u5e76\u542f\u52a8\u670d\u52a1"}),"\n",(0,l.jsx)(n.p,{children:"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u542f\u7528\u5e76\u542f\u52a8 systemd \u670d\u52a1\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u91cd\u65b0\u52a0\u8f7d systemd \u914d\u7f6e\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u542f\u7528\u670d\u52a1\uff0c\u4f7f\u5176\u5728\u542f\u52a8\u65f6\u81ea\u52a8\u8fd0\u884c\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable monitor_pve_logs.service\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u542f\u52a8\u670d\u52a1\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start monitor_pve_logs.service\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u68c0\u67e5\u670d\u52a1\u7684\u72b6\u6001\uff0c\u786e\u4fdd\u5176\u6b63\u5e38\u8fd0\u884c\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status monitor_pve_logs.service\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u4f60\u5e94\u8be5\u770b\u5230\u7c7b\u4f3c\u5982\u4e0b\u7684\u8f93\u51fa\uff0c\u663e\u793a\u670d\u52a1\u6b63\u5728\u8fd0\u884c\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-log",children:"\u25cf monitor_pve_logs.service - Proxmox VE Logs Monitor Service\n   Loaded: loaded (/etc/systemd/system/monitor_pve_logs.service; enabled; vendor preset: enabled)\n   Active: active (running) since Thu 2024-09-14 23:00:00 UTC; 1min 30s ago\n Main PID: 12345 (monitor_pve_logs.sh)\n   CGroup: /system.slice/monitor_pve_logs.service\n           \u251c\u250012345 /bin/bash /usr/local/bin/monitor_pve_logs.sh\n           \u2514\u250012346 tail -F /var/log/syslog\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u624b\u52a8\u505c\u6b62\u548c\u7981\u7528\u670d\u52a1",children:"\u624b\u52a8\u505c\u6b62\u548c\u7981\u7528\u670d\u52a1"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u624b\u52a8\u505c\u6b62\u670d\u52a1"}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop monitor_pve_logs.service\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u624b\u52a8\u7981\u7528\u670d\u52a1"}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo systemctl disable monitor_pve_logs.service\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u8c03\u8bd5\u548c\u65e5\u5fd7\u4fe1\u606f",children:"\u8c03\u8bd5\u548c\u65e5\u5fd7\u4fe1\u606f"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981\u67e5\u770b\u670d\u52a1\u7684\u65e5\u5fd7\u4fe1\u606f\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"journalctl"})," \u547d\u4ee4\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo journalctl -u monitor_pve_logs.service\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,l.jsx)(n.p,{children:"\u901a\u8fc7\u4e0a\u8ff0\u6b65\u9aa4\uff0c\u60a8\u53ef\u4ee5\u4e3a Proxmox VE \u914d\u7f6e\u4e00\u4e2a\u5b9e\u65f6\u76d1\u63a7\u65e5\u5fd7\u7684 Shell \u811a\u672c\uff0c\u5e76\u7ed3\u5408 systemd \u670d\u52a1\u786e\u4fdd\u811a\u672c\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u81ea\u52a8\u8fd0\u884c\u53ca\u5f02\u5e38\u6062\u590d\u3002\u8fd9\u4e00\u65b9\u6848\u4e0d\u4ec5\u9002\u7528\u4e8e Proxmox VE\uff0c\u4e5f\u9002\u7528\u4e8e\u5176\u4ed6\u9700\u8981\u5b9e\u65f6\u76d1\u63a7\u65e5\u5fd7\u5e76\u53ca\u65f6\u901a\u77e5\u7684\u7cfb\u7edf\u73af\u5883\u3002\u5e0c\u671b\u8fd9\u7bc7\u6587\u7ae0\u80fd\u4e3a\u60a8\u7684\u8fd0\u7ef4\u5de5\u4f5c\u63d0\u4f9b\u5e2e\u52a9\u548c\u53c2\u8003\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>i});var l=s(1504);const t={},o=l.createContext(t);function i(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);