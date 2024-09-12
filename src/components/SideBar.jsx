export default function SideBar(props) {

    const { handleToggleModal } = props

    return (
        <div className="sidebar">
            <div className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>The Brutal Martian Landscape</h2>
                <div>
                    <p> Desciption </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, ullam mollitia saepe ipsam odio sapiente dicta totam pariatur sint sed voluptates quisquam eveniet officia fugit sequi distinctio similique amet laboriosam.</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}