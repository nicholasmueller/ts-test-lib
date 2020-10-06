import { IMyPublicFunction, IMyPublicFunctionResult, delegatedFunction } from './moduleA';

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
  }: IMyPublicFunction): IMyPublicFunctionResult {
    try {
      this.myPrivFunction();
      return delegatedFunction(name);
    } catch (error) {
      throw new Error('custom error...');
    }
  }
}

export default TsLib;
