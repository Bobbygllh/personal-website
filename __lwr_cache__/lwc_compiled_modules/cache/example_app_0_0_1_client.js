import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./app.html";
import { navigationItems } from './navitems';
class app extends LightningElement {
  constructor(...args) {
    super(...args);
    this.currentNavigationItem = 'mainpage';
    this.navigationItems = navigationItems;
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
  sel: "example-app",
  apiVersion: 66
});
export default __lwc_component_class_internal;