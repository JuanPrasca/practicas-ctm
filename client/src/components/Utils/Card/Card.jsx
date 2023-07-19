import { Link } from 'react-router-dom'

const Card = ({ title, titleColor, description, buttonText, bgColor, link, scale, img = 'https://unavatar.io/iLestar', subtitle, shadow, lione, litwo, cardUser = false, cardHome = false, cardVisits = false, alt = 'foto user', borderColor, roundedLink, info1, info2, icon, isButton = false, showModal, modalClicked, transition = 'transition-none', userID }) => {
  const userInfo = () => {
    modalClicked(userID)
  }

  return (
    <div className={`${bgColor} bg-opacity-60 ${shadow} flex h-auto flex-col justify-center rounded-2xl px-3 py-2 ${scale && 'scale-90'}`}>
      <header className={`${cardUser && 'flex flex-row'}`}>
        {cardUser && <img className="h-[4.5rem] w-[4.5rem] rounded-full" src={img} alt={alt} />}
        <div className={`${cardUser && 'flex w-min flex-auto flex-col py-3'}`}>
          <h2 className={`text-${titleColor} mb-1 break-words text-center text-lg font-semibold `}>{title}</h2>
          <h3 className="break-all text-center text-xs font-medium">{subtitle}</h3>
        </div>
      </header>
      <div className="mx-auto w-4/5 pt-2">
        {cardVisits && (
          <section className="flex flex-col">
            <span className="py-1 text-center text-sm">
              {info1} - {info2}
            </span>
            <section className="flex items-center justify-center gap-2 font-medium">
              <span>Estado</span>
              {icon}
            </section>
          </section>
        )}
        {(cardHome || cardVisits) && <p className="text-center text-sm">{description}</p>}
        {cardUser && (
          <>
            <section className="flex flex-row justify-between pb-1">
              <span className="font-semibold">Programa de Formación</span>
              <span>{lione}</span>
            </section>
            <section className="flex flex-row justify-between">
              <span className="font-semibold">Ficha</span>
              <span>{litwo}</span>
            </section>
          </>
        )}
      </div>
      {link && (
        <Link to={link} className={`${roundedLink} border-1 ${borderColor} mx-auto mt-4 w-fit justify-self-end p-1.5 text-xs font-semibold ${transition}`}>
          {buttonText}
        </Link>
      )}
      {isButton && showModal && (
        <button className={`${roundedLink} border-1 ${borderColor} mx-auto mt-4 w-fit justify-self-end p-1.5 text-xs font-semibold`} onClick={userInfo}>
          {buttonText}
        </button>
      )}
    </div>
  )
}

export { Card }
