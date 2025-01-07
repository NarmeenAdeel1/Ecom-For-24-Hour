import Link from 'next/link'; // Importing Link for client-side routing
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import HomeV1 from './page';
import HomeV2 from './homev2/page';
import About from './about/page';
import ProductList1 from './productlist1/page';
import ProductList2 from './productlist2/page';
import Cart from './cart/page';

export default function Header() {
  return (
    // <div className="w-[1440px] h-[132px] flex items-center justify-between py-4 px-6">
    //   <IoSearchOutline className="text-1x1 text-gray-600" />
    //   <h1 className="text-gray-800 text-center px-16 text-3xl font-clash text-clash-24">Avion</h1>

    //   <IoCartOutline className="absolute right-16 text-grey-600 text-2xl" />
    //   <RxAvatar className="absolute right-4 text-grey-600 text-2xl" />

    //   <hr className="my-4 border-t border-gray-400 " />

    //   {/* Use Next.js Link for client-side routing */}
    //   <Link href="/homev1">
    //   HomePage
    //   </Link>
    //   <Link href="/homev2">
    //   HomePage
    //   </Link>
    //   <Link href="/about">
    //   About
    //   </Link>
    //   <Link href="/product">
    //   ProductList1
    //   </Link>
    //   <Link href="/product2">
    //   ProductList2
    //   </Link>
    //   <Link href="/cart">
    //   Cart
    //   </Link>
    //   <Link href="/contact">
    //   Contact
    //   </Link>
    // </div>
    <div className='px-[13px]'>
      <div className='flex justify-between py-2 border-b border-grey-800'>
        <div className='p-4'><IoSearchOutline size={20} color="gray"/>
        </div>
        <div className=' font-clash text-clash-24'>Avion</div>
        <div className='flex justify-corner gap-4 p-4'><IoCartOutline size={24} color="gray" />
     <RxAvatar size={24} color="gray"/>
</div>
      </div>
      <div className='flex justify-center py-4 border-b border-grey-800 font-satoshi'>
        <ul className='flex gap-6 '>
          <li className="hover:text-purple-600 cursor-pointer">Plant pots</li>
          <li className="hover:text-purple-600 cursor-pointer">Ceramics</li>
          <li className="hover:text-purple-600 cursor-pointer">Tables </li>
          <li className="hover:text-purple-600 cursor-pointer">Chairs</li>
          <li className="hover:text-purple-600 cursor-pointer">Crockery</li>
          <li className="hover:text-purple-600 cursor-pointer">Tableware</li>
          <li className="hover:text-purple-600 cursor-pointer">Cutlery</li>
        </ul>
      </div>
      <div className='flex justify-center py-4 font-satoshi'>
        <ul className='flex gap-6'>
        <li><Link href="/" className="hover:text-purple-600 cursor-pointer">HomePageV1</Link></li>
<li><Link href="/homev2" className="hover:text-purple-600 cursor-pointer" >HomePageV2</Link></li>
<li><Link href="/about" className="hover:text-purple-600 cursor-pointer">About</Link></li>
<li><Link href="/productlist1" className="hover:text-purple-600 cursor-pointer">ProductList1</Link></li>
<li><Link href="/productlist2" className="hover:text-purple-600 cursor-pointer" >ProductList2</Link></li>
<li><Link href="/cart" className="hover:text-purple-600 cursor-pointer">Cart</Link></li>

        </ul>
      </div>
    </div>
  );
}
