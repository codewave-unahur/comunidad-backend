const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../../../comunidad-backend-v3/database/models/tipos_documentos.json');

const saveToDatabase = (DB) => {
    fs.writeFileSync(filePath, JSON.stringify(DB, null, 2), {
        encoding: "utf-8",
    });
};

module.exports = { saveToDatabase };
