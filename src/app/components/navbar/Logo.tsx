import Link from 'next/link';

const Logo = () => {
    return (
        <div className="text-white text-3xl font-semibold cursor-pointer">
            <Link href="/">Öztürk <span className="text-sm">Acc</span></Link>
         </div>
    );              
}

export default Logo