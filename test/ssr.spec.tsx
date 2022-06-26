import { Data } from "../pages"
import { getServerSideProps } from "../pages/index";
 
const userList: Data[] = [{id: "1", name: "John", avatar: "any"}]

describe("getServerSideProps", ()=>{
        //Mockeamos el pedido
        window.fetch = jest.fn(() =>
            Promise.resolve({
            json: () =>
                Promise.resolve(userList)
            })
          ) as jest.Mock

    it("Should return a list of users", async ()=>{
        const res = await getServerSideProps()
        expect(res).toEqual(
            expect.objectContaining({
              props: {
                data: userList
              }
            }))})
})