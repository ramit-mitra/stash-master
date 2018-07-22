(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{1190:function(e,t,n){"use strict";var a,r=n(74),o=n.n(r),i=n(0),c=n(15),l=n(4),u=n(952),s=n(87),d=n(898),m=n(1),p=n(34),g=(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(t){var n=e.call(this,t)||this;return n.mounted=!1,n.stopProcessing=function(){n.mounted&&n.setState({loading:!1})},n.handleAvatarInputChange=function(e){var t=e.currentTarget.value;n.setState({avatar:t}),n.changeAvatarImage(t)},n.changeAvatarImage=function(e){n.setState({avatarImage:e})},n.handleNameChange=function(e){return n.setState({name:e.currentTarget.value})},n.handleKeyChange=function(e){return n.setState({key:e.currentTarget.value})},n.handleDescriptionChange=function(e){return n.setState({description:e.currentTarget.value})},n.handleUrlChange=function(e){return n.setState({url:e.currentTarget.value})},n.handleSubmit=function(e){e.preventDefault();var t={name:n.state.name};n.state.avatar&&Object.assign(t,{avatar:n.state.avatar}),n.state.description&&Object.assign(t,{description:n.state.description}),n.state.key&&Object.assign(t,{key:n.state.key}),n.state.url&&Object.assign(t,{url:n.state.url}),n.setState({loading:!0}),n.props.createOrganization(t).then(n.props.onCreate,n.stopProcessing)},n.state={avatar:"",avatarImage:"",description:"",key:"",loading:!1,name:"",url:""},n.changeAvatarImage=o()(n.changeAvatarImage,500),n}return g(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return i.createElement(s.a,{contentLabel:"modal form",onRequestClose:this.props.onClose},i.createElement("header",{className:"modal-head"},i.createElement("h2",null,Object(m.l)("my_account.create_organization"),i.createElement(d.a,{className:"spacer-left",doc:"organizations/organization"}))),i.createElement("form",{onSubmit:this.handleSubmit},i.createElement("div",{className:"modal-body"},i.createElement("div",{className:"modal-field"},i.createElement("label",{htmlFor:"organization-name"},Object(m.l)("organization.name"),i.createElement("em",{className:"mandatory"},"*")),i.createElement("input",{autoFocus:!0,disabled:this.state.loading,id:"organization-name",maxLength:64,minLength:2,name:"name",onChange:this.handleNameChange,required:!0,type:"text",value:this.state.name}),i.createElement("div",{className:"modal-field-description"},Object(m.l)("organization.name.description"))),i.createElement("div",{className:"modal-field"},i.createElement("label",{htmlFor:"organization-key"},Object(m.l)("organization.key")),i.createElement("input",{disabled:this.state.loading,id:"organization-key",maxLength:64,minLength:2,name:"key",onChange:this.handleKeyChange,type:"text",value:this.state.key}),i.createElement("div",{className:"modal-field-description"},Object(m.l)("organization.key.description"))),i.createElement("div",{className:"modal-field"},i.createElement("label",{htmlFor:"organization-avatar"},Object(m.l)("organization.avatar")),i.createElement("input",{disabled:this.state.loading,id:"organization-avatar",maxLength:256,name:"avatar",onChange:this.handleAvatarInputChange,type:"text",value:this.state.avatar}),i.createElement("div",{className:"modal-field-description"},Object(m.l)("organization.avatar.description")),!!this.state.avatarImage&&i.createElement("div",{className:"spacer-top spacer-bottom"},i.createElement("div",{className:"little-spacer-bottom"},Object(m.l)("organization.avatar.preview"),":"),i.createElement("img",{alt:"",height:30,src:this.state.avatarImage}))),i.createElement("div",{className:"modal-field"},i.createElement("label",{htmlFor:"organization-description"},Object(m.l)("description")),i.createElement("textarea",{disabled:this.state.loading,id:"organization-description",maxLength:256,name:"description",onChange:this.handleDescriptionChange,rows:3,value:this.state.description}),i.createElement("div",{className:"modal-field-description"},Object(m.l)("organization.description.description"))),i.createElement("div",{className:"modal-field"},i.createElement("label",{htmlFor:"organization-url"},Object(m.l)("organization.url")),i.createElement("input",{disabled:this.state.loading,id:"organization-url",maxLength:256,name:"url",onChange:this.handleUrlChange,type:"text",value:this.state.url}),i.createElement("div",{className:"modal-field-description"},Object(m.l)("organization.url.description")))),i.createElement("footer",{className:"modal-foot"},i.createElement("div",null,this.state.loading&&i.createElement("i",{className:"spinner spacer-right"}),i.createElement(p.f,{disabled:this.state.loading},Object(m.l)("create")),i.createElement(p.e,{onClick:this.props.onClose},Object(m.l)("cancel"))))))},t.contextTypes={router:l.object},t}(i.PureComponent),h={createOrganization:u.b};t.a=Object(c.connect)(null,h)(f)},1544:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(4),o=n(1190),i=n(11);function c(e){var t=e.className,n=e.fill,r=void 0===n?"currentColor":n,o=e.size;return a.createElement(i.a,{className:t,size:o},a.createElement("path",{d:"M1,7L7,7L7,1L9,1L9,7L15,7L15,9L9,9L9,15L7,15L7,9L1,9L1,7Z",style:{fill:r}}))}var l,u=n(51),s=n(1),d=(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e){function t(t){var n=e.call(this,t)||this;return n.handleNewProjectClick=function(e){e.preventDefault(),n.props.openOnboardingTutorial()},n.openCreateOrganizationForm=function(){return n.setState({createOrganization:!0})},n.closeCreateOrganizationForm=function(){return n.setState({createOrganization:!1})},n.handleNewOrganizationClick=function(e){e.preventDefault(),e.currentTarget.blur(),n.openCreateOrganizationForm()},n.handleCreateOrganization=function(e){var t=e.key;n.closeCreateOrganizationForm(),n.context.router.push("/organizations/"+t)},n.state={createOrganization:!1},n}return d(t,e),t.prototype.render=function(){var e=this;return a.createElement(u.b,{overlay:a.createElement("ul",{className:"menu"},a.createElement("li",null,a.createElement("a",{className:"js-new-project",href:"#",onClick:this.handleNewProjectClick},Object(s.l)("my_account.analyze_new_project"))),a.createElement("li",{className:"divider"}),a.createElement("li",null,a.createElement("a",{className:"js-new-organization",href:"#",onClick:this.handleNewOrganizationClick},Object(s.l)("my_account.create_new_organization")))),tagName:"li"},function(t){var n=t.onToggleClick,r=t.open;return a.createElement(a.Fragment,null,a.createElement("a",{"aria-expanded":String(r),"aria-haspopup":"true",className:"navbar-plus",href:"#",onClick:n},a.createElement(c,null)),e.state.createOrganization&&a.createElement(o.a,{onClose:e.closeCreateOrganizationForm,onCreate:e.handleCreateOrganization}))})},t.contextTypes={router:r.object},t}(a.PureComponent);t.default=m},898:function(e,t,n){"use strict";var a,r=n(0),o=n(214),i=n(3),c=(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=Object(i.a)(function(){return Promise.all([n.e(8),n.e(380)]).then(n.bind(null,919))}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1,open:!1},t.fetchContent=function(){t.setState({loading:!0}),n(903)("./"+t.props.doc+".md").then(function(e){var n=e.default;t.mounted&&t.setState({content:n,loading:!1})},function(){t.mounted&&t.setState({loading:!1})})},t.close=function(){t.setState({open:!1})},t}return c(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,document.addEventListener("scroll",this.close,!0)},t.prototype.componentWillReceiveProps=function(e){e.doc!==this.props.doc&&this.setState({content:void 0,loading:!1,open:!1})},t.prototype.componentWillUnmount=function(){this.mounted=!1,document.removeEventListener("scroll",this.close,!0)},t.prototype.renderOverlay=function(){return r.createElement("div",{className:"abs-width-300"},this.state.loading?r.createElement("i",{className:"spinner"}):r.createElement(l,{className:"cut-margins",content:this.state.content,isTooltip:!0}))},t.prototype.render=function(){return r.createElement(o.a,{className:this.props.className,onShow:this.fetchContent,overlay:this.renderOverlay()},this.props.children)},t}(r.PureComponent);t.a=u},903:function(e,t,n){var a={"./branches/no-branch-support.md":[947,358],"./branches/single-branch.md":[946,357],"./editions/datacenter.md":[945,356],"./editions/developer.md":[944,355],"./editions/enterprise.md":[943,354],"./organizations/add-organization-member.md":[942,353],"./organizations/organization.md":[941,352],"./quality-gates/built-in-quality-gate.md":[940,351],"./quality-gates/default-quality-gate.md":[939,350],"./quality-gates/project-homepage-quality-gate.md":[938,349],"./quality-gates/quality-gate-conditions.md":[937,348],"./quality-gates/quality-gate-projects.md":[936,347],"./quality-gates/quality-gate.md":[935,346],"./quality-profiles/built-in-quality-profile.md":[934,345],"./quality-profiles/default-quality-profile.md":[933,344],"./quality-profiles/quality-profile-projects.md":[932,343],"./rules/custom-rule-removal.md":[931,342],"./rules/custom-rules.md":[930,341],"./rules/rule-templates.md":[929,340],"./rules/rules-quality-profiles.md":[928,339]};function r(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=n(t[0]);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})}):Promise.resolve().then(function(){var t=new Error('Cannot find module "'+e+'".');throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(a)},r.id=903,e.exports=r},918:function(e,t,n){"use strict";n.d(t,"f",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"a",function(){return c}),n.d(t,"e",function(){return l}),n.d(t,"b",function(){return u}),n.d(t,"g",function(){return s}),n.d(t,"c",function(){return d});var a=n(5),r=n(10);function o(e){return Object(a.getJSON)("/api/user_groups/search",e).catch(r.a)}function i(e){return Object(a.getJSON)("/api/user_groups/users",e).catch(r.a)}function c(e){return Object(a.post)("/api/user_groups/add_user",e).catch(r.a)}function l(e){return Object(a.post)("/api/user_groups/remove_user",e).catch(r.a)}function u(e){return Object(a.postJSON)("/api/user_groups/create",e).then(function(e){return e.group},r.a)}function s(e){return Object(a.post)("/api/user_groups/update",e).catch(r.a)}function d(e){return Object(a.post)("/api/user_groups/delete",e).catch(r.a)}},952:function(e,t,n){"use strict";n.d(t,"e",function(){return p}),n.d(t,"f",function(){return g}),n.d(t,"b",function(){return f}),n.d(t,"i",function(){return h}),n.d(t,"c",function(){return b}),n.d(t,"g",function(){return O}),n.d(t,"d",function(){return y}),n.d(t,"a",function(){return j}),n.d(t,"h",function(){return z}),n.d(t,"j",function(){return E});var a=n(53),r=n(49),o=n(30),i=n(918),c=n(39),l=n(116),u=n(13),s=n(22),d=n(1),m=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},p=function(e){return function(t){return Promise.all([a.e(e),a.g(e)]).then(function(e){var n=e[0],a=e[1];if(n){var o=m({},n,a);t(r.i([o]))}},Object(l.g)(t))}},g=function(e){return function(t){return Object(i.f)({organization:e}).then(function(n){t(r.h(e,n.groups))},Object(l.g)(t))}},f=function(e){return function(t){return a.c(e).then(function(e){return t(r.a(e)),t(Object(s.b)(Object(d.m)("organization.created",e.name))),e},function(e){return function(t){return Object(l.g)(e)(t),Promise.reject()}}(t))}},h=function(e,t){return function(n){return a.k(e,t).then(function(){n(r.j(e,t)),n(Object(s.b)(Object(d.l)("organization.updated")))},Object(l.g)(n))}},b=function(e){return function(t){return a.d(e).then(function(){t(r.c(e)),t(Object(s.b)(Object(d.l)("organization.deleted")))},Object(l.g)(t))}},v=function(e,t,n,r,i){e(o.f(n,{loading:!0}));var c={organization:n,ps:50};return null!=i&&(c.p=i),r&&(c.q=r),a.j(c).then(function(a){e(t(n,a.users,{loading:!1,total:a.paging.total,pageIndex:a.paging.pageIndex,query:r||null}))},function(e,t){return function(n){Object(l.g)(t)(n),t(o.f(e,{loading:!1}))}}(n,e))},O=function(e,t){return function(n){return v(n,o.c,e,t)}},y=function(e,t){return function(n,a){return v(n,o.d,e,t,Object(u.getOrganizationMembersState)(a(),e).pageIndex+1)}},j=function(e,t){return function(n){return a.a({login:t.login,organization:e}).then(function(t){return n(o.b(e,t))},Object(l.g)(n))}},z=function(e,t){return function(n){return n(o.e(e,t)),a.i({login:t.login,organization:e}).catch(function(a){Object(l.g)(n)(a),n(o.b(e,t))})}},E=function(e,t,n,a){return function(r){r(Object(c.f)(m({},t,{groupCount:(t.groupCount||0)+n.length-a.length})));var o=n.map(function(n){return Object(i.a)({name:n,login:t.login,organization:e.key})}).concat(a.map(function(n){return Object(i.e)({name:n,login:t.login,organization:e.key})}));return Promise.all(o).catch(function(e){r(Object(c.f)(t)),Object(l.g)(r)(e)})}}}}]);
//# sourceMappingURL=265.f21453a9.chunk.js.map