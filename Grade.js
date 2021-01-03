function submit() {

    let Q =parseInt(document.getElementById("Quizes").value)
    let M =parseInt(document.getElementById("Midterm").value)
    let F =parseInt(document.getElementById("FinalTest").value)
    let O =parseInt(document.getElementById("Oral").value)
    
    let Total =Q+M+F+O
    
    if(Total >= 90 && Total <= 100){
        document.getElementById("total_grades").innerText = Total
        document.getElementById("final_grade").innerText = `A`
      }
      else if(Total >= 80){
       document.getElementById("total_grades").innerText = Total
       document.getElementById("final_grade").innerText = `B`
      }
      else if(Total >= 70){
       document.getElementById("total_grades").innerText = Total
       document.getElementById("final_grade").innerText =`C`
      }
      else if(Total >= 60){
        document.getElementById("total_grades").innerText = Total
        document.getElementById("final_grade").innerText = `D`
      }
      else{
       document.getElementById("total_grades").innerText = Total
       document.getElementById("final_grade").innerText = `F`
      }
    }