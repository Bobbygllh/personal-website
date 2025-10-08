import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./blogs.html";
import { blogItems } from './individualblogs';
const RENDER_LWCS = {
  apexBP: false,
  lwcBP: false
};
class Blogs extends LightningElement {
  constructor(...args) {
    super(...args);
    this.blogObjs = blogItems;
    this.isSelectionShown = false;
    this.renderLwcs = JSON.parse(JSON.stringify(RENDER_LWCS));
    this.handleHistoryChange = event => {
      console.log('Browser history state changed via popstate event.');
    };
  }
  reset() {
    this.isSelectionShown = true;
    this.renderLwcs = JSON.parse(JSON.stringify(RENDER_LWCS));
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