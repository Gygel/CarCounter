
var dict={
    'NORM_WP-counter-el' : 0,
    'NORM_HP-counter-el' : 0,
    'NORM_BP-counter-el' : 0,
    'ELEC_WP-counter-el' : 0,
    'ELEC_HP-counter-el' : 0,
    'ELEC_BP-counter-el' : 0
}




function increment(elemID){
    dict[elemID] += 1
    document.getElementById(elemID).innerText = dict[elemID]
    console.log(elemID + ": " + dict[elemID])
}

function decrement(elemID){
    if(dict[elemID] > 0){
        dict[elemID] -= 1
        document.getElementById(elemID).innerText = dict[elemID]
        console.log(elemID + ": " + dict[elemID])
    }
    else{
        console.log("Cannot go below 0")
    }
}


function setToZero(elemID){
    dict[elemID] = 0
    document.getElementById(elemID).innerText = dict[elemID]
    console.log(elemID + " set to zero")
}

let segTBox = document.getElementById("segment-el")
let sNameTBox = document.getElementById("street-name-el")

function save(){
    if(segTBox.value == "" || sNameTBox.value == ""){
        alert("Input the Segment and Street Name!")
    }
    else{
        let table = document.getElementById("tbody-el")

        table.innerHTML += "<tr><td rowspan ='4'>"+ segTBox.value +"</td> <td rowspan ='4'>"+sNameTBox.value+"</td> </tr>"
        table.innerHTML +="<tr><th>Well parked</th>  <td>"+dict['NORM_WP-counter-el']+"</td> <td>"+dict['ELEC_WP-counter-el']+"</td> <td>"+(dict['NORM_WP-counter-el']+dict['ELEC_WP-counter-el'])+"</td> </tr>"
        table.innerHTML +="<tr><th>Half parked</th>  <td>"+dict['NORM_HP-counter-el']+"</td> <td>"+dict['ELEC_HP-counter-el']+"</td> <td>"+(dict['NORM_HP-counter-el']+dict['ELEC_HP-counter-el'])+"</td> </tr>"
        table.innerHTML +="<tr><th>Badly parked</th>  <td>"+dict['NORM_BP-counter-el']+"</td> <td>"+dict['ELEC_BP-counter-el']+"</td> <td>"+(dict['NORM_BP-counter-el']+dict['ELEC_BP-counter-el'])+"</td> </tr>"
        
        segTBox.value = ""
        sNameTBox.value = ""

        for(var [key,value] of Object.entries(dict)){
            setToZero(key)
        }

        console.log("row inserted")
    }
}