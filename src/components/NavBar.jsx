import SearchBar from './SearchBar';

function NavBar({onSearch}){
    return(
       <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">BookShelf</a>
    <SearchBar onSearch={onSearch}/>
   
    </div>
</nav>

        
    );
}
export default NavBar;
