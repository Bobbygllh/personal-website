import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./projects.html";
import { allProjectItems } from './items';
const RENDER_LWCS = {
  caseApi: false,
  lwcOSS: false
};
class Projects extends LightningElement {
  constructor(...args) {
    super(...args);
    this.projectObjs = allProjectItems;
    this.isSelectionShown = false;
    this.renderLwcs = JSON.parse(JSON.stringify(RENDER_LWCS));
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
  }
  /*LWC compiler v8.22.4*/
}
_registerDecorators(Projects, {
  publicMethods: ["reset"],
  track: {
    renderLwcs: 1
  },
  fields: ["projectObjs", "isSelectionShown"]
});
const __lwc_component_class_internal = _registerComponent(Projects, {
  tmpl: _tmpl,
  sel: "-projects",
  apiVersion: 66
});
export default __lwc_component_class_internal;