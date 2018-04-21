function visualizeAuditTrail(tree) {
    // // create an array with nodes
    // var nodes = new vis.DataSet([
    //     {id: 1, label: 'Node 1'},
    //     {id: 2, label: 'Node 2'},
    //     {id: 3, label: 'Node 3'},
    //     {id: 4, label: 'Node 4'},
    //     {id: 5, label: 'Node 5'}
    // ]);
    //
    // // create an array with edges
    // var edges = new vis.DataSet([
    //     {from: 1, to: 3},
    //     {from: 1, to: 2},
    //     {from: 2, to: 4},
    //     {from: 2, to: 5}
    // ]);

    // create a network
    var container = document.getElementById('auditTrailVisualization');

    // provide the data in the vis format
    var data = {
        nodes: tree.nodes,
        edges: tree.edges
    };
    var options = {};

    // initialize your network!
    var network = new vis.Network(container, data, options);
}


function generateTree(auditTrail=[
    {
        "details": {
            "uid": "b3869e2a-549e-48d6-84ae-ba6234e348ec",
            "source": "Dodgybridge Analytica",
            "destination": "Godonlyknows Inc",
            "date": "2018-04-01",
            "manifest": {
                "recordCount": "20",
                "description": "User name, Phone number, friends, likes"
            },
            "sourceContracts": [
                "856f94be-80f9-4644-a3a0-c111e017b00b"
            ]
        }
    },
    {
        "details": {
            "uid": "856f94be-80f9-4644-a3a0-c111e017b00b",
            "source": "TrustyMcTrustFace Research",
            "destination": "Dodgybridge Analytica",
            "date": "2017-02-17",
            "manifest": {
                "recordCount": "20",
                "description": "User name, Phone number, friends, likes"
            },
            "sourceContracts": [
                "4093fd4e-d062-42c5-8f83-3e02979a87f2"
            ]
        },
        "sourceSignature": "sadklfjlaskdjflaskdfjlsadkf",
        "destinationSignature": "ssdkfajsldkfjasldkfjasldkfj"
    },
    {
        "details": {
            "uid": "4093fd4e-d062-42c5-8f83-3e02979a87f2",
            "source": "Headpage Corp",
            "destination": "TrustyMcTrustFace Research",
            "date": "2016-08-12",
            "manifest": {
                "recordCount": "20",
                "description": "User name, Phone number, friends, likes"
            },
            "sourceContracts": []
        },
        "sourceSignature": "skdfjklsdfjsdkfjsdlkfskdfjkld",
        "destinationSignature": "ssdkfajsldkfjasldkfjasldkfj"
    }
]) {
    if (auditTrail.length === 0) {
        return {"nodes": [], "edges":[]}
    }

    let nodes = [];
    let edges = [];

    auditTrail.forEach(a => {
        nodes.push({id: a.details.uid, label: a.details.source + "->" + a.details.destination});
        a.details.sourceContracts.forEach(c => {
            edges.push({from: a.details.uid, to: c});
        })
    });

    return {nodes, edges};
}