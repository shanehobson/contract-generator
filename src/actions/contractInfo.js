export const setDevType = (devType) => ({
    type: 'SET_DEV_TYPE',
    devType
});

export const setDevInfo = ({ name, street, city, devUSstate, zip }) => ({
    type: 'SET_DEV_INFO',
    devInfo: { name, street, city, devUSstate, zip}
});

export const setCustomerType = (customerType) => ({
    type: 'SET_CUSTOMER_TYPE',
    customerType
});

export const setCustomerInfo = ({ name, street, city, customerUSstate, zip }) => ({
    type: 'SET_CUSTOMER_INFO',
    customerInfo: { name, street, city, customerUSstate, zip}
});

export const setDescription = ({ description }) => ({
    type: 'SET_DESCRIPTION',
    description
});

export const setSpecs = ({ specs }) => ({
    type: 'SET_SPECS',
    specs
});