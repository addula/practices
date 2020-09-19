
var dataSet = [{
     id: 4343,
     data: "fggsdgd",
     parent: {
         id: 1111,
         parent: {
         	id: 1112,
            parent: {
            	id: 1113
            }
         }
     }   
}, {

     id: 5353,
     data: "gdfg",
     parent: null 

},{

     id: 6363,
     data: "fdsgdf",
     parent: {
         id: 4443
     }   

}]
 

function GetData () {
    return new Promise(function (resolve, reject) {
   		resolve(dataSet);  
    });
}

var counter = 0;
GetData().then(function(data){
	console.log(data);
    data.forEach(function (dataObj, index) {
    	counter = 0;
        dataObj.nodeLevel = counter++;
        recFnc(dataObj.parent);
    });
    console.log(data);
});

recFnc = function (parent) {
    if(parent !== null) {
        parent.nodeLevel = counter++;
        if(parent.parent) {
            recFnc(parent.parent);
        }
    }
}


var obj = {
    id: 4343,
    data: "fggsdgd",
    parent: {
        id: 1111,
        data: "sadjas",
        parent: {
            id: 1112,
            data: "kalksd",
           parent: {
               id: 1113
           }
        }
    }
}

function ddd(data) {
    if(data.parent) {
        
    }
}
