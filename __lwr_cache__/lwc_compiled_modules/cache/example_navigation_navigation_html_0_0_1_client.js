import _implicitStylesheets from "./navigation.css";
import _implicitScopedStylesheets from "./navigation.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<header${3}><nav class="nav${0}"${2}><div class="left${0}"${2}><img class="initials-image${0}" src="public/assets/bg.svg" alt="logo"${2}></div><div class="right${0}"${2}><a href="#" title="Home" data-item="mainpage"${3}><span${3}>Home</span></a><a href="#" title="Projects" data-item="projects"${3}><span${3}>Projects</span></a><a href="#" title="Blog" data-item="blogs"${3}><span${3}>Blog</span></a><a href="https://github.com/bobbygllh" target="_blank" title="Github" class="lt-md:hidden${0}"${2}><img class="github-image${0}" src="public/assets/github-mark.png" alt="logo"${2}></a></div></nav></header>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, sp: api_static_part, st: api_static_fragment} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_static_fragment($fragment1, 1, [api_static_part(5, {
    on: _m0 || ($ctx._m0 = {
      "click": api_bind($cmp.handleNavItemClick)
    })
  }, null), api_static_part(8, {
    on: _m1 || ($ctx._m1 = {
      "click": api_bind($cmp.handleNavItemClick)
    })
  }, null), api_static_part(11, {
    on: _m2 || ($ctx._m2 = {
      "click": api_bind($cmp.handleNavItemClick)
    })
  }, null)])];
  /*LWC compiler v8.22.4*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-5l9k039pvit";
tmpl.legacyStylesheetToken = "example-navigation_navigation";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
