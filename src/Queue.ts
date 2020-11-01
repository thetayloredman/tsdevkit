/**
 * tsdevkit -- A TypeScript toolkit! Includes everything you need to make any kind of project!
 * Copyright (C) 2020  BadBoyHaloCat
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

// Main
/**
 * Describes a priority queue.
 * @property {T[]} queue The priority queue
 */
export class Queue<T> {
    public constructor(initialData?: T[]) {
        this.queue = initialData ?? [];
    }

    public add(data: T): this {
        this.queue.push(data);
        return this;
    }

    public move(): T|undefined {
        return this.queue.shift();
    }

    public addMany(data: T[]): this {
        for (const item of data) {
            this.add(item);
        }

        return this;
    }

    public moveMany(count: number): (T|undefined)[] {
        let out: (T|undefined)[] = [];
        for (let i = 0; i < count; i++) {
            out.push(this.move());
        }

        return out;
    }

    public get length(): number {
        return this.queue.length;
    }

    public empty(): this {
        this.queue = [];
        return this;
    }

    public queue: T[]
}