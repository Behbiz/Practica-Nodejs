# API de anuncios

Este es un API de anuncios que permite obtener una lista de anuncios con un esquema definido, filtrar los anuncios por etiquetas, estado de venta, rango de precio y nombre, y fotos.

### Instalación de MongoDB
Para utilizar esta API, necesitarás tener instalado MongoDB en tu sistema. Puedes seguir estos pasos para instalarlo:

- Descarga MongoDB desde el siguiente enlace: https://www.mongodb.com/download-center/community
- gitSigue las instrucciones de instalación en tu sistema operativo.

## Endpoints

### `GET /apiv1/anuncios`

Obtiene una lista de anuncios.

#### Query parameters

- `page`: Número de página (por defecto: 1).
- `limit`: Número de elementos por página (por defecto: 10).
- `tag`: Filtra los anuncios por etiquetas. Se pueden especificar varias etiquetas separadas por comas.
- `venta`: Filtra los anuncios por estado de venta (`true` o `false`).
- `minPrecio`: Filtra los anuncios por precio mínimo.
- `maxPrecio`: Filtra los anuncios por precio máximo.
- `nombre`: Filtra los anuncios por nombre que empiece por el valor especificado.

#### Ejemplos

- `/anuncios?page=2&limit=20` obtiene la página 2 de la lista de anuncios, con 20 elementos por página.
- `/anuncios?tag=lifestyle,mobile` obtiene los anuncios con la etiqueta "lifestyle" o "mobile".
- `/anuncios?venta=true` obtiene los anuncios que están en venta.
- `/anuncios?minPrecio=10&maxPrecio=20` obtiene los anuncios con un precio entre 10 y 20.
- `/anuncios?nombre=libro` obtiene los anuncios cuyo nombre empiece por "libro".
