
// Setting our actions for the baby
// ACTIONS --> simply functions that return and object

export const soothe = () => {
    return {
        type: 'SOOTHE'
    }
}

export const feed = () => { 
    return {
        type: 'FEED'
    }
}

export const changeDiaper = () => {
    return {
        type: 'CHANGE_DIAPER',
        diaperChanges: 1
    }
}

export default { soothe, feed, changeDiaper }


