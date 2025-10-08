import stylesheet0 from "example/sharedStyles";

function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".client-credentials" + shadowSelector + " {width: 80%}.integration-user" + shadowSelector + " {width: 90%}";
  /*LWC compiler v8.22.4*/
}
export default [stylesheet0, stylesheet];