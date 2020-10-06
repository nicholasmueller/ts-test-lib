import * as moduleA from 'moduleA';

interface ITsLib {
  age: number
}

class TsLib {
  private readonly age: number;

  public constructor ({
    age
  }: ITsLib) {
    this.age = age;
  }

  private myPrivFunction (): void {
    console.log('my priv function...');
  }

  public myPublicFunction ({
    name
  }: moduleA.IMyPublicFunction): moduleA.IMyPublicFunctionResult {
    try {
      this.myPrivFunction();
      return moduleA.delegatedFunction(name);
    } catch (error) {
      throw new Error('custom error...');
    }
  }
}

export default TsLib;
