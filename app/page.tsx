import { mainColor } from '@/Colors';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-poppins min-h-screen bg-gray-100">
      <Navbar />
      <CTASection />
    </div>
  );
}

function Navbar() {
  return (
        <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
          <Logo />
          <Buttons />
        </div>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
       {/* </div><div className={` bg-[${mainColor}] p-[6px] rounded-md`}>  // this is not working  */}
      <div className={`bg-primary p-[6px] rounded-md`}>
      {/* <div> */}
        <DataObjectIcon sx={{ fontSize: 27,color:"white"}} />
      </div>
      <div className="flex gap-1 text-[19px]">
        <span className={`font-bold text-[${mainColor}]`}>Snippet</span>
        <span className="text-slate-600">Master</span>
      </div>
    </div>
  );
}

// function Buttons() {
//   return (
//     <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
//       <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition">
//         Sign In
//       </button>
//       <button className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition">
//         Sign Up
//       </button>
//     </div>
//   );
// }
//// /////// if below doen't work use above one
// function Buttons() {
//   return (
//     <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
//       <button className={`max-sm:w-full bg-[${mainColor}] p-[8px] text-sm text-white rounded-md`}>
//         Sign In
//       </button>
//       <button className={`text-sm  border border-[${mainColor}] text-[${mainColor}] hover:bg-[${mainColor}] hover:text-white p-[8px] px-6 rounded-md`}>
//         Sign Up
//       </button>
//     </div>
//   );
// }

function Buttons() {
  const {userId} = useAuth();
  return (
    <div className='max-sm:w-full'>
      {userId ? ( 
        <Link href="./my-notes">
          <button className={`max-sm:w-full bg-primary p-[8px] px-6 text-sm text-white rounded-md`}>
            Access To The Age
          </button>
        </Link>
      ) : 
      (
        <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">

        {/* <button style={{ backgroundColor: mainColor }} className="text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"> */}
        <button  className={`max-sm:w-full bg-primary p-[8px] px-6 text-sm text-white rounded-md`}>
          <Link href="/sign-in">Sign In</Link>
        </button>

        <Link href="/sign-up">
          <button className={`max-sm:w-full text-sm border border-primary text-primary hover:bg-primary hover:text-white p-[8px] px-6 rounded-md`}>
            Sign Up
          </button>
        </Link>
        </div> 
        
      )
      }

    </div>
  );
}


// function CTASection() {
//   return (
//     <div className="text-center max-w-3xl mx-auto mt-20">
//       <h2 className="text-3xl font-bold mb-4">
//         Organize your code snippets <span className="text-primary">Efficiently!</span>
//       </h2>
//       <p className="text-gray-600 mb-8">
//         With our advanced tagging and search features, you can quickly find the snippet you 
//         need, right when you need it. Spend less time searching for code and more time writing it.
//       </p>
//       <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition">
//          {`Let's get started!`}
//       </button>
//     </div>
//   );
// }
//////// if below one doesn't work use above's one

function CTASection(){
  return(
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-3xl text-center">
        Organize Your Code Snippets
        {/* <span className={`text-[${mainColor}]`}>Efficiently</span> */}
        <span style={{ color: mainColor }}> Efficiently</span>
      </h2>
      <p className='text-center text-sm w-[450px] max-sm:w-full text-slate-500'>
        With our advanced tagging and search features, you can quickly find the snippet you 
         need, right when you need it. Spend less time searching for code and more time writing it.
      </p>
      {/* <button  className={`text-[${mainColor}] block px-9 py-3 text-sm font-medium text-white transition focus:outline-none`} type='button'> */}
      <button style={{ backgroundColor: mainColor }}  className={` block px-9 py-3 text-sm font-medium text-white transition focus:outline-none`} type='button'>
        {`Let's get started`}
      </button>
    </div>
  );
}


// function CTASection() {
//   return (
//     <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
//       <h2 className="font-bold text-3xl text-center">
//         Organize Your Code Snippets
//         <span style={{ color: mainColor }}> Efficiently</span>
//       </h2>
//       <p className="text-center text-sm w-[450px] max-sm:w-full text-slate-500">
//         With our advanced tagging and search features, you can quickly find the snippet you 
//         need, right when you need it. Spend less time searching for code and more time writing it.
//       </p>
//       <button
//         style={{ backgroundColor: mainColor }}
//         className="block px-9 py-3 text-sm font-medium text-white transition focus:outline-none"
//         type="button"
//       >
//         {`Let's get started`}
//       </button>
//     </div>
//   );
// }


