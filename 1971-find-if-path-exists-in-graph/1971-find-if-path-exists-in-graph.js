/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    
    if (source === destination) {
        return true;
    }
    
    const node = [...Array(n).keys()];
        
    const list = new Map();
    
    const addNode = (node) => {
        list.set(node, [])
    }
    
    const addEdge = (start, end) => {
        list.get(start).push(end);
        list.get(end).push(start);
    }
    
    node.forEach(addNode);
    edges.forEach(edge => addEdge(...edge)); 
    
    
    const visited = Array(n);
    let found = false;
    
    const helper = (nodeKey) => {
        const sourceArr = list.get(nodeKey); 
        visited[nodeKey] = true;

        for (let i = 0 ; i < sourceArr.length; i++) {
            if (sourceArr[i] === destination) {
                found = true;
             } else {
                 if (!visited[sourceArr[i]]) {
                      helper(sourceArr[i]);
                 } 
            }
        }        
    }
    
    helper(source);
    return found;

    
};