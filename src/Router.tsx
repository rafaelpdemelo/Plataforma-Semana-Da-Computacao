import { Route, Routes } from "react-router-dom";
import { Calendar } from "./components/Calendar";
import { Event } from "./pages/Event";
import { Subcribe } from "./pages/Subcribe";

export function Router (){
    return (
        <Routes>
           <Route path="/" element={<Subcribe/>}/> 
           <Route path="/event" element={<Event/>}/>
           <Route path="/event/lesson/:slug" element={<Event/>}/>
           <Route path="/event/cronograma" element={<Calendar />} />      
        </Routes>



    )
}