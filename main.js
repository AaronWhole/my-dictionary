const add_btn = document.querySelector("#submit")
const dic_input = document.querySelector("#dictionary-input")
const word_list = document.querySelector("#words")
 
function app(){

    add_btn.addEventListener("click",function(e){

        e.preventDefault()
    
        if(dic_input.value===""){
            alert("please write a word")
        }else {
        
        const words =  document.createElement("div")
        words.classList.add("words")
    
        const words_content = document.createElement("div")
        words_content.classList.add("content")
      
        words.appendChild(words_content)  
    
        const input = document.createElement("input")
        input.classList.add("text")
        input.value=dic_input.value
        input.setAttribute("readonly","readonly")
        words_content.appendChild(input)
    
        word_list.appendChild(words)
        
        const actions = document.createElement("div")
        actions.classList.add("actions")
    
        const edit = document.createElement("button")
        edit.classList.add("edit")
        edit.innerHTML = `<i class="fa-solid fa-pencil"></i>`
        actions.appendChild(edit)
    
        const dlt = document.createElement("button")
        dlt.innerHTML=`<i class="fa-solid fa-trash"></i>`
        actions.appendChild(dlt)
    
        const openW = document.createElement("button")
        openW.innerHTML=`<i class="fa-solid fa-folder-open"></i>`
        actions.appendChild(openW)
        
        const popup = document.createElement("div")
        popup.classList.add("popup")

        popup.innerHTML=`<textarea minlength="500" class="anlami" ></textarea>
        <button class="popupDelete"><i class="fa-solid fa-xmark fa-xl"></i></button>`

        words.appendChild(popup)
        
    
        words.appendChild(actions)
        
        dic_input.value=""
        
        edit.addEventListener("click",function(){
            if(edit.innerHTML===`<i class="fa-solid fa-pencil"></i>`){
                input.removeAttribute("readonly")
                input.focus()
                edit.innerHTML=`<i class="fa-solid fa-floppy-disk"></i>`
            }else{
                alert("save")
                edit.innerHTML = `<i class="fa-solid fa-pencil"></i>`
                input.setAttribute("readonly","readonly")
            }
        }) 
        
        dlt.addEventListener("click",function(e){
            e.target.parentElement.parentElement.parentElement.remove()
        })

        openW.addEventListener("click",function(){
            popup.classList = "popup actions"
            
        })

        popup.addEventListener("click",function(e){
            if(e.target.className=="popupDelete" || e.target.className=="fa-solid fa-xmark fa-xl"){
                popup.classList="popup"
               
            }
        })

        } 
        
        
    })
}

app()





