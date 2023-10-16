import { logo } from '../assets'


export default function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
    <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <div className='flex justify-center items-center'>
        <img src={logo} alt="logo" className="w-24 object-contain" />
        <span className='font-bold text-2xl'>Ai-Summarize</span>
      </div>

      <button 
        type='button' 
        onClick={() => window.open('https://github.com/abhishek-rajput/ai-summarize')} 
        className="black_btn"
        >
          GitHub
      </button>

    </nav>
    <h1 className="head_text">
      Summarize Articles with <br className="max-md:hidden"  />
      <span className="blue_gradient">OpenAI GPT-4</span>
    </h1>
    <h2 className='desc'>
      Simplify your reading with Summize, an open-source article summarizer that transforms long articles into clear and concise summaries
    </h2>
  </header>
  )
}