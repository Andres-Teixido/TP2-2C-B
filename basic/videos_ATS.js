const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;

// obtener el total de segundos de los videos tipo Flexbox Video
// Tip: convertir a un array de objetos
// Tip2: split

const newVideo = {
  minutos : 0,
  segundos : 0,
  name : ""
};

const arrVideos = [];
let arrStr = str.split('">');

for(let pos = 0; pos < arrStr.length; pos ++){
    //console.log(" PRIMER CORTE  arrStr[",pos,"]= ",arrStr[pos]);
    // vuelvo a fraccionar en 2 para obtener el TIEMPO y el NOMBRE
    arrTemp = arrStr[pos].split('="');
    if(arrTemp[1]){  //  Si existe arrTemp[1] => Hay un N:NN
      arrTemp = arrTemp[1].split(':');
      arrVideos.push({minutos: arrTemp[0], segundos: arrTemp[1], nombre: 'Indefinido'})
    };
};

for(let pos = 1; pos < arrStr.length; pos ++){
  arrTemp = arrStr[pos].split('</');
  if(arrTemp[0]){  //  Si existe arrTemp[0] => Hay un NOMBRE de VIDEO por ej: REDUX Video
    //console.log('nombre de video : [',pos,"]",arrTemp[0]);
    arrVideos[pos-1].nombre = arrTemp[0];
  };
};

function print(array){
  let minutos = 0;
  let segundos = 0;
  //console.log(`mm:ss    Nombre`);
  //console.log(`===============================`);
  array.forEach(item => {
      minutos = minutos + parseInt(item.minutos);
      segundos = segundos + parseInt(item.segundos);
      console.log(item, "Tiempo ==> ", minutos,":", segundos);
  });
  console.log("Minutos = ", minutos," Segundos = ", segundos," ==>> ",(minutos*60+segundos)," Segundos ");
}
print(
      arrVideos
      .filter(video => video.nombre == 'Flexbox Video')
);