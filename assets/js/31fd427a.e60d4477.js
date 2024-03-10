"use strict";(self.webpackChunkowenyang_website=self.webpackChunkowenyang_website||[]).push([[9228],{2228:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=i(7624),t=i(2172);const l={authors:"owen",title:"JavaScript TDD with Mocha",date:"2014-12-04 08:37:41",tags:["JavaScript","TDD","Mocha"]},c=void 0,r={permalink:"/blog/2014/12/04/JavaScript-TDD-with-Mocha",source:"@site/blog/2014-12-04-JavaScript-TDD-with-Mocha.md",title:"JavaScript TDD with Mocha",description:"\u5f00\u53d1\u73b0\u72b6",date:"2014-12-04T08:37:41.000Z",formattedDate:"2014\u5e7412\u67084\u65e5",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"},{label:"TDD",permalink:"/blog/tags/tdd"},{label:"Mocha",permalink:"/blog/tags/mocha"}],readingTime:8.02,hasTruncateMarker:!0,authors:[{name:"\u6728\u6613(OwenYang)",title:"\u4e92\u8054\u7f51\u4eba\u3001\u7535\u5b50\u5783\u573e\u4f53\u9a8c\u8005\u3001\u6328\u8e22FEer\u3001\u6728\u6613\u8ddf\u6253\u5668\u4f5c\u8005",url:"https://github.com/owenyang0",imageURL:"http://static.owenyang.top/blogs/avatar.jpg",key:"owen"}],frontMatter:{authors:"owen",title:"JavaScript TDD with Mocha",date:"2014-12-04 08:37:41",tags:["JavaScript","TDD","Mocha"]},unlisted:!1,prevItem:{title:"Change Tab Title with JavaScript",permalink:"/blog/2014/12/11/Change-Tab-Title-with-JavaScript"},nextItem:{title:"\u6d45\u8c08JavaScript\u95ed\u5305",permalink:"/blog/2014/03/03/\u6d45\u8c08JavaScript\u95ed\u5305"}},a={authorsImageUrls:[void 0]},d=[{value:"\u5f00\u53d1\u73b0\u72b6",id:"\u5f00\u53d1\u73b0\u72b6",level:3},{value:"\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1",id:"\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1",level:3},{value:"JavaScript TDD",id:"javascript-tdd",level:3},{value:"\u5f00\u53d1\u51c6\u5907",id:"\u5f00\u53d1\u51c6\u5907",level:4},{value:"\u5de5\u7a0b\u5efa\u7acb",id:"\u5de5\u7a0b\u5efa\u7acb",level:4},{value:"\u6d4b\u8bd5\u4ee3\u7801\u7f16\u5199",id:"\u6d4b\u8bd5\u4ee3\u7801\u7f16\u5199",level:4},{value:"\u5b9e\u73b0\u4ee3\u7801\u7f16\u5199",id:"\u5b9e\u73b0\u4ee3\u7801\u7f16\u5199",level:4},{value:"repeat",id:"repeat",level:4},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:3}];function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h3,{id:"\u5f00\u53d1\u73b0\u72b6",children:"\u5f00\u53d1\u73b0\u72b6"}),"\n",(0,s.jsxs)(e.p,{children:["\u5f53\u65b0\u7684\u7248\u672c\u5feb\u8981\u53d1\u5e03\u7684\u65f6\u5019\uff0c\u5927\u5bb6\u90fd\u5fd9\u4e8e\u52a0\u73ed\uff0c\u52a0\u7d27\u4fee\u590dBUG1\u3001BUG2\u3002\u6211\u60f3\u8fd9\u5c31\u662f\u5f88\u591a\u516c\u53f8\u5f00\u53d1\u7684\u73b0\u72b6\u3002\n\u4e3a\u4e86\u4e0d\u81f3\u4e8e\u8ba9\u4e0a\u7ebf\u7684\u7248\u672c\u6302\u6389\u6302\u6389\uff0c\u5c11\u4e0d\u4e86\u5c31\u662f ",(0,s.jsx)(e.code,{children:"\u4eba\u8089\u6d4b\u8bd5"}),"\u3002\n\u5728\u4e00\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u4f1a\u505a\u8bb8\u8bb8\u591a\u591a\u5404\u79cd\u5404\u6837\u7684\u6d4b\u8bd5\uff0c\u8fd9\u4e9b\u6d4b\u8bd5\u90fd\u5fc5\u4e0d\u53ef\u5c11\u7684\u3002\u6d4b\u8bd5\u662f\u9879\u76ee\u6210\u529f\u4e0d\u53ef\u6216\u7f3a\u7684\u4e00\u90e8\u5206\u3002\u4f46 ",(0,s.jsx)(e.code,{children:"\u4eba\u8089\u6d4b\u8bd5"})," \u4e0d\u5728\u672c\u535a\u7684\u8ba8\u8bba\u8303\u56f4\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6d4b\u8bd5\u5927\u4f53\u5206\u4e3a\u4ee5\u4e0b\u51e0\u7c7b"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5355\u5143\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.li,{children:"\u96c6\u6210\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.li,{children:"\u529f\u80fd\u6d4b\u8bd5"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1",children:"\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1"}),"\n",(0,s.jsxs)(e.p,{children:["TDD(Test-Driven Development) \u4ece\u6839\u672c\u4e0a\u6539\u53d8\u4e86\u4f20\u7edf\u7684\u5f00\u53d1\u6a21\u5f0f\uff0c\u5b83\u8981\u6c42\u4f60\u5728\u5199\u4ee3\u7801\u4e4b\u524d\u5c31\u5199\u597d\u6d4b\u8bd5\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u5f85\u4f60\u5199\u4f60\u4ee3\u7801\u4ee5\u540e\u7684\u7528\u4f5c\u9a8c\u8bc1\u7684\u76ee\u7684\u3002\nTDD\u5c06\u6d4b\u8bd5\u63d0\u5230\u4e86\u5e94\u7528\u8bbe\u8ba1\u7684\u9636\u6bb5\uff0c\u5728\u8fd9\u671f\u95f4\u4f60\u5e94\u8be5\u7528\u4f60\u7684\u6d4b\u8bd5\u7406\u6e05\u4f60\u5199\u4ee3\u7801\u65f6\u7684\u601d\u8def\uff0c\u6211\u4eec\u79f0\u4f5c ",(0,s.jsx)(e.code,{children:"Tasking"}),"."]}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u662fTDD\u5f00\u53d1\u65f6\u7684\u57fa\u672c\u8981\u70b9"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Tasking (\u5c06\u9879\u76ee\u9700\u8981\u62c6\u5206\u6210\u5c0f\u7684task)"}),"\n",(0,s.jsx)(e.li,{children:"Red (\u5199\u6d4b\u8bd5\u4ee3\u7801\uff0c\u8ba9\u5176\u5931\u8d25\uff0c\u53d8\u7ea2)"}),"\n",(0,s.jsx)(e.li,{children:"Green (\u5199\u5b9e\u73b0\u4ee3\u7801\uff0c\u8ba9\u5176\u901a\u8fc7\uff0c\u53d8\u7eff)"}),"\n",(0,s.jsx)(e.li,{children:"Refactor (\u91cd\u6784\uff0c\u6d88\u5931\u4ee3\u7801\u4e2d\u7684bad smell)"}),"\n",(0,s.jsx)(e.li,{children:"Repeat (\u91cd\u590d\u4ee5\u4e0a\u6b65\u9aa4)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u5c31\u662fTDD\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684\u57fa\u672c\u8fc7\u7a0b\uff0c\u6211\u4eec\u5c31\u5728 \u201c\u7ea2-\u7eff-\u7ea2-\u7eff\u201d \u4e2d\u5b8c\u6210\u6211\u4eec\u7684\u8f6f\u4ef6\u5f00\u53d1\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"javascript-tdd",children:"JavaScript TDD"}),"\n",(0,s.jsx)(e.p,{children:"\u7b14\u8005\u5c06\u901a\u8fc7\u7f16\u5199\u4e00\u4e2a\u4f20\u7edf\u6e38\u620f\u7684\u65b9\u5f0f\uff0c\u6765\u5b8c\u6210\u4e00\u4e2a JavaScript TDD \u7684\u5b9e\u8df5\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"4 digits"}),"\n\u662f\u4e00\u4e2a\u731c\u6570\u5b57\u6e38\u620f\u3002\u5728\u56fd\u5916\u79f0\u4e3a\u516c\u725b\u548c\u6bcd\u725b\uff0c\u5728\u4e2d\u56fd\u4eba\u4eec\u5c31\u53eb\u5b83\u731c\u6570\u5b57\u3002\u6e38\u620f\u7684\u76ee\u6807\u662f\u5728\u516b\u6b21\u5185\u7528\u5c3d\u53ef\u80fd\u77ed\u7684\u65f6\u95f4\u731c\u51fa\u4e00\u4e2a\u968f\u673a\u7684\u56db\u4f4d\u6570\uff1a"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u987a\u5e8f\u4e0e\u5927\u5c0f\u90fd\u76f8\u540c\u7684\u7528 A \u8868\u793a"}),"\n",(0,s.jsx)(e.li,{children:"\u5927\u5c0f\u76f8\u540c\uff0c\u4f46\u987a\u5e8f\u4e0d\u540c\u7528 B \u8868\u793a"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6bd4\u5982"})," \u8f93\u5165 1234 | \u731c\u6570 2156 | \u7ed3\u679c 0A2B"]}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u662f\u66fe\u7ecf\u5728\u6587\u66f2\u661f\u4e0a\u6709\u8fc7\u7684\u6e38\u620f\uff0c\u7f51\u53cb\u505a\u8fc7\u4e00\u4e2aGUI\u7248\u7684\uff0c\u5927\u5bb6\u53ef\u4ee5\u770b\u4e0b\u622a\u56fe\uff1a\n",(0,s.jsx)(e.img,{alt:"4digits",src:i(8464).c+"",width:"300",height:"359"})]}),"\n",(0,s.jsx)(e.p,{children:"\u5f53\u7136\uff0c\u672c\u6587\u7684\u91cd\u70b9\u662f JavaScript TDD, \u4e0d\u662f\u53bb\u5b9e\u73b0\u4e00\u4e2a\u592a\u8fc7\u7ec6\u8282\u903b\u8f91\u3002\u6211\u4eec\u5c31\u628a\u9700\u6c42\u7a0d\u5fae\u6539\u5199\u4e00\u4e0b\uff1a"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u56db\u4f4d\u6570\u5148\u7ed9\u5b9a"}),"\n",(0,s.jsx)(e.li,{children:"\u4ec5\u505a\u7b97\u6cd5\u5904\u7406(\u6bd4\u8f83\u6240\u731c\u6570\u5b57\u4e0e\u7ed9\u5b9a\u6570\u5b57)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"\u5f00\u53d1\u51c6\u5907",children:"\u5f00\u53d1\u51c6\u5907"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Node"}),"\n",(0,s.jsx)(e.li,{children:"Mocha"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u4e0d\u77e5\u9053 ",(0,s.jsx)(e.code,{children:"Node"}),", \u4f30\u8ba1\u4f60\u6682\u65f6\u8fd8\u4e0d\u7528\u5199 ",(0,s.jsx)(e.code,{children:"JavaScript"}),"\u3002\u6240\u4ee5\uff0c\u672c\u7bc7\u6587\u7ae0\u53ef\u80fd\u8fd8\u4e0d\u592a\u9002\u5408\u4f60\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"Mocha",src:i(1492).c+"",width:"563",height:"185"}),"\n",(0,s.jsx)(e.a,{href:"http://visionmedia.github.io/mocha/",children:"\u6469\u5361"}),"\u662f\u4e00\u4e2a\u529f\u80fd\u4e30\u5bcc\u7684\u8fd0\u884c\u5728 ",(0,s.jsx)(e.code,{children:"Node"})," \u548c\u6d4f\u89c8\u5668\u4e0a\u7684JavaScript\u6d4b\u8bd5\u6846\u67b6\u3002\u5b83\u5141\u8bb8\u4f60\u4f7f\u7528\u4f60\u4efb\u610f\u559c\u6b22\u7684\u65ad\u8a00\u5e93\u3002\u6bd4\u5982"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"should.js"}),"\n",(0,s.jsx)(e.li,{children:"chai"}),"\n",(0,s.jsx)(e.li,{children:"expect.js"}),"\n",(0,s.jsx)(e.li,{children:"better-assert"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u672c\u6b21\u5de5\u7a0b\u5c31\u9009\u62e9 ",(0,s.jsx)(e.a,{href:"https://github.com/visionmedia/should.js",children:"should.js"}),"\u5427\uff0c\u5199TDD\u5f88\u4f18\u7f8e\uff0c\u4e0b\u9762\u6b63\u5f0f\u5f00\u53d1\u6211\u4eec\u7684TDD\u4e4b\u65c5\u3002"]}),"\n",(0,s.jsx)(e.h4,{id:"\u5de5\u7a0b\u5efa\u7acb",children:"\u5de5\u7a0b\u5efa\u7acb"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"    mkdir -p digits/{src,test}\n    cd digits\n    touch src/digits.js test/digitsSpec.js\n    npm init\n    npm install -g mocha\n    npm install should --save-dev\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5de5\u7a0b\u5c31\u662f\u8fd9\u6837\u642d\u5efa\u5b8c\u6210\u4e86\uff0c\u6211\u4eec\u53ef\u4ee5\u6765\u770b\u4e00\u4e0b\u76ee\u5f55\u7ed3\u6784(\n\u6211\u628anode_modules\u76ee\u5f55\u9690\u85cf\u4e86)\uff1a\n",(0,s.jsx)(e.img,{alt:"Catalog",src:i(8572).c+"",width:"387",height:"178"})]}),"\n",(0,s.jsx)(e.p,{children:"\u5c31\u8fd9\u6837\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c"}),"\n",(0,s.jsx)(e.p,{children:"mocha"}),"\n",(0,s.jsxs)(e.p,{children:["\u8dd1\u6d4b\u8bd5\u4e86\u3002\u5f53\u7136\uff0c\u6211\u4eec\u4ec0\u4e48\u4ee3\u7801\u90fd\u6ca1\u6709\u5199\uff0c\u5f53\u65f6\u6ca1\u6709\u6d4b\u8bd5\u53ef\u4ee5\u8dd1\uff0c\u6240\u4ee5\u7ed3\u679c\u4f1a\u662f\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"0 passing"}),"\u3002\u90a3\u6211\u4eec\u6b63\u5f0f\u5f00\u59cb\u5427\u3002"]}),"\n",(0,s.jsx)(e.h4,{id:"\u6d4b\u8bd5\u4ee3\u7801\u7f16\u5199",children:"\u6d4b\u8bd5\u4ee3\u7801\u7f16\u5199"}),"\n",(0,s.jsx)(e.p,{children:"\u5148\u5199\u51fa\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u5427\u3002\n\u5982\u679c\u8f93\u5165\u6570\u5b57\uff0c\u6216\u8005\u6240\u7ed9\u6570\u5b57\u7684\u957f\u5ea6\u90fd\u4e0d\u7b49\u4e8e4\uff0c\u5219\u8fd4\u56de-1\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"    var should = require('should'),\n      Digits = require('../src/digits').Digits;\n\n    describe('Digits', function() {\n      // Digits.compare(inputNum, givenNum);\n      describe('#compare()', function() {\n        it('should return -1 when input and given number length isnt 4', function() {\n          Digits.compare('123', '').should.equal(-1);\n          Digits.compare('123', null).should.equal(-1);\n          Digits.compare('123', '1234').should.equal(-1);\n          Digits.compare(null, '1234').should.equal(-1);\n        });\n      });\n    });\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u55ef\uff0c\u4ee3\u7801\u770b\u8d77\u6765\u4e0d\u9519\uff0c\u6211\u4eec\u5c1d\u8bd5\u7740 ",(0,s.jsx)(e.code,{children:"mocha"})," \u8dd1\u4e00\u4e0b\u3002\u554a\u54e6\uff0c\u610f\u6599\u4e4b\u4e2d\uff0c\u53d8\u7ea2\u4e86\uff1a",(0,s.jsx)(e.img,{alt:"mocha error",src:i(9396).c+"",width:"729",height:"479"})]}),"\n",(0,s.jsxs)(e.p,{children:["\u4ec0\u4e48\u539f\u56e0\u5583\uff1f\u539f\u6765\u6211\u4eec\u6839\u672c\u6ca1\u6709\u5199\u5b9e\u73b0\u4ee3\u7801\uff0c\u4f60\u8fd9\u4e0d\u5e9f\u8bdd\u4e48\uff1f\u786e\u5b9e\u662f\u8fd9\u6837\uff0c\u8fd9\u5c31\u662fTDD\u4e2d\u7684\u7b2c\u4e00\u6b65\uff0c",(0,s.jsx)(e.strong,{children:"\u7ea2"}),"\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c31\u7f16\u5199\u4e00\u4e9b\u4ee3\u7801\uff0c\u8ba9\u5b83\u53d8\u7eff\u5427\u3002"]}),"\n",(0,s.jsx)(e.h4,{id:"\u5b9e\u73b0\u4ee3\u7801\u7f16\u5199",children:"\u5b9e\u73b0\u4ee3\u7801\u7f16\u5199"}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u7b80\u5355\u7684Digits\u7684function\u5427\uff0c\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"exports.Digits = Digits;"})," \u5c06\u51fd\u6570\u63a5\u53e3\u66b4\u9732\u51fa\u53bb\u3002\u5c31\u50cf\u8fd9\u6837\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"    function Digits() {}\n\n    Digits.compare = function(inputNum, givenNum) {\n      var len = 4;\n\n      if (inputNum === null ||\n        givenNum === null ||\n        inputNum.length !== len ||\n        givenNum.length !== len) {\n        return -1;\n      }\n    }\n\n    exports.Digits = Digits;\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u770b\u5427\uff0c\u770b\u8d77\u6765\u4e5f\u5f88\u4e0d\u9519\u7684\u6837\u5b50\uff0c\u90a3\u6211\u4eec\u7ee7\u7eed\u8dd1\u4e00\u4e0b\u6d4b\u8bd5\u5427\u3002\u554a\u54c8\uff0c\u610f\u6599\u4e4b\u4e2d\uff0c\u53d8",(0,s.jsx)(e.strong,{children:"\u7eff"}),"\u4e86\uff1a",(0,s.jsx)(e.img,{alt:"mocha success",src:i(7719).c+"",width:"578",height:"215"})]}),"\n",(0,s.jsx)(e.h4,{id:"repeat",children:"repeat"}),"\n",(0,s.jsxs)(e.p,{children:["\u7531\u7ea2\u53d8\u7eff\u4e4b\u540e\uff0c\u8fd9\u4e2atask\u4e5f\u5c31\u76f8\u5f53\u4e8e\u662f\u5b8c\u6210\u4e86\u3002\u6211\u4eec\u53c8\u53ef\u4ee5\u6309\u7167\u8fd9\u6837\u7684\u4e00\u4e2a\u6b65\u9aa4\uff0c\u518d\u5199\u65b0\u7684\u6d4b\u8bd5\uff0c\u7136\u540e\u518d\u5c06\u5b83\u5b9e\u73b0\u51fa\u6765\u3002\u5230\u6b64\u4e3a\u6b62\uff0c\u4e00\u4e2a\u57fa\u672c\u7684 JavaScript TDD\u6d41\u7a0b\u4e5f\u5c31\u5b8c\u4e86\uff0c\u8d81\u7740\u70ed\u4e4e\u52b2\u513f\u3002\u6211\u4eec\u628a\u8fd9\u4e2a ",(0,s.jsx)(e.code,{children:"compare"})," \u51fd\u6570\u7684\u5176\u4ed6\u6d4b\u8bd5\u4e5f\u4e00\u5e76\u5199\u4e86\u5427\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"digitsSepc.js"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"    var should = require('should'),\n      Digits = require('../src/digits').Digits;\n\n    describe('Digits', function() {\n      // Digits.compare(inputNum, givenNum);\n      describe('#compare()', function() {\n        it('should return -1 when input and given number length isnt 4', function() {\n          Digits.compare('123', '').should.equal(-1);\n          Digits.compare('123', null).should.equal(-1);\n          Digits.compare('123', '1234').should.equal(-1);\n          Digits.compare(null, '1234').should.equal(-1);\n        });\n\n        it('should return 4A0B when input numbers matched given numbers', function() {\n          Digits.compare('1234', '1234').should.equal('4A0B');\n          Digits.compare('5678', '5678').should.equal('4A0B');\n        });\n\n        it('should return 2A2B when 2 input numbers matched given numbers, and other 2 exist but not the right order', function() {\n          Digits.compare('2134', '1234').should.equal('2A2B');\n          Digits.compare('1324', '1234').should.equal('2A2B');\n          Digits.compare('3214', '1234').should.equal('2A2B');\n          Digits.compare('4231', '1234').should.equal('2A2B');\n        });\n\n        it('should return 2A0B when 2 input numbers matched given numbers, and other 2 was wrong numbers', function() {\n          Digits.compare('1256', '1234').should.equal('2A0B');\n          Digits.compare('7238', '1234').should.equal('2A0B');\n          Digits.compare('7834', '1234').should.equal('2A0B');\n          Digits.compare('1784', '1234').should.equal('2A0B');\n        });\n      });\n    });\n\n**digits.js**\n\n    function Digits() {}\n\n    Digits.compare = function(inputNum, givenNum) {\n      var len = 4,\n        aCount = 0,\n        bCount = 0;\n\n      if (inputNum === null ||\n        givenNum === null ||\n        inputNum.length !== len ||\n        givenNum.length !== len) {\n        return -1;\n      }\n\n      if (inputNum === givenNum) {\n        return '4A0B';\n      }\n\n      for (var i = 0; i < len; i++) {\n        if (inputNum[i] === givenNum[i]) {\n          aCount++;\n        } else if (givenNum.indexOf(inputNum[i]) !== -1) {\n          bCount++;\n        }\n      }\n\n      return aCount + 'A' + bCount + 'B';\n    }\n\n    exports.Digits = Digits;\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6700\u540e\u518d\u6765\u8dd1\u4e00\u904d ",(0,s.jsx)(e.code,{children:"mocha -R spec"}),"\uff0c\u7ed3\u679c\u5982\u4e0b(\u5927\u529f\u544a\u6210\u5566)\uff1a",(0,s.jsx)(e.img,{alt:"mocha successes",src:i(6492).c+"",width:"914",height:"247"})]}),"\n",(0,s.jsx)(e.h3,{id:"\u7ed3\u8bed",children:"\u7ed3\u8bed"}),"\n",(0,s.jsx)(e.p,{children:"\u5927\u529f\u544a\u6210\u4e86\uff0c\u6b64\u65f6\u7684\u4f60\u5176\u5b9e\u53ef\u4ee5\u6d17\u6d17\u7761\u4e86\uff0c\u4e0d\u7528\u518d\u62c5\u5fc3\u4f60\u7684\u7a0b\u5e8f\u6709\u95ee\u9898\u5566\u3002\u4f60\u7684\u6d4b\u8bd5\u544a\u8bc9\u4f60\uff0c\u4f60\u7684\u7a0b\u5e8f\u90fd\u662f\u7eff\u8272\u53ef\u884c\u7684\u3002\u5f53\u7136\uff0c\u5982\u679c\u4f60\u6d4b\u8bd5\u5199\u6709\u7684\u95ee\u9898\u5c31\u522b\u5f53\u522b\u8bf4\u54af\u3002\n\u6d4b\u8bd5\u4ee3\u7801\u4f1a\u6709\u4e00\u4e9b\u4ec0\u4e48\u597d\u5904\u5462\uff1f"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6d4b\u8bd5\u4ee3\u7801\u5728\u90a3\u91cc\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u4f60\u4ee5\u540e\u4fee\u6539\u4ee3\u7801\u65f6\uff0c\u6216\u8005\u91cd\u6784\u65f6\u4e0d\u4f1a\u5bf9\u5df2\u6709\u7684\u529f\u80fd\u4ea7\u751f\u5f71\u54cd\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u6761\u662f\u5f88\u91cd\u8981\u7684\uff0c\u4e5f\u662f\u76f8\u5f53\u91cd\u8981\u7684\u3002\u5982\u679c\u6ca1\u6709\u6d4b\u8bd5\u4ee3\u7801\u7684\u4fdd\u8bc1\uff0c\u4f60\u65e0\u4ece\u77e5\u9053\u4f60\u81ea\u5df1\u6240\u6539\u7684\u4ee3\u7801\uff0c\u5bf9\u5df2\u6709\u7684\u4ee3\u7801\u4f1a\u4ea7\u751f\u4ec0\u4e48\u6837\u7684\u5f71\u54cd\u3002\u4e0e\u5176\u6bcf\u6b21\u4e0a\u7ebf\u65f6\u90fd\u5f97\u52a0\u73ed\u6539BUG\uff0c\u4e3a\u5565\u4e0d\u5148\u5199\u597d\u6d4b\u8bd5\uff0c\u4e0a\u7ebf\u65f6\u65e9\u4e9b\u6d17\u6d17\u7761\u4e86\u5462\uff1f"})]})}function h(n={}){const{wrapper:e}={...(0,t.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},8572:(n,e,i)=>{i.d(e,{c:()=>s});const s=i.p+"assets/images/catalog-65359b17acd742c98fe782292787d77b.png"},8464:(n,e,i)=>{i.d(e,{c:()=>s});const s=i.p+"assets/images/digits-2d1948a3054df21cad38e9adc7e39e9f.png"},1492:(n,e,i)=>{i.d(e,{c:()=>s});const s=i.p+"assets/images/mocha-f9b7a550837217f8ff2d6e7a6a14f794.png"},9396:(n,e,i)=>{i.d(e,{c:()=>s});const s=i.p+"assets/images/mocha_error-271715465ae2f515308af1711f5f6906.png"},7719:(n,e,i)=>{i.d(e,{c:()=>s});const s=i.p+"assets/images/mocha_success-ff99a73a2a92afc0877fb51b6a794654.png"},6492:(n,e,i)=>{i.d(e,{c:()=>s});const s=i.p+"assets/images/mocha_successes-d1db815b351f32520d7cbc428556c0b8.png"},2172:(n,e,i)=>{i.d(e,{I:()=>r,M:()=>c});var s=i(1504);const t={},l=s.createContext(t);function c(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);