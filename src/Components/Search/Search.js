
import React from 'react';

function App() {
  const Search_s={ marginLeft: "5%", paddingBottom: '20px' }
    return(
    
     <div className="input-group md-form form-sm form-2 pl-0" style={Search_s}>
        <input className="form-control my-0 py-1 lime-border" type="text" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="input-group-text lime lighten-2" id="basic-text1"><i class="fas fa-search text-grey"
            aria-hidden="true"></i></button>
        </div>
      </div>
    
       );
    }
    
    export default App;