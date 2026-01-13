import style from './TermsAndConditions.module.css'

function TermsAdnConditions() {
    return (
        <div className={style.containerPrinicipal}>

            <div className={style.content}>
                <p className={style.title}>TÉRMINOS Y CONDICIONES</p>
                <p>Última actualización: 13/1/2026</p>
                <p>El presente documento regula el acceso y uso de la aplicación web de TodoFood. Al registrarse, navegar o realizar pedidos a través de la App Web, el usuario acepta estos Términos y Condiciones.</p>
                <hr />
                <ol>
                    <li className={style.subtitle}>Identificación del establecimiento</li>
                    <p>TodoFood es una hamburguesería dedicada a la elaboración y venta de alimentos y bebidas para consumo en el local, retiro o entrega a domicilio, según disponibilidad.</p>

                    <hr />

                    <li className={style.subtitle}>Productos y servicios</li>
                    <ul>
                        <li className={style.list}>Todos los productos ofrecidos están sujetos a disponibilidad.</li>
                        <li className={style.list}>Las imágenes publicadas son ilustrativas y pueden diferir levemente del producto final.</li>
                        <li className={style.list}>TodoFood se reserva el derecho de modificar el menú, ingredientes, precios y promociones sin previo aviso.</li>
                    </ul>

                    <hr />

                    <li className={style.subtitle}>Precios y pagos</li>
                    <ul>
                        <li className={style.list}>Los precios se expresan en moneda local e incluyen los impuestos correspondientes, salvo que se indique lo contrario.</li>
                        <li className={style.list}>Se aceptan los métodos de pago habilitados en el local o plataformas digitales asociadas.</li>
                        <li className={style.list}>TodoFood se reserva el derecho de rechazar pagos que no cumplan con los requisitos establecidos.</li>
                    </ul>

                    <hr />

                    <li className={style.subtitle}>Pedidos y entregas</li>
                    <ul>
                        <li className={style.list}>El tiempo de preparación y entrega es estimado y puede variar según la demanda, ubicación y factores externos.</li>
                        <li className={style.list}>TodoFood no se responsabiliza por retrasos ocasionados por causas ajenas al establecimiento.</li>
                        <li className={style.list}>Es responsabilidad del cliente proporcionar datos correctos para la entrega.</li>
                    </ul>

                    <hr />

                    <li className={style.subtitle}>Cambios, cancelaciones y reclamos</li>
                    <ul>
                        <li className={style.list}>Una vez confirmado el pedido, no se aceptan cancelaciones ni devoluciones, salvo error comprobable por parte de TodoFood.</li>
                        <li className={style.list}>Cualquier reclamo deberá realizarse dentro de un plazo razonable tras recibir el pedido.</li>
                        <li className={style.list}>TodoFood evaluará cada caso y determinará la solución correspondiente.</li>
                    </ul>

                    <hr />

                    <li className={style.subtitle}>Consumo y alergias</li>
                    <ul>
                        <li className={style.list}>Algunos productos pueden contener o estar en contacto con alérgenos como gluten, lácteos, huevo, frutos secos u otros.</li>
                        <li className={style.list}>El cliente es responsable de informar cualquier alergia o restricción alimentaria antes de realizar el pedido.</li>
                        <li className={style.list}>TodoFood no se hace responsable por reacciones alérgicas no informadas previamente.</li>
                    </ul>

                    <hr />

                    <li className={style.subtitle}>Responsabilidad</li>
                    <ul>
                        <li className={style.list}>TodoFood garantiza la correcta manipulación y preparación de los alimentos conforme a normas sanitarias vigentes.</li>
                        <li className={style.list}>No se hace responsable por el mal uso o conservación del producto una vez entregado.</li>
                        
                    </ul>

                    <hr />

                    <li className={style.subtitle}>Uso de datos personales</li>
                    <ul>
                        <li className={style.list}>Los datos personales proporcionados por los clientes serán utilizados únicamente para la gestión de pedidos y atención al cliente.</li>
                        <li className={style.list}>TodoFood se compromete a no compartir dicha información con terceros, salvo obligación legal.</li>
                        
                    </ul>

                    <hr />

                    <li className={style.subtitle}>Modificaciones de los términos</li>
                    <p>TodoFood se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigencia desde su publicación.</p>

                    <hr />

                    <li className={style.subtitle}>Legislación aplicable</li>
                    <p>Estos Términos y Condiciones se rigen por las leyes vigentes del país donde opera TodoFood. Cualquier controversia será sometida a los tribunales competentes.</p>
                </ol>
            </div>
            
        </div>
    )
}   

export default TermsAdnConditions 