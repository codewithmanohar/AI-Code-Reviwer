import React, { useEffect , useState } from 'react'
import prism from 'prismjs'
import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/themes/"; // Optional: Syntax highlighting theme
import Editor from 'react-simple-code-editor';
import { useCodeStore } from '../Store/useCodeStore';
import { toast } from 'react-toastify';

const Input = () => {
    const codeSnippet = `// sample code for testing
function sum ( )
{
    return a + b ; 
}`
    const {setReviewedCode , isLoadingReview} = useCodeStore();
    const [code, setCode] = useState(codeSnippet);
    
    
    useEffect(() => {
        prism.highlightAll();
    });

    const handleResponse = async() => {
     const reviewCall = setReviewedCode(code);
     toast.promise(
      reviewCall,
      {
        pending: "Loading review...",
        success: "Review loaded successfully! 🎉",
        error: "Failed to fetch data 😢",
      }
    );
    };


  return (
    <>
        <div className='w-1/2 h-full relative bg-zinc-950 rounded-md not-sm:w-full '>
            <span className='text-xl text-center text-gray-50 w-full'>
            <h1 className='py-2 border-b-1 '>✍️ Write you code here</h1>
              </span>
            {/* Code Editor */}
            <div className='px-10 h-[80%] text-lg overflow-auto'>
            <Editor 
              value={code}
              onValueChange={ (code) => setCode(code)}
              highlight={code => prism.highlight(code , prism.languages.javascript, "javascript")}
              padding={20}
              />
            </div>
            

            <button 
            disabled={isLoadingReview}
            onClick={handleResponse}
            className='bg-zinc-100 absolute bottom-3 right-2 px-7 py-2 font-semibold rounded-md text-lg text-zinc-950 cursor-pointer hover:bg-green-500'
            >Review</button>
        </div>
    </>
  )
}

export default Input