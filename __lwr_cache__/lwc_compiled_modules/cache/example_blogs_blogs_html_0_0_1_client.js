import _implicitStylesheets from "./blogs.css";
import _implicitScopedStylesheets from "./blogs.scoped.css?scoped=true";
import _exampleApexBP from "example/apexBP";
import _exampleLwcBP from "example/lwcBP";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h1${3}>Blogs</h1>`;
const $fragment2 = parseFragment`<a class="font-inherit flex items-center p-med-top${0}"${"a0:data-item"} href="#"${2}><div class="flex-auto${0}"${2}><div${3}>${"t3"}</div><div class="text-sm${0}"${2}>${"t5"}</div></div></a>`;
const stc0 = {
  classMap: {
    "m-auto": true,
    "body-text": true,
    "page-height": true
  },
  key: 1
};
const stc1 = {
  key: 4
};
const stc2 = {
  key: 8
};
const stc3 = {
  key: 10
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, k: api_key, b: api_bind, d: api_dynamic_text, sp: api_static_part, i: api_iterator, h: api_element, fr: api_fragment, c: api_custom_element} = $api;
  const {_m0, _m1} = $ctx;
  return [$cmp.isSelectionShown ? api_fragment(0, [api_element("div", stc0, [api_static_fragment($fragment1, 3), api_element("div", stc1, api_iterator($cmp.blogObjs, function (item) {
    return api_static_fragment($fragment2, api_key(6, item.lwcReference), [api_static_part(0, {
      on: _m1 || ($ctx._m1 = {
        "click": api_bind($cmp.handleNavigate)
      }),
      attrs: {
        "data-item": item.lwcReference
      }
    }, null), api_static_part(3, null, api_dynamic_text(item.title)), api_static_part(5, null, api_dynamic_text(item.date))]);
  }))])], 0) : null, $cmp.renderLwcs.apexBP ? api_fragment(7, [api_custom_element("example-apex-b-p", _exampleApexBP, stc2)], 0) : null, $cmp.renderLwcs.lwcBP ? api_fragment(9, [api_custom_element("example-lwc-b-p", _exampleLwcBP, stc3)], 0) : null];
  /*LWC compiler v8.22.4*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-7v429e70suo";
tmpl.legacyStylesheetToken = "-blogs_blogs";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
