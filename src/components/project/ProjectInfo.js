function ProjectInfo({ project }) {
    function parseDate(date) {
        const toFormat = new Date(date);
        let day;
        let month;
        toFormat.getDay() < 10 ? day = "0" + toFormat.getDay() : day = toFormat.getDay();
        toFormat.getMonth() < 10 ? month = "0" + toFormat.getMonth() : month = toFormat.getMonth();
        return day + "/" + month + "/" + toFormat.getFullYear();
    }
    const Talent =
        <div>
            <p>
                <span>Personagem </span> {project.item_name}
            </p>
            <p>
                <span>Nível do Auto-Attack: </span> {project.aa}
            </p>
            <p>
                <span>Nível da Habilidade Elemental: </span> {project.skill}
            </p>
            <p>
                <span>Nível da Explosão Elemental: </span> {project.ult}
            </p>
        </div>

    const Roll =
        <div>
            <p>
                <span>Personagem </span> {project.item_name}
            </p>
            <p>
                <span>Data do fim do banner: </span> {parseDate(project.end_date)}
            </p>
            <p>
                <span>Possui bênção? </span> {project.welkin}
            </p>
            <p>
                <span>Gemas atualmente: </span> {project.current_primos}
            </p>
        </div>;

    const Weapon =
        <div>
            <p>
                <span>Nome da Arma: </span> {project.item_name}
            </p>
            <p>
                <span>Itens T5: </span> {project.weaponMaterial_t5}
            </p>
            <p>
                <span>Itens T4: </span> {project.weaponMaterial_t4}
            </p>
            <p>
                <span>Itens T3: </span> {project.weaponMaterial_t3}
            </p>
            <p>
                <span>Itens T2: </span> {project.weaponMaterial_t2}
            </p>
        </div>

    const Ascension =
        <div>
            <p>
                <span>Nome do personagem: </span> {project.item_name}
            </p>
            <p>
                <span>Nível atual: </span> {project.char_level_current}
            </p>
            <p>
                <span>Nível desejado: </span> {project.char_level_future}
            </p>
            <p>
                <span>Ascensão atual: </span> {project.char_asc_current}
            </p>
            <p>
                <span>Ascensão desejada: </span> {project.char_asc_future}
            </p>
        </div>
    const categories = [Talent, Roll, Weapon, Ascension];
    return (
        <>
            <p>
                <span>Categoria: </span> {project.category.name}
            </p>
            {categories[project.category.id - 1]}
        </>
    );
}

export default ProjectInfo;