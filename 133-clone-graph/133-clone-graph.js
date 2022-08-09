/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */


var cloneGraph = function(node) {
    
    const copied = {};
    
    const bfs = (level) => {

        const nextLevel = [];
        
        level.map((eachNode) => {
            
            if (!eachNode) {
                return eachNode;
            }
            
            if (!copied[eachNode.val]) {
                copied[eachNode.val] = new Node(eachNode.val);
            } 
            
            nextLevel.push(...eachNode.neighbors.filter((eachNeighbor) => {
                
                if (!copied[eachNeighbor.val]) {
                    copied[eachNeighbor.val] = new Node(eachNeighbor.val);
                    copied[eachNode.val].neighbors.push(copied[eachNeighbor.val]);
                    return true;
                }
                copied[eachNode.val].neighbors.push(copied[eachNeighbor.val])
                return false;
            }))
     
        })
        
        if (nextLevel.length) {
            bfs(nextLevel);
        }  
    }
    
    bfs([node]);
    
    return copied[1];
};



