import Header from "@/components/Header"

const StoreLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1600px] grid grid-rows-[min-content_max-content] gap-5 p-8">
      <Header />
      {children}
    </div>
  )
}

export default StoreLayout