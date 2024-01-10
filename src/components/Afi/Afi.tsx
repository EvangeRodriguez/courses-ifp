import { Link } from 'react-router-dom'

export default function AfiInfo() {
  return (
    <div> 
    <h1>
        <Link to='https://www.ifp.es/grado-superior-administracion-y-finanzas' target='_blank'>
        ADMINISTRACIÓN Y FINANZAS
        </Link>
            </h1>
    <div className='info'> 
    <h2>Información </h2>
    <p>FALTA INFO!!!!! 
</p>
</div>
<div className='hora'>
<h2>Horario</h2>
<p>Presencial: Lunes a viernes de 8h a 14:30h </p>
<p>Semipresencial: Martes, Jueves y viernes de 18h a 21hs (3h cada día) </p>
</div>
</div>
  )
}
