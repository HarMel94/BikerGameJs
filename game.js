alert("Click to Biker and journey will start \nPress two time Space and Biker jump");
confirm("Are you ready");

const biker = document.querySelector(".biker"),
      tree = document.querySelector(".tree"),
      tree2 = document.querySelector(".tree_2"),
      sun = document.querySelector(".sun"),
      devil = document.querySelector(".devil");

biker.addEventListener("click", () => {
    tree.classList.add("treeMove");
    tree2.classList.add("treeMove_2");
    sun.classList.add("sunStartMove");
    devil.classList.add("devilMove");
});

document.addEventListener("keydown", () => {
      biker.classList.toggle("bikerJump")
});

const crash = setInterval(() => {
      let bikerPosition = parseInt(window.getComputedStyle(biker).getPropertyValue("top")); 
      let devilPosition = parseInt(window.getComputedStyle(devil).getPropertyValue("left")); 

      if(devilPosition < 250 && devilPosition > 200 && bikerPosition >= 300){
            alert("You Lose 😈")
            document.location.reload();
      }
},10);