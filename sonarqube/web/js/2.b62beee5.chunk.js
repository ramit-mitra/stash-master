(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1085:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),o=n(11),i=n(9);function s(e){var t=e.className,n=e.fill,s=void 0===n?i.gray67:n,a=e.size,c=void 0===a?36:a;return r.createElement(o.a,{className:t,size:c,viewBox:"0 0 36 36"},r.createElement("g",{transform:"matrix(0.0625,0,0,0.0625,3,4)"},r.createElement("path",{d:"M148.25,224C121.25,224.833 99.167,235.5 82,256L48.5,256C34.833,256 23.333,252.625 14,245.875C4.667,239.125 0,229.25 0,216.25C0,157.417 10.333,128 31,128C32,128 35.625,129.75 41.875,133.25C48.125,136.75 56.25,140.292 66.25,143.875C76.25,147.458 86.167,149.25 96,149.25C107.167,149.25 118.25,147.333 129.25,143.5C128.417,149.667 128,155.167 128,160C128,183.167 134.75,204.5 148.25,224ZM416,383.25C416,403.25 409.917,419.042 397.75,430.625C385.583,442.208 369.417,448 349.25,448L130.75,448C110.583,448 94.417,442.208 82.25,430.625C70.083,419.042 64,403.25 64,383.25C64,374.417 64.292,365.792 64.875,357.375C65.458,348.958 66.625,339.875 68.375,330.125C70.125,320.375 72.333,311.333 75,303C77.667,294.667 81.25,286.542 85.75,278.625C90.25,270.708 95.417,263.958 101.25,258.375C107.083,252.792 114.208,248.333 122.625,245C131.042,241.667 140.333,240 150.5,240C152.167,240 155.75,241.792 161.25,245.375C166.75,248.958 172.833,252.958 179.5,257.375C186.167,261.792 195.083,265.792 206.25,269.375C217.417,272.958 228.667,274.75 240,274.75C251.333,274.75 262.583,272.958 273.75,269.375C284.917,265.792 293.833,261.792 300.5,257.375C307.167,252.958 313.25,248.958 318.75,245.375C324.25,241.792 327.833,240 329.5,240C339.667,240 348.958,241.667 357.375,245C365.792,248.333 372.917,252.792 378.75,258.375C384.583,263.958 389.75,270.708 394.25,278.625C398.75,286.542 402.333,294.667 405,303C407.667,311.333 409.875,320.375 411.625,330.125C413.375,339.875 414.542,348.958 415.125,357.375C415.708,365.792 416,374.417 416,383.25ZM160,64C160,81.667 153.75,96.75 141.25,109.25C128.75,121.75 113.667,128 96,128C78.333,128 63.25,121.75 50.75,109.25C38.25,96.75 32,81.667 32,64C32,46.333 38.25,31.25 50.75,18.75C63.25,6.25 78.333,0 96,0C113.667,0 128.75,6.25 141.25,18.75C153.75,31.25 160,46.333 160,64ZM336,160C336,186.5 326.625,209.125 307.875,227.875C289.125,246.625 266.5,256 240,256C213.5,256 190.875,246.625 172.125,227.875C153.375,209.125 144,186.5 144,160C144,133.5 153.375,110.875 172.125,92.125C190.875,73.375 213.5,64 240,64C266.5,64 289.125,73.375 307.875,92.125C326.625,110.875 336,133.5 336,160ZM480,216.25C480,229.25 475.333,239.125 466,245.875C456.667,252.625 445.167,256 431.5,256L398,256C380.833,235.5 358.75,224.833 331.75,224C345.25,204.5 352,183.167 352,160C352,155.167 351.583,149.667 350.75,143.5C361.75,147.333 372.833,149.25 384,149.25C393.833,149.25 403.75,147.458 413.75,143.875C423.75,140.292 431.875,136.75 438.125,133.25C444.375,129.75 448,128 449,128C469.667,128 480,157.417 480,216.25ZM448,64C448,81.667 441.75,96.75 429.25,109.25C416.75,121.75 401.667,128 384,128C366.333,128 351.25,121.75 338.75,109.25C326.25,96.75 320,81.667 320,64C320,46.333 326.25,31.25 338.75,18.75C351.25,6.25 366.333,0 384,0C401.667,0 416.75,6.25 429.25,18.75C441.75,31.25 448,46.333 448,64Z",style:{fill:s}})))}},1127:function(e,t,n){"use strict";var r,o=n(0),i=n(73),s=n.n(i),a=n(217),c=n(90),p=n(1),u=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:[]},t.stopLoading=function(e){t.mounted&&t.setState(function(t){return{loading:s()(t.loading,e)}})},t.handleCheck=function(e,n){void 0!==n&&(t.setState(function(e){return{loading:e.loading.concat([n])}}),t.props.onToggle(t.props.user,n).then(function(){return t.stopLoading(n)},function(){return t.stopLoading(n)}))},t}return u(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this,t=this.props.selectedPermission,n=this.props.permissionsOrder.map(function(n){return o.createElement("td",{className:"text-center text-middle",key:n,style:{backgroundColor:n===t?"#d9edf7":"transparent"}},o.createElement(c.a,{checked:e.props.permissions.includes(n),disabled:e.state.loading.includes(n),id:n,onCheck:e.handleCheck}))}),r=this.props.user;return"<creator>"===r.login?o.createElement("tr",null,o.createElement("td",{className:"nowrap"},o.createElement("div",{className:"display-inline-block text-middle"},o.createElement("div",null,o.createElement("strong",null,r.name)),o.createElement("div",{className:"little-spacer-top",style:{whiteSpace:"normal"}},Object(p.l)("permission_templates.project_creators.explanation")))),n):o.createElement("tr",null,o.createElement("td",{className:"nowrap"},o.createElement(a.a,{className:"text-middle big-spacer-right",hash:r.avatar,name:r.name,size:36}),o.createElement("div",{className:"display-inline-block text-middle"},o.createElement("div",null,o.createElement("strong",null,r.name),o.createElement("span",{className:"note spacer-left"},r.login)),o.createElement("div",{className:"little-spacer-top"},r.email))),n)},t}(o.PureComponent),m=n(1085),d=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:[]},t.stopLoading=function(e){t.mounted&&t.setState(function(t){return{loading:s()(t.loading,e)}})},t.handleCheck=function(e,n){void 0!==n&&(t.setState(function(e){return{loading:e.loading.concat([n])}}),t.props.onToggle(t.props.group,n).then(function(){return t.stopLoading(n)},function(){return t.stopLoading(n)}))},t}return d(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this,t=this.props.selectedPermission,n=this.props.permissionsOrder.map(function(n){return o.createElement("td",{className:"text-center text-middle",key:n,style:{backgroundColor:n===t?"#d9edf7":"transparent"}},o.createElement(c.a,{checked:e.props.permissions.includes(n),disabled:e.state.loading.includes(n),id:n,onCheck:e.handleCheck}))}),r=this.props.group;return o.createElement("tr",null,o.createElement("td",{className:"nowrap"},o.createElement("div",{className:"display-inline-block text-middle big-spacer-right"},o.createElement(m.a,null)),o.createElement("div",{className:"display-inline-block text-middle"},o.createElement("div",null,o.createElement("strong",null,r.name)),o.createElement("div",{className:"little-spacer-top",style:{whiteSpace:"normal"}},r.description))),n)},t}(o.PureComponent),g=n(214),h=n(224),C=n(36),b=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),_=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handlePermissionClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onSelectPermission(t.props.permission.key)},t.renderTooltip=function(e){return t.props.showPublicProjectsWarning&&["user","codeviewer"].includes(e.key)?o.createElement("div",null,o.createElement(h.a,{message:e.description}),o.createElement("div",{className:"alert alert-warning spacer-top"},Object(p.l)("projects_role.public_projects_warning"))):o.createElement(h.a,{message:e.description})},t}return b(t,e),t.prototype.render=function(){var e=this.props,t=e.permission,n=e.selectedPermission;return o.createElement("th",{className:"permission-column text-center",style:{backgroundColor:t.key===n?"#d9edf7":"transparent"}},o.createElement("div",{className:"permission-column-inner"},o.createElement(C.a,{overlay:Object(p.m)("global_permissions.filter_by_x_permission",t.name)},o.createElement("a",{className:"text-middle",href:"#",onClick:this.handlePermissionClick},t.name)),o.createElement(g.a,{className:"spacer-left",overlay:this.renderTooltip(t)})))},t}(o.PureComponent),y=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return y(t,e),t.prototype.renderTableHeader=function(){var e=this.props,t=e.onSelectPermission,n=e.selectedPermission,r=e.showPublicProjectsWarning,i=this.props.permissions.map(function(e){return o.createElement(_,{key:e.key,onSelectPermission:t,permission:e,selectedPermission:n,showPublicProjectsWarning:r})});return o.createElement("thead",null,o.createElement("tr",null,o.createElement("td",{className:"nowrap bordered-bottom"},this.props.children),i))},t.prototype.renderEmpty=function(){var e=this.props.permissions.length+1;return o.createElement("tr",null,o.createElement("td",{colSpan:e},Object(p.l)("no_results_search")))},t.prototype.render=function(){var e=this,t=this.props.permissions.map(function(e){return e.key}),n=this.props.users.map(function(n){return o.createElement(l,{key:"user-"+n.login,onToggle:e.props.onToggleUser,permissions:n.permissions,permissionsOrder:t,selectedPermission:e.props.selectedPermission,user:n})}),r=this.props.groups.map(function(n){return o.createElement(f,{group:n,key:"group-"+n.id,onToggle:e.props.onToggleGroup,permissions:n.permissions,permissionsOrder:t,selectedPermission:e.props.selectedPermission})});return o.createElement("div",{className:"boxed-group boxed-group-inner"},o.createElement("table",{className:"data zebra permissions-table"},this.renderTableHeader(),o.createElement("tbody",null,0===n.length&&0===r.length&&this.renderEmpty(),n,r)))},t}(o.PureComponent);t.a=v},1140:function(e,t,n){var r=n(1285);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(27)(r,o);r.locals&&(e.exports=r.locals)},1142:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0),o=n(253),i=n(89),s=n(1);function a(e){var t=[{value:"all",label:Object(s.l)("all")},{value:"users",label:Object(s.l)("users.page")},{value:"groups",label:Object(s.l)("user_groups.page")}];return r.createElement("div",{className:"display-flex-row"},r.createElement(o.a,{name:"users-or-groups",onCheck:e.onFilter,options:t,value:e.filter}),r.createElement("div",{className:"flex-1 spacer-left"},r.createElement(i.a,{minLength:3,onChange:e.onSearch,placeholder:Object(s.l)("search.search_for_users_or_groups"),value:e.query})))}},1285:function(e,t,n){(e.exports=n(28)(!1)).push([e.i,".permissions-table>tbody>tr>td{border-bottom:10px solid #fff!important}.permissions-table .permission-column{width:1px}.permissions-table .permission-column-inner{width:100px}",""])},968:function(e,t,n){"use strict";n.d(t,"o",function(){return s}),n.d(t,"t",function(){return a}),n.d(t,"n",function(){return c}),n.d(t,"s",function(){return p}),n.d(t,"k",function(){return u}),n.d(t,"e",function(){return l}),n.d(t,"x",function(){return m}),n.d(t,"f",function(){return d}),n.d(t,"w",function(){return f}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return h}),n.d(t,"q",function(){return C}),n.d(t,"v",function(){return b}),n.d(t,"p",function(){return _}),n.d(t,"u",function(){return y}),n.d(t,"a",function(){return v}),n.d(t,"r",function(){return O}),n.d(t,"m",function(){return j}),n.d(t,"l",function(){return E}),n.d(t,"h",function(){return N}),n.d(t,"g",function(){return k}),n.d(t,"j",function(){return P}),n.d(t,"i",function(){return w}),n.d(t,"d",function(){return x});var r=n(10),o=n(5),i=100;function s(e,t,n,r){var i={login:t,permission:n};return e&&(i.projectKey=e),r&&!e&&(i.organization=r),Object(o.post)("/api/permissions/add_user",i)}function a(e,t,n,r){var i={login:t,permission:n};return e&&(i.projectKey=e),r&&!e&&(i.organization=r),Object(o.post)("/api/permissions/remove_user",i)}function c(e,t,n,r){var i={groupName:t,permission:n};return e&&(i.projectKey=e),r&&(i.organization=r),Object(o.post)("/api/permissions/add_group",i)}function p(e,t,n,r){var i={groupName:t,permission:n};return e&&(i.projectKey=e),r&&(i.organization=r),Object(o.post)("/api/permissions/remove_group",i)}function u(e){var t="/api/permissions/search_templates";return e?Object(o.getJSON)(t,{organization:e}):Object(o.getJSON)(t)}function l(e){return Object(o.postJSON)("/api/permissions/create_template",e)}function m(e){return Object(o.post)("/api/permissions/update_template",e)}function d(e){return Object(o.post)("/api/permissions/delete_template",e).catch(r.a)}function f(e,t){return Object(o.post)("/api/permissions/set_default_template",{templateId:e,qualifier:t})}function g(e){return Object(o.post)("/api/permissions/apply_template",e).catch(r.a)}function h(e){return Object(o.post)("/api/permissions/bulk_apply_template",e)}function C(e){return Object(o.post)("/api/permissions/add_user_to_template",e)}function b(e){return Object(o.post)("/api/permissions/remove_user_from_template",e)}function _(e){return Object(o.post)("/api/permissions/add_group_to_template",e)}function y(e){return Object(o.post)("/api/permissions/remove_group_from_template",e)}function v(e,t){return Object(o.post)("/api/permissions/add_project_creator_to_template",{templateId:e,permission:t})}function O(e,t){return Object(o.post)("/api/permissions/remove_project_creator_from_template",{templateId:e,permission:t})}function j(e,t,n,r){var s={projectKey:e,ps:i};return t&&(s.q=t),n&&(s.permission=n),r&&(s.organization=r),Object(o.getJSON)("/api/permissions/users",s).then(function(e){return e.users})}function E(e,t,n,r){void 0===t&&(t="");var s={projectKey:e,ps:i};return t&&(s.q=t),n&&(s.permission=n),r&&(s.organization=r),Object(o.getJSON)("/api/permissions/groups",s).then(function(e){return e.groups})}function N(e,t,n){var r={ps:i};return e&&(r.q=e),t&&(r.permission=t),n&&(r.organization=n),Object(o.getJSON)("/api/permissions/users",r).then(function(e){return e.users})}function k(e,t,n){var r={ps:i};return e&&(r.q=e),t&&(r.permission=t),n&&(r.organization=n),Object(o.getJSON)("/api/permissions/groups",r).then(function(e){return e.groups})}function P(e,t,n,r){var s={templateId:e,ps:i};return t&&(s.q=t),n&&(s.permission=n),r&&Object.assign(s,{organization:r}),Object(o.getJSON)("/api/permissions/template_users",s).then(function(e){return e.users})}function w(e,t,n,r){var s={templateId:e,ps:i};return t&&(s.q=t),n&&(s.permission=n),r&&Object.assign(s,{organization:r}),Object(o.getJSON)("/api/permissions/template_groups",s).then(function(e){return e.groups})}function x(e,t){return Object(o.post)("/api/projects/update_visibility",{project:e,visibility:t})}}}]);
//# sourceMappingURL=2.b62beee5.chunk.js.map