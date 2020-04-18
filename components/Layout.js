
import Link from "next/link";

const layoutStyle = {
    paddingLeft: 20,
    paddingRight: 20,
    background: 'rgb(25,26,26)',
    height: '100%',
    width: '100%',
};


const Header = () => (
    <div className="menu" style={{ display: 'flex', flexDirection: 'row', width: '100%', color: 'white', height: '32%' }}>
        <Link href="/">
            <a><h5 style={{ color: 'white' }}>Tracker</h5></a>
        </Link>
        <Link href="/news">
            <a><h5 style={{ color: 'white' }}>News</h5></a>
        </Link>
        <Link href="/Gaming">
            <a><h5 style={{ color: 'white' }}>Gaming</h5></a>
        </Link>
        <Link href="/Stock Market">
            <a><h5 style={{ color: 'white' }}>Stock Market</h5></a>
        </Link>
        <Link href="/Free Courses">
            <a><h5 style={{ color: 'white' }}>Free Courses</h5></a>
        </Link>
        <style jsx>{`
           a {
               padding-left:20px;
           }
        `}</style>
    </div>
)

export default function Layout({ children }) {
    return (
        <div style={layoutStyle}>
            <Header />
            {children}
        </div>
    )
}