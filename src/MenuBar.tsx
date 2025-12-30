const MENU_ITEMS = ['Welcome', 'Code', 'Teaching', 'Music', 'Writing', 'Contact']

function MenuBar({selected, setSelected} : {selected: number, setSelected: (page: number) => void}) {

    function MenuBarItem({title, index, isSelected, setSelected}: {title: string, index: number, isSelected: boolean, setSelected: (page: number) => void}) {
        return (
            <button className='menu-bar-item' onClick={() => setSelected(index)}>{title}</button>
        )
    }    

    return (
        <div className='menu-bar'>        
        {MENU_ITEMS.map((name, index) => <MenuBarItem title={name} index={index} isSelected={index === selected} setSelected={setSelected}></MenuBarItem>)}
        </div>
    )
}

export default MenuBar;