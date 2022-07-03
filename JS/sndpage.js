
function populatePublished(){
    
    var articleLink = "/Assets/Publications/Nepali Articles/1 a पुरानो १ नेपाली अर्थतन्त्र निर्माणको बाटो.pdf";
    addDiv(articleLink);
    
    // console.log(readFilesFromPathReturnPathToFile("/Assets/Publications/Nepali Articles"));

    function readFilesFromPathReturnPathToFile(path){
        var fs = require("fs");
        var Folder = path;
        var filePaths = [];
        fs.readdirSync(Folder).forEach(file => {
            let fileData = JSON.parse(fs.readFileSync(Folder+'/'+file))
            filePaths.push(fileData)
        });
        return filePaths;
    }
    
    function addDiv(articleLink){
        // var articleName = "1 a पुरानो १ नेपाली अर्थतन्त्र निर्माणको बाटो.pdf";
        // var articleNamewoExtention = articleName.slice(0,articleName.indexOf('.'));
        // var articleLink = "";
        //     articleLink = pathName.concat("/Assets/Publications/Nepali Articles/",articleName);
        
        articleName = articleLink.slice(articleLink.lastIndexOf('/')+1,articleLink.length)
        var articleNamewoExtention = articleName.slice(0,articleName.indexOf('.'));
        
        var element = document.getElementById("ArticlesAppendHere");
        var tag = document.createElement("div");
        tag.className = "articleCard";
        tag.addEventListener('click', function() {
            location.href = articleLink;
        });
        var text = document.createTextNode(articleNamewoExtention);
        tag.appendChild(text);
        element.appendChild(tag);
    }
}