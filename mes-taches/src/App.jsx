import { useState } from 'react' // <-- IMPORTANT : on importe useState
import Entete from './components/Entete.jsx'
import ListeTaches from './components/ListeTaches.jsx'
import Pied from './components/Pied.jsx'
import Carte from './components/Carte.jsx'
import Compteur from './components/Compteur.jsx'

// On renomme TACHES en TACHES_INITIALES
const TACHES_INITIALES = [
  { id: 1, titre: 'Installer Node.js et Vite', terminee: true },
  { id: 2, titre: 'Comprendre les composants', terminee: true },
  { id: 3, titre: 'Passer des données avec les props', terminee: false },
  { id: 4, titre: "Gérer l'état avec useState", terminee: false },
]

function App() {
  // On place la liste dans un état
  const [taches, setTaches] = useState(TACHES_INITIALES)

  // Fonction pour cocher/décocher une tâche
  function basculerTache(id) {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, terminee: !tache.terminee } : tache
      )
    )
  }

  // Fonction pour supprimer une tâche
  function supprimerTache(id) {
    setTaches(taches.filter((tache) => tache.id !== id))
  }

  return (
    <div className="app">
      <Entete titre="Mes tâches" sousTitre="Mon premier projet React" />

      <Carte titre="Compteur">
        <Compteur />
      </Carte>

      <Carte titre="Ma liste">
        {/* On passe les fonctions onBasculer et onSupprimer à ListeTaches */}
        <ListeTaches
          taches={taches}
          onBasculer={basculerTache}
          onSupprimer={supprimerTache}
        />
      </Carte>

      <Pied auteur="NAJDI MED NOURREDINE" />
    </div>
  )
}

export default App