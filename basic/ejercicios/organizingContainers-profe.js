const POSSIBLE = 'Possible';
const IMPOSSIBLE = 'Impossible';

// Complete the organizingContainers function below.
function organizingContainers(container) {
    let cont=container.length;

    let sumArray = new Array(cont).fill(0);   ////   Excelente !!!  dimensiona array !!!

    let tipos=0;
    let c = t = 0;
    let totalXcontainer = [];
    let totalXtipo = [];
    let result = 'Possible';


for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        sumaFilas[i] = container[j][i];
        sumaColumnas[i] = container[i][j];
    }
}

    // container.forEach(element => {
    //     //console.log(element);
    //     cont = cont + 1;
    // });
    tipos = cont;

    for(let c=0; c<cont; c++){  // TOTALIZO x CONTAINER
        totalXcontainer[c] = 0;
        for(let t=0; t<tipos; t++){
            totalXcontainer[c] += container[c][t];
        }
    }

    for(let t=0; t<tipos; t++){  //  TOTALIZO  x  TIPO
        for(let c=0; c<cont; c++){
            if(c != t){
                container[t][t] += container[c][t];
                container[c][t] = 0;
            }
        }
        totalXtipo[t] = container[t][t];
    }

    container.sort();
    //console.log("Container " + container);
    totalXtipo.sort();
    //console.log("TotXtipo " + totalXtipo);
    totalXcontainer.sort();
    //console.log("TotXcontainer " + totalXcontainer);

    let posC = 0;
    totalXcontainer.forEach(tot => {
        //console.log("totalXcontainer["+posC+"] = "+tot+" = ? = "+"totalXtipo["+posC+"] = " + totalXtipo[posC]);
        if(tot != totalXtipo[posC]){
            result = 'Impossible';
        }
        posC++;
    });
    return result;
}

console.log(organizingContainers(
    [[0, 2, 1],
     [1, 1, 1],
     [2, 0, 0]]
)== POSSIBLE);

console.log(organizingContainers(
    [[1,3,1],
     [2,1,2],
     [3,3,3]]
)== IMPOSSIBLE);

console.log(organizingContainers(
    [[0, 2, 1],
     [1, 1, 1],
     [2, 0, 0]]
)== POSSIBLE);

console.log(organizingContainers(
    [[999336263, 998799923],
    [998799923, 999763019]]
) == POSSIBLE);

console.log(organizingContainers(
    [[997612619, 934920795, 998879231, 999926463],
    [960369681, 997828120, 999792735, 979622676],
    [999013654, 998634077, 997988323, 958769423],
    [997409523, 999301350, 940952923, 993020546]]
)== POSSIBLE);

console.log(organizingContainers(
[[993263231, 806455183, 972467746, 761846174, 226680660, 667393859, 815298761, 790313908, 997845516],
[873142072, 579210472, 996344520, 999601755, 904458846, 663577990, 980240637, 713052540, 963408591],
[551159221, 873763794, 752756532, 798803609, 670921889, 995259612, 981339960, 763904498, 499472207],
[975980611, 999974039, 729219884, 834636710, 973988213, 969888254, 846967495, 687204298, 511348404],
[993232608, 998103218, 857820670, 995587240, 817798750, 773950980, 824882180, 797565274, 887424441],
[847857578, 768853671, 916073200, 982234748, 986511977, 733420232, 997714976, 819799716, 891570083],
[733197334, 985682497, 612123868, 971798655, 999905357, 710092446, 997494889, 683312998, 850074746],
[799093993, 543648222, 944524289, 814951921, 981087922, 997222915, 506561779, 997697933, 652807674],
[989362549, 973516812, 891706714, 786904549, 982329176, 376575034, 993535504, 984745483, 777613376]]
) == POSSIBLE);