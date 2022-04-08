const {
  greatMovies,
  mahasiswa,
  dosen,
  matkul,
  resep,
  warna,
} = require("./Tugas/fajriawan/dummyData");

const getMovies = (str) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve(greatMovies);
    }, 1000);
  });
};

const getMahasiswa = (str) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mahasiswa);
    }, 1000);
  });
};

const getDosen = (str) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dosen);
    }, 1000);
  });
};

const getMatkul = (str) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(matkul);
    }, 1000);
  });
};

const getResep = (str) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(resep);
    }, 1000);
  });
};

const getWarna = (str) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(warna);
    }, 1000);
  });
};

const Service = {
    getMovies,
    getMahasiswa,
    getDosen,
    getMatkul,
    getWarna,
    getResep
  }

module.exports = Service;
