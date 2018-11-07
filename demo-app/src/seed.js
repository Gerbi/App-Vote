export const Seed = [
    {
        id: 1,
        name: 'Todo',
        active: true,
        tasks: [
            {
                id: 1,
                title: 'Learn Node',
                edit: false
            },
            {
                id: 2,
                title: 'Learn Laravel',
                edit: false
            }
        ]
    },
    {
        id: 2,
        name: 'InProgressTodo',
        active: false,
        tasks: [
            {
                id: 1,
                title: 'Learn SQL',
                edit: false
            },
            {
                id: 2,
                title: 'Learn Typescript',
                edit: false
            }
        ]
    },
    {
        id: 3,
        name: 'Done',
        active: false,
        tasks: [
            {
                id: 1,
                title: 'Learn Vue',
                edit: false
            }
        ]
    }
]