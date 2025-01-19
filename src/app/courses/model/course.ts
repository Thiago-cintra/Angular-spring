export interface Course {
  // a interface nao é transpilada ao fazer o build do projeto, ela so existe em tempo de desenvolvimento
  //sendo assim caso a implementação exija alguma funcionalidade, é necessário criar uma classe ao invés de uma interface

  _id: string;
  name: string;
  category: string;

}
