import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='courses'>
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
        CAE - CUIDADOS AUXILIARES DE ENFERMERÍA
            </Link></div>
      <div className= "ci"> <Link to='/ci'>
      CI - COMERCIO INTERNACIONAL
            </Link></div>
      <div className= "dam">   <Link to='/dam'>
        DAM - DESARROLLO DE APLICACIONES MULTIPLATAFORMA
            </Link></div>
      <div className= "das">   <Link to='/das'>
        DAS - DOCUMENTACIÓN y ADMINISTRACIÓN  SANITARIA
            </Link></div>
      <div className= "daw"> 
      <Link to='/daw'>
        DAW - DESARROLLO DE APLICACIONES WEB
            </Link>
      </div>
      <div className= "dj"> 
      <Link to='/dj'>
        DJ - VIDEO DISC-JOCKY Y SONIDO
            </Link>
      </div>
      <div className= "edi"> <Link to='/edi'>
        EDI - EDUCACIÓN INFANTIL
            </Link></div>
      <div className= "gad">   <Link to='/gad'>
        GAD - GESTIÓN ADMINISTRATIVA
            </Link> </div>
      <div className= "hb">   <Link to='/hb'>
        HB - HIGIENE BUCODENTAL
            </Link></div>
      <div className= "iabg">   <Link to='/iabg'>
        IABG - INTELIGENCIA ARTIFICIAL Y BIG DATA 
            </Link> </div>
      <div className= "mkp">  <Link to='/mkp'>
        MKP - MARKETING Y PUBLICIDAD
            </Link></div>
      <div className= "pro">  <Link to='/pro'>
        PRO - PRODUCCIÓN DE AUDIOVISUALES Y ESPECTÁCULOS
            </Link></div>
      <div className= "rea">      <Link to='/rea'>
        REA - REALIZACIÓN DE PROYECTOS AUDIOVISUALES Y ESPECTÁCULOS
            </Link></div>
      <div className= "smx">  <Link to='/smx'>
             SMX - SISTEMAS MICROINFORMÁTICOS Y RED
            </Link></div>
      <div className= "tyl">    <Link to='/tyl'>
         TYL - TRANSPORTE Y LOGISTICA
            </Link></div>
      <div className= "vdj"> <Link to='/vdj'>
          VDJ - DESARROLLO DE APLICACIONES MULTIPLATAFOMA CON PERFIL VIDEOJUEGO Y OCIO DIGITAL   </Link></div>

    </div>
  )
}
