# Integrator project

 Solution of software for the company Medtronic.

## API REST

| Endpoints     | HTTP verbs    | Returns      |
| ------------- | ------------- | ------------- |
| api/Usuarios  | POST/GET      | {id,correo,clave,nivel}|  
| api/Usuarios/{id}  | GET/PUT/DELETE | {id,correo,clave,nivel} |
| api/Switches  | POST/GET     |{id,nombre,ip,tipo,activo,descripcion}  |
| api/Switches/{id}  | GET/PUT/DELETE  |{id,nombre,ip,tipo,activo,descripcion} |
| api/PatchPanels  |  POST/GET   |{id,nombre,ip,tipo,activo,descripcion,switch} |
| api/PatchPanels/{id}  |  GET/PUT/DELETE   |{id,nombre,ip,tipo,activo,descripcion,switch} |
| api/Planos  |  POST/GET   |{id,nombre,img} |
| api/Planos/{id}  |  GET/PUT/DELETE    |{id,nombre,img} |
| api/Pins |  POST/GET   |{id,nombre,x,y,patchIp,switchIp,plano} |
| api/Pins/{id}  |  GET/PUT/DELETE   |{id,nombre,x,y,patchIp,switchIp,plano} |
| api/Nodos/  | POST/GET   |{id,area,puerto,ip,activo,tipo,descripcion} |
| api/Nodos/{id}  |  GET/PUT/DELETE   |{id,area,puerto,ip,activo,tipo,descripcion} |
