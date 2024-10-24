import './App.css'

function App() {

  return (
    <main className='bg-emerald-300 w-screen h-screen'>
      <h1 className='flex justify-center text-3xl p-10 text-black'>TODO REACT APP</h1>
      <div className=' w-full flex justify-center gap-2'>
        <input type="text" className='rounded-2xl p-2' placeholder='Text here'/>
        <button className='bg-black text-white rounded-3xl p-4 hover:scale-110 transition-all'>Add</button>
      </div>
    </main>
  )
}

export default App
