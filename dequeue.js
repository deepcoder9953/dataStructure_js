let q = []
let size = q.length;
let totalLength = 5;

function insideQueue(newVal){
    if(size >= totalLength){
        console.log("queue is full")
    }
    else{
        q[size] = newVal;
        size++;
    }
}

function display(){
    console.log(q)
}
function dequeue(){
if(size>0){
    for(var i=0; i<q.length; i++){
        q[i]=q[i+1]
    }
    size--;
    q.length = size   
}
else{
    console.log("already empty")
}
}

insideQueue(1)
insideQueue(2)
insideQueue(3)
dequeue()
dequeue()
dequeue()
display()