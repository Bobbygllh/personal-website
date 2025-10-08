import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./apexBP.html";
class caseApi extends LightningElement {
  constructor(...args) {
    super(...args);
    this.data = `{
        subject: "Subject",
        description: "Description",
        status: "Status",
        origin: "Origin",
        name: "SuppliedName",
        phone: "SuppliedPhone",
        email: "SuppliedEmail"
}`;
  }
  /*LWC compiler v8.22.4*/
}
_registerDecorators(caseApi, {
  fields: ["data"]
});
const __lwc_component_class_internal = _registerComponent(caseApi, {
  tmpl: _tmpl,
  sel: "example-apex-bp",
  apiVersion: 66
});
export default __lwc_component_class_internal;