import Link from "next/link";

const NavLinks = () => {
    return (
        <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
              <li className="text-gray-600  hover:text-blue-600">
               <Link href='/' >
               Home
               </Link>
               </li>
              <li className="text-gray-600  hover:text-blue-600">
               <Link href='/services' >
               Services
               </Link>
               </li>
              <li className="text-gray-600  hover:text-blue-600">
               <Link href='/products' >
               Products
               </Link>
               </li>
              <li className="text-gray-600  hover:text-blue-600">
               <Link href='/users' >
               Users
               </Link>
               </li>
              <li className="text-gray-600  hover:text-blue-600">
               <Link href='/signup' >
               Sign Up
               </Link>
               </li>
              <li className="text-gray-600  hover:text-blue-600">
               <Link href='/login' >
               Login
               </Link>
               </li>
             
            </ul>
    );
};

export default NavLinks;