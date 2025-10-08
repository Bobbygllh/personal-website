import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./app.html";
import { navigationItems } from './navitems';
class app extends LightningElement {
  constructor(...args) {
    super(...args);
    this.currentNavigationItem = 'mainpage';
    this.navigationItems = navigationItems;
  }
  get imageLinks() {
    return {
      "ally": "background-image: url(https://play-lh.googleusercontent.com/fWqKGby23VpE85tWtvLBfBAIvfch65lnfFF9NgFt-e_uQIoO_5lSOT6yipYNKkghcYs=w240-h480-rw);",
      "cervello": "background-image: url(https://media.glassdoor.com/sql/718914/cervello-squarelogo-1442564055673.png);",
      "fiarch": "background-image: url(https://media.licdn.com/dms/image/v2/D4E0BAQEaohaOrBW-CQ/company-logo_200_200/company-logo_200_200/0/1733775033094/financial_architects_partners_logo?e=1762992000&v=beta&t=TaP3E_mmX_WrQvChexbXNSJSm-y7iLWvwcOGpo-XH9E);"
    };
  }
  connectedCallback() {
    this.navigationItems[this.currentNavigationItem].visible = true;
  }
  handleCategoryChange(event) {
    if (event) {
      this.template.querySelector("example-projects")?.reset();
      this.template.querySelector("example-blogs")?.reset();
      this.navigationItems[this.currentNavigationItem].visible = false;
      this.currentNavigationItem = event.detail;
      this.navigationItems[this.currentNavigationItem].visible = true;
    }
  }
  /*LWC compiler v8.22.4*/
}
_registerDecorators(app, {
  track: {
    navigationItems: 1
  },
  fields: ["currentNavigationItem"]
});
const __lwc_component_class_internal = _registerComponent(app, {
  tmpl: _tmpl,
  sel: "-app",
  apiVersion: 66
});
export default __lwc_component_class_internal;