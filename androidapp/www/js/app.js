let empty_node = {        
    id: -1,
    puerto: -1,
    area: null,
    ip: '0.0.0.0',
    tipo: 0,
    activo: 0,
    descripcion: null,
}

let api = {
    nodes: 'http://soportemedtronic.azurewebsites.net/api/nodos'
}

axios.defaults.headers.common['Content-Type'] = 'application/json';

var npuerto = document.getElementById("puerto");
var nip = document.getElementById("ip");
var narea = document.getElementById("area");
var ntipo = document.getElementById("tipo");
var nestado = document.getElementById("estado");
var nisEmpty = document.getElementById("isEmpty");

const app = new Vue({
    el: '#app',
    data : {
        ports: 48,
        nodes: [],
        nodeModel: empty_node,
    },
    mounted(){
        this.fillPatch();
        npuerto = document.getElementById("puerto");
        nip = document.getElementById("ip");
        narea = document.getElementById("area");
        ntipo = document.getElementById("tipo");
        nestado = document.getElementById("estado");
        nisEmpty = document.getElementById("isEmpty");
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
        },
        updateNode(a,b,c,d,e,f){
            npuerto.value = a;
            nip.value = b;
            narea.value = c;
            ntipo.value = d;
            nestado.value = e;
            nisEmpty.value = f;
            modal.style.display = "block";
        },
        saveNode(){

            if(nisEmpty.value == -1){

                let newNodo = {
                    puerto: parseInt(npuerto.value),
                    area: narea.value,
                    ip: nip.value,
                    tipo: parseInt(ntipo.value),
                    activo: parseInt(nestado.value),
                    descripcion: "",                 
                }
                
                axios.post(api.nodes, newNodo).then(res => {
                    navigator.notification.alert( 'Nodo actualizado',  null, "Patch Panel", "Aceptar")
                    this.fillPatch();
                }).catch(err =>{
                    navigator.notification.alert( 'Erro al actualizar nodo '+err,  null, "Patch Panel", "Aceptar")
                })
            }
            else{

                let newNodo = {
                    id: parseInt(nisEmpty.value),
                    puerto: parseInt(npuerto.value),
                    area: narea.value,
                    ip: nip.value,
                    tipo: parseInt(ntipo.value),
                    activo: parseInt(nestado.value),
                    descripcion: "",                
                }

                axios.put(api.nodes+"/"+newNodo.id, newNodo).then(res => {
                    navigator.notification.alert( 'Nodo actualizado',  null, "Patch Panel", "Aceptar")
                    this.fillPatch();
                }).catch(err =>{
                    navigator.notification.alert( 'Erro al actualizar nodo '+err,  null, "Patch Panel", "Aceptar")
                })            
            }
        },
        deleteNode(){
            let newNodo = {
                id: parseInt(nisEmpty.value),
                puerto: parseInt(npuerto.value),
                area: narea.value,
                ip: nip.value,
                tipo: parseInt(ntipo.value),
                activo: parseInt(nestado.value),
                descripcion: "",                
            }         

            axios.delete(api.nodes+"/"+newNodo.id, newNodo).then(res => {
                navigator.notification.alert( 'Nodo eliminado',  null, "")
                this.fillPatch();
                
            }).catch(err =>{
                navigator.notification.alert( 'Erro al actualizar nodo actualizado '+err,  null, "")
            })    
        }
    }
})