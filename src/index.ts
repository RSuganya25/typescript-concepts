// src/index.ts

// Enum for Roles
export enum Role {
  User,
  Admin,
  Guest
}

// Variables with data types
let name: string = "Suganya";
let age: number = 30;
let isStudent: boolean = true;

// Function with typed parameters and return type
export function greet(userName: string): string {
  return `Hello, ${userName}!`;
}

// Class with typed properties and method
export class Person {
  constructor(public name: string, public age: number) {}

  describe(): string {
    return `Name: ${this.name}, Age: ${this.age}, Student: ${isStudent}`;
  }
}

// Arrays with explicit typing
const numberArray: number[] = [1, 2, 3];
const stringArray: string[] = ['a', 'b', 'c'];

// Tuple type
type UserTuple = [string, number, Role];
const userTuple: UserTuple = [name, age, Role.User];

// Throwing and handling exceptions
export function mightThrowError(flag: boolean): string {
  try {
    if (!flag) {
      throw new Error("Something went wrong!");
    }
    return "All good!";
  } catch (err: unknown) {
    if (err instanceof Error) {
      return `Error caught: ${err.message}`;
    }
    return "Unknown error";
  }
}

// Async/Await Example with Promise
export interface UserWithStatus {
  name: string;
  role: Role;
  status: string;
}

export async function fetchUser(): Promise<UserWithStatus> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Suganya", role: Role.Admin, status: "active" });
    }, 1000);
  });
}

// Class using async method
export class UserStatus {
  constructor(
    public name: string,
    public role: Role,
    public status: string
  ) {}

  getStatus(): string {
    return `${this.name} (${Role[this.role]}) is ${this.status}`;
  }
}

// For running example when executed with node
if (require.main === module) {
  console.log(new Person(name, age).describe());
  console.log(greet(name));
  console.log("Number Array:", numberArray);
  console.log("String Array:", stringArray);
  console.log("User Tuple:", userTuple);
  console.log(mightThrowError(false));

  fetchUser()
    .then(userData => {
      const user = new UserStatus(userData.name, userData.role, userData.status);
      console.log("Fetched User Data:", user.getStatus());
    })
    .catch(console.error);
}


