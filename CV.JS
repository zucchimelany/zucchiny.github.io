
document.getElementById('generate').onclick = function() {
 
    var values = ["Marketing y Negocios | Año 2005", "Gestión de Empresas | Año 2010", "Caza y Superviviencia | Año 2015", "Recursos Humanos y Gatunos | Año 2022"];
 
    var select = document.createElement("select");
    select.name = "carreras";
    select.id = "carreras"
 
    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }
 
    var label = document.createElement("label");
    label.innerHTML = "Carreras de las que me egresé en Universidad de Michigan: "
    label.htmlFor = "pets";
 
    document.getElementById("container").appendChild(label).appendChild(select);

  
}