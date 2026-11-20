import { useState } from 'react'

function FormulaireAjout({ onAjouter }) {
    const [titre, setTitre] = useState('')

    function gererSoumission(event) {
        event.preventDefault()
        const titreNettoye = titre.trim() // Enlève les espaces vides au début et à la fin
        if (titreNettoye === '') return // On ignore si c'est vide

        onAjouter(titreNettoye)
        setTitre('') // On vide le champ
    }

    return (
        <form className="formulaire" onSubmit={gererSoumission}>
            <input
                type="text"
                value={titre}
                onChange={(event) => setTitre(event.target.value)}
                placeholder="Ex. : Réviser les hooks"
            />
            <button
                type="submit"
                className="principal"
                disabled={titre.trim() === ''} // Désactivé si le champ est vide
            >
                Ajouter
            </button>
        </form>
    )
}

export default FormulaireAjout