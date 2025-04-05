// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

function Blog() {
  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-12 px-4">
        <div className="bg-[#1b203e] border border-[#353a52] rounded-lg p-8 max-w-2xl w-full text-center">
          <h3 className="text-2xl text-[#16f2b3] font-semibold mb-4">Coming Soon</h3>
          <p className="text-white mb-6">
            I&apos;m currently working on creating insightful blog posts about software development, best practices, and industry trends. 
            Check back soon to read my latest articles!
          </p>
          <div className="inline-block bg-gradient-to-r from-pink-500 to-violet-600 p-[1px] rounded-full">
            <div className="bg-[#0d1224] rounded-full px-6 py-2 text-white">
              Stay Tuned!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;