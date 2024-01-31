const models = require("../../database/models");
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.SUPABASE_URL
//la key de supa para que no haga bardo tiene que ser la de service key o secret
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


async function renameFile(srcFileName, destFileName) {
  await supabase
    .storage
    .from('files')
    .move(srcFileName, destFileName)
  console.log(
    `${srcFileName} renamed to ${destFileName}`
  )
}

export const uploadCV = async (req, res) => {
  const id = req.headers.id
  const nombre_almacenamiento = String(id + "/" + req.file.originalname)

  const {data, error} =  await supabase.storage.from(process.env.SUPABASE_BUCKET_CV).upload( nombre_almacenamiento, req.file.buffer, {
    contentType: req.file.mimetype,
    cacheControl: '3600',
    upsert: true
    })
  const publicUrl = supabase.storage.from(process.env.SUPABASE_BUCKET_CV).getPublicUrl(nombre_almacenamiento)['data']['publicUrl']

  updateCv(id, publicUrl);
  if (error) {
    console.log(error)
    res.status(500).send(error);
  } else {
    console.log(data)
    res.status(200).send(
      {
        url: publicUrl,
        id: id,
        status: "success"
      }
    );
  }
};

export const uploadLogo = async (req, res) => {
  //los errores de supa no necesitan try, no fallan sino que devuelven el error
  const id = req.headers.id
  const nombre_almacenamiento = String(id + "/" + req.file.originalname)
  const {data, error} =  await supabase.storage.from(process.env.SUPABASE_BUCKET_IMAGEN).upload( nombre_almacenamiento, req.file.buffer, {
    contentType: req.file.mimetype,
    cacheControl: '3600',
    upsert: true
    })
  const publicUrl = supabase.storage.from(process.env.SUPABASE_BUCKET_IMAGEN).getPublicUrl(nombre_almacenamiento)['data']['publicUrl']

  updateLogo(id, publicUrl);
  if (error) {
    console.log(error)
    res.status(500).send(error);
  } else {
    console.log(data)
    res.status(200).send(
      {
        url: publicUrl,
        id: id,
        status: "success"
      }
    );
  }
};

export const uploadFoto = async (req, res) => {
  //los errores de supa no necesitan try, no fallan sino que devuelven el error
  const id = req.headers.id
  const nombre_almacenamiento = String(id + "/" + req.file.originalname)

  const {data, error} =  await supabase.storage.from(process.env.SUPABASE_BUCKET_IMAGEN).upload( nombre_almacenamiento, req.file.buffer, {
    contentType: req.file.mimetype,
    cacheControl: '3600',
    upsert: true
    })
  const publicUrl = supabase.storage.from(process.env.SUPABASE_BUCKET_IMAGEN).getPublicUrl(nombre_almacenamiento)['data']['publicUrl']

  updateFoto(id, publicUrl);
  if (error) {
    console.log(error)
    res.status(500).send(error);
  } else {
    console.log(data)
    res.status(200).send(
      {
        url: publicUrl,
        id: id,
        status: "success"
      }
    );
  }
};


async function fetchFileFromGoogleStorage(fileName) {
  const fileObject = bucket.file(fileName);
  const fileContents = await fileObject.download();
  return fileContents[0];
};

export const getFiles = async (req, res) => {
  let fileName = req.headers.file;
  let type = req.headers.type;
  console.log("este es el file", fileName);
  console.log("este es el type", type);
  const downloadedImageFile = await fetchFileFromGoogleStorage(fileName);
  res.status(200);
  res.type(type);
  res.send(downloadedImageFile);
};

//Con esto actualizamos la foto 
const updateFoto = (id, url) => {
  const foto = url

  models.postulantes.update(
    { foto: foto },
    {
      where: {
        id: id,
      },
    }
  );
};

//Con esto actualizamos el CV
const updateCv = (id, url) => {
  const cv = url

  models.postulantes.update(
    { cv: cv },
    {
      where: {
        id: id,
      },
    }
  );
};

//Con esto actualizamos el Logo
const updateLogo = (id, url) => {
  const logo = url;

  models.empresas.update(
    { logo: logo },
    {
      where: {
        id: id,
      },
    }
  );
};