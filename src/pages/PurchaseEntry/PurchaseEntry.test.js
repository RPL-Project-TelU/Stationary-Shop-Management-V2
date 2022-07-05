import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import PurchaseEntry from './PurchaseEntry';

describe ("Test Purchase Entry Components", () => {
  test("render the form Purchase Entry with 1 button", async () => {
    render(<PurchaseEntry/>);
    const buttonList = await screen.findAllByRole("button");
    console.log(buttonList);
    expect(buttonList).toHaveLength(1);
  });
});
  test("name product field should accept nama produk",async () => {
    render(<PurchaseEntry/>);
    const product_name = await screen.findByPlaceholderText("Nama Produk");
    userEvent.type(product_name, "pnghps")
    expect(product_name.value).not.toMatch("Penghapus");
  });
  test("name product field should accept nama produk",async () => {
    render(<PurchaseEntry/>);
    const product_name = await screen.findByPlaceholderText("Nama Produk");
    userEvent.type(product_name, "Penghapus")
    expect(product_name.value).toMatch("Penghapus");
  });
  test("quantity product field should accept Total produk",async () => {
    render(<PurchaseEntry/>);
    const quantity_product = await screen.findByPlaceholderText("Total Product");
    console.log(quantity_product);
    userEvent.type(quantity_product, "empat buah")
    expect(quantity_product.value).not.toMatch("4");
  });
  test("quantity product field should accept Total produk",async () => {
    render(<PurchaseEntry/>);
    const quantity_product = await screen.findByPlaceholderText("Total Product");
    console.log(quantity_product);
    userEvent.type(quantity_product, "4")
    expect(quantity_product.value).toMatch("4");
  });
  test("price product field should accept Harga produk",async () => {
    render(<PurchaseEntry/>);
    const price = await screen.findByPlaceholderText("Harga");
    userEvent.type(price, "7000")
    expect(price.value).not.toMatch("7.000");
  });
  test("price product field should accept Harga produk",async () => {
    render(<PurchaseEntry/>);
    const price = await screen.findByPlaceholderText("Harga");
    userEvent.type(price, "7.000")
    expect(price.value).toMatch("7.000");
  });
  test("vendor name field should accept vendor produk",async () => {
    render(<PurchaseEntry/>);
    const vendor_name = await screen.findByPlaceholderText("Nama Vendor");
    userEvent.type(vendor_name, "puma")
    expect(vendor_name.value).not.toMatch("Puma");
  });
  test("vendor name field should accept vendor produk",async () => {
    render(<PurchaseEntry/>);
    const vendor_name = await screen.findByPlaceholderText("Nama Vendor");
    userEvent.type(vendor_name, "Puma")
    expect(vendor_name.value).toMatch("Puma");
  });
  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<button onClick={handleClick}>Simpan</button>);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });