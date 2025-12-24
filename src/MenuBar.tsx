const MENU_ITEMS = ['About', 'Code', 'Writing', 'Teaching', 'Music', 'Contact']

function MenuBar({selected} : {selected: number}) {

    function MenuBarItem({title, isSelected}: {title: string, isSelected: boolean}) {
        return (
            <button className='menu-bar-item'>{title}</button>
        )
    }    

    return (
        <div className='menu-bar'>        
        {MENU_ITEMS.map((name, index) => <MenuBarItem title={name} isSelected={index === selected}></MenuBarItem>)}
        </div>
    )
}

export default MenuBar;