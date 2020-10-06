export interface IMyPublicFunction {
  name: string;
}

export interface IMyPublicFunctionResult {
  name: string;
  age: number;
};

export function delegatedFunction (name: string): IMyPublicFunctionResult {
  console.log('from my delegated function...');

  console.log('calling my priv on this...');
  this.myPrivFunction();

  console.log('calling this.config...');
  console.log(this.config);

  return {
    name,
    age: this.config
  }
}