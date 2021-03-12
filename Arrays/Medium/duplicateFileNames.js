/**
 * @param {string[]} paths
 * @return {string[][]}
 
 find all the duplicate files within the system based on their paths
 --> store duplicate file paths in an arr --> store that dupeArr in a resArr
 
 1. you need to separate the strings/files in order to determine the root path, and separate the files within the folder --> arr[0] = relative folder path, arr[i] = subsequent files within the folder
 1a. iterate through the pathsArr --> split the strings into arrays --> store the first index as the relative folder path --> use regex to select the content in the '()' --> take that file content name and store it as a key within a hashMap and set it to an array ---> push the relative folder path+'/'+file content name into the array 
 ---> once the map is populated ---> return the values and store them into an array
 --> return the array
 */


var findDuplicate = function(paths) {
    let contentMap = {}
    let res = []
    
    //loop through the pathsArr and isolate the relPaths 
    for (let i = 0; i<paths.length; i++) {
        let str = paths[i].split(' ')
        let relPath = str.shift()

        for(let cont of str){
            let name = cont.substring(cont.lastIndexOf('(')+1, cont.lastIndexOf(')'))
            contentMap[name] ? contentMap[name].push(relPath+'/'+cont.substring(0, cont.lastIndexOf('('))) : contentMap[name] = [relPath+'/'+cont.substring(0, cont.lastIndexOf('('))]
            
        }
    }
    for (const [key, value] of Object.entries(contentMap)) {
        
        value.length > 1 && res.push(value)
    }
    return res
};
