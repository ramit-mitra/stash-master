(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{1262:function(e,t,n){(e.exports=n(28)(!1)).push([e.i,".side-tabs-layout{display:flex;justify-content:space-between;align-items:stretch}.modal .side-tabs-layout{padding-left:10px;background-color:#f3f3f3}.side-tabs-main{position:relative;z-index:2;flex-grow:1;padding:15px 20px;border:1px solid #e6e6e6;box-sizing:border-box;background-color:#fff;overflow:auto}.modal .side-tabs-main{border-top:none;border-bottom:none;border-right:none}.side-tabs-side{position:relative;z-index:3;width:160px;flex-shrink:0;padding:10px 0;box-sizing:border-box;transform:translateX(1px)}.side-tabs-menu>li{margin-bottom:4px}.side-tabs-menu>li>a{display:block;padding:10px;line-height:1.5;border-top-left-radius:3px;border-bottom-left-radius:3px;border:1px solid #e6e6e6;border-right:none;overflow:hidden;text-overflow:ellipsis;transition:color .3s ease,background-color .3s ease}.side-tabs-menu>li>a.active,.side-tabs-menu>li>a:focus,.side-tabs-menu>li>a:hover{background-color:#fff}.side-tabs-menu>li>a.active{color:#444;cursor:default}",""])},1263:function(e,t,n){var o=n(1262);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(27)(o,r);o.locals&&(e.exports=o.locals)},1264:function(e,t,n){(e.exports=n(28)(!1)).push([e.i,".settings-layout{margin-bottom:60px}.settings-definitions-list>li+li{margin-top:30px}.settings-definition{display:flex;align-items:stretch}.settings-definition-changed{margin:-10px -20px;padding:9px 20px;border-top:1px solid #faebcc;border-bottom:1px solid #faebcc;background-color:#fcf8e3}.settings-definition-left{width:330px;padding-right:30px;box-sizing:border-box}.settings-definition-right{position:relative;width:calc(100% - 330px);box-sizing:border-box}.settings-definition-name{text-overflow:ellipsis}.settings-definition-key{line-height:1.5;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.settings-definition-key:hover{overflow:visible}.settings-definition-state{min-height:32px;padding-bottom:4px}.settings-definition-state>span{display:flex}.settings-definition-changes{margin-top:20px;padding-top:20px;border-top:1px dotted #e6e6e6}.settings-sub-categories-list>li+li{margin:30px -20px 0;padding:30px 20px;border-top:1px solid #e6e6e6}.settings-sub-category-name{margin-bottom:20px;font-size:16px}.settings-sub-category-description{margin-top:-15px;margin-bottom:20px;color:#777}.settings-large-input{width:100%!important;max-width:400px;min-width:200px}",""])},1265:function(e,t,n){var o=n(1264);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(27)(o,r);o.locals&&(e.exports=o.locals)},1586:function(e,t,n){"use strict";n.r(t);var o,r=n(15),a=n(0),i=n.n(a),s=n(212),c=n.n(s),l=n(4),p=n.n(l),u=n(224),f=n(1),d=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.render=function(){var e=null!=this.props.component?Object(f.l)("project_settings.page"):Object(f.l)("settings.page"),t=null!=this.props.component?Object(f.l)("project_settings.page.description"):i.a.createElement(u.a,{message:Object(f.l)("settings.page.description")});return i.a.createElement("header",{className:"page-header"},i.a.createElement("h1",{className:"page-title"},e),i.a.createElement("div",{className:"page-description"},t))},t.propTypes={component:p.a.object},t}(i.a.PureComponent),h=n(32),g=n.n(h),b=n(232),y=n.n(b),v=n(901),O=n.n(v),j=n(7),E=n.n(j),_={name:p.a.string.isRequired,value:p.a.any,isDefault:p.a.bool.isRequired,onChange:p.a.func.isRequired},C=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),x=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleInputChange=function(e){t.props.onChange(e.currentTarget.value)},t.handleKeyDown=function(e){13===e.keyCode?t.props.onSave&&t.props.onSave():27===e.keyCode&&t.props.onCancel&&t.props.onCancel()},t}return C(t,e),t.prototype.render=function(){return i.a.createElement("input",{name:this.props.name,className:this.props.className+" text-top",type:this.props.type,value:this.props.value||"",onChange:this.handleInputChange,onKeyDown:this.handleKeyDown})},t.propTypes=x({},_,{value:p.a.oneOfType([p.a.string,p.a.number]),type:p.a.string.isRequired,className:p.a.string.isRequired,onCancel:p.a.func,onSave:p.a.func}),t}(i.a.PureComponent),w=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};function N(e){return i.a.createElement(k,w({},e,{className:"settings-large-input",type:"text"}))}var P=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),S=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return P(t,e),t.prototype.handleInputChange=function(e){this.props.onChange(e.target.value)},t.prototype.render=function(){var e=this;return i.a.createElement("textarea",{name:this.props.name,className:"settings-large-input text-top",rows:"5",value:this.props.value||"",onChange:function(t){return e.handleInputChange(t)}})},t.propTypes=_,t}(i.a.PureComponent),V=n(9),R=n(266),A=n(34),q=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),D=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={value:"",changing:!1},t.handleChangeClick=function(){t.setState({changing:!0})},t}return q(t,e),t.prototype.componentWillReceiveProps=function(e){!e.hasValueChanged&&this.props.hasValueChanged&&this.setState({changing:!1,value:""})},t.prototype.handleInputChange=function(e){this.props.onChange(e.target.value),this.setState({changing:!0,value:e.target.value})},t.prototype.renderInput=function(){var e=this;return i.a.createElement("form",null,i.a.createElement("input",{className:"hidden",type:"password"}),i.a.createElement("input",{autoComplete:"off",autoFocus:this.state.changing,className:"js-password-input settings-large-input text-top",name:this.props.name,onChange:function(t){return e.handleInputChange(t)},type:"password",value:this.state.value}))},t.prototype.render=function(){var e=!!this.props.value;return this.state.changing||!e?this.renderInput():i.a.createElement("div",null,i.a.createElement(R.a,{className:"text-middle big-spacer-right",fill:V.gray60}),i.a.createElement(A.a,{className:"text-middle",onClick:this.handleChangeClick},Object(f.l)("change_verb")))},t.propTypes=_,t}(i.a.PureComponent),I=(n(984),function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getValue=function(){var e=t.props.value;return"string"==typeof e?"true"===e:e},t.handleClick=function(){if(t.props.onChange){var e=t.getValue();t.props.onChange(!e)}},t}return I(t,e),t.prototype.render=function(){var e=this.getValue(),t=j("boolean-toggle",{"boolean-toggle-on":e});return a.createElement(A.a,{className:t,name:this.props.name,onClick:this.handleClick},a.createElement("div",{className:"boolean-toggle-handle"}))},t}(a.PureComponent),M=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),z=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},F=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return M(t,e),t.prototype.render=function(){var e=null!=this.props.value,t=!!e&&this.props.value;return i.a.createElement("div",{className:"display-inline-block text-top"},i.a.createElement(T,{name:this.props.name,value:t,onChange:this.props.onChange}),!e&&i.a.createElement("span",{className:"spacer-left note"},Object(f.l)("settings.not_set")))},t.propTypes=z({},_,{value:p.a.oneOfType([p.a.bool,p.a.string])}),t}(i.a.PureComponent),L=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};function U(e){return i.a.createElement(k,L({},e,{className:"input-small",type:"text"}))}var W,H=n(213),K=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),J=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},X=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return K(t,e),t.prototype.handleInputChange=function(e){this.props.onChange(e.value)},t.prototype.render=function(){var e=this,t=this.props.options.map(function(e){return{label:e,value:e}});return i.a.createElement(H.c,{name:this.props.name,className:"settings-large-input",options:t,clearable:!1,value:this.props.value,onChange:function(t){return e.handleInputChange(t)}})},t.propTypes=J({},_,{options:p.a.arrayOf(p.a.string).isRequired}),t}(i.a.PureComponent),B=n(137),G=n(48),Q=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),Y=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},Z=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},$=((W={})[G.h]=N,W[G.i]=S,W[G.e]=D,W[G.a]=F,W[G.c]=U,W[G.d]=U,W[G.b]=U,W),ee=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Q(t,e),t.prototype.render=function(){var e=this.props,t=e.setting,n=e.value,o=e.onChange,r=Z(e,["setting","value","onChange"]),a=t.definition,s=Object(B.j)(a);if(a.type===G.g)return i.a.createElement(X,Y({name:s,value:n,isDefault:Object(B.k)(t),options:a.options,onChange:o},r));var c=$[a.type]||N;return i.a.createElement(c,Y({name:s,value:n,isDefault:Object(B.k)(t),onChange:o},r))},t.propTypes={setting:p.a.object.isRequired,value:p.a.any,onChange:p.a.func.isRequired},t}(i.a.PureComponent),te=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ne=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},oe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return te(t,e),t.prototype.ensureValue=function(){return this.props.value||[]},t.prototype.getFieldName=function(e){return Object(B.j)(this.props.setting.definition,e.key)},t.prototype.handleDeleteValue=function(e){var t=this.ensureValue().slice();t.splice(e,1),this.props.onChange(t)},t.prototype.handleInputChange=function(e,t,n){var o,r=Object(B.d)(this.props.setting.definition)[0],a=this.ensureValue().slice(),i=ne({},r,a[e],((o={})[t]=n,o));return a.splice(e,1,i),this.props.onChange(a)},t.prototype.renderFields=function(e,t,n){var o=this,r=this.props.setting;return i.a.createElement("tr",{key:t},r.definition.fields.map(function(n){return i.a.createElement("td",{key:n.key},i.a.createElement(ee,{name:o.getFieldName(n),setting:{definition:n,value:e[n.key]},value:e[n.key],onChange:o.handleInputChange.bind(o,t,n.key)}))}),i.a.createElement("td",{className:"thin nowrap text-middle"},!n&&i.a.createElement(A.c,{className:"js-remove-value",onClick:this.handleDeleteValue.bind(this,t)})))},t.prototype.render=function(){var e=this,t=this.props.setting,n=this.ensureValue().concat(Object(B.d)(this.props.setting.definition));return i.a.createElement("div",null,i.a.createElement("table",{className:"data zebra-hover no-outer-padding",style:{width:"auto",minWidth:480,marginTop:-12}},i.a.createElement("thead",null,i.a.createElement("tr",null,t.definition.fields.map(function(e){return i.a.createElement("th",{key:e.key},e.name,null!=e.description&&i.a.createElement("span",{className:"spacer-top small"},e.description))}),i.a.createElement("th",null," "))),i.a.createElement("tbody",null,n.map(function(t,o){return e.renderFields(t,o,o===n.length-1)}))))},t.propTypes={setting:p.a.object.isRequired,value:p.a.array,onChange:p.a.func.isRequired},t}(i.a.PureComponent),re=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ae=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},ie=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return re(t,e),t.prototype.ensureValue=function(){return this.props.value||[]},t.prototype.handleSingleInputChange=function(e,t){var n=this.ensureValue().slice();n.splice(e,1,t),this.props.onChange(n)},t.prototype.handleDeleteValue=function(e){var t=this.ensureValue().slice();t.splice(e,1),this.props.onChange(t)},t.prototype.prepareSetting=function(){var e=this.props.setting,t=ae({},e.definition,{multiValues:!1});return ae({},e,{definition:t,values:void 0})},t.prototype.renderInput=function(e,t,n){return i.a.createElement("li",{key:t,className:"spacer-bottom"},i.a.createElement(ee,{setting:this.prepareSetting(),value:e,onChange:this.handleSingleInputChange.bind(this,t)}),!n&&i.a.createElement("div",{className:"display-inline-block spacer-left"},i.a.createElement(A.c,{className:"js-remove-value",onClick:this.handleDeleteValue.bind(this,t)})))},t.prototype.render=function(){var e=this,t=this.ensureValue().concat(Object(B.d)(this.props.setting.definition));return i.a.createElement("div",null,i.a.createElement("ul",null,t.map(function(n,o){return e.renderInput(n,o,o===t.length-1)})))},t.propTypes={setting:p.a.object.isRequired,value:p.a.array,onChange:p.a.func.isRequired},t}(i.a.PureComponent),se=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ce=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},le=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return se(t,e),t.prototype.render=function(){var e=this.props.setting.definition;return e.multiValues?i.a.createElement(ie,ce({},this.props)):e.type===G.f?i.a.createElement(oe,ce({},this.props)):i.a.createElement(ee,ce({},this.props))},t.propTypes={setting:p.a.object.isRequired,value:p.a.any,onChange:p.a.func.isRequired},t}(i.a.PureComponent),pe=n(87),ue=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),fe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={reseting:!1},t.handleClose=function(){t.setState({reseting:!1})},t.handleReset=function(){t.setState({reseting:!0})},t.handleSubmit=function(){t.props.onReset(),t.handleClose()},t}return ue(t,e),t.prototype.renderModal=function(){var e=Object(f.l)("settings.reset_confirm.title");return a.createElement(pe.a,{contentLabel:e,onRequestClose:this.handleClose},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,e)),a.createElement("form",{onSubmit:this.handleSubmit},a.createElement("div",{className:"modal-body"},a.createElement("p",null,Object(f.l)("settings.reset_confirm.description"))),a.createElement("footer",{className:"modal-foot"},a.createElement(A.f,{className:"button-red"},Object(f.l)("reset_verb")),a.createElement(A.e,{onClick:this.handleClose},Object(f.l)("cancel")))))},t.prototype.render=function(){var e=this.props,t=e.setting,n=e.isDefault,o=e.changedValue,r=e.hasValueChanged,i=!Object(B.l)(t.definition,Object(B.g)(t)),s=null!=o&&Object(B.l)(t.definition,o),c=i&&(s||!n&&!r);return a.createElement(a.Fragment,null,n&&!r&&a.createElement("div",{className:"spacer-top note",style:{lineHeight:"24px"}},Object(f.l)("settings._default")),a.createElement("div",{className:"settings-definition-changes nowrap"},r&&a.createElement(A.a,{className:"spacer-right button-success",disabled:this.props.hasError,onClick:this.props.onSave},Object(f.l)("save")),c&&a.createElement(A.a,{className:"spacer-right",onClick:this.handleReset},Object(f.l)("reset_verb")),r&&a.createElement(A.a,{className:"spacer-right button-link",onClick:this.props.onCancel},Object(f.l)("cancel")),c&&a.createElement("span",{className:"note"},Object(f.l)("default"),": ",Object(B.c)(t)),this.state.reseting&&this.renderModal()))},t}(a.PureComponent),de=n(233),me=n(230),he=n(127),ge=n(275),be=n(205),ye=n(175),ve=n(176),Oe=n(92),je=n(5),Ee=n(22),_e=n(13),Ce=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),xe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={success:!1},t.handleChange=function(e){clearTimeout(t.timeout),t.props.changeValue(t.props.setting.definition.key,e),t.handleCheck()},t.handleReset=function(){var e=t.props.component?t.props.component.key:null,n=t.props.setting.definition;return t.props.resetValue(n.key,e).then(function(){t.props.cancelChange(n.key,e),t.safeSetState({success:!0}),t.timeout=setTimeout(function(){return t.safeSetState({success:!1})},3e3)}).catch(function(){})},t.handleCancel=function(){var e=t.props.component?t.props.component.key:null;t.props.cancelChange(t.props.setting.definition.key,e),t.props.passValidation(t.props.setting.definition.key)},t.handleCheck=function(){var e=t.props.component?t.props.component.key:null;t.props.checkValue(t.props.setting.definition.key,e)},t.handleSave=function(){if(null!=t.props.changedValue){t.safeSetState({success:!1});var e=t.props.component?t.props.component.key:null;t.props.saveValue(t.props.setting.definition.key,e).then(function(){t.safeSetState({success:!0}),t.timeout=setTimeout(function(){return t.safeSetState({success:!1})},3e3)}).catch(function(){})}},t}return Ce(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.safeSetState=function(e){this.mounted&&this.setState(e)},t.prototype.render=function(){var e=this.props,t=e.setting,n=e.changedValue,o=e.loading,r=t.definition,a=Object(B.f)(r),s=null!=this.props.validationMessage,c=null!=n,l=E()("settings-definition",{"settings-definition-changed":c}),p=c?n:Object(B.g)(t),u=Object(B.k)(t);return i.a.createElement("div",{className:l,"data-key":r.key},i.a.createElement("div",{className:"settings-definition-left"},i.a.createElement("h3",{className:"settings-definition-name",title:a},a),i.a.createElement("div",{className:"markdown small spacer-top",dangerouslySetInnerHTML:{__html:Object(B.e)(r)}}),i.a.createElement("div",{className:"settings-definition-key note little-spacer-top"},Object(f.m)("settings.key_x",r.key))),i.a.createElement("div",{className:"settings-definition-right"},i.a.createElement("div",{className:"settings-definition-state"},o&&i.a.createElement("span",{className:"text-info"},i.a.createElement("i",{className:"spinner spacer-right"}),Object(f.l)("settings.state.saving")),!o&&s&&i.a.createElement("span",{className:"text-danger"},i.a.createElement(de.a,{className:"spacer-right"}),i.a.createElement("span",null,Object(f.m)("settings.state.validation_failed",this.props.validationMessage))),!o&&!s&&this.state.success&&i.a.createElement("span",{className:"text-success"},i.a.createElement(me.a,{className:"spacer-right"}),Object(f.l)("settings.state.saved"))),i.a.createElement(le,{hasValueChanged:c,onCancel:this.handleCancel,onChange:this.handleChange,setting:t,value:p}),i.a.createElement(fe,{changedValue:n,hasError:s,hasValueChanged:c,isDefault:u,onCancel:this.handleCancel,onReset:this.handleReset,onSave:this.handleSave,setting:t})))},t.propTypes={component:p.a.object,setting:p.a.object.isRequired,changedValue:p.a.any,loading:p.a.bool.isRequired,validationMessage:p.a.string,changeValue:p.a.func.isRequired,cancelChange:p.a.func.isRequired,saveValue:p.a.func.isRequired,resetValue:p.a.func.isRequired,passValidation:p.a.func.isRequired},t}(i.a.PureComponent),ke=Object(r.connect)(function(e,t){return{changedValue:Object(_e.getSettingsAppChangedValue)(e,t.setting.definition.key),loading:Object(_e.isSettingsAppLoading)(e,t.setting.definition.key),validationMessage:Object(_e.getSettingsAppValidationMessage)(e,t.setting.definition.key)}},{changeValue:ve.d,saveValue:function(e,t){return function(n,o){n(Object(be.c)(e));var r=o(),a=Object(_e.getSettingsAppDefinition)(r,e),i=Object(_e.getSettingsAppChangedValue)(r,e);return Object(B.l)(a,i)?(n(Object(ye.c)(e,Object(f.l)("settings.state.value_cant_be_empty"))),n(Object(be.d)(e)),Promise.reject()):Object(Oe.h)(a,i,t).then(function(){return Object(Oe.e)({keys:e,component:t})}).then(function(o){n(Object(he.b)(o,t)),n(Object(ve.c)(e)),n(Object(ye.d)(e)),n(Object(be.d)(e))}).catch(function(t){return n(Object(be.d)(e)),Object(je.parseError)(t).then(function(t){return n(Object(ye.c)(e,t))}),Promise.reject()})}},resetValue:function(e,t){return function(n){return n(Object(be.c)(e)),Object(Oe.f)({keys:e,component:t}).then(function(){return Object(Oe.e)({keys:e,component:t})}).then(function(o){o.length>0?n(Object(he.b)(o,t)):n(Object(he.b)([{key:e}],t)),n(Object(ye.d)(e)),n(Object(be.d)(e))}).catch(function(t){return n(Object(be.d)(e)),Object(je.parseError)(t).then(function(t){return n(Object(ye.c)(e,t))}),Promise.reject()})}},passValidation:ye.d,cancelChange:ve.c,checkValue:function(e,t){return function(t,n){var o=n(),r=Object(_e.getSettingsAppDefinition)(o,e),a=Object(_e.getSettingsAppChangedValue)(o,e);return Object(B.l)(r,a)?(void 0===r.defaultValue?t(Object(ye.c)(e,Object(f.l)("settings.state.value_cant_be_empty_no_default"))):t(Object(ye.c)(e,Object(f.l)("settings.state.value_cant_be_empty"))),!1):(t(Object(ye.d)(e)),!0)}}})(xe),we=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),Ne=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return we(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("ul",{className:"settings-definitions-list"},this.props.settings.map(function(t){return i.a.createElement("li",{key:t.definition.key},i.a.createElement(ke,{component:e.props.component,setting:t}))}))},t.propTypes={component:p.a.object,settings:p.a.array.isRequired},t}(i.a.PureComponent),Pe=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),Se=function(e){function t(t){var n=e.call(this,t)||this;return n.handleFormSubmit=function(e){e.preventDefault(),n.setState({success:!1,error:null,loading:!0});var t=n.state,o=t.recipient,r=t.subject,a=t.message;Object(Oe.g)(o,r,a).then(function(){return n.setState({success:!0,loading:!1})},function(e){return Object(je.parseError)(e).then(function(e){return n.setState({error:e,loading:!1})})})},n.state={recipient:n.props.currentUser.email,subject:Object(f.l)("email_configuration.test.subject"),message:Object(f.l)("email_configuration.test.message_text"),loading:!1,success:!1,error:null},n}return Pe(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("div",{className:"huge-spacer-top"},i.a.createElement("h3",{className:"spacer-bottom"},Object(f.l)("email_configuration.test.title")),i.a.createElement("form",{onSubmit:this.handleFormSubmit,style:{marginLeft:201}},this.state.success&&i.a.createElement("div",{className:"modal-field"},i.a.createElement("div",{className:"alert alert-success"},Object(f.m)("email_configuration.test.email_was_sent_to_x",this.state.recipient))),null!=this.state.error&&i.a.createElement("div",{className:"modal-field"},i.a.createElement("div",{className:"alert alert-danger"},this.state.error)),i.a.createElement("div",{className:"modal-field"},i.a.createElement("label",{htmlFor:"test-email-to"},Object(f.l)("email_configuration.test.to_address"),i.a.createElement("em",{className:"mandatory"},"*")),i.a.createElement("input",{className:"settings-large-input",disabled:this.state.loading,id:"test-email-to",onChange:function(t){return e.setState({recipient:t.target.value})},required:!0,type:"email",value:this.state.recipient})),i.a.createElement("div",{className:"modal-field"},i.a.createElement("label",{htmlFor:"test-email-subject"},Object(f.l)("email_configuration.test.subject")),i.a.createElement("input",{className:"settings-large-input",disabled:this.state.loading,id:"test-email-subject",onChange:function(t){return e.setState({subject:t.target.value})},type:"text",value:this.state.subject})),i.a.createElement("div",{className:"modal-field"},i.a.createElement("label",{htmlFor:"test-email-message"},Object(f.l)("email_configuration.test.message"),i.a.createElement("em",{className:"mandatory"},"*")),i.a.createElement("textarea",{className:"settings-large-input",disabled:this.state.loading,id:"test-email-title",onChange:function(t){return e.setState({message:t.target.value})},required:!0,rows:"5",value:this.state.message})),i.a.createElement("div",{className:"modal-field"},this.state.loading&&i.a.createElement("i",{className:"spacer-right spinner"}),i.a.createElement(A.f,{disabled:this.state.loading},Object(f.l)("email_configuration.test.send")))))},t}(i.a.PureComponent),Ve=Object(r.connect)(function(e){return{currentUser:Object(_e.getCurrentUser)(e)}})(Se),Re=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),Ae=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Re(t,e),t.prototype.componentDidMount=function(){this.fetchValues()},t.prototype.componentDidUpdate=function(e){var t=e.settings.map(function(e){return e.definition.key}),n=this.props.settings.map(function(e){return e.definition.key});e.component===this.props.component&&y()(t,n)||this.fetchValues()},t.prototype.fetchValues=function(){var e=this.props.settings.map(function(e){return e.definition.key}).join();this.props.fetchValues(e,this.props.component&&this.props.component.key)},t.prototype.renderEmailForm=function(e){return"general"===this.props.category&&"email"===e?i.a.createElement(Ve,null):null},t.prototype.render=function(){var e=this,t=O()(this.props.settings,function(e){return e.definition.subCategory}),n=Object.keys(t).map(function(e){return{key:e,name:Object(B.i)(t[e][0].definition.category,e),description:Object(B.h)(t[e][0].definition.category,e)}}),o=g()(n,function(e){return e.name.toLowerCase()});return i.a.createElement("ul",{className:"settings-sub-categories-list"},o.map(function(n){return i.a.createElement("li",{key:n.key},i.a.createElement("h2",{className:"settings-sub-category-name"},n.name),null!=n.description&&i.a.createElement("div",{className:"settings-sub-category-description markdown",dangerouslySetInnerHTML:{__html:n.description}}),i.a.createElement(Ne,{component:e.props.component,settings:t[n.key]}),e.renderEmailForm(n.key))}))},t.propTypes={component:p.a.object,fetchValues:p.a.func,settings:p.a.array.isRequired},t}(i.a.PureComponent),qe={fetchValues:function(e,t){return function(n){return Object(Oe.e)({keys:e,component:t}).then(function(e){n(Object(he.b)(e,t)),n(Object(Ee.c)())},function(){})}}},De=Object(r.connect)(function(e,t){return{settings:Object(_e.getSettingsAppSettingsForCategory)(e,t.category,t.component?t.component.key:null)}},qe)(Ae),Ie=n(2),Te=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),Me=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Te(t,e),t.prototype.renderLink=function(e){var t={};e.key!==this.props.defaultCategory&&(t.category=e.key.toLowerCase()),this.props.component&&(t.id=this.props.component.key);var n=e.key.toLowerCase()===this.props.selectedCategory.toLowerCase()?"active":"",o=this.props.component?"/project/settings":"/settings";return i.a.createElement(Ie.IndexLink,{to:{pathname:o,query:t},className:n,title:e.name},e.name)},t.prototype.render=function(){var e=this,t=this.props.categories.map(function(e){return{key:e,name:Object(B.b)(e)}}),n=g()(t,function(e){return e.name.toLowerCase()});return i.a.createElement("ul",{className:"side-tabs-menu"},n.map(function(t){return i.a.createElement("li",{key:t.key},e.renderLink(t))}))},t}(i.a.PureComponent),ze=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};var Fe=Object(r.connect)(function(e){return{categories:Object(_e.getSettingsAppAllCategories)(e)}})(function(e){return i.a.createElement(Me,ze({},e))});function Le(){return i.a.createElement("div",{className:"huge-spacer-top"},i.a.createElement("h2",{className:"spacer-bottom"},"Wildcards"),i.a.createElement("p",{className:"spacer-bottom"},"Following rules are applied:"),i.a.createElement("table",{className:"data spacer-bottom"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"*"),i.a.createElement("td",null,"Match zero or more characters")),i.a.createElement("tr",null,i.a.createElement("td",null,"**"),i.a.createElement("td",null,"Match zero or more directories")),i.a.createElement("tr",null,i.a.createElement("td",null,"?"),i.a.createElement("td",null,"Match a single character")))),i.a.createElement("table",{className:"data zebra"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Example"),i.a.createElement("th",null,"Matches"),i.a.createElement("th",null,"Does not match"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"**/foo/*.js"),i.a.createElement("td",null,i.a.createElement("ul",null,i.a.createElement("li",null,"src/foo/bar.js"),i.a.createElement("li",null,"lib/ui/foo/bar.js"))),i.a.createElement("td",null,i.a.createElement("ul",null,i.a.createElement("li",null,"src/bar.js"),i.a.createElement("li",null,"src/foo2/bar.js")))),i.a.createElement("tr",null,i.a.createElement("td",null,"src/foo/*bar*.js"),i.a.createElement("td",null,i.a.createElement("ul",null,i.a.createElement("li",null,"src/foo/bar.js"),i.a.createElement("li",null,"src/foo/bar1.js"),i.a.createElement("li",null,"src/foo/bar123.js"),i.a.createElement("li",null,"src/foo/123bar123.js"))),i.a.createElement("td",null,i.a.createElement("ul",null,i.a.createElement("li",null,"src/foo/ui/bar.js"),i.a.createElement("li",null,"src/bar.js")))),i.a.createElement("tr",null,i.a.createElement("td",null,"src/foo/**"),i.a.createElement("td",null,i.a.createElement("ul",null,i.a.createElement("li",null,"src/foo/bar.js"),i.a.createElement("li",null,"src/foo/ui/bar.js"))),i.a.createElement("td",null,i.a.createElement("ul",null,i.a.createElement("li",null,"src/bar/foo/bar.js"),i.a.createElement("li",null,"src/bar.js")))),i.a.createElement("tr",null,i.a.createElement("td",null,"**/foo?.js"),i.a.createElement("td",null,i.a.createElement("ul",null,i.a.createElement("li",null,"src/foo1.js"),i.a.createElement("li",null,"src/bar/foo1.js"))),i.a.createElement("td",null,i.a.createElement("ul",null,i.a.createElement("li",null,"src/foo.js"),i.a.createElement("li",null,"src/foo12.js"),i.a.createElement("li",null,"src/12foo3.js")))))))}var Ue=n(896),We=(n(1265),n(1263),function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),He=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loaded:!1},t}return We(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.component?this.props.component.key:null;this.props.fetchSettings(t).then(function(){return e.setState({loaded:!0})})},t.prototype.componentDidUpdate=function(e){if(e.component!==this.props.component){var t=this.props.component?this.props.component.key:null;this.props.fetchSettings(t)}},t.prototype.render=function(){if(!this.state.loaded)return null;var e=this.props.location.query.category||this.props.defaultCategory;return i.a.createElement("div",{id:"settings-page",className:"page page-limited"},i.a.createElement(Ue.a,{suggestions:"settings"}),i.a.createElement(c.a,{title:Object(f.l)("settings.page")}),i.a.createElement(m,{component:this.props.component}),i.a.createElement("div",{className:"side-tabs-layout settings-layout"},i.a.createElement("div",{className:"side-tabs-side"},i.a.createElement(Fe,{component:this.props.component,selectedCategory:e,defaultCategory:this.props.defaultCategory})),i.a.createElement("div",{className:"side-tabs-main"},i.a.createElement(De,{component:this.props.component,category:e}),"exclusions"===e&&i.a.createElement(Le,null))))},t}(i.a.PureComponent),Ke={fetchSettings:function(e){return function(t){return Object(Oe.d)(e).then(function(n){var o=n.filter(function(e){return"LICENSE"!==e.type}).filter(function(t){return null==e||"sonar.branch.longLivedBranches.regex"!==t.key});t(Object(ge.b)(o))},function(e){return Object(je.parseError)(e).then(function(e){return t(Object(Ee.a)(e))})})}}};t.default=Object(r.connect)(function(e){return{defaultCategory:Object(_e.getSettingsAppDefaultCategory)(e)}},Ke)(He)},896:function(e,t,n){"use strict";var o,r=n(0),a=n(4),i=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.componentDidMount=function(){this.context.suggestions.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.context.suggestions.removeSuggestions(this.props.suggestions),this.context.suggestions.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.context.suggestions.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t.contextTypes={suggestions:a.object.isRequired},t}(r.PureComponent);t.a=s},901:function(e,t,n){var o=n(162),r=n(340),a=Object.prototype.hasOwnProperty,i=r(function(e,t,n){a.call(e,n)?e[n].push(t):o(e,n,[t])});e.exports=i},983:function(e,t,n){(e.exports=n(28)(!1)).push([e.i,".date-input-control{position:relative;display:inline-block;cursor:pointer}.date-input-control-input{width:130px;padding-left:24px!important;cursor:pointer}.date-input-control-input.is-filled{padding-right:16px!important}.date-input-control-icon{position:absolute;top:4px;left:4px}.date-input-control-icon path{fill:#cdcdcd;transition:fill .3s ease}.date-input-control-input:focus+.date-input-control-icon path{fill:#4b9fd5}.date-input-control-reset{position:absolute;top:4px;right:4px;border:none}.date-input-calendar{position:absolute;z-index:7500;top:100%;left:0;border:1px solid #e6e6e6;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175)}.date-input-calendar-nav{display:flex;justify-content:space-between;align-items:center;padding-top:8px;padding-left:8px;padding-right:8px}.date-input-calender-month-select{width:70px}.button.boolean-toggle{display:inline-block;vertical-align:middle;width:48px;height:24px;padding:1px;border:1px solid #cdcdcd;border-radius:24px;box-sizing:border-box;background-color:#fff;cursor:pointer;transition:all .3s ease}.button.boolean-toggle:hover{background-color:#fff}.button.boolean-toggle:focus{border-color:#4b9fd5;background-color:#f6f6f6}.boolean-toggle-handle{width:20px;height:20px;border:1px solid #cdcdcd;border-radius:22px;box-sizing:border-box;background-color:#f6f6f6;transition:transform .3s cubic-bezier(.87,-.41,.19,1.44),border .3s ease}.button.boolean-toggle-on{border-color:#236a97;background-color:#236a97}.button.boolean-toggle-on:focus,.button.boolean-toggle-on:hover{background-color:#236a97}.button.boolean-toggle-on .boolean-toggle-handle{border-color:#f6f6f6;transform:translateX(24px)}",""])},984:function(e,t,n){var o=n(983);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(27)(o,r);o.locals&&(e.exports=o.locals)}}]);
//# sourceMappingURL=315.08010da3.chunk.js.map