import _implicitStylesheets from "./projects.css";
import _implicitScopedStylesheets from "./projects.scoped.css?scoped=true";
import _exampleCaseApi from "example/caseApi";
import _exampleLwcOssWebsite from "example/lwcOssWebsite";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h1${3}>Projects</h1>`;
const $fragment2 = parseFragment`<a class="project-item project-detail-item relative flex items-center${0}"${"a0:data-item"} href="#"${2}><img class="project-image pr-5${0}"${"a1:src"}${2}><div class="flex-auto${0}"${2}><div class="text-normal${0}"${2}>${"t4"}</div><div class="desc text-sm opacity-50 font-normal${0}"${2}>${"t6"}</div></div></a>`;
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
  return [$cmp.isSelectionShown ? api_fragment(0, [api_element("div", stc0, [api_static_fragment($fragment1, 3), api_element("div", stc1, api_iterator($cmp.projectObjs, function (item) {
    return api_static_fragment($fragment2, api_key(6, item.lwcReference), [api_static_part(0, {
      on: _m1 || ($ctx._m1 = {
        "click": api_bind($cmp.handleNavigate)
      }),
      attrs: {
        "data-item": item.lwcReference
      }
    }, null), api_static_part(1, {
      attrs: {
        "src": item.image
      }
    }, null), api_static_part(4, null, api_dynamic_text(item.title)), api_static_part(6, null, api_dynamic_text(item.description))]);
  }))])], 0) : null, $cmp.renderLwcs.caseApi ? api_fragment(7, [api_custom_element("example-case-api", _exampleCaseApi, stc2)], 0) : null, $cmp.renderLwcs.lwcOSS ? api_fragment(9, [api_custom_element("example-lwc-oss-website", _exampleLwcOssWebsite, stc3)], 0) : null];
  /*LWC compiler v8.22.4*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-vrkj4vlmso";
tmpl.legacyStylesheetToken = "-projects_projects";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
