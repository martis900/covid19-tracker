
import Link from "next/link";

const layoutStyle = {
    background: 'rgb(25,26,26)',
    height: '100%',
    width: '100%',
};


const Header = () => (
    <div className="menu" style={{ display: 'flex', flexDirection: 'row', width: '100%', color: 'white' }}>
        <Link href="/">
            <a><h5 style={{ color: 'white' }}>Tracker</h5></a>
        </Link>
        <Link href="/news">
            <a><h5 style={{ color: 'white' }}>News</h5></a>
        </Link>
        <Link href="/gaming">
            <a><h5 style={{ color: 'white' }}>Gaming</h5></a>
        </Link>
        <Link href="/stocks">
            <a><h5 style={{ color: 'white' }}>Stock Market</h5></a>
        </Link>
        <Link href="/courses" >
            <div className="nav-item" style={{ position: 'relative', cursor: 'pointer' }}>
                <a ><h5 style={{ color: 'white' }}>Free Courses</h5></a>

                {/* <div className="dropdown">
                    <ul>
                        <li>Profile</li>
                        <li>Settings</li>
                    </ul>
                </div> */}
            </div>
        </Link>
        <style jsx>{`
            
        `}</style>
    </div>
)
//1
export default function Layout({ children }) {
    return (
        <div style={layoutStyle}>
            <Header />
            {children}
        </div>
    )
}