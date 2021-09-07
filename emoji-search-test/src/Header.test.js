import { render, screen } from "@testing-library/react";
import Header from "./Header";

test('should render header', () => {
    render(<Header></Header>);
    const emojiSearch = screen.getByText(/Emoji Search/i);
    expect(emojiSearch).toBeInTheDocument();
})
