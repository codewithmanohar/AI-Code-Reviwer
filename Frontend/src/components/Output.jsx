import React from 'react'
import { useCodeStore } from '../Store/useCodeStore'
import Markdown from "react-markdown"
import rehypeHighlight  from "rehype-highlight";
import Loading from './Loading';
// import "highlight.js/styles/github-dark.css"

const Output = () => {
  const {reviewedCode , isLoadingReview} = useCodeStore();

  return (
    <>
        <div className='w-1/2 h-full bg-zinc-950 rounded-md not-sm:w-full'>
          <span className='text-center text-xl text-gray-50 '>
            <h1 className='py-2  border-b-1 '>🤖 Code Review</h1></span>
          <div className='px-10 py-5 h-[92%] overflow-auto snap-none scroll-m-'>
            {isLoadingReview ? (
              <Loading />
             ) : (
              <Markdown
              rehypePlugins={[rehypeHighlight]}>
               {reviewedCode}
               </Markdown>
            )}
                   
            </div>
        </div>
    </>
  )
}

export default Output;