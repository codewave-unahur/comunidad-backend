import request from 'supertest';

const api = request('http://localhost:3001');

// Primero que nada existe un tema con los test, dependiendo de la cantidad de datos y id que contenga la tabla carreras
// varia el id a la hora de crearlo, es decir, sin tengo 15 carreras, se agrega una mas con el id 16. 
// Porque esta programado para que el id de la carrera sea incremental. Aca todo bien...
// El problema esta a la hora de hacer post porque tirar error 15 veces porque existe los ids en el id 16 te agrega la carrera 
// jajaj shoro😟

// Demigra y seeedea y anda.
// Este test funciona si la base tiene un seed.... 
describe('Carrera', () => {
  let id = 1;

  test('GET /carrera', async () => {
    const response = await api.get('/carreras/' + id);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        carrera: expect.objectContaining({
          id: expect.any(Number),
          nombre_carrera: expect.any(String),
        }),
      })
    );
  });
  
  test('DELETE /carrera/:id', async () => {
    const response = await api.delete('/carreras/' + id);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({});
  });

  test('DELETE /carrera/:id', async () => {
    const response = await api.delete('/carreras/' + id);
    expect(response.status).toBe(404);
  });

  test('GET /carrera', async () => {
    const response = await api.get('/carreras');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        carreras: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            nombre_carrera: expect.any(String)
          }),
        ]),
      })
    );
  });

  test('POST /carrera', async () => {
    const response = await api.post('/carreras').send({
      nombre_carrera: 'Tecnicatura en informaticaaaaaaa',
    });
    expect(response.status).toBe(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        carrera: expect.objectContaining({
          nombre_carrera: expect.any(String),
          updatedAt: expect.any(String),
          createdAt: expect.any(String)
        }),
      })
    );
  });

  test('PUT /carrera/:id', async () => {
    const response = await api.put('/carreras/' + id).send({
      nombre_carrera: 'Tecnicatura en informatica',
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        carrera: expect.objectContaining({
          createdAt: expect.any(String),
          id: expect.any(Number),
          nombre_carrera: expect.any(String),
          updatedAt: expect.any(String),
        }),
      })
    );
  });

});