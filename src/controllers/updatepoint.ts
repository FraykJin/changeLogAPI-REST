import prisma from "../db"

export const createUpdatePoint = async (req, res) => {
    const update = await prisma.update.findUnique({
        where: {
            id: req.body.updateId
        }
    })

    if (!update) {
        return res.status(400).json({message:'nope'});
    }

    const updatePoint = await prisma.updatePoint.create({
        data: {
            name: req.body.name,
            description: req.body.description,
            update: {connect: {id: update.id} }
        }
    })

    res.json({data: updatePoint});
}


export const getUpdatePoints = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id
        },
        include: {
            updates: true
        }
    });

    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates]
    }, []);

    
    console.log(updates[0]);  
    res.json({data: updates[0].updatePoints});
}

export const getOneUpdatePoint = async (req, res) => {
    const updatePoint = await prisma.updatePoint.findUnique({
        where:{
            id: req.params.id
        }
    })

    res.json({data: updatePoint});
}

export const updateUpdatePoint = async (req, res) => {
    
    const updatedUpdatePoint = await prisma.updatePoint.update({
        where: {
            id: req.params.id
        },
        data: req.body
    })

    res.json({data: updatedUpdatePoint});
}


export const deleteUpdatePoint = async (req, res) => {
    
    const deletedPoint = await prisma.updatePoint.delete({
        where: {
            id: req.params.id
        }
    })

    res.json({data: deletedPoint});
}