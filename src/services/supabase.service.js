import { createClient } from "@supabase/supabase-js";
require('dotenv').config();

// Crea el cliente de Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export const checkDatabaseConnection = async () => {
   if (supabase){
       console.log('Conexion exitosa  SUPABASE')
   }
   else {
       console.error('No se puedo conectar a la base de datos')
   }
};

export const checkListBucketConnection = async () => {
    try {
        const { data, error } = await supabase.storage.listBuckets();

        if (error) {
            console.error(`Error al obtener la lista de buckets: ${error.message}`);
            throw error;
        }
        const bucketNames = data.map(bucket => bucket.name);
        console.log('Buckets en Supabase:', bucketNames);
    } catch (error) {
        console.error(`Error general al intentar obtener la lista de buckets: ${error.message}`);
        throw error;
    }
}
export const uploadCv = async (bucketName, folder, fileName, file) => {
    try {
        const { data, error } = await supabase.storage
            .from(bucketName)
            .upload(`${folder}/${fileName}`, file);

        if (error) {
            console.error(`Error al cargar el archivo a Supabase Storage: ${error.message}`);
            throw error;
        }

        return data;
    } catch (error) {
        console.error(`Error general al cargar el archivo: ${error.message}`);
        throw error;
    }
};

