let empty_node = {        
    id: null,
    port: -1,
    ip: '0.0.0.0',
    nombre: null,
    tipo: null,
    activo: false,
    descripcion: null,
    switch: null
}

var patchpanel_bd = [
    {
        id: '',
        port: 0,
        ip: '10.100.10.0',
        nombre: 'Principal',
        tipo: 'type',
        activo: true,
        descripcion: 'blabla',
        switch: null
    },
    {
        id: '',
        port: 1,
        ip: '10.100.10.1',
        nombre: 'Secundario',
        tipo: 'type',
        activo: true,
        descripcion: 'blabla',
        switch: null
    },
    {
        id: '',
        port: 17,
        ip: '10.100.10.1',
        nombre: 'Secundario',
        tipo: 'type',
        activo: true,
        descripcion: 'blabla',
        switch: null
    }
    
]


var patchpanel = 
    {
        nodes: [],
        ports: 48
    }

for(var i = 0; i < patchpanel.ports; i++){
    
    patchpanel.nodes.push(empty_node)
    
    for(var j = 0; j < patchpanel_bd.length; j++){
        if(patchpanel_bd[j].port == i){
            patchpanel.nodes[i] = patchpanel_bd[j];
        }
    }  
}  



const app = new Vue({
    el: '#app',
    data : {
        msg : "Hola prro"
    }
})