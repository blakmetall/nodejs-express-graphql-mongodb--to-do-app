export const toDo = {
    add: async (_, args, context) => {
        const { description, title } = args.input;

        return context.prisma.ToDo.create({
            data: {
                description: description,
                title: title,
            }, 
        })
    },
    delete: async (_, args, context) => {
        const { id } = args;

        return context.prisma.ToDo.delete({
            where: { id },
        })
    },
    get: async (_, args, context) => {
        const { id } = args;

        return context.prisma.ToDo.findUnique({
            where: { id },
        })
    },
    list: async (_, __, context) => {
        return context.prisma.ToDo.findMany({
            include: {
                comments: false,
            }
        })
    },
    update: async (_, args, context) => {
        const { 
            id,
            input: {
                description,
                title,
            },
        } = args;

        return context.prisma.ToDo.update({
            where: { id },
            data: {
                description: description,
                title: title,
            }, 
        })
    },
};