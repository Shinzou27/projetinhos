import Input from '../form/Input'

function Category({ id, projectData, setProjectData }) {
    function handleChange(e) {
        setProjectData({ ...projectData, [e.target.name]: e.target.value })
        console.log(projectData);
    }
    const Talent =
        <div>
            <Input
                type="text"
                text="Insira o nome do personagem"
                name="char_name"
                placeholder="Nome do personagem"
                handleOnChange={handleChange}
            />
            <p>Separe o nível atual da skill e o nível desejado por vírgula</p>
            <p>Ex.: 1, 10</p>
            <Input
                type="text"
                text="Nível do Auto-Attack"
                name="aa"
                placeholder=""
                handleOnChange={handleChange}
            />
            <Input
                type="text"
                text="Nível da Habilidade Elemental"
                name="skill"
                placeholder=""
                handleOnChange={handleChange}
            />
            <Input
                type="text"
                text="Nível da Explosão Elemental"
                name="ult"
                placeholder=""
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                text="Quantidade de livros T4 atual"
                name="books"
                placeholder="Lembre-se de também contabilizar os livros azuis."
                handleOnChange={handleChange}
            />
        </div>

    const Roll =
        <div>
                <Input
                    type="date"
                    text="Insira a data de fim do banner desejado"
                    name="end_date"
                    placeholder="Insira a data de fim do banner desejado"
                    handleOnChange={handleChange}
                />
                <Input
                    type="number"
                    text="Insira sua quantidade atual de Primogems"
                    name="current_primos"
                    placeholder="Insira sua quantidade atual de Primogems"
                    handleOnChange={handleChange}
                />
                <Input
                    type="checkbox"
                    text="Bênção da Lua Nova ativa"
                    name="welkin"
                    placeholder=""
                    handleOnChange={handleChange}
                />
        </div>;

    const Weapon =
        <div>
            <Input
                type="number"
                text="Quantidade de materiais T5 atual"
                name="weaponMaterial_t5"
                placeholder=""
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                text="Quantidade de materiais T4 atual"
                name="weaponMaterial_t4"
                placeholder=""
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                text="Quantidade de materiais T3 atual"
                name="weaponMaterial_t3"
                placeholder=""
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                text="Quantidade de materiais T2 atual"
                name="weaponMaterial_t2"
                placeholder=""
                handleOnChange={handleChange}
            />
        </div>

    const Ascension =
        <div>
            <Input
                type="text"
                text="Insira o nome do personagem"
                name="char_name"
                placeholder="Nome do personagem"
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                text="Insira o nível atual"
                name="char_level_current"
                placeholder="Nível do personagem"
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                text="Insira o nível desejado"
                name="char_level_future"
                placeholder="Nível do personagem"
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                text="Insira a ascensão atual"
                name="char_asc_current"
                placeholder="Ascensão atual"
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                text="Insira a ascensão desejada"
                name="char_asc_future"
                placeholder="Ascensão desejada"
                handleOnChange={handleChange}
            />
        </div>

    const BossItemLog =
        <div>
            BossItemLog
        </div>

    const categories = [Talent, Roll, Weapon, Ascension, BossItemLog];
    return (
        <>
            {categories[id]}
        </>
    );
}

export default Category;