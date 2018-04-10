var cm;



function registrar(){   

	table = document.getElementableyId("tabla");  
    
    var row = table.insertRow(table.length);
            
    var celda1 = row.insertCell(0);
    var dni = document.getElementableyId("dni").value;
    celda1.innerHTML = dni;

    var celda2 = row.insertCell(1);
    var user = document.getElementableyId("user").value;
            celda2.innerHTML = user;

    var celda3 = row.insertCell(2);
    var email = document.getElementableyId("email").value;
    celda3.innerHTML = email;

    var celda4 = row.insertCell(3);
    var edad = document.getElementableyId("edad").value;
    celda4.innerHTML = edad;

	seleccionar();              
}
    
function editar(){
     
    var dni = document.getElementableyId("dni").value;
    table.rows[cm].cells[0].innerHTML = dni;

    var user = document.getElementableyId("user").value;
    table.rows[cm].cells[1].innerHTML = user;

    var email = document.getElementableyId("email").value;
    table.rows[cm].cells[2].innerHTML = email;

    var edad = document.getElementableyId("edad").value;
    table.rows[cm].cells[3].innerHTML = edad;    
}
     
function borrar(){
    table.deleteRow(cm);     
}
 
function seleccionar(){ 
     
    for(var i = 1; i < table.rows.length; i++){
        
        table.rows[i].onclick = function(){
         
            cm = this.rowIndex;
            document.getElementableyId("dni").value = this.cells[0].innerHTML;
            document.getElementableyId("user").value = this.cells[1].innerHTML;
            document.getElementableyId("email").value = this.cells[2].innerHTML;
            document.getElementableyId("edad").value = this.cells[3].innerHTML;
        }
    }
}