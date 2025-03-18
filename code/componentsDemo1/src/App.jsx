import Header from "./components/Header";
import Footer from "./components/Footer";
import Movie from "./components/Movie";
import './App.css'
function App ()
{
  return (
		<>
			<Header />
			<div className="movies">
				{Array(6).map((v) => (
					<Movie />
				))}
			</div>
			<Footer />
		</>
	)
}
export default App