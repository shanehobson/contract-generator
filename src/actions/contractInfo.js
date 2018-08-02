export const setDevType = (devType) => ({
    type: 'SET_DEV_TYPE',
    devType
});

export const setDevInfo = ({ firstName, lastName, street, city, devUSstate, zip}) => ({
    type: 'SET_DEV_INFO',
    devInfo: { firstName, lastName, street, city, devUSstate, zip}
});