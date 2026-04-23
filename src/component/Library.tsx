
import type { Book } from "../types/book";

interface BookProps{
    book:Book;

}

function Library({book}: BookProps) {
    const {image, title, author} = book;
    return (
     
          <div className="member-card">
            <img src={image} alt={title} className="photo"/>
            <h2 className="nick">{title}</h2>
            <p className="team">{author}</p>
      
    
        </div>
    );

}
export default Library







