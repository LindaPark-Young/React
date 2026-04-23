
import './App.css'
import Library from './component/Library';
import type { Book } from './types/book';




const books: Book[] = [
  {image:'https://image.aladin.co.kr/product/32790/94/cover200/k722936599_1.jpg', title:"한입 크기로 잘라먹는 리액트", author:"이정환"},
  {image:'https://image.aladin.co.kr/product/29234/10/cover200/k292837292_1.jpg', title:"처음 배우는 애저", author:"김도균"},
  {image:'https://image.aladin.co.kr/product/26736/11/cover200/k622730382_1.jpg', title:"Node.js 교과서", author:"조현영"},
];

function App() {
  

  return (
    <div>
       
       <Library book={books[0]}/>
       <Library book={books[1]}/>
       <Library book={books[2]}/>
     
    </div>
  )
}

export default App
