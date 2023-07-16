 import { Link } from "react-router-dom";

 const Nnav=()=>{


    return(
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen w-4/12 rounded-lg inline-block">
      <div className="bg-white grid grid-cols-6 grid-rows-6 h-screen gap-y-2 w-screen inline-block ">
        <div className="bg-indigo-950 row-span-6 text-white  inline-block">
          <div className="bg-indigo-950 h-14 w-100 mt-1 shadow-xl shadow-pink-500 ">
            <span className="flex justify-center py-5 text-3xl">analdy</span>
          </div>
          <div className="h-14 w-100 px-2 py-10"><span className="py-20 ">PROFILE</span></div>
          <ul className="w-full space-y-4 py-5 px-8 ml-10 text-xs">
            <li className="hover:bg-pink-500 cursor-pointer h-8 w-full px-6 py-1 hover:rounded-s-3xl rounded-3xl shadow-md shadow-pink-400"><Link to="/todo">Todo</Link></li>
            <li className="hover:bg-pink-500 cursor-pointer h-8 w-full px-6 py-1 hover:rounded-s-3xl rounded-3xl shadow-md shadow-pink-400"><Link to="/Currency">Curreny Converter</Link></li> 
             <li className="hover:bg-pink-500 cursor-pointer h-8 w-full px-6 py-2 hover:rounded-s-3xl rounded-3xl shadow-md shadow-pink-400">Payments</li>
            <li className="hover:bg-pink-500 cursor-pointer h-8 w-full px-6 py-2 hover:rounded-s-3xl rounded-3xl shadow-md shadow-pink-400">Admin</li>
            <li className="hover:bg-pink-500 cursor-pointer h-8 w-full px-6 py-2 hover:rounded-s-3xl rounded-3xl shadow-md shadow-pink-400">Records</li>
            <li className="hover:bg-pink-500 cursor-pointer h-8 w-full px-6 py-2 hover:rounded-s-3xl rounded-3xl shadow-md shadow-pink-400">CRM Data</li>
          </ul>
          <div className="h-14 px-2 py-8"><span className="shadow-md shadow-pink-500">Help</span></div>
          <ul className="w-full space-y-3 py-2 px-8 ml-10 text-xs">
             <li className="hover:bg-pink-500 cursor-pointer h-8 w-full px-6 py-2 hover:rounded-s-3xl rounded-xl shadow-md shadow-pink-400"></li>
             <Link to="/about">About Us </Link> 
             <li className="hover:bg-pink-500 cursor-pointer h-8 w-full px-6 py-2 hover:rounded-s-3xl rounded-xl shadow-md shadow-pink-400">Report</li> 
          </ul>
        </div>
        
        
      </div>
    </div>
    // <div>
    //   <ul>
    //   <li><Link to="about">About</Link></li>
    //     <li><Link to="contact">Contact</Link></li>
    //   </ul>
    // </div>
    );
 }
 export default Nnav
 