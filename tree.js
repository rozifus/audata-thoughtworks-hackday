
function generateTree(auditTrail) {
    if (auditTrail.length == 0) {return {"nodes": [], "edges":[]}};

    let nodes = [];
    let edges = [];

    auditTrail.forEach(a => {
        nodes.push({id: a.uid, label: a.source + "->" + a.destination});
        a.details.sourceContracts.forEach(c => {
            edges.push({from: a.uid, to: c.uid});
        })
    });

    return {nodes, edges};
}