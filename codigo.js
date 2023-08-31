function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  const clases = [
    { clave: 101, nombre: 'Programacion' },
    { clave: 102, nombre: 'microcontrolador' },
    { clave: 103, nombre: 'redes' },
    { clave: 103, nombre: 'electronica' },
  ];
  
  function numeros(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generarFechaString(){
    return numeros(1,30) +  "-" + numeros(1,12) + "-" + numeros(2021,2023); 
  }

  function generateRecords() {
    const records = [];
  
    for (let i = 0; i < 100; i++) {
      const clase = clases[numeros(0, clases.length - 1)];
      const credits = numeros(4, 8);
      const grade = numeros(0, 100);
      const startDate = new Date(2021, 0, 1);
      const endDate = new Date(2023, 5, 30);
      const date = randomDate(startDate, endDate);
      //const date = generarFechaString();
  
      records.push({
        clave: clase.clave,
        creditos: credits,
        nombre: clase.nombre,
        calificación: grade,
        fecha: date
      });
    }
  
    return records;
  }

    const recordsArray = generateRecords();
    
    // Fecha actual menos 6 meses
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 6);
    
    // Filtra y mapea los registros que cumplen con el criterio
    const filteredRecords = recordsArray.filter(record => record.calificación < 60 && record.fecha > currentDate)
      .map(record => ({
        clave: record.clave,
        creditos: record.creditos,
        nombre: record.nombre,
        calificación: record.calificación,
        fechaStr: record.fecha.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
      }));

      console.log(filteredRecords); 
