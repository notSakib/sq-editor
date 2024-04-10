import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { faker } from "@faker-js/faker";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRouteNameFromPath(path: string): string {
  // Remove the leading slash
  const cleanedPath = path.replace(/^\//, "");

  // Split the path by the hyphen or underscore delimiter
  const pathParts = cleanedPath.split(/-|_/);

  // Capitalize the first letter of each part
  const formattedParts = pathParts.map(
    (part) => part.charAt(0).toUpperCase() + part.slice(1)
  );

  // Join the parts with a space
  const formattedName = formattedParts.join(" ");

  return formattedName;
}

export type Person = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: "relationship" | "complicated" | "single";
  createdAt: Date;
};

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (index: number): Person => {
  return {
    id: index + 1,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int(40),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
    createdAt: faker.date.anytime(),
    status: faker.helpers.shuffle<Person["status"]>([
      "relationship",
      "complicated",
      "single",
    ])[0]!,
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map((d): Person => {
      return {
        ...newPerson(d),
      };
    });
  };

  return makeDataLevel();
}
