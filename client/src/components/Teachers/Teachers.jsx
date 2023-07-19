import { React } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

import { Siderbar } from '../Siderbar/Sidebar'
import { Footer } from '../Footer/Footer'
import { Search } from '../Search/Search'

export const Teachers = () => {
  const colorsOddRow = [
    {
      hrcolor: 'border-purple-400',
      sidecolor: 'bg-purple-400',
      linkcolor: 'bg-purple-600',
    },
    {
      hrcolor: 'border-aqua',
      sidecolor: 'bg-aqua',
      linkcolor: 'bg-emerald-400',
    },
    {
      hrcolor: 'border-salmon/75',
      sidecolor: 'bg-salmon/75',
      linkcolor: 'bg-salmon',
    },
    {
      hrcolor: 'border-third',
      sidecolor: 'bg-third',
      linkcolor: 'bg-sky-400',
    },
  ]
  const colorsRowPair = [
    {
      hrcolor: 'border-third',
      sidecolor: 'bg-third',
      linkcolor: 'bg-sky-400',
    },
    {
      hrcolor: 'border-salmon/75',
      sidecolor: 'bg-salmon/75',
      linkcolor: 'bg-salmon',
    },
    {
      hrcolor: 'border-aqua',
      sidecolor: 'bg-aqua',
      linkcolor: 'bg-emerald-400',
    },
    {
      hrcolor: 'border-purple-400',
      sidecolor: 'bg-purple-400',
      linkcolor: 'bg-purple-600',
    },
  ]

  const instructores = [
    {
      nombre: 'Guillermo Stiven Benjumea Morales',
      rol: 'Instructor Seguimiento',
    },
    {
      nombre: 'Stiven Blandón Urrego',
      rol: 'Instructor Líder',
    },
    {
      nombre: 'Juan Carlos Prasca',
      rol: 'Instructor Seguimiento',
    },
    {
      nombre: 'Jairo Elías Villalba Redondo',
      rol: 'Instructor Seguimiento',
    },
    {
      nombre: 'Juan Guillermo Gomez Zapata',
      rol: 'Instructor Líder',
    },
    {
      nombre: 'Kevin Alexis Chica Ruiz',
      rol: 'Instructor Seguimiento',
    },
    {
      nombre: 'Cristian David Bedoya Torres',
      rol: 'Instructor Líder',
    },
    {
      nombre: 'Angie Tatiana Mosquera Arco',
      rol: 'Instructor Líder',
    },
    {
      nombre: 'Lorena Quiceno Giraldo',
      rol: 'Instructor Líder',
    },
  ]

  const allColors = []

  for (let i = 0; i < Math.max(instructores.length, colorsOddRow.length + colorsRowPair.length); i++) {
    allColors.push(colorsOddRow[i % colorsOddRow.length])
    allColors.push(colorsRowPair[i % colorsRowPair.length])
  }

  return (
    <main className="flex flex-row min-h-screen">
      <Siderbar />
      <section className="relative grid flex-auto w-min grid-rows-3-10-75-15">
        <header className="grid place-items-center">
          <Search searchFilter />
        </header>
        <section className="grid grid-cols-4 px-12 py-6 gap-y-2 gap-x-10">
          {allColors.map(
            (color, index) =>
              instructores[index] && (
                <div className="rounded-[2rem] grid grid-cols-2-90-10 shadow-2xl h-[8.3rem]" key={index} {...color}>
                  <div className="flex flex-col w-4/5 gap-2 mx-auto my-auto">
                    <h6 className="font-medium text-center text-[0.9rem]">{instructores[index].nombre}</h6>
                    <hr className={`font-bold ${color.hrcolor} border-1`} />
                    <p className="text-[0.8rem] font-light text-center">{instructores[index].rol}</p>
                  </div>
                  <div className={`w-full h-full rounded-r-[2rem] ${color.sidecolor}`}>
                    <div className={`w-full h-[3rem] rounded-tr-[2rem] text-white text-xl ${color.linkcolor}`}>
                      <Link>
                        <FaAngleRight className="h-full py-3 mx-auto" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
          )}
        </section>
        <Footer />
      </section>
    </main>
  )
}
