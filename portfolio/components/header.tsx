import './styles/header.css';

export default function Headerbox() {

    return (

        <div className="topbarContainer">

            <div className="headerbox" >

                <div className="topHeaderContainer">
                    <span className="headerTitle">Menu</span>
                </div>

                <div className="headerButtons">

                    <a className="headerButton" href="/">
                        <img className="svgFlip" width="40px" height="40px" src="/icons/home.svg" />
                    </a>

                    <a className="headerButton" href="projects">
                        <img className="svgFlip" width="40px" height="40px" src="/icons/book-bookmark.svg" />
                    </a>

                    <a className="headerButton" href="contacts">
                        <img className="svgFlip" width="40px" height="40px" src="/icons/user.svg" />
                    </a>


                </div>


            </div>


        </div>

    )
}