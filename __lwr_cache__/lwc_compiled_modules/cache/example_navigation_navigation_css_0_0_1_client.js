function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".nav" + shadowSelector + " {padding: 2rem;width: 100%;display: grid;grid-template-columns: auto max-content;box-sizing: border-box;}.nav" + shadowSelector + " img" + shadowSelector + " {margin-bottom: 0;}.nav" + shadowSelector + " a" + shadowSelector + " {cursor: pointer;text-decoration: none;color: inherit;transition: opacity 0.2s ease;opacity: 0.6;outline: none;font-size: 1.4em;}.nav" + shadowSelector + " a:hover" + shadowSelector + " {opacity: 1;text-decoration-color: inherit;}.nav" + shadowSelector + " .right" + shadowSelector + " {display: grid;grid-gap: 1.2rem;grid-auto-flow: column;justify-content: flex-end;}.nav" + shadowSelector + " .left" + shadowSelector + " {display: grid;grid-gap: 1.2rem;grid-auto-flow: column;padding-left: 6rem;}.nav" + shadowSelector + " .right" + shadowSelector + " > *" + shadowSelector + " {margin: auto;}.github-image" + shadowSelector + " {width: 9%;}.initials-image" + shadowSelector + " {width: 15%;}";
  /*LWC compiler v8.22.4*/
}
export default [stylesheet];