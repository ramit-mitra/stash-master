(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{1288:function(e,t,a){var n=a(587),r=a(588);e.exports=function(e,t){return n(e,t,function(t,a){return r(e,a)})}},1289:function(e,t,a){var n=a(1288),r=a(586)(function(e,t){return null==e?{}:n(e,t)});e.exports=r},1573:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a(4),l=a(32),i=a.n(l),s=a(899),c=a(87),u=a(213),p=a(34),m=a(1),f=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={importers:[],loading:!1,name:"",preloading:!0},t.handleNameChange=function(e){t.setState({name:e.currentTarget.value})},t.handleLanguageChange=function(e){t.setState({language:e.value})},t.handleFormSubmit=function(e){e.preventDefault(),t.setState({loading:!0});var a=new FormData(e.currentTarget);t.props.organization&&a.append("organization",t.props.organization),Object(s.j)(a).then(function(e){return t.props.onCreate(e.profile)},function(e){t.mounted&&t.setState({loading:!1}),t.props.onRequestFail(e)})},t}return f(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchImporters()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.fetchImporters=function(){var e=this;Object(s.o)().then(function(t){e.mounted&&e.setState({importers:t,preloading:!1})},function(){e.mounted&&e.setState({preloading:!1})})},t.prototype.render=function(){var e=Object(m.l)("quality_profiles.new_profile"),t=i()(this.props.languages,"name"),a=this.state.language||t[0].key,n=this.state.importers.filter(function(e){return e.languages.includes(a)});return r.createElement(c.a,{contentLabel:e,onRequestClose:this.props.onClose},r.createElement("form",{id:"create-profile-form",onSubmit:this.handleFormSubmit},r.createElement("div",{className:"modal-head"},r.createElement("h2",null,e)),this.state.preloading?r.createElement("div",{className:"modal-body"},r.createElement("i",{className:"spinner"})):r.createElement("div",{className:"modal-body"},r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"create-profile-name"},Object(m.l)("name"),r.createElement("em",{className:"mandatory"},"*")),r.createElement("input",{autoFocus:!0,id:"create-profile-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:this.state.name})),r.createElement("div",{className:"modal-field spacer-bottom"},r.createElement("label",{htmlFor:"create-profile-language"},Object(m.l)("language"),r.createElement("em",{className:"mandatory"},"*")),r.createElement(u.c,{clearable:!1,name:"language",onChange:this.handleLanguageChange,options:t.map(function(e){return{label:e.name,value:e.key}}),value:a})),n.map(function(e){return r.createElement("div",{className:"modal-field spacer-bottom js-importer","data-key":e.key,key:e.key},r.createElement("label",{htmlFor:"create-profile-form-backup-"+e.key},e.name),r.createElement("input",{id:"create-profile-form-backup-"+e.key,name:"backup_"+e.key,type:"file"}),r.createElement("p",{className:"note"},Object(m.l)("quality_profiles.optional_configuration_file")))}),r.createElement("input",{name:"hello-ie11",type:"hidden",value:""})),r.createElement("div",{className:"modal-foot"},this.state.loading&&r.createElement("i",{className:"spinner spacer-right"}),!this.state.preloading&&r.createElement(p.f,{disabled:this.state.loading,id:"create-profile-submit"},Object(m.l)("create")),r.createElement(p.e,{id:"create-profile-cancel",onClick:this.props.onClose},Object(m.l)("cancel")))))},t}(r.PureComponent),g=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1},t.handleFormSubmit=function(e){e.preventDefault(),t.setState({loading:!0});var a=new FormData(e.currentTarget);t.props.organization&&a.append("organization",t.props.organization),Object(s.w)(a).then(function(e){t.mounted&&t.setState({loading:!1,profile:e.profile,ruleFailures:e.ruleFailures,ruleSuccesses:e.ruleSuccesses}),t.props.onRestore()},function(e){t.mounted&&t.setState({loading:!1}),t.props.onRequestFail(e)})},t}return g(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=Object(m.l)("quality_profiles.restore_profile"),t=this.state,a=t.loading,n=t.profile,o=t.ruleFailures,l=t.ruleSuccesses;return r.createElement(c.a,{contentLabel:e,onRequestClose:this.props.onClose},r.createElement("form",{id:"restore-profile-form",onSubmit:this.handleFormSubmit},r.createElement("div",{className:"modal-head"},r.createElement("h2",null,e)),r.createElement("div",{className:"modal-body"},null!=n&&null!=l?o?r.createElement("div",{className:"alert alert-warning"},Object(m.m)("quality_profiles.restore_profile.warning",n.name,l,o)):r.createElement("div",{className:"alert alert-success"},Object(m.m)("quality_profiles.restore_profile.success",n.name,l)):r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"restore-profile-backup"},Object(m.l)("backup"),r.createElement("em",{className:"mandatory"},"*")),r.createElement("input",{id:"restore-profile-backup",name:"backup",required:!0,type:"file"}))),null==l?r.createElement("div",{className:"modal-foot"},a&&r.createElement("i",{className:"spinner spacer-right"}),r.createElement(p.f,{disabled:a,id:"restore-profile-submit"},Object(m.l)("restore")),r.createElement(p.e,{id:"restore-profile-cancel",onClick:this.props.onClose},Object(m.l)("cancel"))):r.createElement("div",{className:"modal-foot"},r.createElement(p.e,{id:"restore-profile-cancel",onClick:this.props.onClose},Object(m.l)("close")))))},t}(r.PureComponent),y=a(227),b=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),E=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={createFormOpen:!1,restoreFormOpen:!1},t.handleCreateClick=function(){t.setState({createFormOpen:!0})},t.handleCreate=function(e){t.props.updateProfiles().then(function(){t.context.router.push(Object(y.c)(e.name,e.language,t.props.organization))},function(){})},t.closeCreateForm=function(){t.setState({createFormOpen:!1})},t.handleRestoreClick=function(){t.setState({restoreFormOpen:!0})},t.closeRestoreForm=function(){t.setState({restoreFormOpen:!1})},t}return b(t,e),t.prototype.render=function(){return r.createElement("header",{className:"page-header"},r.createElement("h1",{className:"page-title"},Object(m.l)("quality_profiles.page")),this.props.actions.create&&r.createElement("div",{className:"page-actions"},r.createElement(p.a,{id:"quality-profiles-create",onClick:this.handleCreateClick},Object(m.l)("create")),r.createElement(p.a,{className:"little-spacer-left",id:"quality-profiles-restore",onClick:this.handleRestoreClick},Object(m.l)("restore"))),r.createElement("div",{className:"page-description markdown"},Object(m.l)("quality_profiles.intro1"),r.createElement("br",null),Object(m.l)("quality_profiles.intro2")),this.state.restoreFormOpen&&r.createElement(h,{onClose:this.closeRestoreForm,onRequestFail:this.props.onRequestFail,onRestore:this.props.updateProfiles,organization:this.props.organization}),this.state.createFormOpen&&r.createElement(d,{languages:this.props.languages,onClose:this.closeCreateForm,onCreate:this.handleCreate,onRequestFail:this.props.onRequestFail,organization:this.props.organization}))},t.contextTypes={router:o.object},t}(r.PureComponent),v=a(2),_=a(1024),O=a(41);function N(e){var t=e.profiles.filter(function(e){return e.activeDeprecatedRuleCount>0});if(0===t.length)return null;var a=i()(t,function(e){return-e.activeDeprecatedRuleCount});return r.createElement("div",{className:"boxed-group boxed-group-inner quality-profiles-evolution-deprecated"},r.createElement("div",{className:"spacer-bottom"},r.createElement("strong",null,Object(m.l)("quality_profiles.deprecated_rules"))),r.createElement("div",{className:"spacer-bottom"},Object(m.m)("quality_profiles.deprecated_rules_are_still_activated",t.length)),r.createElement("ul",null,a.map(function(t){return r.createElement("li",{key:t.key,className:"spacer-top"},r.createElement("div",{className:"text-ellipsis"},r.createElement(_.a,{className:"link-no-underline",language:t.language,name:t.name,organization:e.organization},t.name)),r.createElement("div",{className:"note"},t.languageName,", ",r.createElement(v.Link,{to:Object(O.j)({qprofile:t.key},e.organization),className:"text-muted"},Object(m.m)("quality_profile.x_rules",t.activeDeprecatedRuleCount))))})))}var j=a(216);function k(e){var t=e.profiles.filter(y.f);return 0===t.length?null:r.createElement("div",{className:"boxed-group boxed-group-inner quality-profiles-evolution-stagnant"},r.createElement("div",{className:"spacer-bottom"},r.createElement("strong",null,Object(m.l)("quality_profiles.stagnant_profiles"))),r.createElement("div",{className:"spacer-bottom"},Object(m.l)("quality_profiles.not_updated_more_than_year")),r.createElement("ul",null,t.map(function(t){return r.createElement("li",{key:t.key,className:"spacer-top"},r.createElement("div",{className:"text-ellipsis"},r.createElement(_.a,{className:"link-no-underline",language:t.language,name:t.name,organization:e.organization},t.name)),t.rulesUpdatedAt&&r.createElement(j.a,{date:t.rulesUpdatedAt,long:!0},function(e){return r.createElement("div",{className:"note"},Object(m.m)("quality_profiles.x_updated_on_y",t.languageName,e))}))})))}var q=a(926),w=a(25),x=a(37),C=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),z=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};var F=function(e){function t(t){var a=e.call(this,t)||this;a.mounted=!1,a.state={};var n=new Date;return n.setFullYear(n.getFullYear()-1),a.periodStartDate=Object(w.h)(n),a}return C(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.loadLatestRules()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.loadLatestRules=function(){var e=this,t={asc:!1,available_since:this.periodStartDate,f:"name,langName,actives",organization:this.props.organization||void 0,ps:10,s:"createdAt"};Object(q.f)(t).then(function(t){e.mounted&&e.setState({latestRules:i()(function(e){var t=e.rules,a=e.actives;return t.map(function(e){var t=a[e.key];return z({},e,{activations:t?t.length:0})})}(t),"langName"),latestRulesTotal:t.total})},function(){})},t.prototype.render=function(){var e=this;if(!this.state.latestRulesTotal||!this.state.latestRules)return null;var t=Object(O.y)({available_since:this.periodStartDate},this.props.organization);return r.createElement("div",{className:"boxed-group boxed-group-inner quality-profiles-evolution-rules"},r.createElement("div",{className:"clearfix"},r.createElement("strong",{className:"pull-left"},Object(m.l)("quality_profiles.latest_new_rules"))),r.createElement("ul",null,this.state.latestRules.map(function(t){return r.createElement("li",{key:t.key,className:"spacer-top"},r.createElement("div",{className:"text-ellipsis"},r.createElement(v.Link,{to:Object(O.y)({rule_key:t.key},e.props.organization),className:"link-no-underline"}," ",t.name),r.createElement("div",{className:"note"},t.activations?Object(m.m)("quality_profiles.latest_new_rules.activated",t.langName,t.activations):Object(m.m)("quality_profiles.latest_new_rules.not_activated",t.langName))))})),this.state.latestRulesTotal>10&&r.createElement("div",{className:"spacer-top"},r.createElement(v.Link,{to:t,className:"small"},Object(m.l)("see_all")," ",Object(x.formatMeasure)(this.state.latestRulesTotal,"SHORT_INT",null))))},t}(r.PureComponent);function R(e){var t=e.organization,a=e.profiles;return r.createElement("div",{className:"quality-profiles-evolution"},r.createElement(N,{organization:t,profiles:a}),r.createElement(k,{organization:t,profiles:a}),r.createElement(F,{organization:t}))}var P=a(1289),S=a.n(P),D=a(901),L=a.n(D),A=a(1196),T=a(1193),U=a(1034),J=a(36),I=a(898),M=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),H=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return M(t,e),t.prototype.renderName=function(){var e=this.props.profile,t=25*(e.depth-1);return r.createElement("div",{className:"display-flex-center",style:{paddingLeft:t}},r.createElement("div",null,r.createElement(_.a,{language:e.language,name:e.name,organization:this.props.organization},e.name)),e.isBuiltIn&&r.createElement(U.a,{className:"spacer-left"}))},t.prototype.renderProjects=function(){var e=this.props.profile;return e.isDefault?r.createElement(I.a,{doc:"quality-profiles/default-quality-profile"},r.createElement("span",{className:"badge"},Object(m.l)("default"))):r.createElement("span",null,e.projectCount)},t.prototype.renderRules=function(){var e=this.props.profile,t=Object(O.y)({qprofile:e.key,activation:"true"},this.props.organization),a=Object(O.y)({qprofile:e.key,activation:"true",statuses:"DEPRECATED"},this.props.organization);return r.createElement("div",null,e.activeDeprecatedRuleCount>0&&r.createElement("span",{className:"spacer-right"},r.createElement(J.a,{overlay:Object(m.l)("quality_profiles.deprecated_rules")},r.createElement(v.Link,{to:a,className:"badge badge-normal-size badge-danger-light"},e.activeDeprecatedRuleCount))),r.createElement(v.Link,{to:t},e.activeRuleCount))},t.prototype.renderUpdateDate=function(){var e=r.createElement(A.a,{date:this.props.profile.userUpdatedAt});return Object(y.f)(this.props.profile)?r.createElement("span",{className:"badge badge-normal-size badge-focus"},e):e},t.prototype.renderUsageDate=function(){var e=this.props.profile.lastUsed,t=r.createElement(A.a,{date:e});return e?t:r.createElement("span",{className:"badge badge-normal-size badge-focus"},t)},t.prototype.render=function(){return r.createElement("tr",{className:"quality-profiles-table-row text-middle","data-key":this.props.profile.key,"data-name":this.props.profile.name},r.createElement("td",{className:"quality-profiles-table-name text-middle"},this.renderName()),r.createElement("td",{className:"quality-profiles-table-projects thin nowrap text-middle text-right"},this.renderProjects()),r.createElement("td",{className:"quality-profiles-table-rules thin nowrap text-middle text-right"},this.renderRules()),r.createElement("td",{className:"quality-profiles-table-date thin nowrap text-middle text-right"},this.renderUpdateDate()),r.createElement("td",{className:"quality-profiles-table-date thin nowrap text-middle text-right"},this.renderUsageDate()),r.createElement("td",{className:"quality-profiles-table-actions thin nowrap text-middle text-right"},r.createElement(T.a,{fromList:!0,onRequestFail:this.props.onRequestFail,organization:this.props.organization,profile:this.props.profile,updateProfiles:this.props.updateProfiles})))},t}(r.PureComponent),W=a(51),Y=a(133);function B(e){var t=e.currentFilter,a=e.languages,n=e.organization;if(a.length<2)return null;var o=t&&a.find(function(e){return e.key===t});if(t&&!o)return null;var l=o?Object(m.m)("quality_profiles.x_Profiles",o.name):Object(m.l)("quality_profiles.all_profiles");return r.createElement("header",{className:"quality-profiles-list-header clearfix"},r.createElement(W.b,{className:"display-inline-block",overlay:r.createElement("ul",{className:"menu"},r.createElement("li",null,r.createElement(v.IndexLink,{to:Object(y.e)(n)},Object(m.l)("quality_profiles.all_profiles"))),a.map(function(e){return r.createElement("li",{key:e.key},r.createElement(v.IndexLink,{className:"js-language-filter-option","data-language":e.key,to:Object(y.d)(e.key,n)},e.name))}))},r.createElement("a",{className:"dropdown-toggle link-no-underline js-language-filter",href:"#"},r.createElement("span",{className:"text-middle"},l),r.createElement(Y.a,{className:"little-spacer-left text-middle"}))))}var G=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),K=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderLanguage=function(e,a){return r.createElement("div",{key:e,className:"boxed-group boxed-group-inner quality-profiles-table"},r.createElement("table",{"data-language":e,className:"data zebra zebra-hover"},void 0!==a&&t.renderHeader(e,a.length),r.createElement("tbody",null,void 0!==a&&t.renderProfiles(a))))},t}return G(t,e),t.prototype.renderProfiles=function(e){var t=this;return e.map(function(e){return r.createElement(H,{key:e.key,onRequestFail:t.props.onRequestFail,organization:t.props.organization,profile:e,updateProfiles:t.props.updateProfiles})})},t.prototype.renderHeader=function(e,t){var a=this.props.languages.find(function(t){return t.key===e});return a?r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,a.name,", ",Object(m.m)("quality_profiles.x_profiles",t)),r.createElement("th",{className:"text-right nowrap"},Object(m.l)("quality_profiles.list.projects"),r.createElement(I.a,{className:"table-cell-doc",doc:"quality-profiles/quality-profile-projects"})),r.createElement("th",{className:"text-right nowrap"},Object(m.l)("quality_profiles.list.rules")),r.createElement("th",{className:"text-right nowrap"},Object(m.l)("quality_profiles.list.updated")),r.createElement("th",{className:"text-right nowrap"},Object(m.l)("quality_profiles.list.used")),r.createElement("th",null," "))):null},t.prototype.render=function(){var e=this,t=this.props,a=t.profiles,n=t.languages,o=this.props.location.query.language,l=L()(a,function(e){return e.language}),s=o?S()(l,o):l,c=i()(Object.keys(s));return r.createElement("div",null,r.createElement(B,{currentFilter:o,languages:n,organization:this.props.organization}),0===Object.keys(s).length&&r.createElement("div",{className:"alert alert-warning spacer-top"},Object(m.l)("no_results")),c.map(function(t){return e.renderLanguage(t,s[t])}))},t}(r.PureComponent);a.d(t,"default",function(){return V});var Q=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};function V(e){return r.createElement("div",null,r.createElement(E,Q({},e)),r.createElement("div",{className:"page-with-sidebar"},r.createElement("div",{className:"page-main"},r.createElement(K,Q({},e))),r.createElement("div",{className:"page-sidebar"},r.createElement(R,Q({},e)))))}},901:function(e,t,a){var n=a(162),r=a(340),o=Object.prototype.hasOwnProperty,l=r(function(e,t,a){o.call(e,a)?e[a].push(t):n(e,a,[t])});e.exports=l},926:function(e,t,a){"use strict";a.d(t,"e",function(){return o}),a.d(t,"f",function(){return l}),a.d(t,"g",function(){return i}),a.d(t,"c",function(){return s}),a.d(t,"d",function(){return c}),a.d(t,"a",function(){return u}),a.d(t,"b",function(){return p}),a.d(t,"h",function(){return m});var n=a(5),r=a(10);function o(e){return Object(n.getJSON)("/api/rules/app",e).catch(r.a)}function l(e){return Object(n.getJSON)("/api/rules/search",e).catch(r.a)}function i(e,t){var a=e.facets.find(function(e){return e.property===t});return a?a.values:[]}function s(e){return Object(n.getJSON)("/api/rules/show",e).catch(r.a)}function c(e){return Object(n.getJSON)("/api/rules/tags",e).then(function(e){return e.tags},r.a)}function u(e){return Object(n.postJSON)("/api/rules/create",e).then(function(e){return e.rule},function(e){return e&&e.response&&409===e.response.status?Promise.reject(e.response):Object(r.a)(e)})}function p(e){return Object(n.post)("/api/rules/delete",e).catch(r.a)}function m(e){return Object(n.postJSON)("/api/rules/update",e).then(function(e){return e.rule},r.a)}}}]);
//# sourceMappingURL=307.1a2f4022.chunk.js.map