(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{1266:function(t,e,o){(t.exports=o(28)(!1)).push([t.i,'.sonarcloud-login-page{margin-top:15vh;width:200px;margin-left:auto;margin-right:auto;padding:16px 20px}.sonarcloud-login-page-large{width:300px}.sonarcloud-login-title{line-height:1.5;font-size:16px;font-weight:300;width:135px;margin:8px auto 16px}.sonarcloud-oauth-providers.oauth-providers>ul>li{margin-bottom:8px}.sonarcloud-oauth-providers.oauth-providers>ul>li>a>span{padding-left:12px}.sonarcloud-oauth-providers.oauth-providers>ul>li>a>span:before{content:"";border-left:1px solid #b4b4b4;height:10px;opacity:.4;margin-right:12px}.sonarcloud-oauth-providers.oauth-providers .oauth-providers-help{right:-22px}',""])},1267:function(t,e,o){var n=o(1266);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(27)(n,r);n.locals&&(t.exports=n.locals)},1268:function(t,e,o){(t.exports=o(28)(!1)).push([t.i,".login-page{padding-top:10vh}.login-title{margin-bottom:40px;line-height:1.5;font-size:24px;font-weight:300;text-align:center}",""])},1269:function(t,e,o){var n=o(1268);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(27)(n,r);n.locals&&(t.exports=n.locals)},1270:function(t,e,o){(t.exports=o(28)(!1)).push([t.i,".oauth-providers>ul{width:180px;margin-left:auto;margin-right:auto}.oauth-providers>ul>li{position:relative;margin-bottom:30px}.oauth-providers>ul>li>a{display:block;width:180px;line-height:22px;padding:8px 12px;border:1px solid rgba(0,0,0,.15);border-radius:2px;box-sizing:border-box;background-color:#236a97;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.oauth-providers>ul>li>a:focus,.oauth-providers>ul>li>a:hover{box-shadow:inset 0 0 0 100px hsla(0,0%,100%,.1)}.oauth-providers>ul>li>a.dark-text{color:#777}.oauth-providers>ul>li>a.dark-text:focus,.oauth-providers>ul>li>a.dark-text:hover{box-shadow:inset 0 0 0 100px rgba(0,0,0,.1)}.oauth-providers>ul>li>a>span{padding-left:6px}.oauth-providers-help{position:absolute;top:15px;right:-24px}.oauth-providers+.login-form{padding-top:30px;border-top:1px solid #e6e6e6}",""])},1271:function(t,e,o){var n=o(1270);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(27)(n,r);n.locals&&(t.exports=n.locals)},1272:function(t,e,o){(t.exports=o(28)(!1)).push([t.i,".login-form{width:300px;margin-left:auto;margin-right:auto}.login-input{width:100%!important;height:auto!important;padding:5px 12px!important;font-size:20px;font-weight:300}.login-label{display:none;margin-bottom:8px;font-size:15px}",""])},1273:function(t,e,o){var n=o(1272);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(27)(n,r);n.locals&&(t.exports=n.locals)},1561:function(t,e,o){"use strict";o.r(e);var n,r=o(0),i=o(15),a=o(2),l=o(42),s=o(256),c=o(34),u=o(1),p=(o(1273),n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),d=function(t){function e(e){var o=t.call(this,e)||this;return o.stopLoading=function(){o.setState({loading:!1})},o.handleSubmit=function(t){t.preventDefault(),o.setState({loading:!0}),o.props.onSubmit(o.state.login,o.state.password).then(o.stopLoading,o.stopLoading)},o.handleMoreOptionsClick=function(t){t.preventDefault(),o.setState({collapsed:!1})},o.handleLoginChange=function(t){return o.setState({login:t.currentTarget.value})},o.handlePwdChange=function(t){return o.setState({password:t.currentTarget.value})},o.state={collapsed:Boolean(e.collapsed),loading:!1,login:"",password:""},o}return p(e,t),e.prototype.render=function(){return this.state.collapsed?r.createElement("div",{className:"text-center"},r.createElement("a",{className:"small text-muted js-more-options",href:"#",onClick:this.handleMoreOptionsClick},Object(u.l)("login.more_options"))):r.createElement("form",{className:"login-form",onSubmit:this.handleSubmit},r.createElement(s.a,null),r.createElement("div",{className:"big-spacer-bottom"},r.createElement("label",{className:"login-label",htmlFor:"login"},Object(u.l)("login")),r.createElement("input",{autoFocus:!0,className:"login-input",id:"login",maxLength:255,name:"login",onChange:this.handleLoginChange,placeholder:Object(u.l)("login"),required:!0,type:"text",value:this.state.login})),r.createElement("div",{className:"big-spacer-bottom"},r.createElement("label",{className:"login-label",htmlFor:"password"},Object(u.l)("password")),r.createElement("input",{className:"login-input",id:"password",name:"password",onChange:this.handlePwdChange,placeholder:Object(u.l)("password"),required:!0,type:"password",value:this.state.password})),r.createElement("div",null,r.createElement("div",{className:"text-right overflow-hidden"},r.createElement(l.a,{className:"spacer-right",loading:this.state.loading}),r.createElement(c.f,{disabled:this.state.loading},Object(u.l)("sessions.log_in")),r.createElement(a.Link,{className:"spacer-left",to:"/"},Object(u.l)("cancel")))))},e}(r.PureComponent),h=o(7),g=o(214),m=o(170),f=o(41);o(1271);function v(t){var e=t.formatLabel||x;return r.createElement("section",{className:h("oauth-providers",t.className)},r.createElement("ul",null,t.identityProviders.map(function(o){return r.createElement(b,{format:e,identityProvider:o,key:o.key,returnTo:t.returnTo})})))}function b(t){var e=t.format,o=t.identityProvider,n=t.returnTo,i=Object(m.b)(o.backgroundColor);return r.createElement("li",null,r.createElement("a",{className:h({"dark-text":!i}),href:Object(f.b)()+"/sessions/init/"+o.key+"?return_to="+encodeURIComponent(n),style:{backgroundColor:o.backgroundColor}},r.createElement("img",{alt:o.name,height:"20",src:Object(f.b)()+o.iconPath,width:"20"}),r.createElement("span",null,e(o.name))),o.helpMessage&&r.createElement(g.a,{className:"oauth-providers-help",overlay:o.helpMessage}))}function x(t){return Object(u.m)("login.login_with_x",t)}o(1269);function w(t){var e=t.identityProviders,o=t.onSubmit,n=t.returnTo;return r.createElement("div",{className:"login-page",id:"login_form"},r.createElement("h1",{className:"login-title text-center"},Object(u.l)("login.login_to_sonarqube")),e.length>0&&r.createElement(v,{identityProviders:e,returnTo:n}),r.createElement(d,{collapsed:e.length>0,onSubmit:o,returnTo:n}))}o(1267);function y(t){var e=t.identityProviders,o=t.onSubmit,n=t.returnTo,i=t.showForm||e.length<=0;return r.createElement("div",{className:h("sonarcloud-login-page boxed-group boxed-group-inner",{"sonarcloud-login-page-large":i}),id:"login_form"},r.createElement("div",{className:"text-center"},r.createElement("img",{alt:"SonarCloud logo",height:36,src:Object(f.l)()+"/images/sc-icon.svg",width:36}),r.createElement("h1",{className:"sonarcloud-login-title"},Object(u.l)("login.login_or_signup_to_sonarcloud"))),i?r.createElement(d,{onSubmit:o,returnTo:n}):r.createElement(v,{className:"sonarcloud-oauth-providers",formatLabel:E,identityProviders:e,returnTo:n}))}function E(t){return Object(u.m)("login.with_x",t)}var _=o(116),O=o(117),j=o(17),N=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),S=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={},e.getReturnUrl=function(){var t=e.props.location,o=t.query.return_to;return o?""+o+t.hash:Object(f.b)()+"/"},e.handleSuccessfulLogin=function(){window.location.href=e.getReturnUrl()},e.handleSubmit=function(t,o){return e.props.doLogin(t,o).then(e.handleSuccessfulLogin,function(){})},e}return N(e,t),e.prototype.componentDidMount=function(){var t=this;this.mounted=!0,Object(O.e)().then(function(e){t.mounted&&t.setState({identityProviders:e.identityProviders})},function(){})},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){var t=this.props.location,e=this.state.identityProviders;return e?Object(j.c)()?r.createElement(y,{identityProviders:e,onSubmit:this.handleSubmit,returnTo:this.getReturnUrl(),showForm:void 0!==t.query.advanced}):r.createElement(w,{identityProviders:e,onSubmit:this.handleSubmit,returnTo:this.getReturnUrl()}):null},e}(r.PureComponent),P={doLogin:_.a};e.default=Object(i.connect)(null,P)(S)}}]);
//# sourceMappingURL=313.ca9681a7.chunk.js.map