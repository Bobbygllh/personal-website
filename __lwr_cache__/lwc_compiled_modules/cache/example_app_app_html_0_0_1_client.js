import _implicitStylesheets from "./app.css";
import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";
import _exampleNavigation from "example/navigation";
import _exampleProjects from "example/projects";
import _exampleBlogs from "example/blogs";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="m-auto body-text${0}"${2}><h1${3}>Introduction</h1><p${3}>Hi! I&#x27;m Bobby Gallahue, a Technical Lead with 7 years of experiance specializing in working on complex systems. I am currently getting my Masters at Tufts University in Computer Science with a planned graduation date of fall 2027</p><p${3}>I am currently working at<a href="https://www.ally.com/" class="p-left markdown-magic-link${0}" target="_blank"${2}><span class="markdown-magic-link-image${0}" style="background-image: url(https://play-lh.googleusercontent.com/fWqKGby23VpE85tWtvLBfBAIvfch65lnfFF9NgFt-e_uQIoO_5lSOT6yipYNKkghcYs=w240-h480-rw);"${2}></span>Ally Bank</a></p><p${3}>With previous stops at<a href="https://www.linkedin.com/company/cervello/" class="p-left markdown-magic-link${0}" target="_blank"${2}><span class="markdown-magic-link-image${0}" style="background-image: url(https://media.glassdoor.com/sql/718914/cervello-squarelogo-1442564055673.png);"${2}></span>Cervello</a><span${3}> and </span><a href="https://www.fiarch.com/" class="p-left markdown-magic-link${0}" target="_blank"${2}><span class="markdown-magic-link-image${0}" style="background-image: url(https://media.licdn.com/dms/image/v2/D4E0BAQEaohaOrBW-CQ/company-logo_200_200/company-logo_200_200/0/1733775033094/financial_architects_partners_logo?e=1762992000&amp;v=beta&amp;t=TaP3E_mmX_WrQvChexbXNSJSm-y7iLWvwcOGpo-XH9E);"${2}></span>Financial Architect Partners</a></p><h3${3}>Background</h3><p${3}>I began to learn to code after a challenging experiencing finding an eye doctor. The websites I encountered contained little information on what insurance the doctors took or how much a basic checkup might cost. Although I had no coding experiece, I wanted to see if I could improve the process and built some sample websites. This ignited a love for coding and an eventual career change. My passion for building applications and making some small improvement peoples day to day lives has not waned and I’m excited to keep learning and building.</p><h3${3}>About Me</h3><p${3}>Outside of work I am a passionate skier, surfer and mountain biker and you can typically find me somewhere in the White Mountains, Green Mountains or Seacoast of New Hampshire</p><img class="about-me-image${0}" src="/public/assets/skiing.jpg" alt="logo"${2}><img class="about-me-image p-left-large${0}" src="/public/assets/surfing.jpg" alt="logo"${2}></div>`;
const stc0 = {
  styleDecls: [["background-image", "url(https://i.imgur.com/w074t77.png)", false]],
  key: 0
};
const stc1 = {
  key: 1
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element, st: api_static_fragment, fr: api_fragment} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_element("div", stc0, [api_element("header", stc1, [api_custom_element("example-navigation", _exampleNavigation, {
    key: 2,
    on: _m0 || ($ctx._m0 = {
      "categorychange": api_bind($cmp.handleCategoryChange)
    })
  })]), $cmp.navigationItems.mainpage.visible ? api_fragment(3, [api_static_fragment($fragment1, 5)], 0) : null, $cmp.navigationItems.projects.visible ? api_fragment(6, [api_custom_element("example-projects", _exampleProjects, {
    key: 7,
    on: _m1 || ($ctx._m1 = {
      "categorychange": api_bind($cmp.handleCategoryChange)
    })
  })], 0) : null, $cmp.navigationItems.blogs.visible ? api_fragment(8, [api_custom_element("example-blogs", _exampleBlogs, {
    key: 9,
    on: _m2 || ($ctx._m2 = {
      "categorychange": api_bind($cmp.handleCategoryChange)
    })
  })], 0) : null])];
  /*LWC compiler v8.22.4*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-4us9q5akfb0";
tmpl.legacyStylesheetToken = "-app_app";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
