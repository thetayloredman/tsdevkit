/**
 * tskit -- A TypeScript toolkit! Includes everything you need to make any kind of project!
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
 * Returns a random item from an Array
 * @function
 * @param {any[]} data The array to get an item from
 */
export function random<T>(data: T[]): T {
    return data[Math.floor(Math.random() * data.length)];
}