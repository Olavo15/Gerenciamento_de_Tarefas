import SliderBar from "../../components/SlidBar"
import Hearder from "../../components/Hearder"
import { Outlet } from "react-router-dom"

export default function Layout(){
    return(
      <div className="w-screen h-screen flex flex-col">
          <Hearder />
          <div className="flex w-full h-full">
            <div className="h-full">
              <SliderBar/>
            </div>
            <div className="flex flex-col w-full py-4  gap-5 px-10 p-2 ">
              <Outlet/>
            </div>
          </div>
      </div>
    )
}