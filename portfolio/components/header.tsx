import './styles/header.css';

export default function Headerbox() {

    return (

        <div className="topbarContainer">

            <div className="headerbox" >

                <div className="topHeaderContainer">
                    <span className="headerTitle">Menu</span>
                </div>

                <div className="headerButtons">

                    <a className="headerButton" href="#">
                        Home
                    </a>

                    <a className="headerButton" href="#">
                        Projects
                    </a>

                    <a className="headerButton" href="#">
                        Contact
                    </a>


                </div>


            </div>


        </div>

    )
}