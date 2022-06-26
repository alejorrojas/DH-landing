import { render, screen } from "@testing-library/react";
import App, { Data } from "../pages/index";

const mockUsers: Data[] = [{id: "1", name: "John", avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/634.jpg"}, {id: "2", name: "Sick", avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/634.jpg"}]

describe("Index with SSR", ()=>{
    it("Should render a list of users", ()=>{
        render(<App data={mockUsers}/>)
        expect((screen.getAllByAltText("avatar")).length).toBe(2)
    })
})