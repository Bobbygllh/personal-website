import _implicitStylesheets from "./app.css";
import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";
import _exampleNavigation from "example/navigation";
import _exampleMagicLink from "example/magicLink";
import _exampleProjects from "example/projects";
import _exampleBlogs from "example/blogs";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h1${3}>Introduction</h1>`;
const $fragment2 = parseFragment`<p${3}>Hi! I&#x27;m Bobby Gallahue, a Technical Lead with 7 years of experience specializing in working on complex Salesforce systems. I am getting my Masters at Tufts University in Computer Science with a planned graduation date of fall 2027</p>`;
const $fragment3 = parseFragment`<span${3}> and </span>`;
const $fragment4 = parseFragment`<h3${3}>Background</h3>`;
const $fragment5 = parseFragment`<p${3}>I first became interested in coding after a frustrating experience trying to find an eye doctor. Many of the websites I visited offered little transparency around accepted insurance plans or even the cost of a basic checkup. With no prior programming experience, I set out to see if I could create a better solution and began building simple prototype websites. What started as a small personal project quickly evolved into a genuine passion for software development and, ultimately, a career change. Today, I’m driven by the same motivation: to design applications that simplify everyday experiences, improve accessibility, and make meaningful, tangible impacts on people’s lives</p>`;
const $fragment6 = parseFragment`<h3${3}>About Me</h3>`;
const $fragment7 = parseFragment`<p${3}>Outside of work I am a passionate skier, surfer and mountain biker and you can typically find me somewhere in the White Mountains, Green Mountains or Seacoast of New Hampshire</p>`;
const $fragment8 = parseFragment`<img class="about-me-image${0}" src="public/assets/skiing.jpg" alt="logo"${2}>`;
const $fragment9 = parseFragment`<img class="about-me-image p-left-large${0}" src="public/assets/surfing.jpg" alt="logo"${2}>`;
const stc0 = {
  styleDecls: [["background-image", "url(https://i.imgur.com/w074t77.png)", false]],
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  classMap: {
    "m-auto": true,
    "body-text": true
  },
  key: 4
};
const stc3 = {
  key: 9
};
const stc4 = {
  key: 11
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element, st: api_static_fragment, t: api_text, fr: api_fragment} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_element("div", stc0, [api_element("header", stc1, [api_custom_element("example-navigation", _exampleNavigation, {
    key: 2,
    on: _m0 || ($ctx._m0 = {
      "categorychange": api_bind($cmp.handleCategoryChange)
    })
  })]), $cmp.navigationItems.mainpage.visible ? api_fragment(3, [api_element("div", stc2, [api_static_fragment($fragment1, 6), api_static_fragment($fragment2, 8), api_element("p", stc3, [api_text("I am currently working at "), api_custom_element("example-magic-link", _exampleMagicLink, {
    props: {
      "link": "https://www.ally.com/",
      "label": "Ally Bank",
      "picture": $cmp.imageLinks.ally
    },
    key: 10
  })]), api_element("p", stc4, [api_text("With previous stops at "), api_custom_element("example-magic-link", _exampleMagicLink, {
    props: {
      "link": "https://www.linkedin.com/company/cervello/",
      "label": "Cervello",
      "picture": $cmp.imageLinks.cervello
    },
    key: 12
  }), api_static_fragment($fragment3, 14), api_custom_element("example-magic-link", _exampleMagicLink, {
    props: {
      "link": "https://www.fiarch.com/",
      "label": "Financial Architect Partners",
      "picture": $cmp.imageLinks.fiarch
    },
    key: 15
  })]), api_static_fragment($fragment4, 17), api_static_fragment($fragment5, 19), api_static_fragment($fragment6, 21), api_static_fragment($fragment7, 23), api_static_fragment($fragment8, 25), api_static_fragment($fragment9, 27)])], 0) : null, $cmp.navigationItems.projects.visible ? api_fragment(28, [api_custom_element("example-projects", _exampleProjects, {
    key: 29,
    on: _m1 || ($ctx._m1 = {
      "categorychange": api_bind($cmp.handleCategoryChange)
    })
  })], 0) : null, $cmp.navigationItems.blogs.visible ? api_fragment(30, [api_custom_element("example-blogs", _exampleBlogs, {
    key: 31,
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
