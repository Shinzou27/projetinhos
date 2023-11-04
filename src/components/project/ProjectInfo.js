import genshin from '../../assets/genshin_data.json'
function ProjectInfo({ project }) {
    console.log(genshin.data[23]);
    function parseDate(date) {
        const toFormat = new Date(date);
        let day;
        let month;
        toFormat.getDay() < 10 ? day = "0" + toFormat.getDay() : day = toFormat.getDay();
        toFormat.getMonth() < 10 ? month = "0" + toFormat.getMonth() : month = toFormat.getMonth();
        return day + "/" + month + "/" + toFormat.getFullYear();
    }
    function calcTalentResin(current, planned) {
        if (current == 1) {
            current = 2;
        }
        const runCost = 20;
        const upgradeCost = [3, 9, 21, 39, 66, 102, 156, 264, 408];
        const runPrize = 9;
        return parseInt(((upgradeCost[parseInt(planned) - 2]) - (upgradeCost[parseInt(current) - 1])) / runPrize) * runCost;
    }
    const Talent =
        <>
            <div>
                <p>
                    <span>Personagem: </span> {project.item_name}
                </p>
                <p>
                    <span>Nível do Auto-Attack: </span> {project.aa_1} <span>| Desejado: </span>{project.aa_2}
                </p>
                <p>
                    <span>Nível da Habilidade Elemental: </span> {project.skill_1} <span>| Desejado: </span>{project.skill_2}
                </p>
                <p>
                    <span>Nível da Explosão Elemental: </span> {project.ult_1} <span>| Desejado: </span>{project.ult_2}
                </p>
                <p>
                    <span>Quantidade de livros atual: </span> {project.books}
                </p>
            </div>
            <hr />
            <div>
                <p>
                    <span>Resina necessária: </span> {
                          calcTalentResin(project.aa_1, project.aa_2)
                        + calcTalentResin(project.skill_1, project.skill_2)
                        + calcTalentResin(project.ult_1, project.ult_2)
                        - project.books
                    }
                </p>
            </div>
        </>

    const Roll =
        <div>
            <p>
                <span>Personagem: </span> {project.item_name}
            </p>
            <p>
                <span>Data do fim do banner: </span> {parseDate(project.end_date)}
            </p>
            <p>
                <span>Possui bênção? </span> {project.welkin == true ? 'Sim' : 'Não'}
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
                <span>Personagem: </span> {project.item_name}
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