let employees=[
    {id:101,name:"manasa",salary: 45000},
    {id:102,name:"manas",salary: 34000},
    {id:103,name:"manu",salary: 65000},
    {id:104,name:"manisha",salary: 30000},
    {id:1015,name:"mani",salary: 35000}
]
function display_Data(){
    let rows=""
    for(employee of empoyees){
    rows=rows +  `<tr>
                  <td>${employees.id}</td>
                  <td>${employees.name}</td>
                  <td>${employees.salary}</td>
                  <tr>`   
    }
    document.getElementById('abc').innerHTML=rows
}