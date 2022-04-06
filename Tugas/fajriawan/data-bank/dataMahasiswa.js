module.exports = {
  matkul: [
    { id: 11, name: "Ilmu Pedang", sks: 2, dosen_id: 101 },
    { id: 12, name: "Ilmu Santet", sks: 4, dosen_id: 102 },
    { id: 13, name: "Ilmu Kebal", sks: 3, dosen_id: 103 },
    { id: 14, name: "Ilmu Gosok", sks: 2, dosen_id: 104 },
    { id: 15, name: "Ilmu Jahit", sks: 4, dosen_id: 105 },
    { id: 16, name: "Ilmu Cuci", sks: 3, dosen_id: 103 },
    { id: 17, name: "Ilmu Hitam", sks: 6, dosen_id: 105 },
  ],
  mahasiswa: [
      {id: 91, name: "Udin", matkul_id: [12,11,16,17], dosbing_id: [101, 102]},
      {id: 92, name: "Asep", matkul_id: [11,15,14], dosbing_id: [103, 102]},
      {id: 93, name: "Dini", matkul_id: [11,14], dosbing_id: [105]},
      {id: 94, name: "Dias", matkul_id: [13,14,17], dosbing_id: [104]},
      {id: 95, name: "Angga", matkul_id: [12,13,15], dosbing_id: [101, 104, 105]},
  ],
  dosen: [
    {id: 101, name: "Pak Gun"},
    {id: 102, name: "Bu Sukma"},
    {id: 103, name: "Pak Tri"},
    {id: 104, name: "Pak Arifin"},
    {id: 105, name: "Bu Isyana"},
  ]
};
