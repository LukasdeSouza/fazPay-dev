/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import App from "../App";

test('demo', () => {
  expected(true).toBe(true)
})

test("Renders the main page", () => {
  render(<App />)
  expect(true).toBeTruthy()
})