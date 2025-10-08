import _implicitStylesheets from "./magicLink.css";
import _implicitScopedStylesheets from "./magicLink.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<a${"a0:href"} class="body-text p-left markdown-magic-link${0}" target="_blank"${2}><span class="markdown-magic-link-image${0}"${"s1"}${2}></span>${"t2"}</a>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, sp: api_static_part, st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1, 1, [api_static_part(0, {
    attrs: {
      "href": $cmp.link
    }
  }, null), api_static_part(1, {
    style: $cmp.picture
  }, null), api_static_part(2, null, api_dynamic_text($cmp.label))])];
  /*LWC compiler v8.22.4*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-5cfd9l1d44f";
tmpl.legacyStylesheetToken = "-magicLink_magicLink";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
