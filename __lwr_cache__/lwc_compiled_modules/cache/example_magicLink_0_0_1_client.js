import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./magicLink.html";
class MagicLink extends LightningElement {
  constructor(...args) {
    super(...args);
    this.link = void 0;
    this.picture = void 0;
    this.label = void 0;
  }
  /*LWC compiler v8.22.4*/
}
_registerDecorators(MagicLink, {
  publicProps: {
    link: {
      config: 0
    },
    picture: {
      config: 0
    },
    label: {
      config: 0
    }
  }
});
const __lwc_component_class_internal = _registerComponent(MagicLink, {
  tmpl: _tmpl,
  sel: "example-magic-link",
  apiVersion: 66
});
export default __lwc_component_class_internal;