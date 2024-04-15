# CODERNOTES

#### Crear la base de datos "codernotes"

``` js
use codernotes
```

#### Crear la colección notes

``` js
db.createCollection("notes")
```

#### Crear cinco notes

``` js
db.notes.insertMany([
    { text: "1st note" },
    { text: "2nd note", category: "to do" },
    { text: "3rd note", category: "to do" },
    { text: "4th note", category: "done" },
    { text: "5th note" }
])

```

#### Buscar todas las notes

``` js
db.notes.find()
```

#### Buscar las notas de categoría “to do”

``` js
db.notes.find({ category: "to do" })
```

#### Buscar una nota por id

``` js
db.notes.find({ _id: "buscar y pegar un id" })
```

# CODERCOMMERCE

#### Crear la base de datos commerce:

``` js
use commerce
```

#### Crear la colección users y products

``` js
db.createCollection("users")
db.createCollection("products")
```

#### Crear un usuario

``` js
db.users.insertOne({ email: "igna@coder.com", password: "hola1234" })
```

#### Crear cinco productos

``` js
db.products.insertMany([
    { title: "1st prod" },
    { title: "2nd prod", category: "shoes" },
    { title: "3rd prod", category: "shoes" },
    { title: "4th prod", category: "shirts" },
    { title: "shoes" }
])
```

#### Buscar todos los productos

``` js
db.products.find()
```

#### Buscar un producto de nombre “shoes”

``` js
db.products.find({ title: "shoes" })
```
