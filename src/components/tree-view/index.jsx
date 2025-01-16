import MenuList from "./menu-list";



export default function TreeView({menus = []}){

    return (
        <div className="tree-view-container">
            <h1>Tree Menu List</h1>
           <MenuList list={menus} />
        </div>
    )
}