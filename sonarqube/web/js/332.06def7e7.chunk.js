(window.webpackJsonp=window.webpackJsonp||[]).push([[332,334],{1596:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return i});var o=n(0),r=n.n(o),a=n(260);function i(t){return r.a.createElement("div",null,r.a.createElement(a.default,{location:t.location,params:{pluginKey:"governance",extensionKey:"portfolios"}}))}},260:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(15),i=n(966),s=n(967),c=n(13);e.default=Object(a.connect)(function(t){return{globalPages:Object(c.getAppState)(t).globalPages}})(function(t){var e=t.params,n=e.extensionKey,o=e.pluginKey,a=t.globalPages.find(function(t){return t.key===o+"/"+n});return a?r.a.createElement(i.a,{extension:a}):r.a.createElement(s.a,null)})},966:function(t,e,n){"use strict";var o=n(15),r=n(0),a=n.n(r),i=n(212),s=n.n(i),c=n(2),p=n(43),u=n(235);function l(t){return new Promise(function(e,n){var o=Object(u.b)(t);if(o)return e(o);(function(t){return new Promise(function(e){var n=document.createElement("script");n.src=window.baseUrl+"/static/"+t+".js",n.onload=e,document.getElementsByTagName("body")[0].appendChild(n)})})(t).then(function(){var o=Object(u.b)(t);o?e(o):n()})})}var f,h=n(1),m=n(75),d=(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}f(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),b=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleStart=function(t){var n=Object(m.default)();e.stop=t(b({store:n,el:e.container,currentUser:e.props.currentUser,intl:e.props.intl,location:e.props.location,router:e.props.router},e.props.options))},e.handleFailure=function(){e.props.onFail(Object(h.l)("page_extension_failed"))},e}return d(e,t),e.prototype.componentDidMount=function(){this.startExtension()},e.prototype.componentDidUpdate=function(t){t.extension!==this.props.extension?(this.stopExtension(),this.startExtension()):t.location!==this.props.location&&t.location.hash===this.props.location.hash&&this.startExtension()},e.prototype.componentWillUnmount=function(){this.stopExtension()},e.prototype.startExtension=function(){l(this.props.extension.key).then(this.handleStart,this.handleFailure)},e.prototype.stopExtension=function(){this.stop&&(this.stop(),this.stop=null)},e.prototype.render=function(){var t=this;return a.a.createElement("div",null,a.a.createElement(s.a,{title:this.props.extension.name}),a.a.createElement("div",{ref:function(e){return t.container=e}}))},e}(a.a.PureComponent),v=Object(p.g)(Object(c.withRouter)(y)),g=n(13),E={onFail:n(22).a};e.a=Object(o.connect)(function(t){return{currentUser:Object(g.getCurrentUser)(t)}},E)(v)},967:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=n(0),r=n(2);function a(){return o.createElement("div",{id:"bd",className:"page-wrapper-simple"},o.createElement("div",{id:"nonav",className:"page-simple"},o.createElement("h2",{className:"big-spacer-bottom"},"The page you were looking for does not exist."),o.createElement("p",{className:"spacer-bottom"},"You may have mistyped the address or the page may have moved."),o.createElement("p",null,o.createElement(r.Link,{to:"/"},"Go back to the homepage"))))}}}]);
//# sourceMappingURL=332.06def7e7.chunk.js.map