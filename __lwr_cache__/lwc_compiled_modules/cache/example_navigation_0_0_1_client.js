import _tmpl from "./navigation.html";
import { LightningElement, registerComponent as _registerComponent } from 'lwc';
class Navigation extends LightningElement {
  handleNavItemClick(event) {
    const choice = event.currentTarget.dataset.item;
    event.preventDefault();
    this.dispatchEvent(new CustomEvent('categorychange', {
      detail: choice,
      bubbles: true
    }));
  }
  /*LWC compiler v8.22.4*/
}
const __lwc_component_class_internal = _registerComponent(Navigation, {
  tmpl: _tmpl,
  sel: "-navigation",
  apiVersion: 66
});
export default __lwc_component_class_internal;