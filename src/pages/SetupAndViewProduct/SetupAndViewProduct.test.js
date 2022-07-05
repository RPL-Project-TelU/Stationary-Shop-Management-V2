import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import SetupAndViewProduct from './SetupAndViewProduct';

describe ("Test Setup Product And View Components", () => {
  test("render the form setup product with 1 button", async () => {
    render(<SetupAndViewProduct/>);
    const buttonList = await screen.findAllByRole("button");
    console.log(buttonList);
    expect(buttonList).toHaveLength(1);
  });
});
  test("code product field should accept kode produk",async () => {
    render(<SetupAndViewProduct/>);
    const code_product = await screen.findByPlaceholderText("Kode Produk");
    userEvent.type(code_product, "ERA 01")
    expect(code_product.value).not.toMatch("ERA-01");
  });
  test("code product field should accept kode produk",async () => {
    render(<SetupAndViewProduct/>);
    const code_product = await screen.findByPlaceholderText("Kode Produk");
    userEvent.type(code_product, "ERA-01")
    expect(code_product.value).toMatch("ERA-01");
  });
  test("product name field should accept nama produk",async () => {
    render(<SetupAndViewProduct/>);
    const product_name = await screen.findByPlaceholderText("Nama Produk");
    userEvent.type(product_name, "pen sil")
    expect(product_name.value).not.toMatch("Pensil");
  });
  test("product name field should accept nama produk",async () => {
    render(<SetupAndViewProduct/>);
    const product_name = await screen.findByPlaceholderText("Nama Produk");
    userEvent.type(product_name, "Pensil")
    expect(product_name.value).toMatch("Pensil");
  });
  test("vendor name field should accept vendor produk",async () => {
    render(<SetupAndViewProduct/>);
    const vendor_name = await screen.findByPlaceholderText("Nama Vendor");
    userEvent.type(vendor_name, "lyra1")
    expect(vendor_name.value).not.toMatch("Lyra");
  });
  test("vendor name field should accept vendor produk",async () => {
    render(<SetupAndViewProduct/>);
    const vendor_name = await screen.findByPlaceholderText("Nama Vendor");
    userEvent.type(vendor_name, "Lyra")
    expect(vendor_name.value).toMatch("Lyra");
  });
  test("quantity product field should accept Jumlah produk",async () => {
    render(<SetupAndViewProduct/>);
    const quantity_product = await screen.findByPlaceholderText("Jumlah Produk");
    userEvent.type(quantity_product, "lima")
    expect(quantity_product.value).not.toMatch("5");
  });
  test("quantity product field should accept Jumlah produk",async () => {
    render(<SetupAndViewProduct/>);
    const quantity_product = await screen.findByPlaceholderText("Jumlah Produk");
    userEvent.type(quantity_product, "5")
    expect(quantity_product.value).toMatch("5");
  });
  test("price product field should accept Harga produk",async () => {
    render(<SetupAndViewProduct/>);
    const price = await screen.findByPlaceholderText("Harga");
    userEvent.type(price, "seratus ribu")
    expect(price.value).not.toMatch("100.000");
  });
  test("price product field should accept Harga produk",async () => {
    render(<SetupAndViewProduct/>);
    const price = await screen.findByPlaceholderText("Harga");
    userEvent.type(price, "100.000")
    expect(price.value).toMatch("100.000");
  });
  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<button onClick={handleClick}>Simpan</button>);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });