
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import SobreNosotros from '../pages/SobreNosotros.jsx'
import InkYaque from '../pages/InkYaque.jsx'
import TotoTattoo from '../pages/TotoTattoo.jsx'
import McPiercing from '../pages/McPiercing.jsx'
import Iris_Gems from '../pages/Iris_Gems.jsx'
import Contacto from '../pages/Contacto.jsx'
import Error404 from '../pages/Error404.jsx'
import MasInfo from '../pages/Info.jsx'



function AppRoutes(logged) {
   
  return (
    
        <Routes>
            <Route path='/' element={<Home logged={logged}/>} />

            <Route path='/sobre-nosotros' element={<SobreNosotros />} />
            <Route path='/inkYaque' element={<InkYaque />} />
            <Route path='/totoTattoo' element={<TotoTattoo />} />
            <Route path='/McPiercing' element={<McPiercing />} />
            <Route path='/irisGems' element={<Iris_Gems />} />
            <Route path="/info" element={<MasInfo />} />

            <Route path='/contacto' element={<Contacto />} />
            
            <Route path='*' element={<Error404 />} /> {/* 404 cambiar elemento*/}
        </Routes>
    
    
  )
}

export default AppRoutes