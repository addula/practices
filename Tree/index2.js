var dataSet = [{
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
}, {

    id: 5353,
    data: "gdfg",
    parent: null 

},{

    id: 6363,
    data: "fdsgdf",
    parent: {
        id: 4443,
        data: "ksdla"
    }   

}]

function GetData () {
   return new Promise(function (resolve, reject) {
          resolve(dataSet);  
   });
}

var flatObj = {}, count = 1;
GetData().then(function(data){
   data.forEach(function (dataObj, index) {
       flatObj[index] = {};
       count = 1;
       assignNodes(dataObj, index, 1);
   });
   console.log(flatObj);
});

function assignNodes (dataObj, level) {
    if(dataObj !== null) {
        var obj = Object.assign({}, dataObj);
        delete obj.parent;
        flatObj[level][count] = obj;
        if(dataObj.parent) {
        count++;
        assignNodes(dataObj.parent, level, count);
        }
    }
}

function GenerateTree (flatObj) {
    var mainDiv = document.createElement("div");
    var iterations = Object.keys(flatObj).length;
}