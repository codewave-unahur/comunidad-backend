import { createClient } from "@supabase/supabase-js";
require('dotenv').config();

// Crea el cliente de Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

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
