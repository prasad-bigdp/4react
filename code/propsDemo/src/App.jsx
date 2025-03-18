import Book from "./Book"
import './App.css'
import image from './assets/wingsoffire.webp'
function App ()
{
  return (
    <div className="books">
      <img src={image} alt="" />
			<Book
				name='Secret'
				imgLink='https://m.media-amazon.com/images/I/81F-19PcdaL._AC_UF1000,1000_QL80_.jpg'
      >
        <button>Add to cart</button>
      </Book>
			<Book
				name='wings of fire'
				imgLink='https://m.media-amazon.com/images/I/81F-19PcdaL._AC_UF1000,1000_QL80_.jpg'
			/>
			<Book
				name='Rich Dad poor Dad'
				imgLink='https://m.media-amazon.com/images/I/81F-19PcdaL._AC_UF1000,1000_QL80_.jpg'
			/>
		</div>
	)
}
export default App