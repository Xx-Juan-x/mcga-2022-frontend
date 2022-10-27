import {
    saveData,
    saveDataLoading,
    saveDataError
} from './actions'

export const saveProducts = () => async (dispatch) => {
    try {
        dispatch(saveDataLoading(true));
        const response = await fetch('http://localhost:3001/products');
        const productsResponse = await response.json();
        if (response.status !== 200) throw new Error('Error');
        dispatch(saveData(productsResponse));
        dispatch(saveDataLoading(false));
    } catch (error) {
        dispatch(saveDataError());
    }
}