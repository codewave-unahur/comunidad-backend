const models = require("../../database/models");
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://fjjrxhcerjjthjglqptp.supabase.co'
//la key de supa para que no haga bardo tiene que ser la de service key o secret
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqanJ4aGNlcmpqdGhqZ2xxcHRwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzUyNjQ2NywiZXhwIjoyMDA5MTAyNDY3fQ.aJ54McCK2fK2Oac-hmGkXWfXZHYy5AiQ4GC_-W5ze8Y'
const supabase = createClient(supabaseUrl, supabaseKey)


async function renameFile(srcFileName, destFileName) {
  await supabase
    .storage
    .from('files')
    .move(srcFileName, destFileName)
  console.log(
    `${srcFileName} renamed to ${destFileName}`
  )
};

export const uploadCV = async (req, res) => {
  try {
    if (req.file) {
      const originalName = req.file.originalname;
      const uuidName = uuidv4();
      const blob = bucket.file(originalName);
      const blobStream = blob.createWriteStream();
      const extension = originalName.split('.', 2);
      const newFullNameFile = uuidName.concat('.', extension[1]);
      const mimeType = req.file.mimetype;
      const id = req.headers.id

      blobStream.on("finish", () => {
        res.status(200).send("Success");
        console.log("Success");
      });
      blobStream.end(req.file.buffer);
      setTimeout(() => {
        renameFile(originalName, newFullNameFile);
      }, 5000);
      updateCv(id, mimeType, newFullNameFile);
    } else throw "algun error con la subida de archivo";
  } catch (error) {
    res.status(500).send(error);
  }
};

export const uploadLogo = async (req, res) => {
  //los errores de supa no necesitan try, no fallan sino que devuelven el error
  const {data, error} =  await supabase.storage.from('publicBucket').upload(req.file.originalname, req.file.buffer, {
    contentType: req.file.mimetype,
    cacheControl: '3600',
    upsert: true
    })
  const mimeType = req.file.mimetype;
  const id = req.headers.id
  const publicUrl = supabase.storage.from('publicBucket').getPublicUrl(req.file.originalname)['data']['publicUrl']

  //updateLogo(id, mimeType, newFullNameFile);
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
  try {
    if (req.file) {
      await supabase
        .storage
        .from('files')
        .upload('public/avatar1.png', decode('base64FileData'), {
          contentType: 'image/png'
        })
      blobStream.end(req.file.buffer);
      setTimeout(() => {
        renameFile(originalName, newFullNameFile);
      }, 5000);
      updateFoto(id, mimeType, newFullNameFile);
    } else throw "algun error con la subida de archivo";
  } catch (error) {
    res.status(500).send(error);
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
const updateFoto = (id, mimeType, nombreFoto) => {
  const foto = mimeType.concat('|', nombreFoto);

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
const updateCv = (id, mimeType, nombreCv) => {
  const cv = mimeType.concat('|', nombreCv);

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
const updateLogo = (id, mimeType, nombreLogo) => {
  const logo = mimeType.concat('|', nombreLogo);

  models.empresas.update(
    { logo: logo },
    {
      where: {
        id: id,
      },
    }
  );
};