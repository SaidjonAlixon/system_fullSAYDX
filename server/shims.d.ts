// Minimal shims for environments where TS can't resolve Node typings
// (Keeps editor/linter happy; runtime is unaffected.)

declare const process: any;

declare module "bcrypt" {
  const bcrypt: any;
  export default bcrypt;
}

