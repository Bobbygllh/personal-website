import _implicitStylesheets from "./lwcOssWebsite.css";
import _implicitScopedStylesheets from "./lwcOssWebsite.scoped.css?scoped=true";
import _exampleMagicLink from "example/magicLink";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h1${3}>Website Build with LWC OSS and Github Pages</h1>`;
const $fragment2 = parseFragment`<h2${3}>Why LWC OSS</h2>`;
const $fragment3 = parseFragment`<p${3}>While investigating what framework I could build this site in, I came across Lightning Web Components Open Source. I had come across them a bit while reading release articles/updates from Salesforce but never had a use case. As I looked into React and other frameworks, I came back to LWC OSS as I thought it was a good opportunity to build something in a framework I was comfortable in and demonstrate my skillset with LWCs. While there are some expected and unexpected limitations, overall it was a good experience, though I can&#x27;t imagine there will be a use case I encounter where LWC OSS is the best option.</p>`;
const $fragment4 = parseFragment`<h3${3}>Positives</h3>`;
const $fragment5 = parseFragment`<ul${3}><li${3}>As I mentioned above, LWC OSS is LWC, so it a framework I was comfortable with and could problem solve quickly with</li><li${3}>Not battling the Lightning styling when trying to tweak styling was a nice change of pace</li></ul>`;
const $fragment6 = parseFragment`<h3${3}>Negatives</h3>`;
const $fragment7 = parseFragment`<ul${3}><li${3}>Lightning components (like lightning-input) and SLDS classes are not available</li><li${3}>The challenges with loading and working with 3rd party libararies still exists</li><li${3}>There is not a significant community using LWC OSS and the lack of support makes things challenging. </li><li${3}>Figuring out the changes necessary to get the site compatible with Github Pages was painful</li><li${3}>Everything needs to be built custom. There is likely some path towards getting a styling library like bootstrap but the lack of community resources on how exactly that would function made it a bit daunting</li></ul>`;
const $fragment8 = parseFragment`<p${3}>So a few more items in the negative category than the positive category but I am happy with the result and</p>`;
const stc0 = {
  classMap: {
    "m-auto": true,
    "body-text": true
  },
  key: 0
};
const stc1 = {
  props: {
    "link": "https://github.com/Bobbygllh/personal-website",
    "label": "Github Repo for Website",
    "picture": ""
  },
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, c: api_custom_element, h: api_element} = $api;
  return [api_element("div", stc0, [api_static_fragment($fragment1, 2), api_custom_element("example-magic-link", _exampleMagicLink, stc1), api_static_fragment($fragment2, 5), api_static_fragment($fragment3, 7), api_static_fragment($fragment4, 9), api_static_fragment($fragment5, 11), api_static_fragment($fragment6, 13), api_static_fragment($fragment7, 15), api_static_fragment($fragment8, 17)])];
  /*LWC compiler v8.22.4*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-3dbigci4eob";
tmpl.legacyStylesheetToken = "-lwcOssWebsite_lwcOssWebsite";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
