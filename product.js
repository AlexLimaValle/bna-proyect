const product = [
    {
        id:1,
        name:"Tablet Samsung Galaxy Tab A7 Lite 3Gb 32Gb Sm-t22onzsdaro",
        type:"Varios",
        mark:"Sansung Galaxy",
        price:64999,
        ofert:null,
        cuotas:10833.17,
        legend:"**Ceven**",
        img:"https://th.bing.com/th/id/OIP.QgxXfJk066Tqhi-IZU56xwHaHa?pid=ImgDet&rs=1"
    },
    {
        id:2,
        name:"Toallon Blanco 550 Gr.-m2-90x250 Guinza 1 Raya L",
        type:"Varios",
        mark:"Guinza",
        price:7408,
        ofert:null,
        cuotas:1234.67,
        legend:"-Guinza-",
        img:"https://th.bing.com/th/id/R.3cfd72b53a7653dbae6896d5a391d3b2?rik=bPwHaq7QWjyZiw&riu=http%3a%2f%2fwww.brandtex.com.ar%2fwp-content%2fuploads%2f2019%2f09%2fHTB1pSYtaE_rK1Rjy0Fcq6zEvVXaI.jpg&ehk=%2fA9xfvyScXBlXETUtjniIdWRFqS%2fddWzVasBKKDOsuI%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        id:3,
        name:"Aspiradora Samsung Vc20ccnmabc 1.5L Blue Cosmo",
        type:"Varios",
        mark:"Samsung",
        price:45399,
        ofert:232,
        cuotas:7566.50,
        legend:"**Electrónica VS**",
        img:"https://th.bing.com/th/id/R.0f20888fc42dd1f1f3fdfa22d864b309?rik=%2fc40ZoQ%2bhTtZSw&pid=ImgRaw&r=0"
    },
    {
        id:4,
        name:"Rack Tv Maximo Siena - Nogal",
        type:"Varios",
        mark:"Siena",
        price:21440,
        ofert:26800,
        cuotas:1786.67,
        legend:"**Apapachos**",
        img:"https://a-static.mlcdn.com.br/1500x1500/rack-para-tv-ate-60-polegadas-2-portas-de-correr-samba-siena-moveis-off-white-nogueira-linea-brasil/madeiramadeira-openapi/535995/b3d8a29dec8746af78da0a2f9c83420b.jpg"
    },
    {
        id:5,
        name:"Juego De Sabanas King Size Terrazo Flor",
        type:"Varios",
        mark:"King",
        price:16793,
        ofert:23990,
        cuotas:5597.67,
        legend:"-Arredo-",
        img:"https://i.pinimg.com/originals/17/79/76/17797697595f6c3f640db12f28d9d933.jpg"
    },
    {
        id:6,
        name:'Turbo 16" Liliana Vsoc16',
        type:"Varios",
        mark:"Liliana",
        price:14999,
        ofert:17347,
        cuotas:2499.83,
        legend:"**Radio Sapienza",
        img:"https://th.bing.com/th/id/R.7fc822c2f092e0d228028d8e3d230c5e?rik=HOZ7iThY8m8viw&pid=ImgRaw&r=0"
    },
    {
        id:7,
        name:"Como Coche Quinny Zapp Xtra Violeta+Huevito+Base+Bolso De Viaje De Regalo",
        type:"Varios",
        mark:"Quinny",
        price:149999,
        ofert:null,
        cuotas:12499.92,
        legend:"*Bebitos*",
        img:"https://th.bing.com/th/id/OIP.SY8aGvtsC1HD2Qwmd_4UIQHaGr?pid=ImgDet&rs=1"
    },
    {
        id:8,
        name:'Ventilador 3 En 1 18" Con 5 Aspas Tivoli Vpa-318',
        type:"Varios",
        mark:"Tivoli",
        price:12999,
        ofert:16799,
        cuotas:4333,
        legend:"**Total Home**",
        img:"https://th.bing.com/th/id/R.e05fe2c91ab760f34b05ec3810b7f72f?rik=8G3yLXohP8pBJg&pid=ImgRaw&r=0"
    },
    {
        id:9,
        name:'Celular Quantum Yolo 5" Rojo 32Gb Android 10',
        type:"Celular",
        mark:"Quantum",
        price:18999,
        ofert:34721,
        cuotas:1912.04,
        legend:"-Novatech-",
        img:"https://www.cyeonline.com.ar/wp-content/uploads/2021/05/quantum-yolo3.jpg"
    },
    {
        id:10,
        name:"Celular Alcatel 1 Plus 1Gb 16Gb Rom Negro",
        type:"Celular",
        mark:"Alcatel",
        price:19999,
        ofert:23999,
        cuotas:2012.68,
        legend:"-Rivera Hogar-",
        img:"https://th.bing.com/th/id/R.d5f38e7856196d62ecab28e6f6022b51?rik=GzOiNVeXoQTauw&pid=ImgRaw&r=0"
    },
    {
        id:11,
        name:"Celular Motorola E32- Gris 64/4Gb",
        type:"Celular",
        mark:"Samsung",
        price:50799,
        ofert:null,
        cuotas:5112.35,
        legend:"-Al Click-",
        img:"https://diunsa.vteximg.com.br/arquivos/ids/187117-1000-1000/00590145.jpg?v=637253235338530000"
    },
    {
        id:12,
        name:'Celular Samsung Galaxy M13 6.6"-50Mp 4Ram/128Gb Light Blue',
        type:"Celular",
        mark:"Samsung",
        price:86999,
        ofert:111043,
        cuotas:8755.48,
        legend:"-Radio Sapienza",
        img:"https://th.bing.com/th/id/R.680e1b74da25cab1fd38db9c3c1056d8?rik=vW3oZ5OcIq%2fK6g&pid=ImgRaw&r=0"
    },
    {
        id:13,
        name:"Celular Motorola G32 Gris",
        type:"Celular",
        mark:"Motorola",
        price:67999,
        ofert:null,
        cuotas:6848.34,
        legend:"-Fravega-",
        img:"https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw1c45e507/images/42891264/large/42891264_x1.jpg?sw=686&sh=785"
    },
    {
        id:14,
        name:"Celular Motorola G82 5G-Negro (Xt2225-1)-128/6",
        type:"Celular",
        mark:"Motorola",
        price:93999,
        ofert:null,
        cuotas:9459.95,
        legend:"-Al Click-",
        img:"https://th.bing.com/th/id/R.a93947d395a9c86e133c9b5f33858ecd?rik=zyCAyMbJZEpLfA&pid=ImgRaw&r=0"
    },
    {
        id:15,
        name:"Celular Samsung Galaxy A23 4+128Gb Negro Sm-a235mzkearo",
        type:"Celular",
        mark:"Samsung",
        price:97999,
        ofert:109999,
        cuotas:9862.51,
        legend:"-Deventas-",
        img:"https://th.bing.com/th/id/R.2357ff6e617df1ca8587956a2ccc69e7?rik=2veqlBxv6P7m%2fw&pid=ImgRaw&r=0"
    },
    {
        id:16,
        name:"Samsung Galaxy A04 32Gb 3Gb Green",
        type:"Celular",
        mark:"Samsung",
        price:47999,
        ofert:null,
        cuotas:4830.57,
        legend:"-Electronica VS",
        img:"https://th.bing.com/th/id/R.f9debd0c036044eadddd8148cb5fb5cd?rik=OZwDrzKcf0qTSA&pid=ImgRaw&r=0"
    },
    {
        id:17,
        name:"-",
        type:"-",
        mark:"-",
        price:2323,
        ofert:2323,
        legend:"-",
        img:"-"
    },
    {
        id:18,
        name:"-",
        type:"-",
        mark:"-",
        price:2323,
        ofert:2323,
        legend:"-",
        img:"-"
    },
]