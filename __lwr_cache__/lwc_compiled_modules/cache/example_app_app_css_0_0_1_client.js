import stylesheet0 from "example/sharedStyles";

function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".markdown-magic-link" + shadowSelector + " {display: inline-flex;align-items: center;background: #8882;transform: translateY(3px);line-height: 100%;color: var(--fg-light) !important;gap: .25rem;border-width: 0px !important;border-radius: .25rem;padding: .25rem .375rem;font-family: Roboto Condensed;transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function: cubic-bezier(.4, 0, .2, 1);transition-duration: .15s;}.markdown-magic-link:hover" + shadowSelector + " {background: #8883;color: var(--fg) !important;}.markdown-magic-link-image" + shadowSelector + " {display: inline-block;height: 1.1em;width: 1.1em;background-size: cover;background-repeat: no-repeat;background-position: center;border-radius: 2px;}.about-me-image" + shadowSelector + " {width: 40%}";
  /*LWC compiler v8.22.4*/
}
export default [stylesheet0, stylesheet];