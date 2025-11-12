"use client"

export default function FilterTab({filterBy, setFilterBy, length}) {

    const options = ['', 'New', 'Pending', 'Success'] 

    return(
        <>
      <div className="block w-full overflow-hidden md:w-max">
        <nav>
          <ul role="tablist" className="relative flex flex-row gap-x-2">
            {options.map((item, index) => 
            <li key={index} onClick={() => setFilterBy(item)} role="tab"
              className={`border ${filterBy === item? 'border-neutral-600' : 'border-none'} hover:bg-neutral-300 relative flex items-center justify-center w-full min-w-32 h-full bg-neutral-200 px-1 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center cursor-pointer select-none text-blue-gray-900`}
              data-value="all">
              <div className="z-20 text-inherit flex flex-row justify-evenly w-full px-1 items-center">
                  <div className="font-bold">{length}</div>
                  <div className = "text-sm">{item === '' ? 'All' : item}</div>
              </div>
            </li>
            )}
          </ul>
        </nav>
      </div>
         </>
    )
}