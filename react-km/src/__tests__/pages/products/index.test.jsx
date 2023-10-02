import "@testing-library/jest-dom";

import { Render, screen, within, fireEvent } from "@/__tests__/utils";

import App from "@/pages/products";

const productInput = [
  "input-product-name",
  "input-product-category",
  "input-product-image",
  "input-product-freshness",
  "input-product-description",
  "input-product-price",
  "btn-submit",
];

describe("Index Product Page", () => {
  beforeEach(() => {
    Render(<App />);
  });

  describe("Renders the page", () => {
    it("should render the form components", () => {
      const form = screen.getByLabelText("product-form");
      for (const input of productInput) {
        expect(within(form).getByLabelText(input)).toBeTruthy();
      }
    });

    it.skip("should render the table component", () => {
      // TODO: create test for table component
    });
  });

  //   describe("Input Validation", () => {
  //     //
  //     //
  //     //
  //   });

  describe("Action for Product", () => {
    it("render product name input and displays entered text", () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");
      fireEvent.change(productNameInput, {
        target: { value: "New Product" },
      });
      expect(productNameInput).toHaveValue("New Product");
    });

    it.skip("should show error message when some of the input is missing a value", () => {
      // TODO: should show error message when some of the input is missing a value
    });

    it.skip("should add new product when all input are filled", () => {
      // TODO: should add new product when all input are filled
    });

    it.skip("should display value on all input when click on the edit icon", () => {
      // TODO: should display value on all input when click on the edit icon
    });

    it.skip("should edit product", () => {
      // TODO: should edit product
    });

    it.skip("should delete product", () => {
      // TODO: should delete product
    });
  });
});
