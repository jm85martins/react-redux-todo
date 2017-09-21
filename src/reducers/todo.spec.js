import reducer from './todo'

describe('Todo Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, {type: 'ANYTHING'})
        expect(result).toBeDefined()
    })

    test('adds a todo', () => {
        const startState = {
            todos: [
                {id: 1, name: 'Create a basic UI', isComplete: true},
                {id: 2, name: 'Create a basic UI 2', isComplete: false},
                {id: 3, name: 'Create a basic UI 3', isComplete: false},
            ]
        }

        const expectedState = {
            todos: [
                {id: 1, name: 'Create a basic UI', isComplete: true},
                {id: 2, name: 'Create a basic UI 2', isComplete: false},
                {id: 3, name: 'Create a basic UI 3', isComplete: false},
                {id: 4, name: 'Create a basic UI 4', isComplete: false},
            ]
        }

        const action = {type: 'TODO_ADD', payload: {id: 4, name: 'Create a basic UI 4', isComplete: false}}

        const result = reducer(startState, action)
        expect(result).toEqual(expectedState)
    })
})