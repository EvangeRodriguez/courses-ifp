import { Link } from 'react-router-dom'
import Das from '../components/Das/Das'
import Daw from '../components/Daw/Daw'
import Dj from '../components/Dj/Dj'
import Edi from '../components/Edi/Edi'
import Gad from '../components/Gad/Gad'
import Hb from '../components/Hb/Hb'
import Iabg from '../components/Iabg/Iabg'
import Mkp from '../components/Mkp/Mkp'
import Pro from '../components/Pro/Pro'
import Rea from '../components/Rea/Rea'
import Smx from '../components/Smx/Smx'
import Tyl from '../components/Tyl/Tyl'
import Vdj from '../components/Vdj/Vdj'

 
 

export default function HomePage() {
  return (
    <div>
      <div className= "a3d">  <Link to='/a3d'>
        A3D - ANIMACIÓN 3D y JUEGOS INTERACTIVOS
            </Link>
            </div>
      <div className= "afi"> <Link to='/afi'>
      AI - ADMINISTRACIÓN Y FINANZAS
            </Link>
      </div>
      <div className= "asir"> 
      <Link to='/asir'>
      ASIR - ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS EN RED CON PERFIL CIBERSEGURIDAD
            </Link>
            </div>
      <div className= "cae"> <Link to='/cae'>
        CAE - AUXILIAR DE ENFERMERÍA
            </Link></div>
      <div className= "ci"> <Link to='/ci'>
      CI - COMERCIO INTERNACIONAL
            </Link></div>
      <div className= "dam">   <Link to='/dam'>
        DAM - DESARROLLO DE APLICACIONES MULTIPLATAFORMA
            </Link></div>
      <div className= "das"> <Das /></div>
      <div className= "daw"> <Daw /></div>
      <div className= "dj"> <Dj /></div>
      <div className= "edi"> <Edi /></div>
      <div className= "gad"> <Gad /></div>
      <div className= "hb"> <Hb /></div>
      <div className= "iabg"> <Iabg /></div>
      <div className= "mkp"> <Mkp /></div>
      <div className= "pro"> <Pro /></div>
      <div className= "rea"> <Rea /></div>
      <div className= "smx"> <Smx /></div>
      <div className= "tyl"> <Tyl /></div>
      <div className= "vdj"> <Vdj /></div>

    </div>
  )
}
