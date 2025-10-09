import _implicitStylesheets from "./apexBP.css";
import _implicitScopedStylesheets from "./apexBP.scoped.css?scoped=true";
import _exampleMagicLink from "example/magicLink";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h1${3}>Apex Best Practices</h1>`;
const $fragment2 = parseFragment`<p${3}>There are a lot of very good articles that hit on the basic tenants of Apex development in Salesforce. They all have similar best practices like &quot;don&#x27;t put a query in a for loop&quot;. I want to provide some more in depth best practices that expand on some of these items and touch a bit more on general programmatic best practices.</p>`;
const $fragment3 = parseFragment`<h3${3}>Check if Object/variables are null before accessing to avoid Null Pointer exceptions</h3>`;
const $fragment4 = parseFragment`<p${3}>Null pointer exceptions are thrown when trying to access/use an object reference or variable which has a null value or is not initialized. Often code that could potentially throw a NullPointerException error isn&#x27;t within try/catch blocks like DML statements, so the error will reach the user or roll back the process entirely. We need to check whether an object or variable is null before we run a method upon it (like get or toString etc. etc.) There are two ways we can do so, utilizing the safe navigation operator or a simple if statement if(object!= null). The preferred method would be the safe navigation operator as it allows for cleaner, more readable code. For example, instead of the following:</p>`;
const $fragment5 = parseFragment`<img class="client-credentials${0}" src="public/assets/1apex.png" alt="client creds"${2}>`;
const $fragment6 = parseFragment`<p${3}>We could rewrite it as below utilizing the safe navigation operator. Putting ? before the get method means that if the retrieveRecordTypesByDeveloperName() method returns null then running .get() won&#x27;t produce a null pointer exception. Without the safe navigation operator (or a if null check to ensure its defined) then a Null Pointer Exception would be thrown</p>`;
const $fragment7 = parseFragment`<img class="client-credentials${0}" src="public/assets/2apex.png" alt="client creds"${2}>`;
const $fragment8 = parseFragment`<p${3}>This is particularly effective in accessing multilevel maps like sampleMap. Instead of long or multiline if statement checks (ie. first screenshot x3) we can just write sampleMap?.getidVariable()?.getidVariable()?.get(idVariable). However if it is preferred to use code like the first screenshot, that is acceptable as well.</p>`;
const $fragment9 = parseFragment`<h3${3}>Avoid Triple Looping</h3>`;
const $fragment10 = parseFragment`<p${3}>For general performance we generally want to reduce the amount of for loops running in our code. If we can loop over a set of records once instead of twice during a codes execution that is preferable. However what we want to explicitly avoid is triple looping. This significantly eats up CPU time and causes our operations to take longer than they need to. An example of triple looping is the below:</p>`;
const $fragment11 = parseFragment`<img class="client-credentials${0}" src="public/assets/3apex.png" alt="client creds"${2}>`;
const $fragment12 = parseFragment`<h3${3}>Handle Potential Exceptions in Try/Catch blocks</h3>`;
const $fragment13 = parseFragment`<p${3}>Correctly handling exceptions in Apex is essential, unhandled errors will roll back the code execution and make it more difficult to debug issues.</p>`;
const $fragment14 = parseFragment`<ul${3}><li${3}>Correctly handling exceptions in Apex is essential, unhandled errors will roll back the code execution and make it more difficult to debug issues.</li><li${3}>Exception Class</li></ul>`;
const $fragment15 = parseFragment`<strong${3}>DO</strong>`;
const $fragment16 = parseFragment`<p${3}>Handle frequently errored processes (web callouts/ DML statements) in Try Catch blocks and log errors to the exception table. That way we don&#x27;t need to have users recreate errors live</p>`;
const $fragment17 = parseFragment`<strong${3}>DO</strong>`;
const $fragment18 = parseFragment`<p${3}>Stack multiple catch statements if you need to handle errors in different ways</p>`;
const $fragment19 = parseFragment`<img class="client-credentials${0}" src="public/assets/4apex.png" alt="client creds"${2}>`;
const $fragment20 = parseFragment`<br${3}>`;
const $fragment21 = parseFragment`<strong${3}>DON&#x27;T</strong>`;
const $fragment22 = parseFragment`<p${3}>Wrap entire large pieces of code into Try/Catch blocks and then catch it with only a generic exception. This will often suppress errors generated from code that is not functioning properly.</p>`;
const $fragment23 = parseFragment`<strong${3}>DON&#x27;T</strong>`;
const $fragment24 = parseFragment`<p${3}>Have an empty catch statement or a catch statement that just System.debugs the code. This will make debugging nearly impossible as we&#x27;re entirely suppressing errors</p>`;
const $fragment25 = parseFragment`<img class="client-credentials${0}" src="public/assets/5apex.png" alt="client creds"${2}>`;
const $fragment26 = parseFragment`<h3${3}>Don&#x27;t write code in Apex Triggers</h3>`;
const $fragment27 = parseFragment`<p${3}>Writing code directly in triggers does not allow for the modularity we need to write effective maintainabe code. While this falls under the category of &quot;fundamentals&quot;, it is worth detailing here. By utilizing a Trigger handler we can determine in what order the code runs and maintain our system of organization.</p>`;
const $fragment28 = parseFragment`<img class="client-credentials${0}" src="public/assets/6apex.png" alt="client creds"${2}>`;
const $fragment29 = parseFragment`<h3${3}>Use curly braces for if statements/For Loops</h3>`;
const $fragment30 = parseFragment`<p${3}>An age old debate but there is a lot of code in the code base which does not utilize curly braces following if or for statements/loops. The argument for curly braces is it reduces potential mistakes or confusion from developers maintaining the codebase. No curly braces even caused a very notable Apple bug. Here is a screenshot from stackoverflow outlining the potential for confusion caused by no curly braces:</p>`;
const $fragment31 = parseFragment`<img class="client-credentials${0}" src="public/assets/apex9.png" alt="client creds"${2}>`;
const $fragment32 = parseFragment`<p${3}>this example from the codebase shows how reading mixed curly braces/no curly braces is confusing</p>`;
const $fragment33 = parseFragment`<img class="client-credentials${0}" src="public/assets/7apex.png" alt="client creds"${2}>`;
const $fragment34 = parseFragment`<br${3}>`;
const $fragment35 = parseFragment`<strong${3}>DO</strong>`;
const $fragment36 = parseFragment`<p${3}>no ambiguity, easier to read</p>`;
const $fragment37 = parseFragment`<img class="client-credentials${0}" src="public/assets/8apex.png" alt="client creds"${2}>`;
const $fragment38 = parseFragment`<h3${3}>Cover all testing scenarios with System.assert methods</h3>`;
const $fragment39 = parseFragment`<ul${3}><li${3}>The minimum requirement from Salesforce is that Test classes have 75% code coverage to be released into Production. However we want to ensure that our classes actually do what the are intended to do, not just that the code runs. So we need to ensure they test the code in 3 essential ways:</li><li${3}>Scenario: The business asks that if a user enters/modifies the Phone field on a Contact record that the entered value is formatted to (123) 456-7891 unless it is less or more than 9 numbers, in that situation it should not be formatted</li><ul${3}><li${3}>Positive Scenario: Test that the code does what you expect it to do. -ie. 1234567891 should be updated to (123) 456-7891</li><li${3}>Negative Scenario: Test that the code does not behave in a way we don&#x27;t want it to - ie. 123456 should stay as 123456, not be updated to (123) 456- (or something similar)</li><li${3}>Bulk Scenario: insert/update multiple records at once to ensure that the code performs as expected in bulk update/inserts - Insert a list of contacts with the Phone field filled in, check that each record is formatted as expected</li></ul><li${3}>To check that all these scenarios work as expected we need to utilize System.Assert. Every single test method you write should have some type of System.assert method in it</li></ul>`;
const stc0 = {
  classMap: {
    "m-auto": true,
    "body-text": true
  },
  key: 0
};
const stc1 = {
  props: {
    "link": "https://www.salesforceben.com/12-salesforce-apex-best-practices/",
    "label": "Good Fundamental Article",
    "picture": "background-image: url(https://www.salesforceben.com/wp-content/uploads/2015/09/screencapture-web-archive-org-web-20140418114539-http-www-salesforceben-com-1443101191417.jpg);"
  },
  key: 5
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, c: api_custom_element, h: api_element} = $api;
  return [api_element("div", stc0, [api_static_fragment($fragment1, 2), api_static_fragment($fragment2, 4), api_custom_element("example-magic-link", _exampleMagicLink, stc1), api_static_fragment($fragment3, 7), api_static_fragment($fragment4, 9), api_static_fragment($fragment5, 11), api_static_fragment($fragment6, 13), api_static_fragment($fragment7, 15), api_static_fragment($fragment8, 17), api_static_fragment($fragment9, 19), api_static_fragment($fragment10, 21), api_static_fragment($fragment11, 23), api_static_fragment($fragment12, 25), api_static_fragment($fragment13, 27), api_static_fragment($fragment14, 29), api_static_fragment($fragment15, 31), api_static_fragment($fragment16, 33), api_static_fragment($fragment17, 35), api_static_fragment($fragment18, 37), api_static_fragment($fragment19, 39), api_static_fragment($fragment20, 41), api_static_fragment($fragment21, 43), api_static_fragment($fragment22, 45), api_static_fragment($fragment23, 47), api_static_fragment($fragment24, 49), api_static_fragment($fragment25, 51), api_static_fragment($fragment26, 53), api_static_fragment($fragment27, 55), api_static_fragment($fragment28, 57), api_static_fragment($fragment29, 59), api_static_fragment($fragment30, 61), api_static_fragment($fragment31, 63), api_static_fragment($fragment32, 65), api_static_fragment($fragment33, 67), api_static_fragment($fragment34, 69), api_static_fragment($fragment35, 71), api_static_fragment($fragment36, 73), api_static_fragment($fragment37, 75), api_static_fragment($fragment38, 77), api_static_fragment($fragment39, 79)])];
  /*LWC compiler v8.22.4*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-24vgmja5mne";
tmpl.legacyStylesheetToken = "example-apexBP_apexBP";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
