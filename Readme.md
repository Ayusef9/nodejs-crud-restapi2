Project ini adalah sebuah Rest Api sederhana menggunakan Node.js, Express.js dan juga MySQL yang dimana menyediakan fitur CRUD(Create, Read, Update, Delete) untuk Users, Categories dan Products. 
Untuk menjalankan project ini bisa menggunakan server biasa yang diketik didalam command prompt(node server.js) dan jika berhasil Server running at http://localhost:3000
Mysql berhasil connect. Setelah itu kita bisa melakukan pengujian API menggunakan Postman dimana memakai method ada GET, POST, PUT dan DELETE.
Contohnya seperti: GET http://localhost:3000/products yang akan muncul adalah
[
    {
        "id": 1,
        "category_id": 2,
        "name": "Mie Rebus",
        "price": "13000.00",
        "created_at": "2025-12-13T13:40:11.000Z"
    }
]

![alt_text](https://github.com/Ayusef9/nodejs-crud-restapi2/blob/main/img/delete_category.png?raw=true)
![alt_text](https://github.com/Ayusef9/nodejs-crud-restapi2/blob/main/img/delete_product.png?raw=true)
![alt_text](https://github.com/Ayusef9/nodejs-crud-restapi2/blob/main/img/get_category.png?raw=true)
![alt_text](https://github.com/Ayusef9/nodejs-crud-restapi2/blob/main/img/get_category_byid.png?raw=true)
![alt_text](https://github.com/Ayusef9/nodejs-crud-restapi2/blob/main/img/get_product.png?raw=true)
![alt_text](https://github.com/Ayusef9/nodejs-crud-restapi2/blob/main/img/get_product_byid.png?raw=true)
![alt_text](https://github.com/Ayusef9/nodejs-crud-restapi2/blob/main/img/post_category.png?raw=true)
![alt_text](https://github.com/Ayusef9/nodejs-crud-restapi2/blob/main/img/post_product.png?raw=true)
![alt_text](https://github.com/Ayusef9/nodejs-crud-restapi2/blob/main/img/put_category.png?raw=true)
![alt_text](https://github.com/Ayusef9/nodejs-crud-restapi2/blob/main/img/put_product.png?raw=true)

