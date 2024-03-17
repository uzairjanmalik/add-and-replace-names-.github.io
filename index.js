const names=[];
function add(){
    console.clear();
    const a=prompt("enetr names");
    names.push(a);
    console.log(names);
}
function replace(){
    console.clear();
    const n=prompt("enter first name to replace");
    var s=names.indexOf(n);
    const o=prompt("enter second name to replace with");
    names.splice(s,1,o);
    console.log(names);
}