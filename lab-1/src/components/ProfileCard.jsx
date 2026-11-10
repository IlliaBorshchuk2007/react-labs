import { useState } from 'react'

function ProfileCard({ name, group, technologies }) {
  const [likes, setLikes] = useState(0)

  return (
    <article className="profile-card">
      <div className="profile-card__eyebrow">Про мене</div>
      <header className="profile-card__header">
        <div className="profile-card__avatar" aria-hidden="true">
          BI
        </div>
        <div>
          <h1>{name}</h1>
          <p className="profile-card__group">Група {group}</p>
        </div>
      </header>
      <section aria-labelledby="technologies-title">
        <h2 id="technologies-title">Хочу опанувати</h2>
        <ul className="technology-list">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </section>
      <button
        className="like-button"
        type="button"
        onClick={() => setLikes((currentLikes) => currentLikes + 1)}
      >
        <span aria-hidden="true">♥</span>
        Подобається
        <span className="like-button__count">{likes}</span>
      </button>
    </article>
  )
}

export default ProfileCard

