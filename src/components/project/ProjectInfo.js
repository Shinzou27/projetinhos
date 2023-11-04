import genshin from '../../assets/genshin_data.json'
function ProjectInfo({ project }) {
    console.log(genshin.data[23]);
    function parseDate(date) {
        const toFormat = new Date(date);
        let day;
        let month;
        toFormat.getUTCDate() < 10 ? day = "0" + toFormat.getUTCDate() : day = toFormat.getUTCDate();
        toFormat.getMonth() + 1 < 10 ? month = "0" + toFormat.getMonth() + 1 : month = toFormat.getMonth() + 1;
        return day + "/" + month + "/" + toFormat.getFullYear();
    }
    function calcTalentResin(current, planned) {
        if (current == 1) {
            current = 2;
            //need better logic
        }
        const runCost = 20;
        const upgradeCost = [3, 9, 21, 39, 66, 102, 156, 264, 408];
        const runPrize = 9;
        return parseInt(((upgradeCost[parseInt(planned) - 2]) - (upgradeCost[parseInt(current) - 1])) / runPrize) * runCost;
    }
    function rollsMeanNeeded(end_date, welkin, current_primos) {
        const today = new Date(Date('now'));
        const endDate = new Date(end_date)
        const daysLeft = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
        const minRollsGuaranteed = welkin ? 47 * 160 / 30 : 30 * 160 / 30;
        return parseInt(((152 * 160) - (current_primos)) / daysLeft);
    }
    function weaponMaterialsNeeded(t2, t3, t4, t5) {
        const runCost = 20;
        const upgradeCost = 5 + (14 * 3) + (14 * 3 * 3) + (6 * 3 * 3 * 3);
        const currentMats = t2 + (t3 * 3) + (t4 * 3 * 3) + (t5 * 3 * 3 * 3);
        const runPrize = 12;
        return parseInt(((upgradeCost - currentMats) / runPrize) * runCost);
    }
    function calcAscensionResin(level_current, level_future, asc_current, asc_future) {
        if (level_current == 1) {
            level_current = 20;
            //need better logic
        }
        if (asc_current == 0) {
            asc_current = 1;
            //need better logic
        }
        const levels =   [20, 40, 50, 60, 70, 80, 90];
        const expCost =  [6, 34, 63, 105, 164, 244, 415];
        const bossCost = [0, 2, 6, 14, 26, 46];

        const expNeeded = expCost[levels.indexOf(parseInt(level_future))] - expCost[levels.indexOf(parseInt(level_current))];
        const bossNeeded = bossCost[parseInt(asc_future)-1] - bossCost[parseInt(asc_current)-1];

        const expRunPrize = 7;
        const bossRunPrize = 2.5;
        
        const expResin = parseInt(expNeeded / expRunPrize) * 20;
        const bossResin = parseInt(bossNeeded / bossRunPrize) * 40;
        return expResin + bossResin;
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
                    <span>Resina necessária: </span>
                    {
                        calcTalentResin(project.aa_1, project.aa_2)
                        + calcTalentResin(project.skill_1, project.skill_2)
                        + calcTalentResin(project.ult_1, project.ult_2)
                        - project.books
                    }
                </p>
            </div>
        </>

    const Roll =
        <>
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
            </div>
            <hr />
            <div>
                <p>
                    <span> Média necessária: </span>
                    {rollsMeanNeeded(project.end_date, project.welkin, project.current_primos)}
                </p>
            </div>
        </>;

    const Weapon =
        <>
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
            <hr />
            <div>
                <p>
                    <span>Resina necessária: </span> {weaponMaterialsNeeded(
                        parseInt(project.weaponMaterial_t2),
                        parseInt(project.weaponMaterial_t3),
                        parseInt(project.weaponMaterial_t4),
                        parseInt(project.weaponMaterial_t5)
                    )}
                </p>
            </div>
        </>

    const Ascension =
        <>
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
            <hr />
            <div>
                <p>
                    <span>Resina necessária: </span>
                    {
                        calcAscensionResin(
                            project.char_level_current,
                            project.char_level_future,
                            project.char_asc_current,
                            project.char_asc_future
                        )
                    }
                </p>
            </div>
        </>
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