module.exports = {
    item: [
        {
            name: "Minyak Pilma",
            price: 40000,
            qty: 4,
            type: "BARANG",
            barang: {
                seller: "PT Minyak Curah",
                unit_name: "Liter",
                free_ongkir: true
            },
            jasa: null
        },
        {
            name: "Service AC",
            price: 200000,
            qty: 1,
            type: "JASA",
            barang: null,
            jasa: {
                seller: "PT Service Bersama",
                unit_name: "Person",
                free_ongkir: true
            }
        },
        {
            name: "Baju Polos",
            price: 50000,
            qty: 4,
            type: "BARANG",
            barang: {
                seller: "PT Polosshirt",
                unit_name: "Piece",
                free_ongkir: false
            },
            jasa: null
        },
        {
            name: "Hoodie Naga",
            price: 80000,
            qty: 2,
            type: "BARANG",
            barang: {
                seller: "PT Erigoy",
                unit_name: "Piece",
                free_ongkir: true
            },
            jasa: null
        }
    ]
}