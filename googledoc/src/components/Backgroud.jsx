const words = `hey whats your goal to day &#128512;`;


export default function Backgroud() {

  const date = new Date()
  let day = date.getDate();
  let month = date.getMonth()+1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`
  console.log(currentDate)


  return (

    <div className="h-screen w-full fixed z-[2] bg-zinc-900">
      <nav className="w-full py-10 flex justify-center text-zinc-600 font-semibold">
        Today {currentDate}
      </nav>
      <h1 className="font-semibold text-zinc-700 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  text-[5vw] leading-none tracking-tighter">
        {}
        hey ! whats your goal today <span className="opacity-5"> &#128512;</span>
      </h1>
    </div>
  );
}

