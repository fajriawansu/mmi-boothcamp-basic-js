module.exports = {
  matkul: [
    { id: 11, name: "Ilmu Pedang", sks: 2 },
    { id: 12, name: "Ilmu Santet", sks: 4 },
    { id: 13, name: "Ilmu Kebal", sks: 3 },
    { id: 14, name: "Ilmu Gosok", sks: 2 },
    { id: 15, name: "Ilmu Jahit", sks: 4 },
    { id: 16, name: "Ilmu Cuci", sks: 3 },
    { id: 17, name: "Ilmu Hitam", sks: 6 },
  ],
  mahasiswa: [
      {id: 91, name: "Udin", matkul_id: [12,11,16,17]},
      {id: 92, name: "Asep", matkul_id: [11,15,14]},
      {id: 93, name: "Dini", matkul_id: [11,14]},
      {id: 94, name: "Dias", matkul_id: [13,14,17]},
      {id: 95, name: "Angga", matkul_id: [12,13,15]},
  ]
};
