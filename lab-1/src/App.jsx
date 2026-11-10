import './App.css'
import ProfileCard from './components/ProfileCard.jsx'

const technologies = ['React', 'JavaScript', 'Vite']

function App() {
  return (
    <main className="page-shell">
      <ProfileCard
        name="Borshchuk Illia"
        group="KN3"
        technologies={technologies}
      />
    </main>
  )
}

export default App

