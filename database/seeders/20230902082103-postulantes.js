"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "postulantes",
      [
        {
          id: 41232451,
          tipo_documento: "1",
          fk_id_usuario: 514,
          fk_id_estudios: 5,
          fk_id_carrera: 2,
          estado: "Activo",
          nombre: "Juan Roman",
          apellido: "Riquelme",
          genero: "Masculino",
          nacionalidad: "Argentina",
          fecha_nac: new Date("2000-11-23"),
          pais: "Argentina",
          fk_id_provincia: 34,
          fk_id_ciudad: 34028,
          calle: "Mate",
          nro: "3310",
          piso: 0,
          depto: null,
          cp: 1712,
          telefono: "122341823",
          cant_materias: 12,
          alumno_unahur: "t",
          presentacion: null,
          cv: null,
          foto: null,
          createdAt: new Date("2022-12-07 22:37:42.178+00"),
          updatedAt: new Date("2022-12-07 22:37:42.178+00"),
        },
        {
          id: 41744111,
          tipo_documento: "1",
          fk_id_usuario: 469,
          fk_id_estudios: 7,
          fk_id_carrera: 2,
          estado: "Activo",
          nombre: "Joel",
          apellido: "Yturrieta",
          genero: "Femenino",
          nacionalidad: "Argentina",
          fecha_nac: new Date("1997-12-23"),
          pais: "Argentina",
          fk_id_provincia: 6,
          fk_id_ciudad: 6408,
          calle: "Vidt",
          nro: "2165",
          piso: 0,
          depto: null,
          cp: 1712,
          telefono: "123242580",
          cant_materias: 12,
          alumno_unahur: "f",
          presentacion: null,
          cv: null,
          foto: null,
          createdAt: new Date("2022-12-07 03:12:29.528+00"),
          updatedAt: new Date("2022-12-07 23:55:55.858+00"),
        },
        {
          id: 12783917,
          tipo_documento: "1",
          fk_id_usuario: 516,
          fk_id_estudios: 8,
          fk_id_carrera: 2,
          estado: "Activo",
          nombre: "Carlos",
          apellido: "Lombardi",
          genero: "",
          nacionalidad: "Argentina",
          fecha_nac: new Date("1995-01-10"),
          pais: "Argentina",
          fk_id_provincia: 38,
          fk_id_ciudad: 38056,
          calle: "Rancho",
          nro: "4095",
          piso: 0,
          depto: null,
          cp: 1712,
          telefono: "1140667933",
          cant_materias: 231,
          alumno_unahur: "t",
          presentacion: null,
          cv: null,
          foto: null,
          createdAt: new Date("2022-12-08 00:38:20.577+00"),
          updatedAt: new Date("2022-12-08 00:38:20.577+00"),
        },
        {
          id: 25647424,
          tipo_documento: "1",
          fk_id_usuario: 472,
          fk_id_estudios: 7,
          fk_id_carrera: 2,
          estado: "Activo",
          nombre: "Sebastian",
          apellido: "Brandariz",
          genero: "",
          nacionalidad: "Argentino",
          fecha_nac: new Date("1977-03-17"),
          pais: "Argentina",
          fk_id_provincia: 6,
          fk_id_ciudad: 6410,
          calle: "Defilippi",
          nro: "1862",
          piso: 0,
          depto: null,
          cp: 1712,
          telefono: "1132349584",
          cant_materias: 19,
          alumno_unahur: "f",
          presentacion: null,
          cv: null,
          foto: null,
          createdAt: new Date("2022-12-07 14:09:03.896+00"),
          updatedAt: new Date("2022-12-07 14:11:21.058+00"),
        },
        {
          id: 42781646,
          tipo_documento: "1",
          fk_id_usuario: 473,
          fk_id_estudios: 7,
          fk_id_carrera: 2,
          estado: "Activo",
          nombre: "Agustin",
          apellido: "Cuevas",
          genero: "",
          nacionalidad: "Argentina",
          fecha_nac: new Date("2000-07-31"),
          pais: "Argentina",
          fk_id_provincia: 6,
          fk_id_ciudad: 6410,
          calle: "Ranchos",
          nro: "4095",
          piso: 0,
          depto: null,
          cp: 1712,
          telefono: "1140667933",
          cant_materias: 22,
          alumno_unahur: "f",
          presentacion: null,
          cv: null,
          foto: null,
          createdAt: new Date("2022-12-07 16:26:06.364+00"),
          updatedAt: new Date("2022-12-07 16:32:37.523+00"),
        },
        {
          id: 12341234,
          tipo_documento: "1",
          fk_id_usuario: 511,
          fk_id_estudios: 6,
          fk_id_carrera: 4,
          estado: "Activo",
          nombre: "Pablo",
          apellido: "Perez",
          genero: "",
          nacionalidad: "Argentina",
          fecha_nac: new Date("1997-07-18"),
          pais: "Argentina",
          fk_id_provincia: 6,
          fk_id_ciudad: 6408,
          calle: "Origone",
          nro: "151",
          piso: 0,
          depto: null,
          cp: 1712,
          telefono: "1124083782",
          cant_materias: 12,
          alumno_unahur: "t",
          presentacion: null,
          cv: null,
          foto: null,
          createdAt: new Date("2022-12-07 19:11:48.515+00"),
          updatedAt: new Date("2022-12-07 19:11:48.515+00"),
        },
        {
          id: 41744112,
          tipo_documento: "1",
          fk_id_usuario: 513,
          fk_id_estudios: 1,
          fk_id_carrera: 2,
          estado: "Pendiente",
          nombre: "Hannah",
          apellido: "Baker",
          genero: "",
          nacionalidad: "Argentina",
          fecha_nac: new Date("1988-12-23"),
          pais: "Argentina",
          fk_id_provincia: 42,
          fk_id_ciudad: 42070,
          calle: "Dante",
          nro: "3510",
          piso: 0,
          depto: null,
          cp: 1712,
          telefono: "123212232",
          cant_materias: null,
          alumno_unahur: "t",
          presentacion: null,
          cv: null,
          foto: null,
          createdAt: new Date("2022-12-07 19:20:02.47+00"),
          updatedAt: new Date("2022-12-07 19:20:02.47+00"),
        },
        // Agregar más objetos aquí...
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("postulantes", null, {});
  },
};
