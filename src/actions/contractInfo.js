export const setDevType = (devType) => ({
    type: 'SET_DEV_TYPE',
    devType
});

export const setDevInfo = ({ firstName, lastName, street, city, devUSstate, zip }) => ({
    type: 'SET_DEV_INFO',
    devInfo: { firstName, lastName, street, city, devUSstate, zip}
});

export const setCustomerType = (customerType) => ({
    type: 'SET_CUSTOMER_TYPE',
    customerType
});

export const setCustomerInfo = ({ firstName, lastName, street, city, customerUSstate, zip }) => ({
    type: 'SET_CUSTOMER_INFO',
    customerInfo: { firstName, lastName, street, city, customerUSstate, zip}
});

export const setDescription = ({ description }) => ({
    type: 'SET_DESCRIPTION',
    description
});