import Head from "next/head";
import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Workshop Fotografía</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <!-- Section 1 --> */}
      <section className="px-2 py-20 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Taller online de </span>
                  <span className="block text-gray-600 xl:inline">
                    fotografía gastronómica
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  Aprende las mejores herramientas para llevar tus fotos al
                  siguiente nivel.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLScvbxww7DriX9Aa0xRzTzXB8tWdITEy1pqtWEQxqBFsFNSHRQ/viewform?usp=sf_link">
                    <a className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-gray-600 rounded-md sm:mb-0 hover:bg-gray-700 sm:w-auto">
                      Subscribite
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src="/cover.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* !-- Section 2 --> */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold tracking-tight text-center">
            Que vas a aprender
          </h2>
          <p className="mt-2 text-lg text-center text-gray-600">
            Estos son los contenidos que veremos en el transcurso del taller
          </p>
          <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
            <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
              <h4 className="text-xl font-medium text-gray-700">
                Antes de la toma
              </h4>
              <p className="text-base text-center text-gray-500">
                Armado de referencias / bocetos
              </p>
              <p className="text-base text-center text-gray-500">
                Moodboard - Planificación - Identidad
              </p>
              <p className="text-base text-center text-gray-500">
                Uso de props (vajilla y elementos que acompañan)
              </p>
              <p className="text-base text-center text-gray-500">
                Fondos - Estilos
              </p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <h4 className="text-xl font-medium text-gray-700">
                Configuraciones
              </h4>
              <p className="text-base text-center text-gray-500">Celular</p>
              <p className="text-base text-center text-gray-500">Cámara</p>
              <p className="text-base text-center text-gray-500">
                Exposición - aspectos básicos
              </p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <h4 className="text-xl font-medium text-gray-700">Iluminación</h4>
              <p className="text-base text-center text-gray-500">Luz natural</p>
              <p className="text-base text-center text-gray-500">
                Características de la luz
              </p>
              <p className="text-base text-center text-gray-500">
                Modificadores - Esquemas de luz
              </p>

              <p className="text-base text-center text-gray-500">Dark food</p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <h4 className="text-xl font-medium text-center text-gray-700">
                Planos de enfoque y Composición
              </h4>
              <p className="text-base text-center text-gray-500">
                ¿Cuáles son y cómo saber cual usar?
              </p>
              <p className="text-base text-center text-gray-500">
                Reglas y armonía en las imágenes
              </p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <h4 className="text-xl font-medium text-gray-700">Estilsimo</h4>
              <p className="text-base text-center text-gray-500">
                Tips para alimentos y bebidas
              </p>
              <p className="text-base text-center text-gray-500">
                Presentación de alimentos ante cámara
              </p>
            </div>
            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <h4 className="text-xl font-medium text-gray-700">
                Edición fotográfica
              </h4>
              <p className="text-base text-center text-gray-500">
                Introducción
              </p>
              <p className="text-base text-center text-gray-500">
                Herramientas básicas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section 3 --> */}
      <section className="relative py-16 bg-white min-w-screen animation-fade animation-delay">
        <div className="container px-0 px-8 mx-auto sm:px-12 xl:px-5 w-screen">
          <h2 className="text-5xl font-bold tracking-tight text-center">
            Preguntas frecuentes
          </h2>

          <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 className="text-lg font-bold text-gray-700 sm:text-xl md:text-2xl">
              ¿Cuándo se hace?
            </h3>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              Dividimos el taller en 4 encuentros en ZOOM de entre 1:30hs y 2hs
              de duración
            </p>
            <ul className="list-disc mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              <li>Lunes 15/03 - 19hs (Horario de Argentina)</li>
              <li>Lunes 22/03 - 19hs</li>
              <li>Lunes 29/03 - 19hs</li>
              <li>Lunes 05/04 - 19hs</li>
            </ul>
          </div>
          <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 className="text-lg font-bold text-gray-700  sm:text-xl md:text-2xl">
              ¿Qué incluye la inscripción?
            </h3>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              Además del acceso al taller online en ZOOM vas a contar con:
            </p>
            <ul className="mt-2 list-disc text-base text-gray-600 sm:text-lg md:text-normal">
              <li>Todo el material de lo visto en cada clase</li>
              <li>Grupo de correcciones</li>
              <li>Material de apoyo</li>
            </ul>
          </div>
          <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 className="text-lg font-bold text-gray-700  sm:text-xl md:text-2xl">
              ¿Qué medios de pagos tienen?
            </h3>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              Para Argentina
            </p>
            <ul className="mt-2 list-disc text-base text-gray-600 sm:text-lg md:text-normal">
              <li>Transferencia bancaria</li>
              <li>MercadoPago</li>
            </ul>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              Para el exterior
            </p>
            <ul className="mt-2 list-disc text-base text-gray-600 sm:text-lg md:text-normal">
              <li>Western Union</li>
            </ul>
          </div>
          <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 className="text-lg font-bold text-gray-700  sm:text-xl md:text-2xl">
              ¿Como me inscribo?
            </h3>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              Llená{" "}
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScvbxww7DriX9Aa0xRzTzXB8tWdITEy1pqtWEQxqBFsFNSHRQ/viewform?usp=sf_link">
                <a className="text-gray-800 pointer">este </a>
              </Link>
              formulario y te enviaremos los datos para reservar tu lugar en el
              taller
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Section 4 --> */}
      <section className="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
        <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
          <div className=" mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
            <div className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-gray-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black text-center border-0 border-gray-200 sm:text-3xl md:text-4xl">
                Taller de fotografía gastronómica
              </h3>
              <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                  $3.500
                </p>
              </div>
              <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                Aprende las mejores herramientas para llevar tus fotos al
                siguiente nivel
              </p>
              <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg
                    className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Acceso completo a las 4 clases
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg
                    className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Material de apoyo
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg
                    className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Grupo de correcciones
                </li>
              </ul>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScvbxww7DriX9Aa0xRzTzXB8tWdITEy1pqtWEQxqBFsFNSHRQ/viewform?usp=sf_link">
                <a className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-gray-600 border rounded-md cursor-pointer hover:bg-gray-700 hover:border-gray-700 hover:text-white focus-within:bg-gray-700 focus-within:border-gray-700 focus-within:text-white sm:text-base md:text-lg">
                  Subscribite
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-5xl font-bold tracking-tight text-center">
              ¡Te esperamos!
            </h2>
            <p className="mt-2 text-lg text-center text-gray-600">
              Ojalá puedas sumarte
            </p>
          </div>
          <div className="flex lg:flex-row flex-col -m-4 ">
            <div className="p-4 lg:w-1/2 w-full items-center justify-center">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-2/3 h-56 object-cover object-center mb-4"
                  src="/valenti.jpeg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Florencia Valenti
                  </h2>
                  <h3 className="text-gray-500 mb-3">Fotógrafa</h3>
                </div>
              </div>
            </div>

            <div class="p-4 lg:w-1/2 w-full">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-2/3 h-56 object-cover object-center mb-4"
                  src="/dipardo.jpeg"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Florencia Dipardo
                  </h2>
                  <h3 class="text-gray-500 mb-3">Fotógrafa</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
