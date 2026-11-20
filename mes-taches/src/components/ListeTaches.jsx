function ListeTaches() {
    return (
        <ul className="liste-taches">
            <li className="tache terminee">
                <span className="titre">Comprendre les composants</span>
            </li>
            <li className="tache">
                <span className="titre">Passer des props</span>
            </li>
            <li className="tache">
                <span className="titre">Gérer l'état avec useState</span>
            </li>
        </ul>
    )
}

export default ListeTaches