import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amphitryon - Políticas de Privacidad",
  description: "Conoce nuestras Políticas de Privacidad.",
};

export default function page() {
  return (
    <div
      className={`flex flex-col gap-y-7 text-justify lg:flex lg:gap-12`}
    >
      <h1 className="text-2xl leading-relaxed lg:text-3xl xl:text-4xl">
        AVISO DE PRIVACIDAD
      </h1>
      <p className="text-base leading-relaxed lg:text-lg xl:text-xl">
        De conformidad con lo establecido en la Ley Federal de Protección de
        Datos Personales en Posesión de los Particulares (la &quot;Ley&quot;) y
        su Reglamento, The Maestros Digital Experience SA de CV (en adelante,
        &quot;The Maestros&quot; o la &quot;Empresa&quot;), con domicilio en
        Palmas 781 S1, Lomas de Chapultepec, CP 11000, CDMX México, es
        responsable del tratamiento de sus datos personales.
      </p>

      <p className="text-base leading-relaxed lg:text-lg xl:text-xl">
        1. Datos recabados
      </p>
      <p className="text-base leading-relaxed lg:text-lg xl:text-xl">
        The Maestros podrá recabar y tratar los siguientes datos personales, de
        manera enunciativa más no limitativa:
      </p>
      <ol className="list-decimal pl-4 text-base leading-relaxed lg:pl-6 lg:text-lg xl:pl-12 xl:text-xl">
        <li className="pb-6">
          Datos de identificación: nombre, dirección, teléfono, correo
          electrónico.
        </li>
        <li className="pb-6">
          Datos laborales: cargo, área de trabajo, empresa a la que pertenece.
        </li>
        <li className="pb-6">Datos de facturación: RFC, domicilio fiscal.</li>
        <li className="pb-6">
          Datos de navegación: dirección IP, cookies, comportamiento en el sitio
          web.
        </li>
      </ol>

      <p className="text-base leading-relaxed lg:text-lg xl:text-xl">
        2. Finalidades del tratamiento
      </p>
      <p className="text-base leading-relaxed lg:text-lg xl:text-xl">
        Los datos personales proporcionados serán utilizados para las siguientes
        finalidades:
      </p>
      <ol className="list-decimal pl-4 text-base leading-relaxed lg:pl-6 lg:text-lg xl:pl-12 xl:text-xl">
        <li className="pb-6">Proveer los servicios y productos requeridos.</li>
        <li className="pb-6">Facturación y cobranza.</li>
        <li className="pb-6">
          Comunicaciones comerciales, promocionales y publicitarias.
        </li>
        <li className="pb-6">
          Realizar estudios de mercado y análisis de satisfacción.
        </li>
      </ol>

      <p className="text-base leading-relaxed lg:text-lg xl:text-xl">
        3. Transferencia de datos
      </p>
      <p className="text-base leading-relaxed lg:text-lg xl:text-xl">
        The Maestros podrá transferir sus datos personales a terceros nacionales
        o extranjeros, siempre que dicha transferencia sea necesaria para el
        cumplimiento de las finalidades previamente mencionadas y se cumplan los
        requisitos establecidos en la Ley y su Reglamento.
      </p>

      <p className="text-base leading-relaxed lg:text-lg xl:text-xl">
        4. Ejercicio de derechos ARCO
      </p>
      <p className="text-base leading-relaxed lg:text-lg xl:text-xl">
        Usted tiene derecho de Acceso, Rectificación, Cancelación y Oposición
        (derechos ARCO) respecto a sus datos personales. Para ejercer dichos
        derechos, así como para limitar el uso o divulgación de sus datos,
        deberá enviar una solicitud por escrito al correo electrónico [correo
        electrónico] o a través de un escrito dirigido a [dirección].
      </p>

      <p className="text-base leading-relaxed lg:text-lg xl:text-xl">
        5. Cambios al aviso de privacidad
      </p>
      <p className="text-base leading-relaxed lg:text-lg xl:text-xl">
        The Maestros se reserva el derecho de efectuar en cualquier momento
        modificaciones o actualizaciones al presente aviso de privacidad, para
        la atención de novedades legislativas, políticas internas o nuevos
        requerimientos para la prestación u ofrecimiento de nuestros servicios o
        productos. Dichas modificaciones estarán disponibles en nuestro sitio
        web [sitio web].
      </p>

      <p className="text-base leading-relaxed lg:text-lg xl:text-xl">
        6. Consentimiento
      </p>
      <p className="text-base leading-relaxed lg:text-lg xl:text-xl">
        Al proporcionar sus datos personales a The Maestros, usted acepta los
        términos y condiciones del presente aviso de privacidad.
      </p>
    </div>
  );
}
