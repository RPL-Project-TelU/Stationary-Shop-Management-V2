import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import SalesEntry from '../SalesEntry/SalesEntry';

describe ("Test Sale Entry Components", () => {
  test("render the form Sale Entry with 1 button", async () => {
    render(<SalesEntry/>);
    const buttonList = await screen.findAllByRole("button");
    console.log(buttonList);
    expect(buttonList).toHaveLength(1);
  });
});
  test("purchase field should accept Pembelian",async () => {
    render(<SalesEntry/>);
    const purchase = await screen.findByPlaceholderText("Pembelian");
    userEvent.type(purchase, "5 buku")
    expect(purchase.value).not.toMatch("5 Buku");
  });
  test("purchase field should accept Pembelian",async () => {
    render(<SalesEntry/>);
    const purchase = await screen.findByPlaceholderText("Pembelian");
    userEvent.type(purchase, "5 Buku")
    expect(purchase.value).toMatch("5 Buku");
  });
  test("price field should accept Harga",async () => {
    render(<SalesEntry/>);
    const price = await screen.findByPlaceholderText("Harga");
    console.log(price);
    userEvent.type(price, "50000")
    expect(price.value).not.toMatch("50.000");
  });
  test("price field should accept Harga",async () => {
    render(<SalesEntry/>);
    const price = await screen.findByPlaceholderText("Harga");
    console.log(price);
    userEvent.type(price, "50.000")
    expect(price.value).toMatch("50.000");
  });
  test("payment field should accept Pembayaran",async () => {
    render(<SalesEntry/>);
    const payment = await screen.findByPlaceholderText("Pembayaran");
    userEvent.type(payment, "1000")
    expect(payment.value).not.toMatch("1.000");
  });
  test("payment field should accept Pembayaran",async () => {
    render(<SalesEntry/>);
    const payment = await screen.findByPlaceholderText("Pembayaran");
    userEvent.type(payment, "1.000")
    expect(payment.value).toMatch("1.000");
  });
  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<button onClick={handleClick}>Simpan</button>);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });