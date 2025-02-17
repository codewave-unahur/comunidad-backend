"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const ofertas = [
      {
        id: 0,
        fk_id_empresa: 0,
        fk_id_jornada: 2,
        fk_id_contrato: 3,
        fk_id_estudio: 7,
        fk_id_carrera: 1,
        estado: "Activa",
        cierre: null,
        check: null,
        modalidadDeTrabajo: "Presencial",
        tareasARealizar:"",
        genero: null,
        fecha_vigencia: "2023-12-30 00:00:00+00",
        titulo_oferta: "Espacio Postulación Constante",
        descripcion:
          "Si no encontraste una oferta que se ajuste a tu perfil, no te preocupes, podés postularte igualmente y te tendremos en cuenta para futuras búsquedas.",
        edad_desde: 18,
        edad_hasta: 99,
        experiencia_previa_desc: "No necesita experiencia previa",
        zona_trabajo: "Hurlingham",
        areas_estudio: "Informática, Sistemas, Telecomunicaciones",
        otros_detalles: "No",
        beneficios: "Varios",
        remuneracion: 0,
        createdAt: "2022-12-07 02:55:05.074+00",
        updatedAt: "2022-12-07 02:55:05.074+00",
        horario_laboral_desde: 10,
        horario_laboral_hasta: 18,
      },
      {
        id: 61,
        fk_id_empresa: 3010203041,
        fk_id_jornada: 2,
        fk_id_contrato: 3,
        fk_id_estudio: 7,
        fk_id_carrera: 4,
        estado: "Finalizada",
        cierre: "No cumple con los requisitos",
        check: "La oferta se concreto fuera de la comunidad",
        modalidadDeTrabajo: "Presencial",
        tareasARealizar: null,
        genero: null,
        fecha_vigencia: "2023-12-23 00:00:00+00",
        titulo_oferta: "Laboratorista - Industria Petrolera",
        descripcion:
  'El puesto de Laboratorista requiere de una persona responsable, prolija y activa. Requisito excluyente: título "técnico químico" o conocimientos relacionados. Sus tareas serán realizar análisis químicos de muestras, interpretar resultados y mantener el equipo de laboratorio en condiciones óptimas. Se busca un profesional con al menos 1 año de experiencia previa en funciones similares.',

        edad_desde: 22,
        edad_hasta: 23,
        experiencia_previa_desc: "1 año de experiencia",
        zona_trabajo: "La Matanza",
        areas_estudio: "Química, Biotecnología",
        otros_detalles: "Conocimientos en tratamientos de agua",
        beneficios: "Varios",
        remuneracion: 100000,
        createdAt: "2022-12-07 03:46:16.745+00",
        updatedAt: "2022-12-07 14:46:23.797+00",
        horario_laboral_desde: 4,
        horario_laboral_hasta: 12,
      },
      {
        id: 60,
        fk_id_empresa: 3010203041,
        fk_id_jornada: 2,
        fk_id_contrato: 3,
        fk_id_estudio: 7,
        fk_id_carrera: 4,
        estado: "Observada",
        cierre: null,
        check: null,
        modalidadDeTrabajo: "Presencial",
        tareasARealizar: null,
        fecha_vigencia: "2023-12-31 00:00:00+00",
        titulo_oferta: "Ingeniero de Operaciones - Industria Petrolera",
        descripcion:
          "Nuestro cliente, una multinacional de servicios ambientales y gestión integral de residuos industriales, para asignar en un cliente petrolero en la zona de La Plata...",
        edad_desde: 22,
        edad_hasta: 33,
        experiencia_previa_desc:
          "3 a 5 años de experiencia en las tareas y en la industria",
        zona_trabajo: "La Plata",
        areas_estudio: "Ingeniería en Petróleo, Biotecnología",
        otros_detalles: "Se valorarán conocimientos en Excel y PPT",
        beneficios: "Comedor en planta",
        remuneracion: 300000,
        createdAt: "2022-12-07 03:25:56.411+00",
        updatedAt: "2022-12-07 17:12:29.025+00",
        horario_laboral_desde: 12,
        horario_laboral_hasta: 22,
      },
      {
        id: 64,
        fk_id_empresa: 30182432120,
        fk_id_jornada: 2,
        fk_id_contrato: 3,
        fk_id_estudio: 8,
        fk_id_carrera: 2,
        estado: "Finalizada",
        cierre: null,
        check: "La oferta no se concreto",
        modalidadDeTrabajo: "Presencial",
        tareasARealizar: null,
        fecha_vigencia: "2023-12-14 00:00:00+00",
        titulo_oferta: "Diseñador de redes",
        descripcion:
  "Ingeniero de Operaciones - Industria Petrolera: Nuestro cliente, una multinacional de servicios ambientales y gestión integral de residuos industriales, busca incorporar un Ingeniero de Operaciones para ser asignado en un cliente petrolero en la zona de La Plata. El candidato ideal será responsable de coordinar y supervisar operaciones, asegurando la eficiencia y calidad en los procesos. Se requiere experiencia previa de 3 a 5 años en tareas similares y en la industria.",
        edad_desde: 23,
        edad_hasta: 33,
        experiencia_previa_desc: "Sin experiencia",
        zona_trabajo: "Martínez",
        areas_estudio: "Informática, Redes, Telecomunicaciones",
        otros_detalles: "Residir en Zona Norte Bs.As. (Excluyente)",
        beneficios: "Varios",
        remuneracion: 400000,
        createdAt: "2022-12-07 17:21:23.772+00",
        updatedAt: "2022-12-07 18:21:54.999+00",
        horario_laboral_desde: 10,
        horario_laboral_hasta: 22,
      },
      {
        id: 65,
        fk_id_empresa: 30182432120,
        fk_id_jornada: 2,
        fk_id_contrato: 3,
        fk_id_estudio: 7,
        fk_id_carrera: 14,
        estado: "Activa",
        cierre: null,
        check: null,
        modalidadDeTrabajo: "Presencial",
        tareasARealizar: null,
        fecha_vigencia: "2023-12-30 00:00:00+00",
        titulo_oferta: "Jefe de mantenimiento eléctrico",
        descripcion: "Jefe de mantenimiento eléctrico. Garantizar el buen funcionamiento eléctrico / electrónico de la planta. Liderar y capacitar al equipo de mantenimiento eléctrico.",
        edad_desde: 24,
        edad_hasta: 24,
        experiencia_previa_desc: "5 años de experiencia en puestos similares.",
        zona_trabajo: "Haedo",
        areas_estudio: "Ingeniería eléctrica",
        otros_detalles: "No",
        beneficios: "Varios",
        remuneracion: 220300,
        createdAt: "2022-12-07 18:19:53.756+00",
        updatedAt: "2022-12-07 18:23:30.587+00",
        horario_laboral_desde: 10,
        horario_laboral_hasta: 22
      },      
      {
        id: 63,
        fk_id_empresa: 30182432120,
        fk_id_jornada: 2,
        fk_id_contrato: 3,
        fk_id_estudio: 8,
        fk_id_carrera: 2,
        estado: "Activa",
        fecha_vigencia: "2022-12-23 00:00:00+00",
        titulo_oferta: "Administrador de Redes - SSR",
        descripcion:
          "Buscamos un especialista para integrarse a un equipo de trabajo de infraestructura. Instalar, asegurar el funcionamiento y maximizar el rendimiento de la RED WAN/LAN.",
        edad_desde: 22,
        edad_hasta: 33,
        experiencia_previa_desc: "3 años de experiencia",
        zona_trabajo: "Ciudad Evita",
        areas_estudio: "Informática, Redes",
        otros_detalles: "No",
        beneficios: "Varios",
        remuneracion: 1235534,
        createdAt: "2022-12-07 17:18:26.558+00",
        updatedAt: "2022-12-07 18:23:33.811+00",
        horario_laboral_desde: 10,
        horario_laboral_hasta: 14,
      },
      {
        id: 62,
        fk_id_empresa: 30182432120,
        fk_id_jornada: 2,
        fk_id_contrato: 3,
        fk_id_estudio: 6,
        fk_id_carrera: 2,
        estado: "Pendiente",
        cierre: null,
        check: null,
        modalidadDeTrabajo: "Presencial",
        tareasARealizar: null,
        fecha_vigencia: "2023-12-30 00:00:00+00",
        titulo_oferta: "Ingeniero en Telecomunicaciones",
        descripcion: "Ingeniero en Telecomunicaciones. Desarrollar e implementar proyectos de telecomunicaciones. Administrar redes y servicios de telecomunicaciones.",
        edad_desde: 20,
        edad_hasta: 23,
        experiencia_previa_desc: "Sin experiencia",
        zona_trabajo: "CABA",
        areas_estudio: "Telecomunicaciones, Electrónica, Informática",
        otros_detalles: "Requisitos mínimos: Conocimiento general sobre las redes y servicios de proveedores de CATV e Internet...",
        beneficios: "Varios",
        remuneracion: 2020000,
        createdAt: "2022-12-07 12:28:00.488+00",
        updatedAt: "2022-12-07 22:50:24.068+00",
        horario_laboral_desde: 10,
        horario_laboral_hasta: 18
      },
      {
        id: 67,
        fk_id_empresa: 3010203041,
        fk_id_jornada: 2,
        fk_id_contrato: 3,
        fk_id_estudio: 8,
        fk_id_carrera: 4,
        estado: "Activa",
        cierre: null,
        check: null,
        modalidadDeTrabajo: "Presencial",
        tareasARealizar: null,
        fecha_vigencia: "2023-12-30 00:00:00+00",
        titulo_oferta: "Desarrollador Haskell SR",
        descripcion: "Buscamos un desarrollador Haskell con experiencia en el desarrollo de software de alto rendimiento. Se valorará experiencia en el uso de herramientas y librerías Haskell, así como en el desarrollo de aplicaciones web y móviles.",
        edad_desde: 25,
        edad_hasta: 33,
        experiencia_previa_desc: "5 años de experiencia en desarrollo Haskell",
        zona_trabajo: "San Martin",
        areas_estudio: "Informática, Sistemas",
        otros_detalles: "No",
        beneficios: "Varios",
        remuneracion: 432122,
        createdAt: "2022-12-07 18:33:29.543+00",
        updatedAt: "2022-12-07 18:33:51.7+00",
        horario_laboral_desde: 10,
        horario_laboral_hasta: 22,
      },
      {
        id: 66,
        fk_id_empresa: 3010203041,
        fk_id_jornada: 2,
        fk_id_contrato: 3,
        fk_id_estudio: 8,
        fk_id_carrera: 4,
        estado: "Activa",
        cierre: null,
        check: null,
        modalidadDeTrabajo: "Presencial",
        tareasARealizar: null,
        fecha_vigencia: "2023-12-31 00:00:00+00",
        titulo_oferta: "Ingeniero reservorios",
        descripcion:
          "¿Qué buscamos? Formación académica: Ingeniería o afines. Experiencia profesional: mínimo 3 años en la industria y posición (no excluyente). Actitud / personalidad: adaptabilidad y flexibilidad, trabajo en equipo, iniciativa, proactividad. Conocimientos informáticos: Sahara; manejo paquete office; PowerBi (no excluyente)",
        edad_desde: 20,
        edad_hasta: 24,
        experiencia_previa_desc: "3 años en la industria (no excluyente)",
        zona_trabajo: "San Isidro",
        areas_estudio: "Ingeniería en Petróleo, Biotecnología",
        otros_detalles: "No",
        beneficios: "Varios",
        remuneracion: 125222,
        createdAt: "2022-12-07 18:31:17.318+00",
        updatedAt: "2022-12-07 18:33:54.973+00",
        horario_laboral_desde: 10,
        horario_laboral_hasta: 18,
      },
      {
        id: 69,
        fk_id_empresa: 3012837892,
        fk_id_jornada: 2,
        fk_id_contrato: 3,
        fk_id_estudio: 7,
        fk_id_carrera: 4,
        estado: "Pendiente",
        cierre: null,
        check: null,
        modalidadDeTrabajo: "Presencial",
        tareasARealizar: null,
        fecha_vigencia: "2023-12-30 00:00:00+00",
        titulo_oferta: "Supervisor de Laboratorio",
        descripcion:
          "Seleccionaremos un supervisor de laboratorio con experiencia en el control de calidad de productos farmacéuticos. Se valorará experiencia en el manejo de equipos y materiales de laboratorio, así como en la interpretación de resultados de pruebas analíticas.",
        edad_desde: 30,
        edad_hasta: 35,
        experiencia_previa_desc: "No necesita experiencia previa",
        zona_trabajo: "Hurlingham",
        areas_estudio: "Biotecnología",
        otros_detalles: "Muchos",
        beneficios: "40000",
        remuneracion: 40000,
        createdAt: "2022-12-07 21:43:14.063+00",
        updatedAt: "2022-12-07 21:43:14.063+00",
        horario_laboral_desde: 14,
        horario_laboral_hasta: 19,
      },
      {
        id: 71,
        fk_id_empresa: 3012837892,
        fk_id_jornada: 2,
        fk_id_contrato: 3,
        fk_id_estudio: 5,
        fk_id_carrera: 4,
        estado: "Activa",
        cierre: null,
        check: null,
        modalidadDeTrabajo: "Presencial",
        tareasARealizar: null,
        fecha_vigencia: "2023-12-31 00:00:00+00",
        titulo_oferta: "Soporte Técnico de Laboratorio",
        descripcion:
          "Buscamos perfiles de soporte técnico de laboratorio con experiencia en la instalación y configuración de sistemas operativos. Se valorará experiencia en el uso de herramientas de software de gestión de sistemas y en la resolución de problemas técnicos.",
        edad_desde: 24,
        edad_hasta: 30,
        experiencia_previa_desc: "No necesita experiencia previa",
        zona_trabajo: "Caseros",
        areas_estudio: "Biotecnología",
        otros_detalles: "Muchos",
        beneficios: "39999",
        remuneracion: 39999,
        createdAt: "2022-12-07 21:46:00.922+00",
        updatedAt: "2022-12-07 21:47:49.507+00",
        horario_laboral_desde: 14,
        horario_laboral_hasta: 22,
      },
      {
        id: 70,
        fk_id_empresa: 3012837892,
        fk_id_jornada: 2,
        fk_id_contrato: 3,
        fk_id_estudio: 7,
        fk_id_carrera: 4,
        estado: "Activa",
        cierre: null,
        check: null,
        modalidadDeTrabajo: "Presencial",
        tareasARealizar: null,
        fecha_vigencia: "2023-12-23 00:00:00+00",
        titulo_oferta: "Analista de control de calidad físico químico",
        descripcion:
          "Nos encontramos en búsqueda de un analista de control de calidad físico químico con experiencia en el análisis de productos farmacéuticos. Se valorará experiencia en el uso de técnicas analíticas y en la interpretación de resultados de pruebas.",
        edad_desde: 20,
        edad_hasta: 31,
        experiencia_previa_desc: "No necesita experiencia previa",
        zona_trabajo: "Quilmes",
        areas_estudio: "Biotecnología",
        otros_detalles: "Muchos",
        beneficios: "303030",
        remuneracion: 303030,
        createdAt: "2022-12-07 21:44:41.271+00",
        updatedAt: "2022-12-07 21:52:45.444+00",
        horario_laboral_desde: 10,
        horario_laboral_hasta: 21,
      },
      {
        id: 68,
        fk_id_empresa: 3012837892,
        fk_id_jornada: 2,
        fk_id_contrato: 3,
        fk_id_estudio: 7,
        fk_id_carrera: 4,
        estado: "Activa",
        cierre: null,
        check: null,
        modalidadDeTrabajo: "Presencial",
        tareasARealizar: null,
        fecha_vigencia: "2023-12-30 00:00:00+00",
        titulo_oferta: "Analista de Laboratorio",
        descripcion:
          "Importante industria alimenticia se encuentra en la búsqueda de un analista de laboratorio con experiencia en el cumplimiento de instructivos de trabajo. Se valorará experiencia en el manejo de equipos y materiales de laboratorio, así como en la interpretación de resultados de pruebas analíticas.",
        edad_desde: 20,
        edad_hasta: 22,
        experiencia_previa_desc: "No necesita experiencia previa",
        zona_trabajo: "Merlo",
        areas_estudio: "Biotecnología",
        otros_detalles: "Muchos",
        beneficios: "300000",
        remuneracion: 300000,
        createdAt: "2022-12-07 21:40:36.948+00",
        updatedAt: "2022-12-07 21:52:49.035+00",
        horario_laboral_desde: 10,
        horario_laboral_hasta: 19,
      },
      {
        id: 72,
        fk_id_empresa: 30182432120,
        fk_id_jornada: 2,
        fk_id_contrato: 3,
        fk_id_estudio: 3,
        fk_id_carrera: 4,
        estado: "Activa",
        cierre: null,
        check: null,
        modalidadDeTrabajo: "Presencial",
        tareasARealizar: null,
        fecha_vigencia: "2023-12-30 00:00:00+00",
        titulo_oferta: "Desarrollador Python",
        descripcion: "Necesitamos un desarrollador Python con experiencia en el desarrollo de aplicaciones web y móviles. Se valorará experiencia en el uso de frameworks y librerías Python, así como en el desarrollo de APIs.",
        edad_desde: 20,
        edad_hasta: 24,
        experiencia_previa_desc: "No",
        zona_trabajo: "Hurlingham",
        areas_estudio: "Informática",
        otros_detalles: "No",
        beneficios: "Varios",
        remuneracion: 300000,
        createdAt: "2022-12-08 00:02:13.532+00",
        updatedAt: "2022-12-08 00:02:48.36+00",
        horario_laboral_desde: 13,
        horario_laboral_hasta: 21,
      },
    ];

    await queryInterface.bulkInsert("ofertas", ofertas, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ofertas", null, {});
  },
};