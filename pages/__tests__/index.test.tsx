import React from "react"
import { render, fireEvent } from "../../test/testUtils"
import { Home } from "../index"

describe("Home page", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Home />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText("Test Button"))
    expect(window.alert).toHaveBeenCalledWith("With typescript and Jest")
  })
})
