export default function Index() {
  return (
    <main className="flex h-[100vh] w-[100vw] justify-center items-center bg-[rgb(10,10,10)] font-sans">
      <section className="grid grid-cols-2 text-white items-center">
        <div className="flex flex-col pl-24 w-full justify-start items-center">
          <h1 className="tracking-wide font-bold text-[4.768rem] w-1/2">
            Rodrigo Toyama.
          </h1>
          <h2 className="tracking-wide w-1/2 pl-2">Front-end Developer</h2>
        </div>
        <div className="flex w-full justify-center items-center mr-24">
          <h2 className="tracking-wide font-bold text-[4.768rem] w-1/2">
            FOTO
          </h2>
        </div>
      </section>
    </main>
  );
}
