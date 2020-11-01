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

import { Queue } from './Queue';

describe('Queue', () => {
    describe('with initial data', () => {
        const queue = new Queue([ 'foo', 'bar', 'baz' ]);
        test('2 instances match interface', () => {
            expect(queue).toMatchObject(new Queue([ 'foo', 'bar', 'baz' ]));
        });
        test('length holds the arg count', () => {
            expect(queue.length).toBe(3);
        });
        test('move returns the first item', () => {
            expect(queue.move()).toBe('foo');
        });
        test('length went down when removing', () => {
            expect(queue.length).toBe(2);
        });
        test('add will return the queue instance', () => {
            expect(queue.add('qux')).toBe(queue);
        });
        test('length was increased when adding', () => {
            expect(queue.length).toBe(3);
        });
        test('addMany will add multiple', () => {
            expect(queue.addMany([ 'more', 'data', 'here' ])).toBe(queue);
        });
        test('length was increased when adding many', () => {
            expect(queue.length).toBe(6);
        });
        test('getMany returns the items', () => {
            expect(queue.moveMany(5)).toMatchObject([ 'bar', 'baz', 'qux', 'more', 'data' ]);
        });
        test('queue length is now 1', () => {
            expect(queue.length).toBe(1);
        });
        test('empty will set length to 0', () => {
            queue.empty();
            expect(queue.length).toBe(0);
        });
    });
    describe('without initial data', () => {
        const queue = new Queue();
        test('2 instances match interface', () => {
            expect(queue).toMatchObject(new Queue());
        });
        test('length holds the arg count', () => {
            expect(queue.length).toBe(0);
        });
        test('move returns undefined', () => {
            expect(queue.move()).toBe(undefined);
        });
        test('length did not go down when removing', () => {
            expect(queue.length).toBe(0);
        })
        test('add will return the queue instance', () => {
            expect(queue.add('foo')).toBe(queue);
        });
        test('length was increased when adding', () => {
            expect(queue.length).toBe(1);
        });
        test('addMany will add multiple', () => {
            expect(queue.addMany([ 'more', 'data', 'here' ])).toBe(queue);
        });
        test('length was increased when adding many', () => {
            expect(queue.length).toBe(4);
        });
        test('getMany returns the items and undefined', () => {
            expect(queue.moveMany(5)).toMatchObject([ 'foo', 'more', 'data', 'here', undefined ]);
        });
        test('queue length is now 0', () => {
            expect(queue.length).toBe(0);
        });
        test('add test items', () => {
            expect(queue.addMany([ 'foo', 'bar' ])).toBe(queue);
        });
        test('empty will set length to 0', () => {
            queue.empty();
            expect(queue.length).toBe(0);
        });
    });
})