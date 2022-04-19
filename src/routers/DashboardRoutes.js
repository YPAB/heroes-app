import { Routes, Route } from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';
import { HeroeScreen } from "../components/heroe/HeroeScreen";

export const DashboardRoutes = () => {
  return (
    <>
    <Navbar/>

    <Routes>
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="heroe" element={<HeroeScreen />} />

        <Route path="/" element={<MarvelScreen />} />
      </Routes>
        
    
    </>
  )
}
