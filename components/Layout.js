
import Link from "next/link";

const layoutStyle = {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
    border: '1px solid #DDD',
    background: 'rgb(25,27,27)',
    height: '100%'
};


const Header = () => (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '30%', color: 'white', height: '32%' }}>
        <Link href="/">
            <a><h5 style={{ color: 'white' }}>Tracker</h5></a>
        </Link>
        <Link href="/news">
            <a><h5 style={{ color: 'white' }}>News</h5></a>
        </Link>
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