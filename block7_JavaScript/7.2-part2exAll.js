const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

console.log('ex01 ---------------//-----------------');
lesson2['turno'] = 'manhã';
console.log(lesson2);

console.log('ex02 ---------------//-----------------');
let keyLession1 = Object.keys(lesson1);
console.log(keyLession1);

console.log('ex03 ---------------//-----------------');
let tamanho = (lesson) => {
  console.log(`O objeto possui ${Object.keys(lesson).length} itens`);
}
tamanho(lesson1);

console.log('ex04 ---------------//-----------------');
let ValueLession = (lesson) => {
  console.log(`Os valores do objeto são: ${Object.values(lesson)}`);
}
ValueLession(lesson3);

console.log('ex05 ---------------//-----------------'); 

let all = {lesson1, lesson2, lesson3};
let allLessons = Object.assign({}, all);
console.log(allLessons);


