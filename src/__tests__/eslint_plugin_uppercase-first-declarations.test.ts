import { ESLintUtils } from "@typescript-eslint/utils";
import { rule } from "../rules/eslint_plugin_uppercase-first-declarations";

const ruleTester = new ESLintUtils.RuleTester({
  parser: "@typescript-eslint/parser",
});

ruleTester.run("uppercase-first-declarations", rule, {
  valid: [{ code: "function FN() {}" }],
  invalid: [{ code: "function fn() {}", errors: [{ messageId: "uppercase" }] }],
});
