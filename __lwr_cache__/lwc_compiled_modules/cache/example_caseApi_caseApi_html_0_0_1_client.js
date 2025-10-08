import _implicitStylesheets from "./caseApi.css";
import _implicitScopedStylesheets from "./caseApi.scoped.css?scoped=true";
import _exampleMagicLink from "example/magicLink";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h1${3}>Case Creation API Integration</h1>`;
const $fragment2 = parseFragment`<div class="code-textarea${0}"${2}><p${3}>Task: Your company would like to leverage Salesforce to respond to customer support cases and they would like you to create a custom API that will create a Case record in Salesforce. This API will be used in web, as well as in their Android and iOS applications. Expose a REST Resource class that can be used by engineering to support this use case.</p><ul${3}><li${3}>Origin can be either &quot;web&quot; or &quot;mobile&quot;</li><li${3}>Build a Client Credentials Authentication flow</li><li${3}>Status will be &quot;New&quot;</li><li${3}>The payload request you can expect is below:</li></ul><span${3}>${"t13"}</span></div>`;
const $fragment3 = parseFragment`<h1${3}>Initial Thoughts</h1>`;
const $fragment4 = parseFragment`<p${3}>The first consideration is if a custom API is necessary and whether we can we direct the engineering team to use the standard existing services sObject APIs <a href="https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info_post.htm"${3}> (LINK)</a>. This would allow the team to insert Cases without us needing to build them a custom api, which would save a good amount of team effort. Through the auth process and integration user we would be able to limit their access. The challenge is that the requirements of enforcing that the Origin is either &quot;web&quot; or &quot;mobile&quot; would prove challenging. We could enfore this in a validation rule, before save flow, apex etc. However we do not want to enfore this requirement every time a Case is created. One &quot;workaround&quot; is we could create a checkbox field and ask the engineering team to set it to true on insert. With this we could check the Origin conditions and when the checkbox isn&#x27;t set, we&#x27;d ignore it. However, that is bit of a janky workaround and for the purposes of this exercise we will assume that we want this as foolproof as possible and that that is not an option.</p>`;
const $fragment5 = parseFragment`<h1${3}>What We Will Build</h1>`;
const $fragment6 = parseFragment`<p${3}>This leaves us with the option of creating a custom REST resource for the engineering team to call. Our first and biggest consideration is security as we will be providing an external team with access to our system. So our goal will be to provide the bare minimum amount of access for the team to accomplish their goal of inserting a Case. The second consideration will be building a comprehensive stable endpoint that handles edge scenarios elegantly and gives the team calling the API the information they need to correct any issues with their request payload. A rough outline of the items we will need to implement are as follows:</p>`;
const $fragment7 = parseFragment`<ul${3}><li${3}>An authentication flow</li><li${3}>A user</li><li${3}>an Apex class</li><li${3}>a easy way to test the API</li></ul>`;
const $fragment8 = parseFragment`<h2${3}>Authentication Flow</h2>`;
const $fragment9 = parseFragment`<p${3}>the task scope outlines using a Client Credentials flow. The gold standard for Oauth2.0 authentication flows is the JWT Bearer Flow, however sometimes the external system cannot support this flow, so a Client Credentials flow is the second most secure choice. Below is an outline of the flow:</p>`;
const $fragment10 = parseFragment`<img class="client-credentials${0}" src="public/assets/Client-Credentials.png" alt="client creds"${2}>`;
const $fragment11 = parseFragment`<br${3}>`;
const $fragment12 = parseFragment`<p${3}>the basic structure is that the calling system will hold a Client Id and Client Secret that it will utilize the call the Salesforce. The system will pass back an auth token if the Client Id and Client Secret are valid. The calling system will then use that auth token to do an action, in this situation call an endpoint. On the Salesforce end we will need to create a Connected App, which will produce the Client Id and Client Secret for the external team.</p>`;
const $fragment13 = parseFragment`<h3${3}>Connected App</h3>`;
const $fragment14 = parseFragment`<p${3}>How we structure our connected app will be critical in keeping with our original goal of least access possible. The first step towards doing that will be correctly choosing the scope of the Connected App. For our given scenario, the best choice is the Manage user data via APIs. This will still allow Case creation but limit the external client to only accessing Salesforces APIs.</p>`;
const $fragment15 = parseFragment`<img class="client-credentials${0}" src="public/assets/connected-app-settings.png" alt="client creds"${2}>`;
const $fragment16 = parseFragment`<p${3}>However, our system might have multiple APIs and the standard sObject APIs are also quite powerful. So we will need a way to further reduce the access that the calling system will have. We can do this using an specific integration user that we will create. Any operation the external client does after authenticating to our Connected App will be done as this user.</p>`;
const $fragment17 = parseFragment`<img class="integration-user${0}" src="public/assets/integration-user.png" alt="client creds"${2}>`;
const $fragment18 = parseFragment`<h3${3}>Integration User</h3>`;
const $fragment19 = parseFragment`<p${3}>When creating this user (or any user), we&#x27;ll need to consider the license and profile. Salesforce has fortunately created a license specifically for integration users named the &quot;Salesforce Integration&quot; license. This is a low cost alternative to a full license. The Profile options for this license are limited and for our use case (creating a record) the &quot;Minimum Access – API Only Integrations&quot; fits our scenario. This will not allow anything other than API access to the system. We will need to open up a few permissions and we can do that with the flexibility of Permission Sets. We can provide access to the fields that will be set upon insertion as well as give Read and Edit access to Case.</p>`;
const $fragment20 = parseFragment`<img class="client-credentials${0}" src="public/assets/permission-set.png"${2}>`;
const $fragment21 = parseFragment`<h2${3}>REST Endpoint</h2>`;
const $fragment22 = parseFragment`<p${3}>Now that we have the authentication piece all set, we can move towards creating a custom REST endpoint for the external team to call. We will create an apex class with the Rest Resource annotation of @RestResource(urlMapping=&#x27;/CreateSupportCase&#x27;). This apex class will handle Post calls as this scenario is modifying/creating data. Some goals that we have for our code are as follows:</p>`;
const $fragment23 = parseFragment`<ul${3}><li${3}>Enforce the outlined Request structure</li><li${3}>Handle any malformed requests</li><li${3}>Enfore an origin of &quot;web&quot; or &quot;mobile&quot;</li><li${3}>Give back clear error messaging to the calling system</li></ul>`;
const $fragment24 = parseFragment`<p${3}>We can accomplish this with a few patterns. The first of which is our exception pattern. We create a custom exception within the class so that we can include specific information when we throw the exception, like the ResponseInfo class (more on that later)</p>`;
const $fragment25 = parseFragment`<img class="client-credentials${0}" src="public/assets/custom-exception.png"${2}>`;
const $fragment26 = parseFragment`<p${3}>We will wrap all of the code that will run during API execution context in a Try / Catch. In addition to catching our custom exception it allows us to handle unexpected exceptions but still format the response in the same way every time so the calling system knows what to expect.</p>`;
const $fragment27 = parseFragment`<img class="client-credentials${0}" src="public/assets/try-catch.png"${2}>`;
const $fragment28 = parseFragment`<p${3}>This also allows us to effectively stop the execution from anywhere in the code by throwing our custom exception with the necessary information. When a structure like this is not implemented, it makes it very difficult when an issue is detected to stop the execution and return a response up the chain of methods. It typically leads to all code being written in one method as returning relevent info from a child method is challenging.</p>`;
const $fragment29 = parseFragment`<p${3}>Within the try /catch, the catch statement identifies if it is our custom exception and if not, creates a custom exception with the information from the error so that our setErrorResponse() method knows what information will be present and can build our response.</p>`;
const $fragment30 = parseFragment`<p${3}>The beauty of this pattern is in the ResponseInfo methods sitting near the top of the class.</p>`;
const $fragment31 = parseFragment`<img class="client-credentials${0}" src="public/assets/response-info.png"${2}>`;
const $fragment32 = parseFragment`<p${3}>These effectively become documentation for every possible response that we will return. These methods are clearly named and have a response code (ie. 201, 400 etc.), a string response code and an error message. This makes it very easy to add new ResponseInfos, reuse them and see what part of the code threw them.</p>`;
const $fragment33 = parseFragment`<p${3}>An example usage is the check for the correct origin value. After parsing the response with our inner Request class, we&#x27;ll pass the Origin value to this method, which will check if it is valid. if it is not, it will throw a custom exception with a ResponseInfo object. The error message will be dynamic, including the value they attempted to pass in so they can easily understand what the expectation is vs. what they provided.</p>`;
const $fragment34 = parseFragment`<img class="client-credentials${0}" src="public/assets/origin-check.png"${2}>`;
const $fragment35 = parseFragment`<h2${3}>Testing</h2>`;
const $fragment36 = parseFragment`<p${3}>The first aspect of testing that we&#x27;ll need to complete is an Apex test class. The most critical piece that I often see missed in integration testing is testing as the Integration user (or a user who reflects all the permissions the integration user has). If the apex test class isn&#x27;t running in context as that integration user, it will run as the running executing the test class, who will likely have vastly different permissions. The rest of the tests are straightforward, we want to test positive scenarios as well as negative scenarios and ensure we are Asserting</p>`;
const $fragment37 = parseFragment`<img class="client-credentials${0}" src="public/assets/test-class.png"${2}>`;
const $fragment38 = parseFragment`<p${3}>The next step is setting up some type of ability to manually call the API. In the <a href="https://github.com/Bobbygllh/CreateCaseAPI/blob/main/README.md"${3}>ReadME </a>I detail how to use a powerful VS Code tool called RestClient Extension to call the endpoint. Having an easy way to modify the Request and test the API allows for a quick way to recreate the issue if the calling team is running into a problem.</p>`;
const stc0 = {
  classMap: {
    "m-auto": true,
    "body-text": true
  },
  key: 0
};
const stc1 = {
  props: {
    "link": "https://blog.beyondthecloud.dev/blog/salesforce-oauth-2-0-flows-integrate-in-the-right-way",
    "label": "Source"
  },
  key: 23
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, d: api_dynamic_text, sp: api_static_part, c: api_custom_element, h: api_element} = $api;
  return [api_element("div", stc0, [api_static_fragment($fragment1, 2), api_static_fragment($fragment2, 4, [api_static_part(13, null, api_dynamic_text($cmp.data))]), api_static_fragment($fragment3, 6), api_static_fragment($fragment4, 8), api_static_fragment($fragment5, 10), api_static_fragment($fragment6, 12), api_static_fragment($fragment7, 14), api_static_fragment($fragment8, 16), api_static_fragment($fragment9, 18), api_static_fragment($fragment10, 20), api_static_fragment($fragment11, 22), api_custom_element("example-magic-link", _exampleMagicLink, stc1), api_static_fragment($fragment12, 25), api_static_fragment($fragment13, 27), api_static_fragment($fragment14, 29), api_static_fragment($fragment15, 31), api_static_fragment($fragment16, 33), api_static_fragment($fragment17, 35), api_static_fragment($fragment18, 37), api_static_fragment($fragment19, 39), api_static_fragment($fragment20, 41), api_static_fragment($fragment21, 43), api_static_fragment($fragment22, 45), api_static_fragment($fragment23, 47), api_static_fragment($fragment24, 49), api_static_fragment($fragment25, 51), api_static_fragment($fragment26, 53), api_static_fragment($fragment27, 55), api_static_fragment($fragment28, 57), api_static_fragment($fragment29, 59), api_static_fragment($fragment30, 61), api_static_fragment($fragment31, 63), api_static_fragment($fragment32, 65), api_static_fragment($fragment33, 67), api_static_fragment($fragment34, 69), api_static_fragment($fragment35, 71), api_static_fragment($fragment36, 73), api_static_fragment($fragment37, 75), api_static_fragment($fragment38, 77)])];
  /*LWC compiler v8.22.4*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-1n8ko1nd92k";
tmpl.legacyStylesheetToken = "-caseApi_caseApi";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
