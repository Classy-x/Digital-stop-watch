
let i=1;
let st=document.getElementById("st");
let min=document.getElementById("min");
let j=1;

let hr=document.getElementById("hr");
let k=1;

let day=document.getElementById("day");
let l=1;
let time;

let sbo=document.getElementById("s_bo");

st.addEventListener("click",add)

function add(){
    time=setInterval(()=>{
  
         let he=document.getElementById("sec")
         if(i<=59){
            he.textContent=pad(i++);
         }
         else{
            he.textContent = "00";
            i = 1;
            if(j<=59){
             min.textContent=pad(j++);        
            }
            else{
                min.textContent="00";
                j=1;
                if(k<=24){
                    hr.textContent=pad(k++);   
                }
                else{
                    hr.textContent="00";
                    k=1;
                    day.textContent=pad(l++);

                }
            }
         }
      },1000)
      st.removeEventListener("click",add)
  }
  function pad(val) {
    return val < 10 ? "0" + val : val;
  }

let stop=document.getElementById("so")
stop.addEventListener("click",()=>{
    clearInterval(time)
    st.addEventListener("click",add)
})

document.getElementById("Re").addEventListener("click",()=>{
    clearInterval(time);
    let he = document.getElementById("sec");
    he.textContent = "00";
    i = 0;

    let min = document.getElementById("min");
    min.textContent = "00";
    j=0;

    let hr = document.getElementById("hr");
    hr.textContent = "00";
    k=0;

    let day = document.getElementById("day");
    day.textContent = "00";
    l=0;
    st.addEventListener("click", add);

})

let buttons = document.getElementsByClassName("but");
let activeButton = null;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {

        if (activeButton !== null) {
            activeButton.classList.remove("active");
        }

        activeButton = buttons[i];
        activeButton.classList.add("active");
    });
}