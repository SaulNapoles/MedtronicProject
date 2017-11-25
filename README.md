# Integrator project

 Solution of software for the company Medtronic.

## API REST

| Endpoints     | HTTP verbs    | Returns      |
| ------------- | ------------- | ------------- |
| api/Usuarios  | POST/GET      | {Id,correo,clave,nivel}|  
| api/Usuarios/{id}  | GET/PUT/DELETE | {Id,correo,clave,nivel} |
| api/Switches  | POST/GET     |{Id,nombre,ip,tipo,activo,descripcion,patchPanel}  |
| api/Switches/{id}  | GET/PUT/DELETE  |{Id,nombre,ip,tipo,activo,descripcion,patchPanel} |
| api/PatchPanels  |  POST/GET   |{Id,nombre,ip,tipo,activo,descripcion,switch} |
| api/PatchPanels/{id}  |  GET/PUT/DELETE   |{Id,nombre,ip,tipo,activo,descripcion,switch} |
| api/Planos  |  POST/GET   |{Id,nombre,img} |
| api/Planos/{id}  |  GET/PUT/DELETE    |{Id,nombre,img} |
| api/Pins |  POST/GET   |{Id,nombre,x,y,patchIp,switchIp,plano} |
| api/Pins/{id}  |  GET/PUT/DELETE   |{Id,nombre,x,y,patchIp,switchIp,plano} |
