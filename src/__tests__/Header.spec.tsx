import { render, screen, act, getByText } from "@testing-library/react";
import { Header } from "../components/Header/Header";

describe("Component render test", () => {
  it("Header", async () => {
    render(<Header />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Extrato")).toBeInTheDocument();
    expect(screen.getByText("Área Pix")).toBeInTheDocument();
    expect(screen.getByText("Cartão de crédito")).toBeInTheDocument();
    await act(async () => {
      await screen.findByText("Home");
      await screen.findByText("Extrato");
      await screen.findByText("Área Pix");
      await screen.findByText("Cartão de crédito");
    });
  });
});
