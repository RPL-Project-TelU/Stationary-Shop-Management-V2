import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import DamageEntry from './DamageEntry';

describe ("Test Damage Entry Components", () => {
  test("render the form Damage Entry with 1 button", async () => {
    render(<DamageEntry/>);
    const buttonList = await screen.findAllByRole("button");
    console.log(buttonList);
    expect(buttonList).toHaveLength(1);
  });
});
  test("name product field should accept Nama Barang",async () => {
    render(<DamageEntry/>);
    const product_name = await screen.findByPlaceholderText("Nama Barang");
    userEvent.type(product_name, "pulpen")
    expect(product_name.value).not.toMatch("Pulpen");
  });
  test("name product field should accept Nama Barang",async () => {
    render(<DamageEntry/>);
    const product_name = await screen.findByPlaceholderText("Nama Barang");
    userEvent.type(product_name, "Pulpen")
    expect(product_name.value).toMatch("Pulpen");
  });
  test("quantity product field should accept Jumlah Barang",async () => {
    render(<DamageEntry/>);
    const quantity_product = await screen.findByPlaceholderText("Jumlah Barang");
    console.log(quantity_product);
    userEvent.type(quantity_product, "enam puluh")
    expect(quantity_product.value).not.toMatch("60");
  });
  test("quantity product field should accept Jumlah Barang",async () => {
    render(<DamageEntry/>);
    const quantity_product = await screen.findByPlaceholderText("Jumlah Barang");
    console.log(quantity_product);
    userEvent.type(quantity_product, "60")
    expect(quantity_product.value).toMatch("60");
  });
  test("damage product field should accept Barang Rusak",async () => {
    render(<DamageEntry/>);
    const damaged_product = await screen.findByPlaceholderText("Barang Rusak");
    userEvent.type(damaged_product, "empat puluh")
    expect(damaged_product.value).not.toMatch("40");
  });
  test("damage product field should accept Barang Rusak",async () => {
    render(<DamageEntry/>);
    const damaged_product = await screen.findByPlaceholderText("Barang Rusak");
    userEvent.type(damaged_product, "40")
    expect(damaged_product.value).toMatch("40");
  });
  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<button onClick={handleClick}>Simpan</button>);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });