"use strict";(self.webpackChunkowenyang_website=self.webpackChunkowenyang_website||[]).push([[972],{5492:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(7624),c=t(2172);const i={title:"React JS\u5feb\u901f\u5f00\u59cb\u624b\u518c",date:new Date("2015-01-17T11:19:11.000Z"),tags:["React","ReactJS","JS","JavaScript","Facebook"],authors:"owen"},o=void 0,r={permalink:"/blog/2015/01/17/ReactJS\u5feb\u901f\u5f00\u59cb\u624b\u518c",source:"@site/blog/2015-01-17-ReactJS\u5feb\u901f\u5f00\u59cb\u624b\u518c.md",title:"React JS\u5feb\u901f\u5f00\u59cb\u624b\u518c",description:"\u600e\u6837\u7528React JS\u6784\u5efa\u4e00\u4e2a\u7528\u6237\u754c\u9762\uff1f\u672c\u6587\u5c06\u5feb\u901f\u5730\u7ed9\u4f60\u4e00\u4e2aReact JS\u7684\u6982\u89c8\u3002\u4ee3\u7801\uff0c\u8bf7\u541b\u79fb\u6b65react-starter",date:"2015-01-17T11:19:11.000Z",formattedDate:"2015\u5e741\u670817\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"ReactJS",permalink:"/blog/tags/react-js"},{label:"JS",permalink:"/blog/tags/js"},{label:"JavaScript",permalink:"/blog/tags/java-script"},{label:"Facebook",permalink:"/blog/tags/facebook"}],readingTime:7.88,hasTruncateMarker:!0,authors:[{name:"\u6728\u6613(OwenYang)",title:"\u4e92\u8054\u7f51\u4eba\u3001\u7535\u5b50\u5783\u573e\u4f53\u9a8c\u8005\u3001\u6328\u8e22FEer\u3001\u6728\u6613\u8ddf\u6253\u5668\u4f5c\u8005",url:"https://github.com/owenyang0",imageURL:"http://static.owenyang.top/blogs/avatar.jpg",key:"owen"}],frontMatter:{title:"React JS\u5feb\u901f\u5f00\u59cb\u624b\u518c",date:"2015-01-17T11:19:11.000Z",tags:["React","ReactJS","JS","JavaScript","Facebook"],authors:"owen"},unlisted:!1,prevItem:{title:"NPM install - killed error solution",permalink:"/blog/2015/02/10/NPM-install---killed-error-solution"},nextItem:{title:"ECMAScript 6\u4e2d\u7684\u6570\u7ec4\u64cd\u4f5c\u65b9\u6cd5",permalink:"/blog/2015/01/05/ECMAScript-6\u4e2d\u7684\u6570\u7ec4\u64cd\u4f5c\u65b9\u6cd5"}},s={authorsImageUrls:[void 0]},l=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"React\u5143\u7d20(React elements)",id:"react\u5143\u7d20react-elements",level:3},{value:"\u6a21\u5757(Components)",id:"\u6a21\u5757components",level:3},{value:"JSX",id:"jsx",level:3},{value:"\u865a\u62dfDOM(Virtual DOM)",id:"\u865a\u62dfdomvirtual-dom",level:3},{value:"\u6e32\u67d3(Rendering)",id:"\u6e32\u67d3rendering",level:2},{value:"\u6a21\u5757(Components)",id:"\u6a21\u5757components-1",level:2},{value:"\u5c5e\u6027(Props)",id:"\u5c5e\u6027props",level:2},{value:"\u72b6\u6001(State)",id:"\u72b6\u6001state",level:2},{value:"\u7ec4\u5408(Composition)",id:"\u7ec4\u5408composition",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["\u600e\u6837\u7528React JS\u6784\u5efa\u4e00\u4e2a\u7528\u6237\u754c\u9762\uff1f\u672c\u6587\u5c06\u5feb\u901f\u5730\u7ed9\u4f60\u4e00\u4e2aReact JS\u7684\u6982\u89c8\u3002\u4ee3\u7801\uff0c\u8bf7\u541b\u79fb\u6b65",(0,a.jsx)(n.a,{href:"https://github.com/owenyang0/react-starter",children:"react-starter"})]}),"\n",(0,a.jsx)(n.h2,{id:"\u6982\u5ff5",children:"\u6982\u5ff5"}),"\n",(0,a.jsx)(n.p,{children:"React\u53ea\u6709\u5f88\u5c11\u7684API\uff0c\u8fd9\u4f7f\u5f97\u5b83\u5f88\u5bb9\u6613\u53bb\u5b66\u4e60\u4e0e\u7406\u89e3\u3002\u5f53\u7136\uff0c\u4f7f\u7528\u5b83\u4e5f\u662f\u76f8\u5f53\u6709\u610f\u601d\u7684\u3002\u4f46\u662f\uff0c\u7b80\u7ea6\u5374\u5e76\u4e0d\u7b80\u5355\u3002\u5728\u6211\u4eec\u5f00\u59cb\u4e4b\u524d\uff0c\u6709\u4e00\u4e9b\u6982\u5ff5\u662f\u9700\u8981\u53bb\u7406\u89e3\u7684\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"react\u5143\u7d20react-elements",children:"React\u5143\u7d20(React elements)"}),"\n",(0,a.jsxs)(n.p,{children:["React\u5143\u7d20\u662f\u7528\u4e8e\u5448\u73b0HTML\u7ed3\u6784\u7684JavaScript\u5bf9\u8c61\u3002\u5b83\u4eec\u4e0d\u4f1a\u5b58\u5728\u4e8e\u6d4f\u89c8\u5668\u4e2d\uff0c\u53ea\u662f\u7528\u4e8e\u63cf\u8ff0\u6d4f\u89c8\u5668\u4e2d\u7684\u5143\u7d20\uff0c\u6bd4\u5982",(0,a.jsx)(n.code,{children:"h1"}),", ",(0,a.jsx)(n.code,{children:"div"})," \u6216\u8005 ",(0,a.jsx)(n.code,{children:"section"}),"\u7b49\u7b49\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u6a21\u5757components",children:"\u6a21\u5757(Components)"}),"\n",(0,a.jsx)(n.p,{children:"\u6a21\u5757\u662f\u5f00\u53d1\u8005\u521b\u5efa\u7684React\u5143\u7d20\u3002\u5b83\u4eec\u901a\u8fc7\u6bd4\u7528\u6237\u754c\u9762\u7684\u8303\u56f4\u8981\u5927\uff0c\u56e0\u4e3a\u5b83\u4eec\u540c\u65f6\u5305\u542b\u4e86\u5176\u7ed3\u6784\u4e0e\u529f\u80fd\u3002\u60f3\u50cf\u4e00\u4e0b\u5bfc\u822a\u680f\uff0c\u70b9\u8d5e\u6309\u94ae\uff0c\u56fe\u7247\u4e0a\u4f20\u8fd9\u4e9b\u6a21\u5757\u7684\u6982\u5ff5\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"jsx",children:"JSX"}),"\n",(0,a.jsxs)(n.p,{children:["JSX\u662f\u4e00\u79cd\u7528\u4e8e\u521b\u5efaReact\u5143\u7d20\u548c\u6a21\u5757\u7684\u6280\u672f\uff0c\u6216\u8005\u8bf4\u662f\u89c4\u8303\u3001\u8bed\u8a00\u3002\u6bd4\u5982 ",(0,a.jsx)(n.code,{children:"<h1>Hello</h1>"})," \u4fbf\u662f\u4e00\u4e2a\u7528JSX\u6240\u5199\u7684React\u5143\u7d20\u3002\u540c\u6837\u7684React\u5143\u7d20\uff0c\u53ef\u4ee5\u7528\u539f\u751f\u7684JavaScript\u5b9e\u73b0\uff0c\u5373 ",(0,a.jsx)(n.code,{children:"React.DOM.h1(null, 'Hello');"}),"\u3002\u76f8\u6bd4\u539f\u751f\u7684JavaScript\uff0cJSX\u66f4\u52a0\u7b80\u6d01\u3002\u4f1a\u8ba9\u4f60\u82b1\u66f4\u5c11\u7684\u7cbe\u529b\u53bb\u8bfb\u548c\u5199\u4ee3\u7801\uff0c\u5728\u4e0a\u7ebf\u7684\u65f6\u5019\u5c06\u5176\u8f6c\u6362\u6210\u539f\u751f\u7684JavaScript\u5373\u53ef\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u865a\u62dfdomvirtual-dom",children:"\u865a\u62dfDOM(Virtual DOM)"}),"\n",(0,a.jsx)(n.p,{children:"\u865a\u62dfDOM\u662f\u4e00\u4e2aJavaScript\u7684\u6811\u5f62\u7ed3\u6784\uff0c\u5305\u542b\u4e86React\u5143\u7d20\u548c\u6a21\u5757\u3002React\u901a\u8fc7\u6e32\u67d3\u865a\u62dfDOM\u5230\u6d4f\u89c8\u5668\uff0c\u4f7f\u5f97\u7528\u6237\u754c\u9762\u5f97\u4ee5\u663e\u793a\u3002React\u4e5f\u4f1a\u89c2\u5bdf\u865a\u62dfDOM\u7684\u53d8\u5316\uff0c\u6839\u636e\u865a\u62dfDOM\u81ea\u52a8\u5730\u6539\u53d8\u6d4f\u89c8\u5668DOM\u5143\u7d20\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4e86\u89e3\u4e86\u8fd9\u4e9b\u6982\u5ff5\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u7545\u5feb\u5730\u6572React\u4ee3\u7801\u4e86\u3002\u8fd9\u91cc\u5c06\u4f1a\u521b\u5efa\u4e00\u7cfb\u5217\u7684\u7528\u6237\u754c\u9762\uff0c\u6bcf\u4e00\u4e2a\u754c\u9762\u90fd\u5c06\u63d0\u524d\u6dfb\u52a0\u4e00\u5c42\u529f\u80fd\u5c42\u3002\u6211\u4eec\u4f1a\u505a\u4e00\u4e2a\u7c7b\u4f3cinstagram\u7684\u5e94\u7528 - \u5f53\u7136\uff0c\u8fd9\u4e2a\u5f88\u7c97\u7cd9\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u6e32\u67d3rendering",children:"\u6e32\u67d3(Rendering)"}),"\n",(0,a.jsx)(n.p,{children:"\u4e1a\u52a1\u7684\u7b2c\u4e00\u6b65\u662f\u6e32\u67d3\u4e00\u4e2a\u865a\u62df\u7684\u5143\u7d20(React\u5143\u7d20\u6216\u8005\u6a21\u5757\u90fd\u53ef\u4ee5)\u3002\u7531\u4e8e\u6bcf\u4e00\u4e2a\u865a\u62df\u5143\u7d20\u90fd\u5b58\u5728\u4e8e\u5185\u5b58\u4e4b\u4e2d\uff0c\u6240\u4ee5\u6211\u4eec\u5fc5\u987b\u663e\u5f0f\u5730\u544a\u8bc9React\uff0c\u5c06\u5176\u6e32\u67d3\u5230\u6d4f\u89c8\u5668\u7684DOM\u4e4b\u4e2d\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"React.render(<img src='http://owenyang0.github.io/img/background.jpg' />, document.body);\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"render"})," \u51fd\u6570\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u4e00\u4e2a\u662f\u865a\u62df\u5143\u7d20\uff0c\u4e00\u4e2a\u662f\u771f\u5b9e\u7684DOM\u8282\u70b9\u3002React\u5c31\u662f\u83b7\u53d6\u5230\u865a\u62df\u5143\u7d20\u4e4b\u540e\uff0c\u5c06\u5176\u63d2\u5165\u5230\u6240\u7ed9\u7684\u8282\u70b9\u4e4b\u4e2d\u3002\u6b64\u65f6\uff0c\u5728\u6d4f\u89c8\u5668\u4e2d\u4fbf\u53ef\u4ee5\u770b\u5230\u7167\u7247\u4e86\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u6a21\u5757components-1",children:"\u6a21\u5757(Components)"}),"\n",(0,a.jsx)(n.p,{children:"\u6a21\u5757\u662fReact\u7684\u6838\u5fc3\u4e0e\u7075\u9b42\u3002\u5b83\u4eec\u53ef\u4ee5\u81ea\u5b9a\u4e49React\u5143\u7d20\u3002\u7ecf\u5e38\u7531\u5355\u4e00\u7684\u529f\u80fd\u6216\u8005\u7ed3\u6784\u6269\u5c55\u800c\u6765\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"var Photo = React.createClass({\n\n  render: function() {\n    return <img src='http://owenyang0.github.io/img/background.jpg' />\n  }\n});\n\nReact.render(<Photo />, document.body);\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"createClass"})," \u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5b9e\u73b0\u4e86",(0,a.jsx)(n.code,{children:"render"})," \u7684\u51fd\u6570\u3002\n\u8fd9\u4e2a",(0,a.jsx)(n.code,{children:"Photo"}),"\u6a21\u5757\u88ab\u6784\u5efa\u597d\uff0c",(0,a.jsx)(n.code,{children:"<Photo />"}),"\uff0c\u7136\u540e\u6e32\u67d3\u5230document body\u4e2d\u3002\n\u8be5\u6a21\u5757\u5e76\u6ca1\u6709\u6bd4\u4e0a\u4e00\u4e2aReact\u56fe\u50cf\u5143\u7d20\u505a\u66f4\u591a\u7684\u4e8b\u60c5\uff0c\u4f46\u8fd9\u5374\u66f4\u52a0\u6709\u5229\u4e8e\u5728\u529f\u80fd\u548c\u7ed3\u6784\u4e0a\u8fdb\u884c\u6269\u5c55\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5c5e\u6027props",children:"\u5c5e\u6027(Props)"}),"\n",(0,a.jsx)(n.p,{children:"\u5c5e\u6027\u53ef\u4ee5\u8ba4\u4e3a\u662f\u6a21\u5757\u7684\u4e00\u4e9b\u914d\u7f6e\u9009\u9879\u3002\u5b83\u4eec\u4ee5\u53c2\u6570(arguments)\u7684\u5f62\u5f0f\u4f20\u9012\u7ed9\u6a21\u5757\uff0c\u770b\u8d77\u6765\u5c31\u50cfHTML\u7684\u5c5e\u6027(attributes)\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"var Photo = React.createClass({\n\n  render: function() {\n    return (\n      <div className='photo'>\n        <img src={this.props.imageURL} />\n        <span>{this.props.caption}</span>\n      </div>\n    )\n  }\n});\n\nReact.render(<Photo imageURL='http://owenyang0.github.io/img/background.jpg' caption='Headset' />, document.body);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5728",(0,a.jsx)(n.code,{children:"render"})," \u51fd\u6570\u91cc\u9762\uff0c\u4e24\u4e2a\u5c5e\u6027(props)\u4f20\u5230\u4e86",(0,a.jsx)(n.code,{children:"Photo"}),"\u6a21\u5757\uff0c",(0,a.jsx)(n.code,{children:"imageURL"})," \u548c ",(0,a.jsx)(n.code,{children:"caption"}),"\u3002",(0,a.jsx)(n.code,{children:"imageURL"}),"\u5c5e\u6027\u88ab\u7528\u4f5cReact\u5143\u7d20\u4e2d\u7684",(0,a.jsx)(n.code,{children:"src"}),"\u3002\u800c",(0,a.jsx)(n.code,{children:"caption"}),"\u5c5e\u6027\u5219\u4ee5\u7eaf\u6587\u672c\u7684\u65b9\u5f0f\u5728React\u4e2d\u7684span\u5143\u7d20\u4f7f\u7528\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u6a21\u5757\u6c38\u8fdc\u4e0d\u5e94\u8be5\u53bb\u6539\u53d8\u5c5e\u6027\u7684\u7684\u503c\uff0c\u5b83\u4eec\u662f\u4e0d\u53ef\u53d8\u7684\u3002\u5982\u679c\u4e00\u4e2a\u6a21\u5757\u6709\u4e00\u4e2a\u53ef\u53d8\u7684\u6570\u636e\uff0c\u90a3\u5e94\u8be5\u5e94\u7528\u4f7f\u7528\u72b6\u6001\u5bf9\u8c61(state object)\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u72b6\u6001state",children:"\u72b6\u6001(State)"}),"\n",(0,a.jsx)(n.p,{children:"\u72b6\u6001\u5bf9\u8c61\u662f\u4e00\u4e2a\u6a21\u5757\u7684\u5185\u90e8\u5bf9\u8c61\u3002\u5b83\u4f1a\u6301\u6709\u53ef\u53d8\u7684\u6570\u636e\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"var Photo = React.createClass({\n\n  toggleLiked: function() {\n    this.setState({\n      liked: !this.state.liked\n    });\n  },\n\n  getInitialState: function() {\n    return {\n      liked: false\n    }\n  },\n\n  render: function() {\n    var buttonClass = this.state.liked ? 'active' : '';\n\n    return (\n      <div className='photo'>\n        <img src={this.props.src} />\n\n        <div className='bar'>\n          <button onClick={this.toggleLiked} className={buttonClass}>\n            \u2665\n          </button>\n          <span>{this.props.caption}</span>\n        </div>\n      </div>\n    )\n  }\n});\n\nReact.render(<Photo src='http://owenyang0.github.io/img/background.jpg' caption='Headset'/>, document.body);\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u6a21\u5757\u4e2d\u5f15\u5165\u72b6\u6001\uff0c\u4f1a\u589e\u52a0\u4e00\u70b9\u70b9\u7684\u590d\u6742\u5ea6\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u8fd9\u6a21\u5757\u4e2d\uff0c\u6709\u4e00\u4e2a\u65b0\u7684\u51fd\u6570",(0,a.jsx)(n.code,{children:"getInitialState"}),"\u3002\u5f53\u6a21\u5757\u521d\u59cb\u5316\u7684\u65f6\u5019\uff0cReact\u4f1a\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u3002\u800c\u8fd4\u56de\u7684\u5bf9\u8c61\u5219\u4f5c\u4e3aReact\u7684\u521d\u59cb\u5316\u72b6\u6001(\u770b\u51fd\u6570\u540d\u5c31\u77e5\u9053)\u3002\n\u8fd8\u6709\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\u53eb",(0,a.jsx)(n.code,{children:"toggleLiked"}),"\u3002\u8fd9\u4e2a\u51fd\u6570\u8c03\u7528\u4e86\u6a21\u5757\u4e0a\u7684setState\u65b9\u6cd5\uff0c\u53ef\u4ee5\u6539\u53d8\u72b6\u6001",(0,a.jsx)(n.code,{children:"liked"}),"\u7684\u503c\u3002\n\u901a\u8fc7\u6a21\u5757\u7684render\u51fd\u6570\uff0c\u53d8\u91cf",(0,a.jsx)(n.code,{children:"buttonClass"}),"\u88ab\u8d4b\u503c\u6210\u4e86'active'\u6216\u8005\u7a7a\uff0c\u8fd9\u90fd\u4f9d\u8d56\u4e8e",(0,a.jsx)(n.code,{children:"liked"}),"\u72b6\u6001\u3002\n",(0,a.jsx)(n.code,{children:"buttonClass"}),"\u662fReact\u6309\u94ae\u5143\u7d20\u7684class\u540d\u5b57\u3002\u6309\u94ae\u8fd8\u62e5\u6709\u4e00\u4e2a",(0,a.jsx)(n.code,{children:"onClick"}),"\u7684\u4e8b\u4ef6\u56de\u8c03\uff0c\u6307\u5411",(0,a.jsx)(n.code,{children:"toggleLiked"}),"\u51fd\u6570\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u5f53\u6a21\u5757\u6e32\u67d3\u6210\u6d4f\u89c8\u5668DOM\u7684\u65f6\u5019\uff0c\u7a76\u7adf\u53d1\u751f\u5168\u8fc7\u7a0b\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u5f53\u6309\u94ae\u70b9\u51fb\u88ab\u89e6\u53d1\u65f6\uff0c\u8c03\u7528\u4e86",(0,a.jsx)(n.code,{children:"toggleLiked"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"liked"}),"\u7684\u72b6\u6001\u88ab\u6539\u53d8"]}),"\n",(0,a.jsx)(n.li,{children:"React\u5c06\u6a21\u5757\u518d\u6b21\u6e32\u67d3\u6210\u865a\u62dfDOM"}),"\n",(0,a.jsx)(n.li,{children:"\u65b0\u7684\u865a\u62dfDOM\u4e0e\u65e7\u7684\u865a\u62dfDOM\u76f8\u6bd4\u8f83"}),"\n",(0,a.jsx)(n.li,{children:"React\u5c06\u6539\u53d8\u7684\u90e8\u5206\u9694\u79bb\uff0c\u7136\u540e\u66f4\u65b0\u5230\u6d4f\u89c8\u5668DOM"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u8fd9\u4e2a\u573a\u666f\u4e2d\uff0cReact\u4f1a\u6539\u53d8button\u4e0a\u7684\u7c7b\u540d\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u7ec4\u5408composition",children:"\u7ec4\u5408(Composition)"}),"\n",(0,a.jsxs)(n.p,{children:["\u7ec4\u5408\u7684\u610f\u601d\u662f\u8bf4\uff0c\u5c06\u5c0f\u7684\u5206\u6563\u7684\u6a21\u5757\u7ec4\u6210\u4e00\u4e2a\u5927\u7684\u6574\u4f53\u3002\u6bd4\u5982",(0,a.jsx)(n.code,{children:"Photo"}),"\u6a21\u5757\u53ef\u4ee5\u5728",(0,a.jsx)(n.code,{children:"PhotoGallery"}),"\u4e2d\u4f7f\u7528\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"var Photo = React.createClass({\n\n  toggleLiked: function() {\n    this.setState({\n      liked: !this.state.liked\n    });\n  },\n\n  getInitialState: function() {\n    return {\n      liked: false\n    }\n  },\n\n  render: function() {\n    var buttonClass = this.state.liked ? 'active' : '';\n\n    return (\n      <div className='photo'>\n        <img src={this.props.src} />\n\n        <div className='bar'>\n          <button onClick={this.toggleLiked} className={buttonClass}>\n            \u2665\n          </button>\n          <span>{this.props.caption}</span>\n        </div>\n      </div>\n    )\n  }\n});\n\nvar PhotoGallery = React.createClass({\n\n  getDataFromServer: function() {\n    return [{\n      url: 'http://owenyang0.github.io/img/background.jpg',\n      caption: 'Headset'\n    },\n    {\n      url: 'http://owenyang0.github.io/images/mocha.png',\n      caption: 'Mocha'\n    },\n    {\n      url: 'http://owenyang0.github.io/images/catalog.png',\n      caption: 'Catelog'\n    }];\n  },\n\n  render: function() {\n    var data = this.getDataFromServer();\n\n    var photos = data.map(function(photo) {\n      return <Photo src={photo.url} caption={photo.caption} />\n    });\n\n    return (\n      <div className='photo-gallery'>\n        {photos}\n      </div>\n    )\n  }\n});\n\nReact.render(<PhotoGallery />, document.body);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u4e2a",(0,a.jsx)(n.code,{children:"Photo"}),"\u6a21\u5757\u5b8c\u5b8c\u5168\u5168\u548c\u4e0a\u9762\u7684\u4e00\u6837\u3002\u4f46\u65b0\u7684",(0,a.jsx)(n.code,{children:"PhotoGallery"}),"\u6a21\u5757\u4f1a\u751f\u6210",(0,a.jsx)(n.code,{children:"Photo"}),"\u6a21\u5757\u3002\u8be5\u573a\u666f\u4e2d\uff0c\u4f2a\u9020\u4e86\u8fd4\u56de\u5305\u542b\u4e09\u4e2a\u5bf9\u8c61\u7684\u6570\u7ec4\u7684\u6570\u636e\uff0c\u6bcf\u4e00\u4e2a\u5bf9\u8c61\u90fd\u8fd4\u56de\u4e00\u4e2aurl\u548c\u5176\u6807\u9898\u3002\u901a\u8fc7\u5faa\u73af\uff0c\u751f\u6210\u4e86\u4e09\u4e2a",(0,a.jsx)(n.code,{children:"Photo"}),"\u7684\u6a21\u5757\uff0c\u5c06\u6700\u7ec8\u7684\u8fd4\u56de\u503c\u63d2\u5165\u5230",(0,a.jsx)(n.code,{children:"render"}),"\u51fd\u6570\u4e4b\u4e2d\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5c0f\u7ed3",children:"\u5c0f\u7ed3"}),"\n",(0,a.jsxs)(n.p,{children:["\u7528React\u6765\u6784\u5efa\u4f60\u7684\u7528\u6237\u754c\u9762\uff0c\u6211\u60f3\u8fd9\u4e5f\u5dee\u4e0d\u591a\u4e86\u3002React\u7684\u6587\u6863\u624b\u518c\uff0c\u5305\u542b\u4e86\u6240\u6709\u7684\u7ec6\u8282\u3002\u5f3a\u70c8\u63a8\u8350\u5927\u5bb6\u53bb\u8bfb\u4e00\u4e0b\u3002\n\u540c\u6837\u7684\uff0c\u8be5\u6587\u4e5f\u6ca1\u6709\u6d89\u53ca\u4f60\u672c\u5730\u73af\u5883\u5b89\u88c5\u7684\u7ec6\u8282\u3002",(0,a.jsx)(n.a,{href:"http://facebook.github.io/react/docs/getting-started.html",children:"\u6587\u6863"}),"\u90fd\u4f1a\u6709\u7684\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,c.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>o});var a=t(1504);const c={},i=a.createContext(c);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);