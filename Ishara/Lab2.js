const highlightable = document.getElementsByClassName ('highlightable');
highlightable.addEventListner(
    "focus",
    function(event){
        event.target.background = "pink";
    },
    true
);


highlightable.addEventListner(
    "blur",
    function(event){
        event.target.style.background="";
    },
    true
    );
