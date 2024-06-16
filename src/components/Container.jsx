export const Container = ({ children }) => {
  return (
    <main className="flex justify-center items-center max-w-2xl m-auto p-3 h-screen">
      <div className="relative bg-zinc-900 p-7 w-full rounded-xl flex flex-col gap-3 justify-center items-center max-w-2xl m-auto">
        {children}
      </div>
    </main>
  )
}
