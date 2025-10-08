import stylesheet0 from "example/sharedStyles";

function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".project-image" + shadowSelector + " {width: 20%;}a" + shadowSelector + " {color: inherit;}.project-item" + shadowSelector + " {background: transparent;font-size: 1.1rem;width: 350px;max-width: 100%;padding: 0.5rem 0.875rem 0.875rem;border-radius: 6px;}.project-detail-item" + shadowSelector + " {transition: .2s all ease-out;text-decoration: none;border-bottom: none !important;opacity: .6;}.project-item:hover" + shadowSelector + " {background: rgba(79, 79, 79, 0.067);}a.item:hover" + shadowSelector + " {opacity: 1;}";
  /*LWC compiler v8.22.4*/
}
export default [stylesheet0, stylesheet];