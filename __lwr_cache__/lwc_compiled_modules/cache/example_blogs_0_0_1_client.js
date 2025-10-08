import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./blogs.html";
import { blogItems } from './individualblogs';
class Blogs extends LightningElement {
  constructor(...args) {
    super(...args);
    this.blogObjs = blogItems;
    this.isSelectionShown = false;
    this.renderLwcs = {
      apexBP: false,
      lwcBP: false
    };
    this.handleHistoryChange = event => {
      console.log('Browser history state changed via popstate event.');
    };
  }
  reset() {
    this.isSelectionShown = true;
  }
  connectedCallback() {
    // Register the popstate event listener when the component is connected
    window.addEventListener('popstate', this.handleHistoryChange);
  }
  disconnectedCallback() {
    // Remove the event listener when the component is disconnected
    window.removeEventListener('popstate', this.handleHistoryChange);
  }
  connectedCallback() {
    this.isSelectionShown = true;
  }
  handleNavigate(event) {
    const choice = event.currentTarget.dataset.item;
    this.renderLwcs[choice] = true;
    this.isSelectionShown = false;
    // this.handleNavItemClick();
  }
  /*LWC compiler v8.22.4*/
}
_registerDecorators(Blogs, {
  publicMethods: ["reset"],
  track: {
    renderLwcs: 1
  },
  fields: ["blogObjs", "isSelectionShown", "handleHistoryChange"]
});
const __lwc_component_class_internal = _registerComponent(Blogs, {
  tmpl: _tmpl,
  sel: "-blogs",
  apiVersion: 66
});
export default __lwc_component_class_internal;