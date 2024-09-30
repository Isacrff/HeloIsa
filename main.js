// alert('Helo Isa')
// function soma(num1,num2){
// return num1+num2;
// }
// soma(2, 3);
// console.log(soma(2, 3));

// function areaQuadrado(lado){
//     return lado**2;
// }
// console.log(areaQuadrado(5));

// let areaTriangulo=function(base, altura){
//     return (base*altura/2);
// }
// console.log(areaTriangulo(5, 5))

// let areaTrapezio=function(basemaior,basemenor,altura){
// return(basemaior+basemenor)*altura/2;
// }
//  console.log(areaTrapezio(10,9,5));

//  let HeloIsa=prompt('como faz a area do triangulo?');
//  document.write('base*altura/2');

// let num1= parseInt(prompt('1'));
// let num2= parseInt(prompt('2'));
// let num3= parseInt(prompt('3'));

// function media (x,y,z){
//     return(x+y+z)/3;

// }
// document.write(media(num1,num2,num3));

let estados = ['Paraná', 'São paulo', 'Minas Gerais', 'Rio de Janeiro', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Pará','Paraíba','Pernambuco','Piauí','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','Sergipe','Tocantins','Distrito Federal']

let i=0;
while (i<estados.length){
    console.log(i);
    console.log(estados[i]);
   i++;
}

let idade= 16;
if (idade>17){
    console.log('liberado beber');
}
else{
    console.log('ilegal beber')
}