let empty_node = {        
    id: null,
    puerto: -1,
    area: null,
    ip: '0.0.0.0',
    tipo: null,
    activo: false,
    descripcion: null,
}

let api = {
    nodes: 'http://soportemedtronic.azurewebsites.net/api/nodos'
}

const app = new Vue({
    el: '#app',
    data : {
        ports: 48,
        nodes: [],
        nodeModel: empty_node,
    },
    mounted(){
        this.fillPatch();
    },
    methods: {
        fillPatch(){
            this.nodes = [];
            
            axios.get(api.nodes).then(res => {

                console.log(res.data);
                for(var i = 0; i < this.ports; i++){

                    this.nodes.push(empty_node)
                    
                    for(var j = 0; j < res.data.length; j++){
                        if(res.data[j].puerto == i){
                            this.nodes[i-1] = res.data[j];
                        }
                    }  
                }
            }).catch(err =>{
                for(var i = 0; i < this.ports; i++){
                    
                    this.nodes.push(empty_node)
            
                }                
            })
        }
    }
})