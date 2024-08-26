// filter list


function Function1(a) {
  var b = document.getElementById(`Dropdown-content${a}`);
  if(b.style.display === "none"){
    b.style.display = "block";
    for(i=1; i<=4 ; i++ )
    { if(i != a)
      document.getElementById(`Dropdown-content${i}`).style.display = "none";
    }
  }
  else{
    b.style.display = "none"
  }
  }


  // bookmark background

  function bookmark_color(a){
    var x = document.getElementById(`bookmark${a}`);
    if(x.style.backgroundColor === "transparent"){
       x.style.backgroundColor = "rgb(150, 155, 248)";
    }
    else{
      x.style.backgroundColor = "transparent";
    }
  }



  