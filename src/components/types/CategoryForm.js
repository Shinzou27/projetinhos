import Input from '../form/Input'
import styles from './CategoryForm.module.css'

function CategoryForm({ projectData, setProjectData }) {
    function handleChange(e) {
        if(e.target.type == 'checkbox') {
            setProjectData({ ...projectData, [e.target.name]: e.target.checked })
        }
        setProjectData({ ...projectData, [e.target.name]: e.target.value })
        console.log(projectData);
    }
    const Talent =
        <div>
            <Input
                type="text"
                text="Insira o nome do personagem"
                name="item_name"
                placeholder="Nome do personagem"
                handleOnChange={handleChange}
                value={projectData.item_name ? projectData.item_name : ''}
            />
            <div className={styles.level}>
                <Input
                    type="text"
                    text="Auto-Attack atual"
                    name="aa_1"
                    placeholder=""
                    handleOnChange={handleChange}
                    value={projectData.aa_1 ? projectData.aa_1 : ''}
                />
                <Input
                    type="text"
                    text="Auto-Attack desejado"
                    name="aa_2"
                    placeholder=""
                    handleOnChange={handleChange}
                    value={projectData.aa_2 ? projectData.aa_2 : ''}
                />
            </div>
            <div className={styles.level}>
                <Input
                    type="text"
                    text="Habilidade Elemental atual"
                    name="skill_1"
                    placeholder=""
                    handleOnChange={handleChange}
                    value={projectData.skill_1 ? projectData.skill_1 : ''}
                />
                <Input
                    type="text"
                    text="Habilidade Elemental desejado"
                    name="skill_2"
                    placeholder=""
                    handleOnChange={handleChange}
                    value={projectData.skill_2 ? projectData.skill_2 : ''}
                />
            </div>
            <div className={styles.level}>
                <Input
                    type="text"
                    text="Explosão Elemental atual"
                    name="ult_1"
                    placeholder=""
                    handleOnChange={handleChange}
                    value={projectData.ult_1 ? projectData.ult_1 : ''}
                />
                <Input
                    type="text"
                    text="Explosão Elemental desejado"
                    name="ult_2"
                    placeholder=""
                    handleOnChange={handleChange}
                    value={projectData.ult_2 ? projectData.ult_2 : ''}
                />
            </div>
            <Input
                type="number"
                text="Quantidade de livros T4 atual"
                name="books"
                placeholder="Lembre-se de também contabilizar os livros azuis."
                handleOnChange={handleChange}
                value={projectData.books ? projectData.books : ''}
            />
        </div>

    const Roll =
        <div>
            <Input
                type="text"
                text="Insira o nome do personagem"
                name="item_name"
                placeholder="Nome do personagem"
                handleOnChange={handleChange}
                value={projectData.item_name ? projectData.item_name : ''}
            />
            <Input
                type="date"
                text="Insira a data de fim do banner desejado"
                name="end_date"
                placeholder="Insira a data de fim do banner desejado"
                handleOnChange={handleChange}
                value={projectData.end_date ? projectData.end_date : ''}
            />
            <Input
                type="number"
                text="Insira sua quantidade atual de Primogems"
                name="current_primos"
                placeholder="Insira sua quantidade atual de Primogems"
                handleOnChange={handleChange}
                value={projectData.current_primos ? projectData.current_primos : ''}
            />
            <Input
                type="checkbox"
                text="Bênção da Lua Nova ativa"
                name="welkin"
                placeholder=""
                handleOnChange={handleChange}
                value={projectData.welkin ? projectData.welkin : ''}
            />
        </div>;

    const Weapon =
        <div>
            <Input
                type="text"
                text="Insira o nome do personagem"
                name="item_name"
                placeholder="Nome do personagem"
                handleOnChange={handleChange}
                value={projectData.item_name ? projectData.item_name : ''}
            />
            <Input
                type="number"
                text="Quantidade de materiais T5 atual"
                name="weaponMaterial_t5"
                placeholder=""
                handleOnChange={handleChange}
                value={projectData.weaponMaterial_t5 ? projectData.weaponMaterial_t5 : ''}
            />
            <Input
                type="number"
                text="Quantidade de materiais T4 atual"
                name="weaponMaterial_t4"
                placeholder=""
                handleOnChange={handleChange}
                value={projectData.weaponMaterial_t4 ? projectData.weaponMaterial_t4 : ''}
            />
            <Input
                type="number"
                text="Quantidade de materiais T3 atual"
                name="weaponMaterial_t3"
                placeholder=""
                handleOnChange={handleChange}
                value={projectData.weaponMaterial_t3 ? projectData.weaponMaterial_t3 : ''}
            />
            <Input
                type="number"
                text="Quantidade de materiais T2 atual"
                name="weaponMaterial_t2"
                placeholder=""
                handleOnChange={handleChange}
                value={projectData.weaponMaterial_t2 ? projectData.weaponMaterial_t2 : ''}
            />
        </div>

    const Ascension =
        <div>
            <Input
                type="text"
                text="Insira o nome do personagem"
                name="item_name"
                placeholder="Nome do personagem"
                handleOnChange={handleChange}
                value={projectData.item_name ? projectData.item_name : ''}
            />
            <Input
                type="number"
                text="Insira o nível atual"
                name="char_level_current"
                placeholder="Nível do personagem"
                handleOnChange={handleChange}
                value={projectData.char_level_current ? projectData.char_level_current : ''}
            />
            <Input
                type="number"
                text="Insira o nível desejado"
                name="char_level_future"
                placeholder="Nível do personagem"
                handleOnChange={handleChange}
                value={projectData.char_level_future ? projectData.char_level_future : ''}
            />
            <Input
                type="number"
                text="Insira a ascensão atual"
                name="char_asc_current"
                placeholder="Ascensão atual"
                handleOnChange={handleChange}
                value={projectData.char_asc_current ? projectData.char_asc_current : ''}
            />
            <Input
                type="number"
                text="Insira a ascensão desejada"
                name="char_asc_future"
                placeholder="Ascensão desejada"
                handleOnChange={handleChange}
                value={projectData.char_asc_future ? projectData.char_asc_future : ''}
            />
        </div>
    const categories = [Talent, Roll, Weapon, Ascension];
    return (
        <>
            {categories[projectData.category.id - 1]}
        </>
    );
}

export default CategoryForm;