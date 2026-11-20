function Tache({ id, titre, terminee, onBasculer, onSupprimer }) {
    const classe = terminee ? 'tache terminee' : 'tache'

    return (
        <li className={classe}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                    type="checkbox"
                    checked={terminee}
                    onChange={() => onBasculer(id)}
                />
                <span className="titre">{titre}</span>
            </div>
            <button className="danger" onClick={() => onSupprimer(id)}>
                Supprimer
            </button>
        </li>
    )
}

export default Tache